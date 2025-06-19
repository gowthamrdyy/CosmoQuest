
import React from 'react';
import { Card } from '@/components/ui/card';

const TechnologySection = () => {
  const technologies = [
    {
      name: 'React & TypeScript',
      description: 'Modern, type-safe frontend development',
      icon: '⚛️'
    },
    {
      name: 'Firebase Backend',
      description: 'Real-time database and authentication',
      icon: '🔥'
    },
    {
      name: 'Tailwind CSS',
      description: 'Beautiful, responsive design system',
      icon: '🎨'
    },
    {
      name: 'NASA Open Data',
      description: 'Real space missions and scientific data',
      icon: '🛰️'
    },
    {
      name: 'AI-Powered',
      description: 'GPT-driven AstroBot for personalized learning',
      icon: '🤖'
    },
    {
      name: 'Open Source',
      description: 'Community-driven development on GitHub',
      icon: '🌟'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Built with Cutting-Edge Technology
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            CosmoQuest leverages the latest web technologies and real space data to deliver an unparalleled learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-slate-800/30 border-green-500/30 backdrop-blur-sm p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 group">
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {tech.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Open Source CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 rounded-full border border-green-500/30 backdrop-blur-sm">
            <span className="text-green-400 font-semibold mr-2">🌟 Open Source on GitHub</span>
            <button className="text-white hover:text-green-300 transition-colors duration-300 font-medium">
              Contribute →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
