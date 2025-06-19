
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SimulationLabs = () => {
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);

  const simulations = [
    {
      id: 'rocket-launch',
      title: 'Rocket Launch Simulator',
      description: 'Experience the thrill of launching a rocket into space',
      icon: '🚀',
      difficulty: 'Beginner'
    },
    {
      id: 'orbital-mechanics',
      title: 'Orbital Mechanics Lab',
      description: 'Learn how planets and satellites move in space',
      icon: '🪐',
      difficulty: 'Intermediate'
    },
    {
      id: 'zero-gravity',
      title: 'Zero Gravity Experiments',
      description: 'Conduct experiments in zero gravity environment',
      icon: '🧪',
      difficulty: 'Advanced'
    },
    {
      id: 'solar-system',
      title: 'Solar System Builder',
      description: 'Create and customize your own solar system',
      icon: '⭐',
      difficulty: 'Intermediate'
    }
  ];

  const startSimulation = (id: string) => {
    setActiveSimulation(id);
    // Here you would typically load the actual simulation
    console.log(`Starting simulation: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-3xl">🚀</div>
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            CosmoQuest
          </span>
        </Link>
        <Link to="/dashboard">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
            Dashboard
          </Button>
        </Link>
      </header>

      <div className="container mx-auto px-6 pb-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🧪 Simulation Labs
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience space phenomena through interactive simulations. Learn by doing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {simulations.map((sim) => (
            <Card key={sim.id} className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 hover:bg-slate-700/50 transition-all duration-300 group">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:animate-bounce">{sim.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{sim.title}</h3>
                <p className="text-gray-300 mb-4">{sim.description}</p>
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    sim.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    sim.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {sim.difficulty}
                  </span>
                </div>
                <Button 
                  onClick={() => startSimulation(sim.id)}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 w-full"
                >
                  Start Simulation
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {activeSimulation && (
          <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm p-8 mt-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Simulation Started! 🎮
              </h3>
              <p className="text-gray-300 mb-4">
                Your {simulations.find(s => s.id === activeSimulation)?.title} is now running.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-8 mb-4">
                <div className="text-4xl mb-4">🚀</div>
                <p className="text-cyan-400">Simulation Interface Would Load Here</p>
                <p className="text-gray-400 text-sm mt-2">
                  This is a demo placeholder. Full simulation features coming soon!
                </p>
              </div>
              <Button 
                onClick={() => setActiveSimulation(null)}
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
              >
                Close Simulation
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SimulationLabs;
