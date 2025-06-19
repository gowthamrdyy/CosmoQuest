
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

const ProgressLog = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [missions, setMissions] = useState<any[]>([]);
  const [badges, setBadges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;

    // Fetch profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    // Fetch completed missions
    const { data: missionData } = await supabase
      .from('user_missions')
      .select(`
        *,
        missions (title, planet, difficulty)
      `)
      .eq('user_id', user.id)
      .not('completed_at', 'is', null);

    // Fetch earned badges
    const { data: badgeData } = await supabase
      .from('user_badges')
      .select(`
        *,
        badges (name, description, icon, rarity)
      `)
      .eq('user_id', user.id);

    setProfile(profileData);
    setMissions(missionData || []);
    setBadges(badgeData || []);
    setLoading(false);
  };

  const getProgressPercentage = () => {
    const totalMissions = 24; // Total available missions
    const completedMissions = profile?.missions_completed || 0;
    return Math.round((completedMissions / totalMissions) * 100);
  };

  const getAstronautLevelProgress = () => {
    const levels = ['Space Cadet', 'Astronaut Trainee', 'Space Explorer', 'Cosmic Commander', 'Galactic Master'];
    const currentLevel = profile?.astronaut_level || 'Space Cadet';
    return levels.indexOf(currentLevel) + 1;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-xl">🚀 Loading your cosmic journey...</div>
      </div>
    );
  }

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
              📊 Progress Log
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Track your cosmic journey and achievements
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            🌟 Overall Progress
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl text-cyan-400 font-bold">{getProgressPercentage()}%</div>
              <div className="text-gray-300">Missions Complete</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-purple-400 font-bold">{profile?.missions_completed || 0}</div>
              <div className="text-gray-300">Missions Done</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-yellow-400 font-bold">{profile?.total_badges || 0}</div>
              <div className="text-gray-300">Badges Earned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-400 font-bold">{getAstronautLevelProgress()}</div>
              <div className="text-gray-300">Level Progress</div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Missions */}
          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
            <h3 className="text-xl font-bold text-white mb-4">🎯 Completed Missions</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {missions.length > 0 ? missions.map((mission, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-purple-500/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-white">{mission.missions?.title}</h4>
                      <p className="text-sm text-gray-300">{mission.missions?.planet}</p>
                    </div>
                    <div className="text-right">
                      <div className={`px-2 py-1 rounded text-xs ${
                        mission.missions?.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        mission.missions?.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {mission.missions?.difficulty}
                      </div>
                      {mission.score && (
                        <div className="text-cyan-400 text-sm mt-1">Score: {mission.score}%</div>
                      )}
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-center text-gray-400 py-8">
                  <div className="text-4xl mb-2">🎯</div>
                  <p>No missions completed yet!</p>
                  <Link to="/explore-map">
                    <Button className="mt-3 bg-gradient-to-r from-cyan-500 to-purple-600">
                      Start Your First Mission
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </Card>

          {/* Badges Collection */}
          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
            <h3 className="text-xl font-bold text-white mb-4">🏆 Earned Badges</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {badges.length > 0 ? badges.map((badge, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-purple-500/20">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{badge.badges?.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{badge.badges?.name}</h4>
                      <p className="text-sm text-gray-300">{badge.badges?.description}</p>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs ${
                      badge.badges?.rarity === 'Common' ? 'bg-gray-500/20 text-gray-400' :
                      badge.badges?.rarity === 'Rare' ? 'bg-blue-500/20 text-blue-400' :
                      badge.badges?.rarity === 'Epic' ? 'bg-purple-500/20 text-purple-400' :
                      badge.badges?.rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {badge.badges?.rarity}
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-center text-gray-400 py-8">
                  <div className="text-4xl mb-2">🏆</div>
                  <p>No badges earned yet!</p>
                  <Link to="/quiz-center">
                    <Button className="mt-3 bg-gradient-to-r from-cyan-500 to-purple-600">
                      Start Earning Badges
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Achievement Timeline */}
        <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 mt-8">
          <h3 className="text-xl font-bold text-white mb-4">🚀 Your Journey Timeline</h3>
          <div className="text-center text-gray-400 py-8">
            <div className="text-4xl mb-2">📈</div>
            <p>Your space exploration timeline will appear here as you complete more missions!</p>
            <div className="mt-4 space-x-4">
              <Link to="/explore-map">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600">
                  Explore Galaxy
                </Button>
              </Link>
              <Link to="/quiz-center">
                <Button variant="outline" className="border-purple-500 text-purple-300">
                  Take Quiz
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgressLog;
