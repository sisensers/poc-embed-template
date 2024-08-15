# POC Template Setup Guide

This guide will walk you through the setup process for the POC Template, including configuring your backend, updating your frontend with your Sisense server URL, and customizing branding elements like logos and color schemes.

## Prerequisites

Before you start, ensure that you have the following installed on your system:

- Node.js (https://nodejs.org)
- npm (Node Package Manager)
- Git (optional, but recommended)

## Backend Setup

### Step 1: Create the `.env` File

1. Navigate to the `backend` folder of your project.
2. Create a new file named `.env`.

### Step 2: Add Environment Variables

In the `.env` file, add the following environment variables with your Sisense server URL and shared secret:

```
SISENSE_URL=https://your-sisense-server.com
SHARED_SECRET=your-shared-secret
```

- Replace `https://your-sisense-server.com` with your actual Sisense server URL.
- Replace `your-shared-secret` with the shared secret used for authentication.

### Step 3: Install Backend Dependencies

1. Open your terminal.
2. Navigate to the `backend` directory of the project:

   ```bash
   cd backend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Step 4: Run the Backend Server

Start the backend server by running:

```bash
node server.js
```

You should see the following message, indicating that your backend server is running:

```
JWT handler listening on port 5000
```

## Frontend Setup

### Step 1: Update the Sisense Server URL

1. Edit the `.env` component file in your code editor.
2. Locate the following section:

   ```
   REACT_APP_SISENSE_URL=https://YOURSISENSESERVERURL.com

   ```

3. Replace `"https://YOURSISENSESERVERURL.com"` with the same Sisense server URL.

### Step 2: Install Frontend Dependencies

1. Open a new terminal in the `poc-template` directory (your project’s root directory).
2. Install the frontend dependencies:

   ```bash
   npm install
   ```

### Step 3: Run the Frontend Application

Start the frontend application by running:

```bash
npm start
```

This command will launch the application in your default web browser. By default, the application will be available at `http://localhost:3000`.

## Customization

### Updating the Logo

To update the logo:

1. Replace the `logo.png` file in the `public` folder with your desired logo file.
2. Ensure that the file name remains `logo.png` so it is correctly referenced in the application.

### Customizing Color Schemes

The color schemes of your application can be updated by modifying the following files:

- **`src/components/Layout.tsx`**: Modify the colors and styles for the layout, drawer, and navigation bar.
- **`src/themeContext.tsx`**: Customize the theme settings, including primary and secondary colors, typography, and palette settings.

## Troubleshooting

### Common Issues

1. **Environment Variables Not Loaded:**
   - Ensure that your `.env` file is located in the correct directory (`backend`) and that the variables are correctly named and assigned.
   
2. **Server Not Running:**
   - If you don’t see the message `JWT handler listening on port 5000`, check your terminal for error messages and ensure that all dependencies are installed.

3. **Frontend Not Reflecting Changes:**
   - If the frontend doesn’t show your updates, ensure that you have correctly replaced the URL in `src/pages/EmbedSDK` and restarted the frontend server.

### Getting Help

If you encounter issues not covered in this guide, consider checking the following resources:

- Node.js and npm documentation
- Sisense API documentation
- Stack Overflow for troubleshooting specific errors

## Conclusion

By following this guide, you should now have a working POC Template with a functioning backend server, updated frontend, and customized branding elements. You can further customize the application to fit your needs and explore additional features as required.
