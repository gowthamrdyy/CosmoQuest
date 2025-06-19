
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

interface Profile {
  username: string;
  full_name: string;
  astronaut_level: string;
  total_badges: number;
  missions_completed: number;
}

const UserProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
    } else {
      setProfile(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
        <div className="animate-pulse">Loading profile...</div>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
      <div className="flex items-center space-x-6">
        {/* Avatar */}
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-3xl">
          👨‍🚀
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white">
            {profile?.username || 'Space Cadet'}
          </h2>
          <p className="text-lg text-cyan-400 font-semibold">
            {profile?.astronaut_level || 'Space Cadet'}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-yellow-400">
              {profile?.total_badges || 0}
            </div>
            <div className="text-sm text-gray-300">Badges</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">
              {profile?.missions_completed || 0}
            </div>
            <div className="text-sm text-gray-300">Missions</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;
