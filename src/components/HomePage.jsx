import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Nav from "./nav/Nav";

function HomePage() {
  return (
    <>
      <Nav/>
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
