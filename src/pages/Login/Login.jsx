import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/config";

export const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successfull!");

      navigate("/dashboard");
    } catch (error) {
      console.log("Login failed", error);

      alert("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="center-content-container">
      <form className="card login pad-30" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            disabled={loading}
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            disabled={loading}
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button disabled={loading} type="submit" className="custom-button">
          Login
        </button>
      </form>
    </div>
  );
};
