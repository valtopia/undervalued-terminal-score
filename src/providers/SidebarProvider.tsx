import React, { createContext, useContext, useState, useEffect } from 'react';

interface SidebarContextType {
  isMobile: boolean;
  isSidebarVisible: boolean;
  toggleMobileSidebar: () => void;
  setIsSidebarVisible: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileSidebar = () => {
    if (isMobile) {
      setIsSidebarVisible(prev => !prev);
    }
  };

  return (
    <SidebarContext.Provider 
      value={{ 
        isMobile, 
        isSidebarVisible, 
        toggleMobileSidebar, 
        setIsSidebarVisible 
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
} 