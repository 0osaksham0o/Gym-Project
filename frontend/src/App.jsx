import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import LoginForm from "./components/LoginForm";  // Import LoginForm
import RegisterForm from "./components/RegisterFrom";  // Import RegisterForm
import TestimonialForm from "./components/TestimonialForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <WorkoutSessions />
            <Gallery />
            <Pricing />
            <Contact />
            <BMICalculator />
            <TestimonialForm/>
            

          </>
        } />
        <Route path="/login" element={<LoginForm />} />  {/* Login Route */}
        <Route path="/register" element={<RegisterForm />} />  {/* Register Route */}
      </Routes>
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
