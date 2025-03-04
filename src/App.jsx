import React from "react";
import "./index.css";
import HeroSection from "./Components/HeroSection";
import BountyBoard from "./Components/BountyBoard";
import LeaderboardOverview from "./Components/LeaderboardOverview";
import Footer from "./Components/Footer";
import WallOfFame from "./Components/WallOfFame";

const App = () => {
  return (
    <div className="bg-bg-dark min-h-screen">
      <HeroSection />
      <BountyBoard />
      <LeaderboardOverview />
      <Footer />
    </div>
  );
};

export default App;