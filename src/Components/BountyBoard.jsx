import React, { useState } from "react";
import BigBountyButton from "./BigBountyButton";
import SmallBountyButton from "./SmallBountyButton";
import SimpleButton from "./SimpleButton";
import BigBountyContent from "./BigBountyContent";
import SmallBountyContent from "./SmallBountyContent";

const BountyBoard = () => {
  const [activeSection, setActiveSection] = useState(null);

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
      <div className="flex flex-wrap justify-center gap-4 mb-8">
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
          onClick={() => setActiveSection("past-bounties")}
        />
      </div>

      {/* Display Content Based on Active Section */}
      <div className="w-full max-w-6xl">
        {activeSection === "big-bounty" && <BigBountyContent />}
        {activeSection === "small-bounty" && <SmallBountyContent />}
      </div>
    </section>
  );
};

export default BountyBoard;