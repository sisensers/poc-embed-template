import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { SisenseContextProvider, ThemeProvider } from '@sisense/sdk-ui';
import { AiContextProvider } from '@sisense/sdk-ui/ai';
import Layout from './components/Layout';
import EmbedSDK from './pages/EmbedSDk';
import ComposeSDK from './pages/ComposeSDK';
import SelfService from './pages/SelfService';
import SignIn from './pages/login';
import { useThemeMode } from './themeContext'; // Custom hook for theme mode

const App = () => {
  const { token, sisenseUrl } = useAuth();
  const { theme } = useThemeMode(); // Ensure this hook is used correctly

  if (!token || !sisenseUrl) {
    return (
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <SisenseContextProvider url={sisenseUrl} token={token}>
      <AiContextProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Layout><Outlet /></Layout>}>
              <Route path="embed-sdk" element={<EmbedSDK />} />
              <Route path="compose-sdk" element={<ComposeSDK />} />
              <Route path="self-service" element={<SelfService />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </AiContextProvider>
    </SisenseContextProvider>
  );
};

export default App;
