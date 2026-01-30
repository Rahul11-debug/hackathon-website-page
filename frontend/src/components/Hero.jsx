import React from 'react';

const Hero = ({ onRegisterClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-cyan-950 opacity-50" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px] opacity-20 animate-pulse" />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-20 animate-pulse" 
        style={{ animationDelay: '1s' }} 
      />

      <div className="relative z-10 text-center max-w-5xl">
        <div className="hero-title text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          NEXUS 2026
        </div>
        <div className="hero-title text-2xl md:text-4xl font-light mb-4 text-cyan-300">
          WHERE INNOVATION MEETS REALITY
        </div>
        <p className="hero-subtitle text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Join the ultimate tech fest. 48 hours of innovation, collaboration, and cutting-edge technology.
        </p>
        <button 
          onClick={onRegisterClick}
          className="hero-cta px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:shadow-[0_0_50px_rgba(0,255,255,0.8)]"
        >
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
