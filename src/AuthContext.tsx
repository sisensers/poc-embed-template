import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  token: string | null;
  sisenseUrl: string | null;
  setToken: (token: string | null) => void;
  setSisenseUrl: (url: string) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [sisenseUrl, setSisenseUrl] = useState<string | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('sisenseToken');
    const storedEmail = localStorage.getItem('email');

    if (storedToken && storedEmail) {
      setToken(storedToken);
      const url = "https://partech.sisensepoc.com"; // Replace with your Sisense instance URL
      setSisenseUrl(url);
      setInitialized(true);
    } else {
      navigate('/login');
      setInitialized(true); // Allow the login page to render
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ token, sisenseUrl, setToken, setSisenseUrl }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
