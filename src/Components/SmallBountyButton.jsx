import React from "react";

const SmallBountyButton = ({ label = "Small Bounty: XXX", onClick }) => {
  return (
    <button
      className="btn btn-small"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SmallBountyButton;