import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { FaSync } from "react-icons/fa";

const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT15ubfQ-hkr4d7d_TkNnqztjl5BfXAfJWb7Zx2I-iumZ6eBdUgLtFW-ICn2GcogGnr5eESRB9LtQFx/pub?gid=227640390&single=true&output=csv";

const LeaderboardRandomizerLeague = () => {
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
    const formattedData = data
      .map((row) => ({
        Hunter: row["What is your Discord handle? (Not Nickname)"]?.trim(),
        Video: row["Please provide your YT video or Twitch highlight here"]?.trim(),
        IGT: convertTimeToSeconds(row["What was your IGT?"]?.trim()),
        IGTFormatted: row["What was your IGT?"]?.trim(),
      }))
      .filter((row) => row.Hunter && row.IGT !== Infinity)
      .sort((a, b) => a.IGT - b.IGT);

    return formattedData;
  };

  const convertTimeToSeconds = (timeString) => {
    if (!timeString) return Infinity;
    const timeParts = timeString.split(":").reverse();
    let seconds = 0;
    for (let i = 0; i < timeParts.length; i++) {
      seconds += parseInt(timeParts[i], 10) * Math.pow(60, i);
    }
    return seconds;
  };

  const getMedalEmoji = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  return (
    <div className="bg-bg-dark p-4 rounded-md h-full overflow-hidden relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">League: Any% Randomizer</h3>

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
                <th className="p-2 border-b border-btn-primary">Place</th>
                <th className="p-2 border-b border-btn-primary">Hunter</th>
                <th className="p-2 border-b border-btn-primary">Video</th>
                <th className="p-2 border-b border-btn-primary">Time</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((row, index) => (
                <tr key={index} className="hover:bg-bg-medium">
                  <td className="p-2">{getMedalEmoji(index)}</td>
                  <td className="p-2">{row.Hunter}</td>
                  <td className="p-2">
                    {row.Video && row.Video.startsWith("http") ? (
                      <a
                        href={row.Video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-btn-primary underline break-all"
                      >
                        Watch Run
                      </a>
                    ) : (
                      "No Video"
                    )}
                  </td>
                  <td className="p-2">{row.IGTFormatted}</td>
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

export default LeaderboardRandomizerLeague;
