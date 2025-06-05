import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const hasAccess = localStorage.getItem('terminal_access') === 'granted';

  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}; 