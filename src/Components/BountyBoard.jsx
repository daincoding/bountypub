import React from "react";
import BigBountyButton from "./BigBountyButton";
import SmallBountyButton from "./SmallBountyButton";
import SimpleButton from "./SimpleButton";

const BountyBoard = () => {
  return (
    <section
      id="bounty-board"
      className="flex flex-col items-center h-screen bg-bg-dark text-text-primary px-4 pt-10"
    >
      {/* Title at the Top */}
      <h2 className="text-4xl md:text-6xl font-bold mb-8 flex items-center space-x-4">
        <span role="img" aria-label="scroll">📜</span>
        <span>Bounty Board</span>
        <span role="img" aria-label="crossed-swords">⚔️</span>
      </h2>

      {/* Navigation Buttons with Improved Spacing */}
      <div className="flex flex-wrap justify-center gap-4">
        <BigBountyButton label="Big Bounty: One Shot Bosses" />
        <SmallBountyButton label="Small Bounty: Starting Class Permadeath" />
        <SimpleButton label="Past Bounties" />
        <SimpleButton label="Rules" />
      </div>
    </section>
  );
};

export default BountyBoard;