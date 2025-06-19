
import React from 'react';
import { Card } from '@/components/ui/card';

const FeaturesOverview = () => {
  const features = [
    {
      icon: '🌠',
      title: 'Stellar Map',
      description: 'Interactive galaxy map with unlockable modules and cosmic territories to explore',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: '🚀',
      title: 'Simulation Labs',
      description: 'Simulate rocket launches, planetary orbits, and zero gravity experiments',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: '🧠',
      title: 'Quiz Center',
      description: 'Test your space knowledge with adaptive quizzes and level up your expertise',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: '🤖',
      title: 'AstroBot',
      description: 'Ask your cosmic questions to our AI assistant, powered by advanced GPT technology',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: '📈',
      title: 'Astronaut Profile',
      description: 'Track badges, progress, and completed missions in your personal space dashboard',
      gradient: 'from-pink-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mission Control Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need for an epic space learning adventure, all in one cosmic platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group relative overflow-hidden">
              {/* Glowing Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:animate-bounce">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Glowing Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} opacity-70`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            🚀 Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
