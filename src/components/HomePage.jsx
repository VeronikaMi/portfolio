import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
