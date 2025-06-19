
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: string;
}

interface UserBadge {
  badge_id: string;
  earned_at: string;
  badges: Badge;
}

const BadgeCollection = () => {
  const { user } = useAuth();
  const [allBadges, setAllBadges] = useState<Badge[]>([]);
  const [userBadges, setUserBadges] = useState<UserBadge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBadges();
    if (user) {
      fetchUserBadges();
    }
  }, [user]);

  const fetchBadges = async () => {
    const { data, error } = await supabase
      .from('badges')
      .select('*')
      .order('rarity');

    if (error) {
      console.error('Error fetching badges:', error);
    } else {
      setAllBadges(data || []);
    }
  };

  const fetchUserBadges = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('user_badges')
      .select(`
        badge_id,
        earned_at,
        badges (*)
      `)
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching user badges:', error);
    } else {
      setUserBadges(data || []);
    }
    setLoading(false);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'from-gray-400 to-gray-600';
      case 'Rare': return 'from-blue-400 to-blue-600';
      case 'Epic': return 'from-purple-400 to-purple-600';
      case 'Legendary': return 'from-orange-400 to-orange-600';
      case 'Mythic': return 'from-yellow-400 to-yellow-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const isEarned = (badgeId: string) => {
    return userBadges.some(ub => ub.badge_id === badgeId);
  };

  if (loading) {
    return (
      <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 mt-8">
        <div className="animate-pulse">Loading badges...</div>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 mt-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          🏆 Badge Collection
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {allBadges.map((badge) => {
          const earned = isEarned(badge.id);
          return (
            <Card 
              key={badge.id} 
              className={`p-4 text-center transition-all duration-300 ${
                earned 
                  ? 'bg-slate-700/50 border-yellow-500/50 hover:scale-105' 
                  : 'bg-slate-800/50 border-slate-600/50 opacity-50'
              }`}
            >
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${getRarityColor(badge.rarity)} flex items-center justify-center text-2xl ${earned ? '' : 'grayscale'}`}>
                {badge.icon}
              </div>
              <h3 className={`font-bold text-sm ${earned ? 'text-white' : 'text-gray-400'}`}>
                {badge.name}
              </h3>
              <p className={`text-xs mt-1 ${earned ? 'text-gray-300' : 'text-gray-500'}`}>
                {badge.rarity}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-300">
          Earned: {userBadges.length} / {allBadges.length} badges
        </p>
      </div>
    </Card>
  );
};

export default BadgeCollection;
