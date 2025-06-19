
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GalaxyMap = () => {
  const planets = [
    { name: 'Mercury', icon: '☿️', position: 'top-20 left-20', unlocked: true },
    { name: 'Venus', icon: '♀️', position: 'top-32 left-40', unlocked: true },
    { name: 'Earth', icon: '🌍', position: 'top-40 left-60', unlocked: true },
    { name: 'Mars', icon: '🔴', position: 'top-28 right-40', unlocked: true },
    { name: 'Jupiter', icon: '🪐', position: 'bottom-40 left-20', unlocked: false },
    { name: 'Saturn', icon: '🪐', position: 'bottom-32 left-60', unlocked: false },
    { name: 'Uranus', icon: '🌀', position: 'bottom-20 right-20', unlocked: false },
    { name: 'Neptune', icon: '🔵', position: 'bottom-16 right-40', unlocked: false },
  ];

  return (
    <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          🌌 Galaxy Map
        </span>
      </h2>
      
      <div className="relative h-80 bg-gradient-radial from-purple-900/20 to-slate-900/20 rounded-lg overflow-hidden">
        {/* Central Star */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-4xl animate-pulse">⭐</div>
        </div>

        {/* Planets */}
        {planets.map((planet, index) => (
          <div key={planet.name} className={`absolute ${planet.position}`}>
            <Button
              className={`w-12 h-12 rounded-full text-2xl p-0 ${
                planet.unlocked
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 border-2 border-cyan-400/50'
                  : 'bg-slate-700/50 border-2 border-slate-600 opacity-50 cursor-not-allowed'
              } transition-all duration-300 hover:scale-110`}
              disabled={!planet.unlocked}
            >
              {planet.icon}
            </Button>
            <div className="text-xs text-center mt-1 text-white">
              {planet.name}
            </div>
          </div>
        ))}

        {/* Orbital paths */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-400/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-purple-400/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-400/10 rounded-full"></div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-300">
          Click on unlocked planets to start missions! 🚀
        </p>
      </div>
    </Card>
  );
};

export default GalaxyMap;
