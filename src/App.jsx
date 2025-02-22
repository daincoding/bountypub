import React from "react";
import "./index.css";
import HeroSection from "./Components/HeroSection";
import BountyBoard from "./Components/BountyBoard";
import LeaderboardOverview from "./Components/LeaderboardOverview";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="bg-bg-dark min-h-screen">
      <HeroSection />
      <LeaderboardOverview />
      <BountyBoard />
      <Footer />
    </div>
  );
};

export default App;