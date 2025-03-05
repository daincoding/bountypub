import React from "react";
import { motion } from "framer-motion"; 
import Logo from "../assets/images/logo_bountypub.png"; 
import { FaArrowDown } from "react-icons/fa"; 

const HeroSection = () => {
  const handleJoinPubClick = () => {
    window.open("https://discord.gg/45wubE8bBH", "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-bg-dark text-text-primary px-6 md:px-12">
      <div className="text-center w-full max-w-4xl">
        
        {/* Animated Heading */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome Travelers to the  
          <span className="inline-flex items-center">
            🍻 <span className="px-2">Bounty Pub</span> 🍻
          </span>
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-8 px-2 md:px-0"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Join the challenge runs, conquer bounties, and make your mark!
        </motion.p>

        {/* Animated Logo with Pulsating Effect */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <motion.img
            src={Logo}
            alt="Bounty Pub"
            className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Animated Enter Text */}
        <motion.p 
          className="text-xl sm:text-2xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Enter
        </motion.p>

        {/* Bouncing Arrow */}
        <motion.div 
          className="flex justify-center mb-6"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          <FaArrowDown className="text-4xl sm:text-5xl text-btn-primary" />
        </motion.div>

        {/* Animated Buttons with Staggered Appearance */}
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.8,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.button
            className="btn btn-small w-48 sm:w-auto"
            onClick={() => document.getElementById('bounty-board').scrollIntoView({ behavior: 'smooth' })}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Bounty Board
          </motion.button>
          
          <motion.button
            className="btn btn-small w-48 sm:w-auto"
            onClick={() => document.getElementById('leaderboard').scrollIntoView({ behavior: 'smooth' })}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Leaderboard
          </motion.button>

          <motion.button
            className="btn btn-small w-48 sm:w-auto"
            onClick={() => document.getElementById('wall-of-fame').scrollIntoView({ behavior: 'smooth' })}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Wall Of Fame
          </motion.button>

          <motion.button
            className="btn btn-small w-48 sm:w-auto"
            onClick={handleJoinPubClick}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Join The Pub!
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;