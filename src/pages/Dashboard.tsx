
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import GalaxyMap from '@/components/GalaxyMap';
import UserProfile from '@/components/UserProfile';
import MissionCenter from '@/components/MissionCenter';
import BadgeCollection from '@/components/BadgeCollection';

const Dashboard = () => {
  const { user, signOut } = useAuth();

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
        <div className="flex items-center space-x-4">
          <div className="text-3xl">🚀</div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            CosmoQuest Dashboard
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Welcome, {user?.email}</span>
          <Button
            onClick={signOut}
            className="bg-slate-700/50 hover:bg-slate-600/50 border border-purple-500/30"
          >
            Sign Out
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 pb-12 relative z-10">
        {/* User Profile Section */}
        <UserProfile />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Galaxy Map */}
          <GalaxyMap />
          
          {/* Mission Center */}
          <MissionCenter />
        </div>

        {/* Badge Collection */}
        <BadgeCollection />
      </div>
    </div>
  );
};

export default Dashboard;
