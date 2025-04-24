import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<div>Login</div>} />
      <Route path="/register" element={<div>Register</div>} />

      <Route path="/dashboard" element={<div>Dashboard</div>} />

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default App;
