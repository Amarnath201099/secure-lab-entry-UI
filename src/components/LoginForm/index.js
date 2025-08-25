import { useState } from "react";
import { IoFingerPrint } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

import "./index.css";

const LoginForm = () => {
  const [password, setPassword] = useState("1234");
  const { login, timerExpired } = useAuth(); // Include timerExpired from context

  const handleLogin = (e) => {
    e.preventDefault();

    if (timerExpired) {
      toast.error("Login failed: Timer has expired", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });
      return;
    }

    if (password === "1234") {
      login();
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 500,
        theme: "colored",
      });
    } else {
      toast.error("Incorrect password", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <form className="login-form-container" onSubmit={handleLogin}>
      <IoFingerPrint color="#001845" className="login-icon" />
      <h1 className="login-heading">Coder's Lab</h1>
      <h3 className="login-username">Coder101</h3>

      <label htmlFor="password" className="login-label-password">
        Password
      </label>
      <input
        id="password"
        className="login-input-password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password..."
      />
      <button className="login-btn" type="submit">
        Enter Lab
      </button>
    </form>
  );
};

export default LoginForm;
