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
import { useThemeMode } from './themeContext'; 
import RedemptionsDashboard from './pages/RedemptionsDashboard';
import figma from './pages/figmaDashboard';
import FigmaDashboard from './pages/figmaDashboard';

const theme = {
  chart: {
    textColor: '#3C3C44',
    backgroundColor: '#FFFFFF',
  },
  general: {
    brandColor: '#2196f3',
    backgroundColor: '#f4f6f8',
    primaryButtonTextColor: 'white',
  },
  palette: {
    variantColors: ["#24264A", 
    "#7A9CFF", 
    "#4B5FF0",
    "#F85432",
    "#FCA142"],
  },
  typography: {
    fontFamily: '',
  },
};


const App = () => {
  const { token, sisenseUrl } = useAuth();

  if (!token || !sisenseUrl) {
    return <Navigate to="/login" replace />;
  }

  return (
    <SisenseContextProvider url={sisenseUrl} token={token}>
      <ThemeProvider theme={theme}>
      <AiContextProvider>
          <Routes>
            <Route path="/" element={<Layout><Outlet /></Layout>}>
              <Route path="embed-sdk" element={<EmbedSDK />} />
              <Route path="compose-sdk" element={<ComposeSDK />} />
              <Route path="self-service" element={<SelfService />} />
              <Route path="custom-dashboard" element={<CustomDashboard />} />
              <Route path="redemptions-dashboard" element={<RedemptionsDashboard />} />
              <Route path="figma-dashboard" element={<FigmaDashboard />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </AiContextProvider>
      </ThemeProvider>
    </SisenseContextProvider>
  );
};

export default App;
