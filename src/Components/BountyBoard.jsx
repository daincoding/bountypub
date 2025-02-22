import React, { useState } from "react";
import BigBountyContent from "./BigBountyContent";
import SmallBountyContent from "./SmallBountyContent";
import { FaArrowUp } from "react-icons/fa"; 
import { motion } from "framer-motion";

const BountyBoard = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleJoinPubClick = () => {
    window.open("https://discord.gg/45wubE8bBH", "_blank");
  };

  const getActiveBountyText = () => {
    if (activeSection === "big-bounty") return "Big Bounty: 1 Shot Bosses";
    if (activeSection === "small-bounty") return "Small Bounty: Starting Class Only Permadeath";
    return "No Bounty Selected";
  };

  return (
    <section
      id="bounty-board"
      className="flex flex-col items-center min-h-screen bg-bg-dark text-text-primary px-4 pt-30"
    >
      {/* Title at the Top */}
      <motion.h2 
        className="text-4xl md:text-6xl font-bold mb-8 flex items-center space-x-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <span role="img" aria-label="scroll">📜</span>
        <span>Bounty Board</span>
        <span role="img" aria-label="crossed-swords">⚔️</span>
      </motion.h2>

      {/* Navigation Buttons with Smaller Size & Staggered Animation */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-8 mt-10"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {["big-bounty", "small-bounty", "past-bounties"].map((section, index) => (
          <motion.button
            key={section}
            onClick={() => 
              section === "past-bounties" ? handleJoinPubClick() : setActiveSection(section)
            }
            className="btn btn-small"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {section === "big-bounty" && "Big Bounty: 1 Shot Bosses"}
            {section === "small-bounty" && "Small Bounty: Starting Class Only Permadeath"}
            {section === "past-bounties" && "Past Bounties & Rules: Join The Pub!"}
          </motion.button>
        ))}
      </motion.div>

      {/* Display Selected Bounty with Slide-up Animation */}
      <motion.div 
        className="mb-2 text-2xl md:text-3xl font-semibold text-btn-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {getActiveBountyText()}
      </motion.div>

      {/* Animated Arrow and "CHOOSE A BOUNTY" Message */}
      {!activeSection && (
        <motion.div 
          className="flex flex-col items-center mt-32"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FaArrowUp className="text-4xl text-btn-primary animate-bounce mb-4" />
          <h3 className="text-3xl md:text-4xl font-semibold flex items-center space-x-2">
            <span role="img" aria-label="treasure">🪙</span>
            <span>CHOOSE A BOUNTY</span>
            <span role="img" aria-label="treasure">🪙</span>
          </h3>
        </motion.div>
      )}

      {/* Display Content Based on Active Section with Fade-in Animation */}
      <motion.div 
        className="w-full max-w-6xl mt-5"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {activeSection === "big-bounty" && <BigBountyContent />}
        {activeSection === "small-bounty" && <SmallBountyContent />}
      </motion.div>
    </section>
  );
};

export default BountyBoard;