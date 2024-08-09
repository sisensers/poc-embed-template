import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import SignIn from './pages/login'; // Ensure this is the correct path to your SignIn component
import { AuthProvider } from './AuthContext';
import { ThemeModeProvider } from './themeContext'; // Import the ThemeModeProvider

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeModeProvider>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/*" element={<App />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </ThemeModeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
