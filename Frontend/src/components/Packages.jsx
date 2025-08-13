import React from "react";
import { useNavigate } from "react-router-dom";
const packages = [
    
  {
    name: "Basic Plan",
    price: "$199",
    features: ["Venue Setup", "Basic Decorations", "1 Photographer","New Models","Good Lighting"],
  },
  {
    name: "Premium Plan",
    price: "$499",
    features: ["Venue Setup", "Advanced Decorations", "2 Photographers", "Catering","Managing Guests"],
  },
  {
    name: "Luxury Plan",
    price: "$999",
    features: [
      "Venue Setup",
      "Premium Decorations",
      "Professional Photography & Videography",
      "Catering & Drinks",
      ,
    ],
  },

  {
    name: "Gold Plan",
    price: "$1499",
    features: [
      "Luxury Plan Features",
      "Live Music / DJ",
      "Custom Theme & Lighting",
      "VIP Guest Management",
    ],
  },
  {
    name: "Platinum Plan",
    price: "$2499",
    features: [
      "Gold Plan Features",
      "Exclusive Venue",
      "Luxury Catering",
      "Full Event Coordination",
      "Special Performances",
    ],
  },





];

const Packages = () => {
    //  const [scrollCount, setScrollCount] = useState(1);
    const navigate = useNavigate();
  const containerStyle = {
    textAlign: "center",
    padding: "50px 20px",
    background: "rgb(242 227 217 / 67%)",
  };

  const cardsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    width: "250px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "translateY(-10px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "10px 20px",
    background: "#e7c7b2ab",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  };
//    const handleScroll = () => {
//     window.scrollBy({ top: 600 * scrollCount, behavior: "smooth" }); // scroll increases
//     setScrollCount(scrollCount + 1); // increment for next click
//   };


  return (
    
    <section style={containerStyle}>
      <h1>Our Event Packages</h1>
      <div style={cardsContainerStyle}>
        {packages.map((pkg, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, cardHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, cardStyle)
            }
          >
            <h3>{pkg.name}</h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{pkg.price}</p>
            <ul style={{ textAlign: "left", marginTop: "10px" }}>
              {pkg.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
  <button
  style={buttonStyle}
  onClick={() => {
    const scrollAmount = window.innerWidth < 1200 ? 1200 : 800; // scroll more on mobile
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  }}
>
  Book Now
</button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;