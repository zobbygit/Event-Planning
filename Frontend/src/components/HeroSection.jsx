import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  const fadeInAnimation = `
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <section
      className="hero"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <style>{fadeInAnimation}</style>

      {/* Background Image */}
      <img
        src="./restaurant5.jpg"
        alt="restaurant"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
          filter: "brightness(0.6)",
        }}
      />

      {/* Overlay Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
          zIndex: -1,
        }}
      />

      {/* Hero Text Content */}
      <div
        style={{
          maxWidth: "800px",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          animation: "fadeInUp 1s ease-out",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            fontFamily: "'Alex Brush', cursive",
            color: "#f7c07b",
            marginBottom: "10px",
          }}
        >
          Dream Maker
        </h3>

        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            marginBottom: "15px",
          }}
        >
          Your Personal Dream Maker
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            marginBottom: "30px",
            color: "#ffe8c1",
          }}
        >
          We believe it’s all about BIG DREAMS and the smallest details!
        </p>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          style={{
            display: "inline-block",
            padding: "12px 30px",
            background: "#f7c07b",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "0.3s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.background = "#e0a659")}
          onMouseOut={(e) => (e.target.style.background = "#f7c07b")}
        >
          BOOK NOW
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
