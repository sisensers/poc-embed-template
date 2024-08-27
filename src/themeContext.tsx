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
    fontFamily: 'poppins',
  },
};
