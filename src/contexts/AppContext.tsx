import React, { createContext, useContext, useState, useEffect } from "react";
import { UserRole } from "@/lib/mock-data";

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  notifications: number;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (v: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  role: "seeker",
  setRole: () => { },
  notifications: 5,
  sidebarCollapsed: false,
  setSidebarCollapsed: () => { },
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>("seeker");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSidebarCollapsed(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider value={{ role, setRole, notifications: 5, sidebarCollapsed, setSidebarCollapsed }}>
      {children}
    </AppContext.Provider>
  );
};
