import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface AuthContextType {
  token: string | null;
  sisenseUrl: string | null;
  setToken: (token: string | null) => void;
  setSisenseUrl: (url: string | null) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [sisenseUrl, setSisenseUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedToken = localStorage.getItem('sisenseToken');
    const storedSisenseUrl = localStorage.getItem('sisenseUrl');

    if (storedToken && storedSisenseUrl) {
      setToken(storedToken);
      setSisenseUrl(storedSisenseUrl);

      if (location.pathname === '/login') {
        navigate('/');
      }
    } else {
      if (location.pathname !== '/login') {
        navigate('/login');
      }
    }
  }, [navigate, location.pathname]);

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