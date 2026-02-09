"use client";

import Image from "next/image";
import "./navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const location = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  const navbarVariant = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  
  const handleLinkClick = () => {
    setTimeout(() => {
      setMenuOpen(false);
      window.scrollTo(0, 0);
    }
    , 500);
  };

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }

  return (
    <motion.div
      className="navbar"
      initial="initial"
      animate="animate"
      variants={navbarVariant}
    >
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={menuOpen ? "bar open" : "bar"}></div>
            <div className={menuOpen ? "bar open" : "bar"}></div>
            <div className={menuOpen ? "bar open" : "bar"}></div>
          </div>
        <div className="navbarItems">
          <Link
            href="/"
            className={`navbarItem ${
              location === "/" ? "active" : ""
            }`}
            onClick={scrollToTop}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`navbarItem ${
              location === "/projects" ? "active" : ""
            }`}
            onClick={scrollToTop}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`navbarItem ${
              location === "/contact" ? "active" : ""
            }`}
            onClick={scrollToTop}
          >
            Contact
          </Link>
        </div>
        <AnimatePresence>
      {menuOpen && (
        <motion.div className="mobileNavbarItems"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}       
        >
          <Link
            href="/"
            className={`navbarItem ${
              location === "/" ? "active" : ""
            }`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`navbarItem ${
              location === "/projects" ? "active" : ""
            }`}
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`navbarItem ${
              location === "/contact" ? "active" : ""
            }`}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </motion.div>
      )}
      </AnimatePresence>

          <div className={socialOpen ? "socialCircle openCircle": "socialCircle"} onClick={() => setSocialOpen(!socialOpen)}>
            <Image src="network.png" className="network" alt="network" width={20} height={20} />
          </div>
        <div className="socialItems">
          <motion.a
            href="https://github.com/Nagpal45"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="github.png" className="socialItem git" alt="github" width={20} height={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vaibhav249/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="linkedin.png" className="socialItem linked" alt="linkedin" width={20} height={20} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/okvaibhav/?hl=en"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="instagram.png" className="socialItem insta" alt="instagram" width={20} height={20} />
          </motion.a>
          <motion.a
            href="mailto:vaibhavnagpal.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src="email.png" className="socialItem" alt="email" width={20} height={20} />
          </motion.a>
        </div>
        <AnimatePresence>
      {socialOpen && (
        <motion.div className="mobileMenu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
          <motion.a
            href="https://github.com/Nagpal45"
            target="_blank"
            rel="noreferrer"
            className="socialItemContainer"
            initial={{ opacity: 0, x: 0 , y:0}}
            animate={{ opacity: 1, x:"-19.5vw", y:"-3vw"}}
            exit={{ opacity: 0, x: 0 , y:0}}
            transition={{ duration: 0.5 }}
          >
            <Image src="github.png" className="socialItem git" alt="github" width={20} height={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/vaibhav249/"
            target="_blank"
            rel="noreferrer"
            className="socialItemContainer"
            initial={{ opacity: 0, x: 0 , y:0}}
            animate={{ opacity: 1, x:"-15vw", y:"7vw"}}
            exit={{ opacity: 0, x: 0 , y:0}}
            transition={{ duration: 0.5 }}
          >
            <Image src="linkedin.png" className="socialItem linked" alt="linkedin" width={20} height={20} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/okvaibhav/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="socialItemContainer"
            initial={{ opacity: 0, x: 0 , y:0}}
            animate={{ opacity: 1, x:"-6vw", y:"15vw"}}
            exit={{ opacity: 0, x: 0 , y:0}}
            transition={{ duration: 0.5 }}
          >
            <Image src="instagram.png" className="socialItem insta" alt="instagram" width={20} height={20} />
          </motion.a>
          <motion.a
            href="mailto:vaibhavnagpal.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="socialItemContainer"
            initial={{ opacity: 0, x: 0 , y:0}}
            animate={{ opacity: 1, x:"5vw", y:"19vw"}}
            exit={{ opacity: 0, x: 0 , y:0}}
            transition={{ duration: 0.5 }}
          >
            <Image src="email.png" className="socialItem" alt="email" width={20} height={20} />
          </motion.a>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  );
}
