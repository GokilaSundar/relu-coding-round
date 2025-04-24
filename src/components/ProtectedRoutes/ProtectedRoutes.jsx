import "./ProtectedRoutes.css";

import { useAuth } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="text">Checking authentication...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
