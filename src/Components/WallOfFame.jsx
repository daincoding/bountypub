import React, { useState } from "react";
import pastBigBounties from "../data/pastBigBounties.json"; // Import JSON data
import { motion } from "framer-motion";

const WallOfFame = () => {
  const [selectedBounty, setSelectedBounty] = useState(null);

  return (
    <section
      id="wall-of-fame"
      className="flex flex-col items-center min-h-screen bg-bg-dark text-text-primary px-4 pt-20"
    >
      {/* Title */}
      <motion.h2 
        className="text-5xl md:text-6xl font-bold mb-8 flex items-center space-x-3 text-text-accent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>🏆</span> 
        <span>Wall of Fame</span> 
        <span>🏆</span>
      </motion.h2>

      {/* Dropdown to Select a Bounty */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <select
          className="bg-bg-medium text-text-primary border border-btn-primary rounded-md px-4 py-2 w-72 cursor-pointer text-lg font-semibold my-10"
          onChange={(e) => setSelectedBounty(pastBigBounties.find(bounty => bounty.title === e.target.value))}
          defaultValue=""
        >
          <option value="" disabled>-- Select a Bounty --</option>
          {pastBigBounties.map((bounty, index) => (
            <option key={index} value={bounty.title}>{bounty.title}</option>
          ))}
        </select>
      </motion.div>

      {/* Display Podium for Top 3 */}
      {selectedBounty && (
        <motion.div 
          className="flex justify-center items-end mt-10 space-x-6 w-full max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 2nd Place - Medium Height */}
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🥈</span>
            <motion.div 
              className="w-32 md:w-40 flex flex-col items-center rounded-lg shadow-lg border-4 border-btn-primary"
              style={{
                backgroundColor: "var(--bg-medium)",  
                height: "120px", /* Explicit height */
              }}
            >
              {/* Player Name at Top */}
              <div className="w-full py-2 bg-bg-light text-center text-lg font-bold">
                {selectedBounty.top3[1]?.name}
              </div>
              {/* Podium Label at Bottom */}
              <div className="flex-grow flex items-end justify-center w-full bg-bg-dark py-2 rounded-b-lg text-center text-sm font-semibold">
                2nd Place
              </div>
            </motion.div>
          </div>

          {/* 1st Place - Tallest Podium */}
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-2">🥇</span>
            <motion.div 
              className="w-36 md:w-48 flex flex-col items-center rounded-lg shadow-xl border-4 border-text-accent"
              style={{
                backgroundColor: "var(--btn-primary)",  
                height: "160px", /* Tallest podium */
              }}
            >
              {/* Player Name at Top */}
              <div className="w-full py-2 bg-bg-light text-center text-xl font-bold">
                {selectedBounty.top3[0]?.name}
              </div>
              {/* Podium Label at Bottom */}
              <div className="flex-grow flex items-end justify-center w-full bg-bg-dark py-2 rounded-b-lg text-center text-sm font-semibold">
                1st Place
              </div>
            </motion.div>
          </div>

          {/* 3rd Place - Shortest Podium */}
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🥉</span>
            <motion.div 
              className="w-28 md:w-36 flex flex-col items-center rounded-lg shadow-lg border-4 border-btn-primary"
              style={{
                backgroundColor: "var(--bg-medium)",  
                height: "100px", /* Shortest podium */
              }}
            >
              {/* Player Name at Top */}
              <div className="w-full py-2 bg-bg-light text-center text-lg font-bold">
                {selectedBounty.top3[2]?.name}
              </div>
              {/* Podium Label at Bottom */}
              <div className="flex-grow flex items-end justify-center w-full bg-bg-dark py-2 rounded-b-lg text-center text-sm font-semibold">
                3rd Place
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default WallOfFame;