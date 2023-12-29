import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaBootstrap, FaNode, FaReact, FaSass } from "react-icons/fa";
import {
  SiExpress,
  SiMaterialdesign,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5
                color="#e34c26"
                size={30}
                className="experience__details-icon"
              />

              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <IoLogoCss3
                color="#2965f1"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaSass
                color="#cd6799"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>SASS</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap
                color="#7952B3"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiTailwindcss
                color="#38B2AC"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMaterialdesign
                color="#0081CB"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>Material&nbsp;UI</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript
                color="#F7DF1E"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaReact
                color="#61DAFB"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs
                color="#000000"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>Nextjs</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiRedux
                color="#764ABC"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNode
                color="#339933"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>Nodejs</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress
                color="#000000"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>Expressjs</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoFirebase
                color="#FFCA28"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb
                color="#47A248"
                size={30}
                className="experience__details-icon"
              />
              <div>
                <h4>Mongodb</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
