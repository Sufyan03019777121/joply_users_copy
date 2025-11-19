import React, { useState } from "react";
import { Input, Button, Divider, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [form, setForm] = useState({ emailOrUsername: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { emailOrUsername, password } = form;

    // Validation
    if (!emailOrUsername || !password) {
      return message.warning("⚠️ Please fill in all fields!");
    }

    setLoading(true);
    try {
      const res = await axios.post("https://joply-backend.onrender.com/api/auth/login", form);

      // Login Success
      message.success({
        content: "🎉 Login successful! Redirecting...",
        duration: 2,
        style: { fontWeight: "bold", fontSize: "16px" },
      });

      // Save token to localStorage
      localStorage.setItem("token", res.data.token);

      // Redirect to Home page after small delay
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      // Detailed error handling
      const errorMsg =
        err.response?.data?.message ||
        err.message ||
        "❌ Login failed! Please try again.";
      message.error({
        content: errorMsg,
        duration: 3,
        style: { fontWeight: "bold", fontSize: "16px" },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login To Your Account</h2>
      <Divider className="login-divider" />

      {/* Google Login Button */}
      <Button className="google-login-btn">
        <span className="google-g">
          <span className="g-blue">G</span>
          <span className="g-red">o</span>
          <span className="g-yellow">o</span>
          <span className="g-blue">g</span>
          <span className="g-green">l</span>
          <span className="g-red">e</span>
        </span>
        Continue with Google
      </Button>

      {/* OR Divider */}
      <div className="or-divider">
        <div className="or-divider-line"></div>
        <span className="or-divider-text">Or login with Username / E-Mail</span>
        <div className="or-divider-line"></div>
      </div>

      {/* Input Fields */}
      <Input
        placeholder="User Name / Email"
        name="emailOrUsername"
        value={form.emailOrUsername}
        onChange={handleChange}
        className="login-input"
      />
      <Input.Password
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        className="login-input"
      />

      {/* Login Button */}
      <Button
        type="primary"
        loading={loading}
        className="login-btn"
        onClick={handleLogin}
      >
        {loading ? "Logging in..." : "LOGIN"}
      </Button>

      {/* Signup Redirect */}
      <div className="signup-redirect">
        Don't have an account? <Link to="/auth/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
