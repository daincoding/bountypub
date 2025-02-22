import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { FaSync } from "react-icons/fa"; // Importing a refresh icon

const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEzNRqk49N_9-lthR7kYmpuZoNO43NbXyCo0yvg9qRIkJlYiEzwIlVE8OS2Y6Nk7wfsWeehWldlTgP/pub?gid=414516188&output=csv";

const LeaderboardsSmallBounty = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(GOOGLE_SHEET_CSV_URL);
      const csvData = await response.text();

      // Parse CSV data using PapaParse
      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const sortedData = sortLeaderboardData(result.data);
          setLeaderboardData(sortedData);
        },
      });
    } catch (error) {
      console.error("Failed to fetch Google Sheet data:", error);
    }
    setIsLoading(false);
  };

  const sortLeaderboardData = (data) => {
    return data.sort((a, b) => {
      const dateA = new Date(a.Timestamp);
      const dateB = new Date(b.Timestamp);

      // Sort by Timestamp (Descending) - latest submissions first
      return dateB - dateA;
    });
  };

  return (
    <div className="bg-bg-dark p-4 rounded-md h-full overflow-hidden relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Successfull Hunters</h3>

        {/* Manual Refresh Button */}
        <button 
          onClick={fetchLeaderboardData} 
          className="text-btn-primary hover:text-white transition-colors"
          title="Refresh Leaderboard"
          disabled={isLoading}
        >
          <FaSync className={`text-2xl ${isLoading ? "animate-spin" : ""}`} />
        </button>
      </div>
      
      {leaderboardData.length > 0 ? (
        <div className="overflow-x-auto overflow-y-auto max-h-full h-full">
          <table className="w-full border-collapse min-w-[500px]">
            <thead className="sticky top-0 bg-bg-dark">
              <tr className="text-left">
                <th className="p-2 border-b border-btn-primary">Timestamp</th>
                <th className="p-2 border-b border-btn-primary">Hunter</th>
                <th className="p-2 border-b border-btn-primary">Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((row, index) => (
                <tr key={index} className="hover:bg-bg-medium">
                  <td className="p-2">{row.Timestamp}</td>
                  <td className="p-2">{row["What is your Discord handle? (Not Nickname)"]}</td>
                  <td className="p-2">{row["Please provide the point total you earned from the Reward Breakdown above:"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading leaderboard data...</p>
      )}
    </div>
  );
};

export default LeaderboardsSmallBounty;