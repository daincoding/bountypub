import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { FaSync } from "react-icons/fa"; // Importing a refresh icon

const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEzNRqk49N_9-lthR7kYmpuZoNO43NbXyCo0yvg9qRIkJlYiEzwIlVE8OS2Y6Nk7wfsWeehWldlTgP/pub?output=csv";

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
    return data
      .map((row) => ({
        Hunter: row["What is your Discord handle? (Not Nickname)"]?.trim(),
        Points:
          row[
            "Please provide the point total you earned from the Reward Breakdown above:"
          ]?.trim(),
        Video: row["Please provide a YT upload/Twitch highlight of your run if you did it hitless"]?.trim(),
      }))
      .filter((row) => row.Hunter && row.Points) // Ensure valid entries
      .sort((a, b) => b.Points - a.Points); // Sort by highest points
  };

  return (
    <div className="bg-bg-dark p-4 rounded-md h-full overflow-hidden relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Successful Hunters</h3>

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
                <th className="p-2 border-b border-btn-primary">Hunter</th>
                <th className="p-2 border-b border-btn-primary">Points</th>
                <th className="p-2 border-b border-btn-primary">Video</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((row, index) => (
                <tr key={index} className="hover:bg-bg-medium">
                  <td className="p-2">{row.Hunter}</td>
                  <td className="p-2">{row.Points}</td>
                  <td className="p-2">
                    {row.Video ? (
                      <a
                        href={row.Video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-btn-primary hover:underline"
                      >
                        Watch Run
                      </a>
                    ) : (
                      "No Video"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg font-bold text-btn-primary mt-4">
          No entry so far! Be the first!
        </p>
      )}
    </div>
  );
};

export default LeaderboardsSmallBounty;