import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login/Login";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<div>Register</div>} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default App;
