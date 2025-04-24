import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { AuthContext } from "./AuthContext";

export const AuthProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setLoading(false);

      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
