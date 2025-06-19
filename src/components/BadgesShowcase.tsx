
import React from 'react';
import { Card } from '@/components/ui/card';

const BadgesShowcase = () => {
  const badges = [
    {
      name: 'Moon Explorer',
      icon: '🌙',
      description: 'Complete all lunar mission modules',
      rarity: 'Common',
      gradient: 'from-gray-400 to-gray-600',
      glowColor: 'shadow-gray-400/25'
    },
    {
      name: 'Gravity Genius',
      icon: '🌌',
      description: 'Master gravitational forces and orbital mechanics',
      rarity: 'Rare',
      gradient: 'from-purple-400 to-purple-600',
      glowColor: 'shadow-purple-400/25'
    },
    {
      name: 'Rocket Rider',
      icon: '🚀',
      description: 'Successfully launch 10 rocket simulations',
      rarity: 'Epic',
      gradient: 'from-red-400 to-orange-600',
      glowColor: 'shadow-orange-400/25'
    },
    {
      name: 'Black Hole Scholar',
      icon: '🕳️',
      description: 'Understand the mysteries of black holes and spacetime',
      rarity: 'Legendary',
      gradient: 'from-purple-600 to-black',
      glowColor: 'shadow-purple-600/25'
    },
    {
      name: 'Mars Pioneer',
      icon: '🔴',
      description: 'Explore the Red Planet and plan a Mars mission',
      rarity: 'Epic',
      gradient: 'from-red-500 to-red-700',
      glowColor: 'shadow-red-500/25'
    },
    {
      name: 'Cosmic Commander',
      icon: '👨‍🚀',
      description: 'Achieve the highest rank in space exploration',
      rarity: 'Mythic',
      gradient: 'from-yellow-400 to-yellow-600',
      glowColor: 'shadow-yellow-400/25'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-400';
      case 'Rare': return 'text-blue-400';
      case 'Epic': return 'text-purple-400';
      case 'Legendary': return 'text-orange-400';
      case 'Mythic': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Astronaut Badges & Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collect exclusive badges as you progress through your cosmic journey. Each badge represents mastery of space concepts!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <Card key={index} className={`bg-slate-800/50 border-purple-500/30 backdrop-blur-sm p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg ${badge.glowColor} group relative overflow-hidden`}>
              {/* Glowing Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${badge.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center">
                {/* Badge Icon */}
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${badge.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:animate-pulse`}>
                  {badge.icon}
                </div>

                {/* Badge Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {badge.name}
                </h3>

                {/* Rarity */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getRarityColor(badge.rarity)} bg-slate-700/50`}>
                  {badge.rarity}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {badge.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 w-full bg-slate-700 rounded-full h-2">
                  <div className={`bg-gradient-to-r ${badge.gradient} h-2 rounded-full transition-all duration-1000 group-hover:w-full`} style={{width: `${Math.random() * 100}%`}}></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Badge Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400">50+</div>
            <div className="text-gray-300">Total Badges</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">5</div>
            <div className="text-gray-300">Rarity Levels</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400">∞</div>
            <div className="text-gray-300">Achievements</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">100%</div>
            <div className="text-gray-300">Epic Fun</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
            🏆 Start Earning Badges
          </button>
        </div>
      </div>
    </section>
  );
};

export default BadgesShowcase;
