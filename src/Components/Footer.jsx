import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import Logo from "../assets/images/logo_bountypub.png"; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer 
      className="bg-bg-dark text-text-primary p-6 border-t border-btn-primary mt-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        
        {/* Hosted By Text */}
        <motion.p 
          className="text-sm md:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          BountyPub hosted by 
          <a 
            href="https://www.twitch.tv/nuclearpastatom" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-btn-primary hover:underline mx-1"
          >
            NPT
          </a>
          and 
          <a 
            href="https://twitch.tv/zoodle" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-btn-primary hover:underline mx-1"
          >
            Zoodle
          </a>
        </motion.p>

        {/* Clickable Logo - Scroll to Top */}
        <motion.img 
          src={Logo} 
          alt="Bounty Pub Logo" 
          className="w-10 h-10 cursor-pointer"
          onClick={scrollToTop}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Created By Text */}
        <motion.p 
          className="text-sm md:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Website created with <span role="img" aria-label="heart">❤️</span> by 
          <a 
            href="https://twitch.tv/dain_sounds" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-btn-primary hover:underline ml-1"
          >
            dain.
          </a>
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;