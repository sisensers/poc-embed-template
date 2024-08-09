import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeSettings } from '@sisense/sdk-ui';

interface ThemeContextType {
  theme: ThemeSettings;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const theme = lightTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const lightTheme: ThemeSettings = {
  chart: {
    textColor: '#3C3C44',
    backgroundColor: '#f4f6f8',
  },
  general: {
    brandColor: '#2196f3',
    backgroundColor: '#f4f6f8',
    primaryButtonTextColor: 'white',
  },
  palette: {
    variantColors: ['#2196f3', '#0d47a1', '#050A30', '#7EC8E3'],
  },
  typography: {
    fontFamily: 'roboto',
  },
};
