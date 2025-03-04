import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const PAST_BOUNTY_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEzNRqk49N_9-lthR7kYmpuZoNO43NbXyCo0yvg9qRIkJlYiEzwIlVE8OS2Y6Nk7wfsWeehWldlTgP/pub?gid=123456&output=csv"; 

const WallOfFame = () => {
  const [category, setCategory] = useState("");
  const [bountyList, setBountyList] = useState([]);
  const [selectedBounty, setSelectedBounty] = useState("");
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    if (selectedBounty) {
      fetchLeaderboardData();
    }
  }, [selectedBounty]);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch(PAST_BOUNTY_CSV_URL);
      const csvData = await response.text();

      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const filteredData = result.data.filter(
            (row) => row.Bounty === selectedBounty
          );
          setLeaderboardData(filteredData);
        },
      });
    } catch (error) {
      console.error("Failed to fetch past bounty data:", error);
    }
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSelectedBounty("");
    if (value === "Big Bounty") {
      setBountyList(["1 Shot Bosses - February", "No Damage Any% - March"]);
    } else if (value === "Small Bounty") {
      setBountyList(["Permadeath Challenge - January", "Magic Only Run - April"]);
    }
  };

  return (
    <section className="flex flex-col items-center text-text-primary px-4 py-10">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 flex items-center space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaTrophy className="text-btn-primary" />
        <span>Wall of Fame</span>
        <FaTrophy className="text-btn-primary" />
      </motion.h2>

      {/* Dropdown Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Select Category */}
        <motion.select
          className="bg-bg-light text-text-primary border border-btn-primary rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-btn-primary"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <option value="">Select Category</option>
          <option value="Big Bounty">Big Bounty</option>
          <option value="Small Bounty">Small Bounty</option>
        </motion.select>

        {/* Select Specific Bounty */}
        {category && (
          <motion.select
            className="bg-bg-light text-text-primary border border-btn-primary rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-btn-primary"
            value={selectedBounty}
            onChange={(e) => setSelectedBounty(e.target.value)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <option value="">Select Bounty</option>
            {bountyList.map((bounty, index) => (
              <option key={index} value={bounty}>
                {bounty}
              </option>
            ))}
          </motion.select>
        )}
      </div>

      {/* Leaderboard */}
      {selectedBounty && leaderboardData.length > 0 && (
        <motion.div
          className="bg-bg-dark p-4 rounded-md max-w-3xl w-full border-4 border-btn-primary"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">{selectedBounty} Leaderboard</h3>
          <div className="overflow-y-auto max-h-[50vh]">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-bg-dark z-10">
                <tr className="text-left">
                  <th className="p-2 border-b border-btn-primary">Place</th>
                  <th className="p-2 border-b border-btn-primary">Hunter</th>
                  <th className="p-2 border-b border-btn-primary">Total Points</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((row, index) => (
                  <motion.tr
                    key={index}
                    className="hover:bg-bg-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <td className="p-2">#{index + 1}</td>
                    <td className="p-2">{row.Hunter}</td>
                    <td className="p-2">{row.Points}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default WallOfFame;