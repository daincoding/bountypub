import React, { useState } from "react";
import pastBigBounties from "../data/pastBigBounties.json"; // Import JSON data
import Select from "react-select"; // Import react-select
import { motion } from "framer-motion";

const WallOfFame = () => {
  const [selectedBounty, setSelectedBounty] = useState(null);

  // Format options for react-select
  const bountyOptions = pastBigBounties.map((bounty) => ({
    value: bounty.title,
    label: bounty.title,
  }));

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

      {/* Custom Dropdown to Select a Bounty */}
      <motion.div
        className="mb-6 w-80 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Select
          options={bountyOptions}
          onChange={(selectedOption) =>
            setSelectedBounty(
              pastBigBounties.find((bounty) => bounty.title === selectedOption.value)
            )
          }
          placeholder="-- Select a Bounty --"
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "var(--bg-medium)",
              borderColor: "var(--btn-primary)",
              color: "var(--text-primary)",
              fontSize: "1rem",
              fontWeight: "bold",
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "var(--bg-dark)",
              color: "var(--text-primary)",
            }),
            option: (base, { isFocused }) => ({
              ...base,
              backgroundColor: isFocused ? "var(--bg-light)" : "var(--bg-dark)",
              color: "var(--text-primary)",
              cursor: "pointer",
            }),
            singleValue: (base) => ({
              ...base,
              color: "var(--text-primary)",
            }),
          }}
        />
      </motion.div>

      {/* Display Podium for Top 3 */}
      {selectedBounty && (
        <motion.div
          className="flex justify-center items-end mt-10 space-x-6 w-full max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Podium Positions */}
          {["2nd Place", "1st Place", "3rd Place"].map((place, index) => {
            const colors = ["var(--bg-medium)", "var(--btn-primary)", "var(--bg-medium)"];
            const heights = ["120px", "160px", "100px"];
            const emojis = ["🥈", "🥇", "🥉"];

            return (
              <div key={index} className="flex flex-col items-center">
                <span className="text-4xl mb-2">{emojis[index]}</span>
                <motion.div
                  className="w-32 md:w-40 flex flex-col items-center rounded-lg shadow-lg border-4 border-btn-primary"
                  style={{
                    backgroundColor: colors[index],
                    height: heights[index],
                  }}
                >
                  {/* Player Name at Top */}
                  <div className="w-full py-2 bg-bg-light text-center text-lg font-bold">
                    {selectedBounty.top3[index]?.name}
                  </div>
                  {/* Podium Label at Bottom */}
                  <div className="flex-grow flex items-end justify-center w-full bg-bg-dark py-2 rounded-b-lg text-center text-sm font-semibold">
                    {place}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
};

export default WallOfFame;