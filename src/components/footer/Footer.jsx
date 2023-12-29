import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="container">
      {/* eslint-disable-next-line */}
      <div className="contact__container">
        <div className="footer__contact">
          <TfiEmail className="footer-contact-icon" />
          <p className="footer-contact-option">Email</p>
          <p>kalidadefa@gmail.com</p>
        </div>
        <div className="footer__contact">
          <CiLocationOn className="footer-contact-icon" />
          <p className="footer-contact-option">location</p>
          <p>Addis Ababa, Ethiopia</p>
        </div>
      </div>
      <div className="footer__links">
        <p>Robust Code</p>
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/kalid-adefa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={30} />
          </a>
          <a href="https://github.com/robustkode">
            <FaGithub size={35} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
