import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Services = () => {
  return (
    <motion.div
      id="services"
      className="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="services-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1 whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
          My Services
        </motion.h1>
        <motion.img
          src={theme_pattern}
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        />
      </motion.div>

      <motion.div
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Services_Data.map((service, index) => (
          <motion.div
            key={index}
            className="services-format"
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <motion.h3 whileHover={{ scale: 1.1 }}>{service.s_no}</motion.h3>
            <motion.h2
              whileHover={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 0.5 }}
            >
              {service.s_name}
            </motion.h2>
            <motion.p>{service.s_desc}</motion.p>
            <motion.div
              className="services-readmore"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <p>Read More</p>
              <motion.img
                src={arrow_icon}
                alt=""
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
