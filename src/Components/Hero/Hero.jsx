import React, { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
import Typed from "typed.js";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  const el = useRef(null);
  const { scrollY } = useScroll();
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.1]);
  const yText = useTransform(scrollY, [0, 500], [0, -30]);

  useEffect(() => {
    const typedOptions = {
      strings: [
        "Java Full Stack Developer",
        "Python Developer",
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
        "SQL Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };
    const typedInstance = new Typed(el.current, typedOptions);
    return () => typedInstance.destroy();
  }, []);

  return (
    <motion.div
      id="home"
      className="hero"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={profile_img}
        alt=""
        style={{ scale: scaleImage }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
        whileHover={{ scale: 1.1, rotate: 2 }}
      />

      <motion.h1
        style={{ y: yText }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <span>
          <span>I'm Sahil Khan, </span>
        </span>
        <span ref={el} className="change-text"></span>
      </motion.h1>

      <motion.p
        style={{ y: yText }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        I am a Developer with a solid foundation in ReactJS, Spring Boot, Java,
        SQL, and Python, driven to grow through impactful projects and
        professional collaboration.
      </motion.p>

      <motion.div
        className="hero-action"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="hero-connect"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#b415ff",
            transition: { duration: 0.3 },
          }}
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </motion.div>

        <motion.div
          className="hero-resume"
          whileHover={{
            scale: 1.1,
            borderColor: "#b415ff",
            transition: { duration: 0.3 },
          }}
        >
          <a href="/resume.pdf" download className="anchor-link">
            My resume
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
