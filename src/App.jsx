import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Login } from "./pages/Login/Login";
import { Logout } from "./pages/Logout/Logout";
import { Register } from "./pages/Register/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default App;
