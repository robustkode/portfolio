import React, { useRef, useEffect } from "react";

import lottie from "lottie-web";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const animeContainer = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: animeContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./react.json"),
    });
  }, []);
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="anime-container" ref={animeContainer}></div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>B.Sc. Mechanical Engineering</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                4+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
            I'm a front-end developer with a keen focus on crafting responsive,
            dynamic and maintainable websites using React.js and Next.js.
          </p>
          <p>
            While my core strength lies in front-end development, I explore the
            backend side of applications, where I find immense knowledge to
            build efficient websites.
          </p>
          <p>
            If you're searching for a developer who not only excels in frontend
            development but also possesses an appreciation for software quality
            you've landed in the right place.
          </p>
          <a href="#contact" className="btn <atn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
