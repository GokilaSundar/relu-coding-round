import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Failed to logout!", error);

        alert("Failed to logout...");

        navigate("/dashboard");
      });
  }, []);

  return <div className="loading-overlay">Logging out...</div>;
};
