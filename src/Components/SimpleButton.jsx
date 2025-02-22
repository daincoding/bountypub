import React from "react";

const SimpleButton = ({ label, onClick }) => {
  return (
    <button
      className="btn btn-small"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SimpleButton;