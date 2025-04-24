import { createContext, useContext } from "react";

export const AuthContext = createContext({
  loading: false,
  user: null,
  setUser: (user) => {},
});

export const useAuth = () => useContext(AuthContext);
