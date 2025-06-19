
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, } from '@/components/ui/card';
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
      
      <Navigation />
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
