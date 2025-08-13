import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Testimonials from "./components/Testimonials";
import Packages from "./components/Packages";

const App = () => {





  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        {/* Protected main site */}
        <Route
          path="/herosection"
          element={
            <ProtectedRoute>
              <>
               <Toaster position="top-right" />
                <Navbar />
                <HeroSection />
                <Services />
                <About />
                <Packages/>
                <Contact />
                <Testimonials/>
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
     <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        {/* Catch-all redirect */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
        
        
      </Routes>
    </Router>
  );
};

export default App;