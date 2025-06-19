
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Floating Elements */}
        <div className="absolute -top-10 -left-5 animate-bounce delay-300">
          <div className="text-4xl">🛸</div>
        </div>
        <div className="absolute -top-5 -right-10 animate-bounce delay-700">
          <div className="text-3xl">⭐</div>
        </div>
        <div className="absolute top-1/2 -left-10 animate-pulse">
          <div className="text-2xl">🪐</div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your cosmic journey awaits.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Are you ready to launch?
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join thousands of space explorers and embark on the ultimate educational adventure through the cosmos. Your astronaut badge awaits!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
                🚀 Start Your Mission Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-8 py-6 rounded-full text-xl transition-all duration-300">
              🎮 Try Demo First
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 space-y-4">
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                Free to start
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                No downloads required
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-1">✓</span>
                Works on any device
              </div>
            </div>
            
            <div className="text-cyan-400 font-semibold">
              🌟 Join 12,847+ space explorers who have already launched their missions!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
