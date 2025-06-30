import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, when: "beforeChildren" },
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

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    setResult("Sending...");
    formData.append("access_key", "aca9aaec-6349-4d99-be49-ba3a7e59ba44");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(`Thank you ${name}! Your message has been received.`);
      event.target.reset();
    } else {
      setResult(data.message);
      alert(`Oops ${name}, something went wrong.`);
    }
  };

  return (
    <motion.div
      id="contact"
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
          Get in Touch
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
        className="contact-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="contact-left" variants={itemVariants}>
          <motion.h1 whileHover={{ scale: 1.05 }}>Let's Talk</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I’m always excited to connect with motivated individuals and explore
            new ideas or opportunities. Use the form to impress me!
          </motion.p>
          <motion.div className="contact-details" variants={containerVariants}>
            <motion.div className="contact-detail" variants={itemVariants}>
              <motion.img
                src={mail_icon}
                alt=""
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <p>sahilkhan934018@gmail.com</p>
            </motion.div>
            
            <motion.div className="contact-detail" variants={itemVariants}>
              <motion.img
                src={location_icon}
                alt=""
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <p>
                Let’s figure it out — straight from the City of Lakes, right in
                the heart of India, where even the pigeons enjoy the view. If
                you get it, use the contact form! You know for what...
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className="contact-right"
          variants={itemVariants}
        >
          <label>Your Name</label>
          <motion.input
            type="text"
            placeholder="Enter your name"
            name="name"
            whileFocus={{ scale: 1.02 }}
          />
          <label>Your Email</label>
          <motion.input
            type="email"
            placeholder="Enter your email"
            name="email"
            whileFocus={{ scale: 1.02 }}
          />
          <label>Write your message here</label>
          <motion.textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            whileFocus={{ scale: 1.02 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="contact-submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Now
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
