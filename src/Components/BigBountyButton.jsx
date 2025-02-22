import React from "react";

const BigBountyButton = ({ label = "Big Bounty: XXX", onClick }) => {
  return (
    <button
      className="btn btn-large"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default BigBountyButton;