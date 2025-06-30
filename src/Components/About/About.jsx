import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";

const About = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <motion.div
      id="about"
      className="about"
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="about-title" style={{ y: yText }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About me
        </motion.h1>
        <motion.img
          src={theme_pattern}
          alt=""
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      <motion.div
        className="about-sections"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.div
          className="about-left"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={profile_img}
            alt=""
            style={{ opacity: 0.3 }}
            animate={{
              rotate: [-20, 25, -20],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="about-right"
          style={{ y: yText }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="about-para">
            <motion.p whileHover={{ scale: 1.03 }}>
              I am a passionate Software Engineer with a strong foundation in
              full-stack development, working with Java, Python, Spring Boot,
              and React. Coming from a Mechanical Engineering background, I
              bring a practical, problem-solving mindset to technology.
            </motion.p>
            <motion.p whileHover={{ scale: 1.03 }}>
              I’ve built scalable, real-world applications and I’m eager to keep
              learning, collaborate with great teams, and contribute to
              meaningful software projects.
            </motion.p>
          </div>

          <div className="about-skills">
            {[
              { skill: "Java", width: "90%" },
              { skill: "SQL", width: "85%" },
              { skill: "React JS", width: "80%" },
              { skill: "Python", width: "70%" },
              { skill: "Java Script", width: "67%" },
              { skill: "HTML & CSS", width: "65%" },
            ].map(({ skill, width }, idx) => (
              <motion.div
                className="about-skill"
                key={idx}
                whileHover={{ scale: 1.1 }}
              >
                <p>{skill}</p>
                <motion.hr
                  style={{ width }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * idx, duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="about-achievements"
        style={{ y: yText }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {[
          { title: "JOURNEY SO FAR", desc: "Focused on Practical Learning" },
          {
            title: "PROJECTS COMPLETED",
            desc: "12+ Full-Stack & Personal Projects",
          },
          {
            title: "FOCUS AREA",
            desc: "Creating Practical & Scalable Solutions",
          },
        ].map((achieve, idx) => (
          <motion.div
            className="about-achievement"
            key={idx}
            whileHover={{ scale: 1.15, rotate: 2 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h1>{achieve.title}</h1>
            <p>{achieve.desc}</p>
            {idx < 2 && <hr />}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
