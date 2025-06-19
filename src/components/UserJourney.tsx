
import React from 'react';
import { Card } from '@/components/ui/card';

const UserJourney = () => {
  const journeySteps = [
    {
      title: 'Space Cadet',
      description: 'Start your journey by unlocking your first planet - Mercury!',
      visual: '🪐',
      level: 'Level 1',
      color: 'from-gray-400 to-gray-600'
    },
    {
      title: 'Planet Explorer',
      description: 'Learn about Mars geology and earn your first exploration badge',
      visual: '🔴',
      level: 'Level 5',
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'Quiz Master',
      description: 'Ace the "Black Holes & Gravity" quiz with a perfect score!',
      visual: '🕳️',
      level: 'Level 10',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'AstroBot Friend',
      description: 'Chat with AstroBot about the mysteries of dark matter',
      visual: '🤖',
      level: 'Level 15',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      title: 'Cosmic Commander',
      description: 'Unlock the entire galaxy and become a space science expert!',
      visual: '👨‍🚀',
      level: 'Level 25',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Your Cosmic Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow Alex's path from Space Cadet to Cosmic Commander. Your adventure awaits!
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-yellow-500 hidden md:block"></div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold mr-4`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <span className="text-sm text-cyan-400 font-semibold">{step.level}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </Card>
                </div>

                {/* Visual Element */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-16 h-16 bg-slate-800 border-2 border-purple-500 rounded-full flex items-center justify-center text-3xl hover:animate-spin">
                    {step.visual}
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400">25</div>
            <div className="text-gray-300">Levels</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">50+</div>
            <div className="text-gray-300">Badges</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">100+</div>
            <div className="text-gray-300">Quizzes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">∞</div>
            <div className="text-gray-300">Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;
