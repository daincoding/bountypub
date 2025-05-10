import React from "react";
import LeaderboardRandomizerLeague from "./LeaderboardRandomizerLeague";
import { motion, AnimatePresence } from "framer-motion";

const RandomizerLeagueContent = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-wrap md:flex-nowrap w-full h-full p-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Rules Box (40%) */}
        <div className="w-full md:w-2/5 p-0 rounded-lg shadow-md border-4 border-btn-primary max-h-[60vh]">
          <div
            className="p-4 h-full flex flex-col justify-between rounded-md"
            style={{
              backgroundColor: "var(--bg-dark)",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* Scrollable Rules Content */}
            <div className="overflow-y-auto flex-grow mb-4 pr-2">
              <h3 className="text-2xl font-bold mt-6 mb-4">⚔️ Objective</h3>
              <p className="mb-4">
              Complete the Any% Randomizer as quickly as you can! See rules below
              </p>

              <h3 className="text-2xl font-bold mb-4">📜 General Info</h3>
              <ul className="space-y-2">
                <li>📆 You will have the whole month to submit your best time</li>
                <li>📫 Submission deadline is: Wednesday, May 28 at 12pm EST</li>
                <li>🏆 Fastest times will rise to the top!</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-2">
              <a
                href="https://forms.gle/XTd4baYLQawTduB19"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-btn-primary text-center py-2 rounded-lg text-white"
              >
                Submit Your League Run
              </a>
              <a
                href="https://discord.gg/45wubE8bBH"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-btn-hover text-center py-2 rounded-lg text-white"
              >
                Join the Pub Discussion
              </a>
            </div>
          </div>
        </div>

        {/* Leaderboard Box (60%) */}
        <div className="w-full md:w-3/5 p-0 rounded-lg shadow-md border-4 border-btn-primary max-h-[60vh]">
          <div
            className="p-4 h-full flex flex-col justify-center rounded-md"
            style={{
              backgroundColor: "var(--bg-medium)",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            <h3 className="text-2xl font-bold mb-2">League Leaderboard</h3>
            <LeaderboardRandomizerLeague />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RandomizerLeagueContent;