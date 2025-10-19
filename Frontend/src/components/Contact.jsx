import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://event-planning-backend-goce.onrender.com/api/v1/message/send",
        { name, email, subject, message },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        toast.success(res.data.message, {
          duration: 4000,
          style: {
            background: "linear-gradient(135deg, #4BB543, #2F8F3E)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            padding: "15px 25px",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#4BB543",
          },
        });
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Server error", {
          style: {
            background: "#FF4C4C",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            padding: "15px 25px",
          },
        });
      });
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Kolkata West-Bengal</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +92-321-1111111</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>iamzohaib777@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <h3>Our Location</h3>
            <iframe
              title="Location Map"
              src="https://www.google.com/maps?q=22.57520866394043,88.35986328125&z=14&output=embed"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT US</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 
