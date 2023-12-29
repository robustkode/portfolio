import React from "react";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Nav />
      <Hero />

      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
