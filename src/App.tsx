import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Ensure this is the correct path to your AuthContext component
import { SisenseContextProvider, ThemeProvider } from '@sisense/sdk-ui';
import { AiContextProvider } from '@sisense/sdk-ui/ai';
import Layout from './components/Layout';
import EmbedSDK from './pages/EmbedSDk';
import ComposeSDK from './pages/ComposeSDK';
import SelfService from './pages/SelfService';
import SignIn from './pages/login';

const App = () => {
  const { token, sisenseUrl } = useAuth();

  if (!token || !sisenseUrl) {
    // Render the login route and other non-protected routes
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

const theme = {
  chart: {
    textColor: '#3C3C44',
  },
  general: {
    brandColor: '#2196f3',
    primaryButtonTextColor: 'white',
  },
  palette: {
    variantColors: ['#2196f3', '#0d47a1', '#050A30', '#7EC8E3'],
  },
  typography: {
    fontFamily: 'roboto',
  },
};
