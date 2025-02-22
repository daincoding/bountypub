import React from "react";
import Logo from "../assets/images/logo_bountypub.png"; 
import { FaArrowDown } from "react-icons/fa"; 

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-bg-dark text-text-primary px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome Travelers to the <span className="inline-flex items-center">
          🍻 <span className="px-2">Bounty Pub</span> 🍻
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Join the challenge runs, conquer bounties, and make your mark!
        </p>
        <div className="flex justify-center mb-8">
          <img
            src={Logo}
            alt="Bounty Pub"
            className="w-full max-w-md"
          />
        </div>
        <p className="text-2xl mb-4">Enter</p>
        <div className="flex justify-center animate-bounce mb-6">
          <FaArrowDown className="text-4xl text-btn-primary" />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-6 mt-6">
          {/* Leaderboard Button */}
          <button
            className="border-2 border-btn-primary text-white py-2 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 hover:bg-btn-primary cursor-pointer"
            onClick={() => document.getElementById('leaderboard').scrollIntoView({ behavior: 'smooth' })}
          >
            Leaderboard
          </button>

          {/* Bounty Board Button */}
          <button
            className="border-2 border-btn-primary text-white py-3 px-8 rounded-lg text-xl font-bold transition-transform transform hover:scale-105 hover:bg-btn-primary cursor-pointer"
            onClick={() => document.getElementById('bounty-board').scrollIntoView({ behavior: 'smooth' })}
          >
            Bounty Board
          </button>

          {/* Join The Pub Button */}
          <button
            className="border-2 border-btn-primary text-white py-2 px-6 rounded-lg text-lg transition-transform transform hover:scale-105 hover:bg-btn-primary cursor-pointer"
            onClick={() => document.getElementById('join-the-pub').scrollIntoView({ behavior: 'smooth' })}
          >
            Join The Pub!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;