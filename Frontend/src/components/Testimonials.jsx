import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    rating: 5,
    comment: "Amazing service! Highly recommend to everyone to Come ",
  },
  {
    name: "Mark Thompson",
    rating: 4,
    comment: "Great experience, friendly staff, will come back!",
  },
  {
    name: "Sophie Lee",
    rating: 5,
    comment: "Exceeded my expectations in every way!",
  },
  {
    name: "Chang Yon",
    rating: 5,
    comment: "From planning to execution, everything was seamless.",
  },
  {
    name: "Henry Mark",
    rating: 5,
    comment: "They turned our vision into reality and delivered it.",
  },
];

const Testimonials = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "50px 20px",
    background: "rgb(242 227 217 / 67%",
    cursor:"pointer" // updated background
  };

  const cardsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const cardStyle = (delay) => ({
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    width: "250px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    opacity: 0,
    transform: "translateY(20px)",
    animation: `fadeInUp 0.8s forwards`,
    animationDelay: `${delay}s`,
  });

  const commentStyle = { fontStyle: "italic", marginBottom: "15px" };
  const nameStyle = { fontWeight: "bold", marginBottom: "10px" };
  const ratingStyle = { color: "#f39c12" };

  return (
    <section style={containerStyle}>
      <h1>What Our Customers Say</h1>
      <div style={cardsContainerStyle}>
        {testimonials.map((t, index) => (
          <div key={index} style={cardStyle(index * 0.3)}>
            <p style={commentStyle}>"{t.comment}"</p>
            <p style={nameStyle}>- {t.name}</p>
            <p style={ratingStyle}>{"★".repeat(t.rating)}</p>
          </div>
        ))}
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
