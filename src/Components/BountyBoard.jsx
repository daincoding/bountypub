import React, { useState } from "react";
import BigBountyContent from "./BigBountyContent";
import SmallBountyContent from "./SmallBountyContent";
import RandomizerLeagueContent from "./RandomizerLeagueContent";
import SmallBountyContent2 from "./SmallBountyContent2"; // New component for the second small bounty
import { FaArrowUp } from "react-icons/fa"; 
import { motion } from "framer-motion";

const BountyBoard = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleJoinPubClick = () => {
    window.open("https://discord.gg/45wubE8bBH", "_blank");
  };

  const getActiveBountyText = () => {
    if (activeSection === "big-bounty") return "Big Bounty: Nightreign Release Bounty";
    if (activeSection === "small-bounty") return "Small Bounty: Starting Class Only Bounty";
    if (activeSection === "randomizer-league") return "League: Any% Randomizer League May";
    return "No Bounty Selected";
  };

  return (
    <section
      id="bounty-board"
      className="flex flex-col items-center min-h-screen bg-bg-dark text-text-primary px-4 pt-10 pb-10"
    >
      {/* Title at the Top */}
      <motion.h2 
        className="text-4xl md:text-6xl font-bold mb-8 flex items-center space-x-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <span role="img" aria-label="scroll">📜</span>
        <span>Bounty Board</span>
        <span role="img" aria-label="crossed-swords">⚔️</span>
      </motion.h2>

      {/* Navigation Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-8 mt-4"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {[
          { key: "big-bounty", label: "Big Bounty: Nightreign Release Bounty" },
          { key: "small-bounty", label: "Small Bounty: Starting Class Only Bounty" },
          { key: "randomizer-league", label: "Any% Randomizer League [May]" },
          { key: "past-bounties", label: "Past Bounties & Rules: Join The Pub!" }
        ].map(({ key, label }) => (
          <motion.button
            key={key}
            onClick={() => 
              key === "past-bounties" ? handleJoinPubClick() : setActiveSection(key)
            }
            className="btn btn-small bg-btn-primary text-white border border-btn-hover px-4 py-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {label}
          </motion.button>
        ))}
      </motion.div>

      {/* Display Selected Bounty */}
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
          className="flex flex-col items-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FaArrowUp className="text-4xl text-btn-primary animate-bounce mb-4" />
          <h3 className="text-3xl md:text-4xl font-semibold flex items-center space-x-2">
            <span>CHOOSE A BOUNTY</span>
          </h3>
        </motion.div>
      )}

      {/* Display Content Based on Active Section */}
      <motion.div 
        className="w-full max-w-6xl mt-5 min-h-[60vh] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {activeSection === "big-bounty" && <BigBountyContent />}
        {activeSection === "small-bounty" && <SmallBountyContent />}
        {activeSection === "randomizer-league" && <RandomizerLeagueContent />}
      </motion.div>
    </section>
  );
};

export default BountyBoard;