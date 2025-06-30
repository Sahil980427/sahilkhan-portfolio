import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const MyWork = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      id="work"
      className="mywork"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="mywork-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.h1 whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
          My Latest Work
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
        className="mywork-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {mywork_data.map((work, index) => (
          <motion.img
            key={index}
            src={work.w_img}
            alt=""
            className="work-style"
            variants={itemVariants}
            whileHover={{
              scale: 1.15,
              rotate: 2,
              boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.5)",
              borderRadius: "15px",
            }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        ))}
      </motion.div>

      <motion.div
        className="mywork-showmore"
        whileHover={{ scale: 1.1, gap: 25 }}
        transition={{ type: "spring", stiffness: 100 }}
        onClick={() => navigate("/listofwork")}
      >
        <motion.p>Show More</motion.p>
        <motion.img
          src={arrow_icon}
          alt=""
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default MyWork;
