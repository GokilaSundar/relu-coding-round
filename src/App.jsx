import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default App;
