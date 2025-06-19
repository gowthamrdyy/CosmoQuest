
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeaturesOverview from '@/components/FeaturesOverview';
import UserJourney from '@/components/UserJourney';
import Testimonials from '@/components/Testimonials';
import BadgesShowcase from '@/components/BadgesShowcase';
import TechnologySection from '@/components/TechnologySection';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      {/* Navigation with Get Started button */}
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl">🚀</div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            CosmoQuest
          </span>
        </div>
        <Link to="/auth">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            🚀 Start Your Journey
          </Button>
        </Link>
      </nav>
      
      <HeroSection />
      <HowItWorks />
      <FeaturesOverview />
      <UserJourney />
      <Testimonials />
      <BadgesShowcase />
      <TechnologySection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
