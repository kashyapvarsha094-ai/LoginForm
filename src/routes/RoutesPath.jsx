import React from "react";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import About from "../about/About";
import Services from "../services/Services";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../form/LoginForm";

export default function RoutesPath() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
