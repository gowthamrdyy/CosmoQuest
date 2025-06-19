
import React from 'react';
import GalaxyMap from '@/components/GalaxyMap';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ExploreMap = () => {
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
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🗺️ Galactic Exploration Map
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Navigate through the cosmos and discover new worlds. Complete missions to unlock new planets!
          </p>
        </div>

        {/* Mission Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="text-xl font-bold text-cyan-400">8 Planets</h3>
            <p className="text-gray-300">Available to explore</p>
          </Card>
          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-xl font-bold text-purple-400">24 Missions</h3>
            <p className="text-gray-300">Across all planets</p>
          </Card>
          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="text-xl font-bold text-yellow-400">6 Badges</h3>
            <p className="text-gray-300">To collect</p>
          </Card>
        </div>

        {/* Galaxy Map */}
        <div className="max-w-4xl mx-auto">
          <GalaxyMap />
        </div>

        {/* Navigation */}
        <div className="text-center mt-8">
          <Link to="/missions">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 mr-4">
              View All Missions
            </Button>
          </Link>
          <Link to="/simulation-labs">
            <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/20">
              Simulation Labs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreMap;
