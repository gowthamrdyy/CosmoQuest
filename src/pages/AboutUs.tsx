
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
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
              🌟 About CosmoQuest
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Embark on the ultimate space learning adventure with gamified education
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-8 mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">🚀 Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              CosmoQuest transforms space education into an engaging, interactive experience. 
              We believe that learning about the universe should be as exciting as the cosmos itself. 
              Through gamification, interactive simulations, and AI-powered assistance, we make 
              astronomy and space science accessible to everyone, from curious beginners to aspiring astronomers.
            </p>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 text-center">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Interactive Galaxy Map</h3>
            <p className="text-gray-300">
              Explore our solar system and beyond with an interactive map that unlocks as you progress
            </p>
          </Card>

          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 text-center">
            <div className="text-5xl mb-4">🧪</div>
            <h3 className="text-xl font-bold text-purple-400 mb-3">Simulation Labs</h3>
            <p className="text-gray-300">
              Experience space phenomena through realistic simulations and experiments
            </p>
          </Card>

          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 text-center">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Adaptive Quizzes</h3>
            <p className="text-gray-300">
              Test your knowledge with progressive difficulty levels from beginner to expert
            </p>
          </Card>

          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-green-400 mb-3">AstroBot AI</h3>
            <p className="text-gray-300">
              Get instant answers to your cosmic questions from our specialized AI assistant
            </p>
          </Card>

          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-orange-400 mb-3">Achievement System</h3>
            <p className="text-gray-300">
              Earn badges and level up your astronaut rank as you complete missions
            </p>
          </Card>

          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 text-center">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-pink-400 mb-3">Progress Tracking</h3>
            <p className="text-gray-300">
              Monitor your learning journey with detailed progress analytics
            </p>
          </Card>
        </div>

        {/* Creator Section */}
        <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-8 mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">👨‍💻 Meet the Creator</h2>
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">Gowtham</h3>
              <p className="text-lg text-gray-300 mb-6">
                Space enthusiast and developer passionate about making astronomy education 
                accessible and engaging for everyone. Follow the journey of CosmoQuest 
                and get updates on new features and space discoveries!
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://instagram.com/gowthamrdyy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  📷 @gowthamrdyy
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">📈 Platform Stats</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl text-cyan-400 font-bold mb-2">12,847+</div>
              <div className="text-gray-300">Space Explorers</div>
            </div>
            <div>
              <div className="text-4xl text-purple-400 font-bold mb-2">24</div>
              <div className="text-gray-300">Interactive Missions</div>
            </div>
            <div>
              <div className="text-4xl text-yellow-400 font-bold mb-2">8</div>
              <div className="text-gray-300">Planets to Explore</div>
            </div>
            <div>
              <div className="text-4xl text-green-400 font-bold mb-2">∞</div>
              <div className="text-gray-300">Cosmic Discoveries</div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/auth">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              🚀 Join the Cosmic Adventure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
