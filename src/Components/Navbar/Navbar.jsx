import React, { useRef, useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, useAnimation } from "framer-motion";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [scrollDir, setScrollDir] = useState("up");
  const menuRef = useRef();
  const navbarControls = useAnimation();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollDir === "down") {
      navbarControls.start({
        y: -100,
        opacity: 0,
        transition: { duration: 0.5 },
      });
    } else {
      navbarControls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  }, [scrollDir, navbarControls]);

  return (
    <motion.div
      className="navbar"
      animate={navbarControls}
      initial={{ y: -100, opacity: 0 }}
    >
      <motion.h1
        whileHover={{ scale: 1.1, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        SaHiL
      </motion.h1>

      <motion.img
        src={menu_open}
        onClick={openMenu}
        alt=""
        className="nav-mob-open"
        whileHover={{ scale: 1.2, rotate: 180 }}
      />

      <ul ref={menuRef} className="nav-menu">
        <motion.img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
          whileHover={{ scale: 1.2, rotate: 180 }}
        />

        {["home", "about", "services", "work", "contact"].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnchorLink className="anchor-link" href={`#${item}`} offset={50}>
              <p onClick={() => setMenu(item)}>
                {item === "home"
                  ? "Home"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </AnchorLink>
            {menu === item ? (
              <motion.img
                src={underline}
                alt=""
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            ) : null}
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="nav-connect"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
