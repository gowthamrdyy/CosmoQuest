
import React from 'react';
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: '🪐',
      title: 'Choose Your Mission',
      description: 'Click planets in our interactive galaxy map to select your learning adventure',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      step: 2,
      icon: '🧠',
      title: 'Learn Space Topics',
      description: 'Discover black holes, galaxies, rockets, Mars missions and more through engaging content',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      step: 3,
      icon: '🏆',
      title: 'Earn Astronaut Badges',
      description: 'Complete quizzes and challenges to level up and unlock new cosmic territories',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your journey from Space Cadet to Cosmic Commander in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm p-8 text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group">
                {/* Step Number */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:animate-bounce">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </Card>

              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform -translate-y-1/2 z-10">
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
