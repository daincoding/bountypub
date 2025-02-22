import React from "react";

const SmallBountyContent = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap w-full h-full p-4 gap-4">
      {/* Rules Box (30%) */}
      <div className="w-full md:w-1/3 bg-bg-medium p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-2">Rules</h3>
        <p>(Rules for the Small Bounty go here)</p>
      </div>

      {/* Leaderboard Box (70%) */}
      <div className="w-full md:w-2/3 bg-bg-light p-4 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-2">Leaderboard</h3>
        <p>(Leaderboard for the Small Bounty will appear here)</p>
      </div>
    </div>
  );
};

export default SmallBountyContent;