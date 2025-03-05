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
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 flex items-center space-x-3 text-text-accent text-center"
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
        className="mb-6 w-full max-w-xs sm:max-w-md mt-6"
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
          className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-6 w-full max-w-3xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 1st Place - Centered */}
          <div className="flex flex-col items-center order-0">
            <span className="text-5xl mb-2">🥇</span>
            <motion.div
              className="w-32 sm:w-40 md:w-48 flex flex-col items-center rounded-lg shadow-xl border-4 border-text-accent"
              style={{
                backgroundColor: "var(--btn-primary)",
                height: "160px",
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

          {/* 2nd Place - Left (Stacks under 1st on mobile) */}
          <div className="flex flex-col items-center order-1 sm:order-none">
            <span className="text-4xl mb-2">🥈</span>
            <motion.div
              className="w-28 sm:w-32 md:w-40 flex flex-col items-center rounded-lg shadow-lg border-4 border-btn-primary"
              style={{
                backgroundColor: "var(--bg-medium)",
                height: "120px",
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

          {/* 3rd Place - Right (Stacks under 1st on mobile) */}
          <div className="flex flex-col items-center order-2 sm:order-none">
            <span className="text-4xl mb-2">🥉</span>
            <motion.div
              className="w-28 sm:w-32 md:w-40 flex flex-col items-center rounded-lg shadow-lg border-4 border-btn-primary"
              style={{
                backgroundColor: "var(--bg-medium)",
                height: "100px",
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