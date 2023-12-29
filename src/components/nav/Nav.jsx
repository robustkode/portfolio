import React from "react";
import "./nav.css";
import {
  AiOutlineFolderOpen,
  AiOutlineHome,
  AiOutlinePhone,
} from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <nav id="nav-phone">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <HiOutlineWrenchScrewdriver />
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <AiOutlineFolderOpen />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <AiOutlinePhone />
        </a>
      </nav>

      <nav id="desktop-nav">
        <div class="logo secondary-color">Kalid Ahmed</div>
        <div>
          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
