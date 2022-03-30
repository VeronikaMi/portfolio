import React, { useEffect, useRef, useState } from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Nav from "./nav/Nav";
// import { useEffect } from "react";

function HomePage() {
  // let height = document.documentElement.scrollHeight;
  // useEffect(()=>{
  //   if(document.documentElement.scrollHeight - document.documentElement.scrollTop <= 500){
  //     console.log("hide nav")
  //   }
  // })

  let container = useRef();
  const [scrolledHeight, setScrolledHeight] = useState(container.current.scrollTop);

  const handleScroll = (e)=>{
    console.log("Scrolled")
    
    console.log(e)
    // onScroll = {handleScroll}
  }

  useEffect(()=>{
    console.log(container)
    const { scrollTop, scrollHeight, clientHeight } = container.current;
    console.log(scrollTop, scrollHeight, clientHeight);
      if (clientHeight - scrollTop === 200) {
        console.log("reached bottom");
      }
  },[scrolledHeight])

  return (
    <>
    <div ref={container}
    onScroll={()=>setScrolledHeight(container.current.scrollTop)}>
      <Nav/>
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default HomePage;
