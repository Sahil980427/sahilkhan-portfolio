import React from "react";
import "./Footer.css";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div className="footer-top">
        <motion.div
          className="footer-top-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring" }}
          >
            SaHiL
          </motion.h1>
          <motion.p>
            Wanna do something? If you sit doing nothing, of course, I’m
            invisible — that’s why you’re bored! But hey, I already dropped some
            cool stuff here… go mess with it for some fun!
          </motion.p>
        </motion.div>

        <motion.div
          className="footer-top-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="footer-try-this"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/gameworld")}
          >
            try this...
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.hr
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>© 2025 Sahil Khan. All rights reserved.</p>
        <motion.div className="footer-bottom-right">
          <motion.p whileHover={{ scale: 1.1 }}>Term of Services</motion.p>
          <motion.p whileHover={{ scale: 1.1 }}>Privacy Policy</motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
