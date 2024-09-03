require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jwt-simple");
const bodyParser = require("body-parser");
const axios = require("axios");
const uuid = require("uuid");
const cors = require("cors");
const https = require("https");
const port = process.env.PORT || 5000;

// THIS BACKEND IS FOR SAMPLE EMBEDDING ONLY! THIS IS NOT PRODUCTION AUTHENTICATION, PLEASE DO NOT REPLICATE THIS FOR PRODUCTION EMBEDDING  

app.use(bodyParser.json());

// Dynamic CORS origin for different environments
const allowedOrigins = [process.env.CORS_ORIGIN || "http://localhost:3000"];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Function to build JWT for your custom authentication
function buildJwt(email, firstName, lastName, sharedSecret) {
  const jti = uuid.v4();
  const payload = {
    iat: Math.floor(new Date().getTime() / 1000), // Issued at time
    email,
    firstName,
    lastName,
    jti,
    exp: Math.floor((new Date().getTime() + 1440 * 60000) / 1000), // Token expiry set to 24 hours
  };

  return jwt.encode(payload, sharedSecret, "HS256");
}

// Endpoint for handling login requests
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("Received login request:", { email });

    const sisenseUrl = process.env.SISENSE_URL;
    const sharedSecret = process.env.SHARED_SECRET;

    // Validate the Sisense URL and shared secret
    if (!sisenseUrl || !sharedSecret) {
      console.error("Invalid URL or shared secret. Please check your environment variables.");
      return res.status(500).json({ error: "Invalid URL or shared secret." });
    }

    console.log("Using Sisense URL:", sisenseUrl);

    // Request to Sisense for authentication
    const response = await axios.post(
      `${sisenseUrl}/api/v1/authentication/login`,
      {
        username: email,
        password,
        strategy: "local", // Specify the authentication strategy // NOT A PRODUCTION METHOD DO NOT PUBLISH APP 
      },
      {
        httpsAgent: new https.Agent({ rejectUnauthorized: false }), // Only for testing; remove in production
      }
    );

    console.log("Response from Sisense:", response.data);

    if (response.data && response.data.access_token) {
      const token = buildJwt(email, email.split("@")[0], "", sharedSecret);
      // Respond with both the Sisense access token and your custom JWT token
      res.json({ 
        token, 
        sisenseUrl: sisenseUrl, 
        sisenseToken: response.data.access_token 
      });
    } else {
      console.error("Authentication failed: No access token returned.");
      res.status(401).json({ error: "Authentication failed" });
    }
  } catch (error) {
    if (error.response) {
      console.error("Error response from Sisense:", error.response.status, error.response.data);
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      console.error("Error during authentication:", error.message);
      res.status(500).json({ error: "Internal server error", details: error.message });
    }
  }
});

// Start the server and listen on the configured port
app.listen(port, () => {
  console.log(`JWT handler listening on port ${port}`);
});
