import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSend = async () => {
    if (email.trim() === "") {
      toast.error("Please enter your email!");
      return;
    }

    try {
      const res = await axios.post(
        "https://event-planning-backend-goce.onrender.com/api/v1/message/send",
        { name: "Email-Received", email, subject: "email", message: "This is My email!" },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      toast.success(res.data.message || "Email sent successfully!");
      setEmail("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Server error");
    }
  };

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #1f1f1f, #2e2e2e)",
        color: "white",
        padding: "40px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Toaster position="top-right" />
      <div
        className="banner"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <div className="title">
          <h1
            style={{
              fontSize: "2rem",
              margin: 0,
              letterSpacing: "2px",
              color: "#ff9800",
            }}
          >
            ZOHAIB's
          </h1>
          <p
            style={{
              margin: "5px 0 0",
              fontSize: "1rem",
              fontWeight: 300,
              letterSpacing: "1px",
              color: "#ccc",
            }}
          >
            Event MANAGEMENT
          </p>
        </div>

        <div className="tag" style={{ maxWidth: "350px", width: "100%" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "10px",
              fontSize: "1.2rem",
            }}
          >
            News Letter
          </label>

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              borderRadius: "30px",
              border: "1px solid #444",
              padding: "10px 15px",
              outline: "none",
              fontSize: "1rem",
              background: "#fff",
              marginBottom: "10px",
            }}
          />

          <button
            style={{
              width: "100%",
              background: "#ff9800",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "30px",
              fontSize: "1rem",
              transition: "background 0.3s",
            }}
            onClick={handleSend}
            onMouseOver={(e) => (e.target.style.background = "#e68900")}
            onMouseOut={(e) => (e.target.style.background = "#ff9800")}
          >
            Send
          </button>

          <p
            style={{
              marginTop: "10px",
              fontSize: "0.9rem",
              color: "#bbb",
            }}
          >
            Sign up with your email address to receive news and updates!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
