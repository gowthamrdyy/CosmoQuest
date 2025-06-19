
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      {/* Floating Spacecraft */}
      <div className="absolute top-32 right-10 animate-bounce">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-80 blur-sm"></div>
      </div>
      
      <div className="absolute top-1/4 left-10 animate-pulse">
        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-70"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Countdown Stats */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <span className="text-cyan-400 font-semibold text-sm">🚀 12,847 Explorers Launched</span>
          </div>
        </div>

        {/* Main Headlines */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Embark on a Journey
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Through the Cosmos
          </span>
          <span className="inline-block ml-4 animate-bounce">🚀</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          <em>Learn. Explore. Conquer the stars — one mission at a time.</em>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            🚀 Start Your Cosmic Quest
          </Button>
          <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-8 py-4 rounded-full text-lg transition-all duration-300">
            Watch Demo
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
