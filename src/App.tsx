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
import CustomDashboard from './pages/CustomDashboard';

const App = () => {
  const { token, sisenseUrl } = useAuth();

  if (!token || !sisenseUrl) {
    // If not authenticated, navigate to login page
    return <Navigate to="/login" replace />;
  }

  return (
    <SisenseContextProvider url={sisenseUrl} token={token}>
      <AiContextProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Layout><Outlet /></Layout>}>
              <Route path="embed-sdk" element={<EmbedSDK />} />
              <Route path="compose-sdk" element={<ComposeSDK />} />
              <Route path="self-service" element={<SelfService />} />
              <Route path="custom-dashboard" element={<CustomDashboard />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </AiContextProvider>
    </SisenseContextProvider>
  );
};

export default App;
