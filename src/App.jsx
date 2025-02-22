import React from "react";
import "./index.css";
import HeroSection from "./Components/HeroSection";
import BountyBoard from "./Components/BountyBoard";

const App = () => {
  return (
    <div className="bg-bg-dark min-h-screen">
      <HeroSection />
      <BountyBoard />
    </div>
  );
};

export default App;