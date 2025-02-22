import React, { useState } from "react";
import BigBountyButton from "./BigBountyButton";
import SmallBountyButton from "./SmallBountyButton";
import SimpleButton from "./SimpleButton";
import BigBountyContent from "./BigBountyContent";
import SmallBountyContent from "./SmallBountyContent";
import { FaArrowUp } from "react-icons/fa"; // Importing an upward arrow icon

const BountyBoard = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleJoinPubClick = () => {
    window.open("https://discord.gg/45wubE8bBH", "_blank");
  };

  return (
    <section
      id="bounty-board"
      className="flex flex-col items-center min-h-screen bg-bg-dark text-text-primary px-4 pt-10"
    >
      {/* Title at the Top */}
      <h2 className="text-4xl md:text-6xl font-bold mb-8 flex items-center space-x-4">
        <span role="img" aria-label="scroll">📜</span>
        <span>Bounty Board</span>
        <span role="img" aria-label="crossed-swords">⚔️</span>
      </h2>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <BigBountyButton
          label="Big Bounty: 1 Shot Bosses"
          onClick={() => setActiveSection("big-bounty")}
        />
        <SmallBountyButton
          label="Small Bounty: Starting Class Only Permadeath"
          onClick={() => setActiveSection("small-bounty")}
        />
        <SimpleButton
          label="Past Bounties & Rules: Join The Pub!"
          onClick={handleJoinPubClick}
        />
      </div>

      {/* Animated Arrow and "CHOOSE A BOUNTY" Message */}
      {!activeSection && (
        <div className="flex flex-col items-center mt-32">
          <FaArrowUp className="text-4xl text-btn-primary animate-bounce mb-4" />
          <h3 className="text-3xl md:text-4xl font-semibold flex items-center space-x-2">
            <span role="img" aria-label="treasure">🪙</span>
            <span>CHOOSE A BOUNTY</span>
            <span role="img" aria-label="treasure">🪙</span>
          </h3>
        </div>
      )}

      {/* Display Content Based on Active Section */}
      <div className="w-full max-w-6xl mt-10">
        {activeSection === "big-bounty" && <BigBountyContent />}
        {activeSection === "small-bounty" && <SmallBountyContent />}
      </div>
    </section>
  );
};

export default BountyBoard;