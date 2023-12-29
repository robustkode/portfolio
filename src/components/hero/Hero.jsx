import React, { useRef, useEffect } from "react";
import "./hero.css";

import lottie from "lottie-web";

const Hero = () => {
  const animeContainer = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: animeContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./dev.json"),
    });
  }, []);
  return (
    <header>
      <div className="container header__container">
        <div className="anime-container" ref={animeContainer}></div>
        <div>
          <p>Hello I'm</p>
          <h1>Kalid Ahmed</h1>
          <p className="text-light">Front-end Developer</p>
          <div className="cta">
            <a href="" className="btn">
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Contact Info
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
