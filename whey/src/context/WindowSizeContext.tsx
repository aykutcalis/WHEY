import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface WindowSizeContextType {
  isMobile: boolean;
  isTablet: boolean;
}

const WindowSizeContext = createContext<WindowSizeContextType | undefined>(undefined);

interface WindowSizeProviderProps {
  children: ReactNode;  // children tipini belirledik 
}

export const WindowSizeProvider: React.FC<WindowSizeProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 390);
      setIsTablet(width > 390 && width <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial size check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSize = () => useContext(WindowSizeContext);
