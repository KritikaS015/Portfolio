import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Skills from "./pages/skills/Skills";
import Tools from "./pages/skills/Tools";
import Projects from "./pages/skills/Projects";
import Footer from "./pages/footer/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="Kritika" home="Home" />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Tools />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}
