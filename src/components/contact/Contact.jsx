import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    const promise = new Promise((resolve, reject) => {
      emailjs
        .sendForm(
          "service_cnrqfni",
          "template_pibrfme",
          formRef.current,
          "_bc5FJlHCLspatrrn"
        )
        .then(
          async (response) => {
            formRef.current.reset();
            if (response.status === 200) {
              resolve();
            } else {
              reject();
            }
          },
          (error) => {
            reject();
          }
        );
    });

    await toast.promise(promise, {
      loading: "Sending your message...",
      success: "Message sent successfully.",
      error: "Something went wrong... Please try again later",
    });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h5>Email</h5>
            <a href="mailto:kalidadefa@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ fontSize: "1rem" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
