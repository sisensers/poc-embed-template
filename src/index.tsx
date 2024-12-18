import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import SignIn from './pages/login'; 
import { AuthProvider } from './AuthContext';
import { ThemeModeProvider } from './themeContext'; 

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
