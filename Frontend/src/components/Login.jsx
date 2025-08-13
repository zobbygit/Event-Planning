import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        { email, password },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message, {
        style: {
          background: "#4BB543",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
          borderRadius: "10px",
          padding: "15px 25px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        },
      });

      localStorage.setItem("token", res.data.token);
      navigate("/herosection");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed", {
        style: {
          background: "#FF4C4C",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
          borderRadius: "10px",
          padding: "15px 25px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        },
      });
    }
  };

  // Tiny animation keyframes as string
  const slideFadeAnimation = `
    @keyframes slideFade {
      0% { opacity: 0; transform: translateY(-10px); }
      50% { opacity: 0.7; transform: translateY(5px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#e7c7b2ab",
        padding: "20px",
      }}
    >
      <style>{slideFadeAnimation}</style>
      <Toaster position="top-right" />

      <form
        onSubmit={handleLogin}
        style={{
          background: "#fff",
          padding: "40px 30px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          maxWidth: "400px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
        }}
      >
        {/* Animated tiny text */}
        <p
          style={{
            fontSize: "14px",
            color: "#a2783a",
            textAlign: "center",
            marginBottom: "0",
            animation: "slideFade 2s ease-out",
          }}
        >
          Login to your account for the best event management experience!
        </p>

        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#a2783a",
            fontFamily: "'Alex Brush', cursive",
            fontSize: "2rem",
          }}
        >
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "12px 15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "16px",
            transition: "0.3s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #a2783a")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "12px 15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "16px",
            transition: "0.3s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #a2783a")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#a2783a",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#8b6232")}
          onMouseOut={(e) => (e.target.style.background = "#a2783a")}
        >
          Login
        </button>

        <p style={{ textAlign: "center", fontSize: "14px", color: "#555" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#a2783a", fontWeight: "bold" }}>
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
