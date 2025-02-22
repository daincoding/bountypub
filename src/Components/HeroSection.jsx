import React from "react";
import Logo from "../assets/images/logo_bountypub.png"; 

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-bg-dark text-text-primary px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
        WELCOME TRAVELERS TO THE BOUNTY PUB
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Join the challenge runs, conquer bounties, and make your mark!
        </p>
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="Bounty Pub"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;