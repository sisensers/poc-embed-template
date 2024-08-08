import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DashboardContextProps {
  dashboardID: string;
  setDashboardID: React.Dispatch<React.SetStateAction<string>>;
}

interface DashboardProviderProps {
  children: ReactNode;
}

const DashboardContext = createContext<DashboardContextProps | undefined>(undefined);

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [dashboardID, setDashboardID] = useState<string>('');

  return (
    <DashboardContext.Provider value={{ dashboardID, setDashboardID }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = (): DashboardContextProps => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
