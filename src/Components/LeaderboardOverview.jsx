import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { FaSync } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEzNRqk49N_9-lthR7kYmpuZoNO43NbXyCo0yvg9qRIkJlYiEzwIlVE8OS2Y6Nk7wfsWeehWldlTgP/pub?gid=0&output=csv";

const LeaderboardOverview = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, leaderboardData]);

  const fetchLeaderboardData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(GOOGLE_SHEET_CSV_URL);
      const csvData = await response.text();

      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const sortedData = sortLeaderboardData(result.data);
          setLeaderboardData(sortedData);
          setFilteredData(sortedData);
        },
      });
    } catch (error) {
      console.error("Failed to fetch Google Sheet data:", error);
    }
    setIsLoading(false);
  };

  const sortLeaderboardData = (data) => {
    return data
      .map((row) => ({
        Hunter: row["Discord usernames"]?.trim(),
        Points: parseInt(row["Total Points"], 10) || 0,
      }))
      .sort((a, b) => b.Points - a.Points);
  };

  const handleSearch = () => {
    if (!searchTerm) {
      setFilteredData(leaderboardData);
      return;
    }

    const filtered = leaderboardData.filter((row) =>
      row.Hunter.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const getMedalEmoji = (place) => {
    if (place === 1) return "🥇";
    if (place === 2) return "🥈";
    if (place === 3) return "🥉";
    return `#${place}`;
  };

  return (
    <motion.div
  className="bg-bg-dark p-4 rounded-md max-h-[70vh] max-w-[50%] overflow-hidden relative border-4 border-btn-primary mx-auto"
  id="leaderboard"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold flex items-center space-x-2">
          <span role="img" aria-label="bow-and-arrow">
            🏹
          </span>
          <span>Best Hunters Leaderboard</span>
        </h3>

        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search for a Hunter..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-bg-light text-text-primary border border-btn-primary rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-btn-primary w-52"
          />
        </div>

        <button
          onClick={fetchLeaderboardData}
          className="text-btn-primary hover:text-white transition-colors cursor-pointer"
          title="Refresh Leaderboard"
          disabled={isLoading}
        >
          <FaSync className={`text-2xl ${isLoading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {filteredData.length > 0 ? (
        <div className="overflow-y-auto max-h-[50vh] border-t border-btn-primary">
          <table className="w-full border-collapse min-w-[400px]">
            <thead className="sticky top-0 bg-bg-dark z-10">
              <tr className="text-left">
                <th className="p-2 border-b border-btn-primary">Place</th>
                <th className="p-2 border-b border-btn-primary">Hunter</th>
                <th className="p-2 border-b border-btn-primary">Total Points</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filteredData.map((row, index) => {
                  const actualPlace =
                    leaderboardData.findIndex(
                      (data) => data.Hunter === row.Hunter
                    ) + 1;

                  return (
                    <motion.tr
                      key={row.Hunter}
                      className="hover:bg-bg-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <td className="p-2">{getMedalEmoji(actualPlace)}</td>
                      <td className="p-2">{row.Hunter}</td>
                      <td className="p-2">{row.Points}</td>
                    </motion.tr>
                  );
                })}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No hunters found...</p>
      )}
    </motion.div>
  );
};

export default LeaderboardOverview;