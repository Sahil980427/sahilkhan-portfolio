import React from "react";
import { motion } from "framer-motion";
import "./List_of_Work.css";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "House Rent Room System",
    description:
      "Full Stack App with Spring Boot, MySQL, React, Secure JWT Authentication.",
  },
  {
    title: "WebSocket IO in Chat App",
    description:
      "Real-time Chat Application using WebSocket.io for seamless two-way communication.",
  },
  {
    title: "RabbitMQ in Persistence Message App",
    description:
      "Robust messaging system using RabbitMQ to ensure reliable message delivery and persistence.",
  },
  {
    title: "E-Commerce Website",
    description:
      "Full-Featured Online Shopping Platform with secure transactions, product management, and responsive UI.",
  },
  {
    title: "User Management System",
    description:
      "Role-Based User Management with secure authentication, authorization, and admin controls.",
  },
  {
    title: "Car Rental System",
    description:
      "Online Car Booking Platform with vehicle availability, booking management, and user dashboards.",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio website to showcase skills, projects, and contact information with modern design.",
  },
  {
    title: "Todo Site",
    description:
      "Simple yet effective Todo application with add, delete, and complete task features, built using modern tech stack.",
  },
  {
    title: "Web Security in Spring Boot",
    description:
      "Comprehensive security implementation in Spring Boot, featuring JWT, role-based access, and data encryption.",
  },
  {
    title: "Microservices in Education System",
    description:
      "Scalable Education Platform built with Microservices architecture, ensuring modularity and flexibility.",
  },
  {
    title: "Hotel Management System",
    description:
      "End-to-End Hotel Management solution with booking, room management, and secure access for staff and customers.",
  },
];

const List_of_Work = () => {
  const navigate = useNavigate();

  return (
    <div className="project-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        Back to MyWork
      </button>
      <h1 className="project-title">My Previous Projects</h1>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default List_of_Work;
