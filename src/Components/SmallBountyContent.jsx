import React from "react";
import LeaderboardsSmallBounty from "./LeaderboardsSmallBounty";
import { motion, AnimatePresence } from "framer-motion";

const SmallBountyContent = () => {
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
              Using a weapon that starts with 'A', kill bosses that start with the letters 'F', 2 'O's, and 'L'  in order! see rules below
              </p>

              <h3 className="text-2xl font-bold mb-4">📜 General Info</h3>
              <ul className="space-y-2">
                <li>📆 You will have 1 week to complete the bountie</li>
                <li>
                  📫 Submission deadline is: Saturday, April 5 at 12pm EST
                </li>
                <li>❓ If you have any questions, please let us know</li>
              </ul>
            </div>

            {/* Action Buttons with Links */}
            <div className="flex flex-col space-y-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSehmWQ_8ocNr535l2WzE2szK8PI3Q6Ex2s6x9jYoTCcR0QZnQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-btn-primary text-center py-2 rounded-lg text-white"
              >
                Rules & Submission
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
            <h3 className="text-2xl font-bold mb-2">Hunterboard</h3>
            <LeaderboardsSmallBounty />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SmallBountyContent;