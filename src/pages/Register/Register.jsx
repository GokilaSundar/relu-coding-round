import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase/config";

export const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password not matching!");
      return;
    }

    setLoading(true);

    try {
      createUserWithEmailAndPassword(auth, email, password);

      alert("Registration Successfull!");

      navigate("/login");
    } catch (error) {
      alert("Something Went Wrong while Register :(" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="center-content-container">
      <form className="card register pad-30" onSubmit={handleRegister}>
        <h2>Register</h2>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Full Name"
            disabled={loading}
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            placeholder="Password"
            disabled={loading}
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            disabled={loading}
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button disabled={loading} type="submit" className="custom-button">
          Register
        </button>

        <Link to="/login">Already have an account? Login here</Link>
      </form>
    </div>
  );
};
