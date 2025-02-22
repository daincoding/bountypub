import React from "react";
import Logo from "../assets/images/logo_bountypub.png"; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-dark text-text-primary p-6 border-t border-btn-primary">
      <div className="flex flex-col items-center text-center space-y-4">
        
        {/* Hosted By Text */}
        <p className="text-sm md:text-base">
          BountyPub hosted by 
          <a 
            href="https://twitch.tv/zoodle" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-btn-primary hover:underline mx-1"
          >
            Zoodle
          </a>
          and 
          <a 
            href="https://www.twitch.tv/nuclearpastatom" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-btn-primary hover:underline mx-1"
          >
            NPT
          </a>
        </p>

        {/* Clickable Logo - Scroll to Top */}
        <img 
          src={Logo} 
          alt="Bounty Pub Logo" 
          className="w-10 h-10 cursor-pointer"
          onClick={scrollToTop}
        />

        {/* Created By Text */}
        <p className="text-sm md:text-base">
          Website created with <span role="img" aria-label="heart">❤️</span> by 
          <a 
            href="https://twitch.tv/dain_sounds" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-btn-primary hover:underline ml-1"
          >
            dain.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;