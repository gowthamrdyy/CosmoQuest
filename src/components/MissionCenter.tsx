
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface Mission {
  id: string;
  title: string;
  description: string;
  planet: string;
  difficulty: string;
  content: string | null;
  quiz_questions: any;
}

const MissionCenter = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMissions();
  }, []);

  const fetchMissions = async () => {
    const { data, error } = await supabase
      .from('missions')
      .select('*')
      .order('difficulty', { ascending: true });

    if (error) {
      console.error('Error fetching missions:', error);
    } else {
      setMissions(data || []);
    }
    setLoading(false);
  };

  const startMission = (mission: Mission) => {
    navigate(`/mission/${mission.id}`, { state: { mission } });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPlanetIcon = (planet: string) => {
    switch (planet) {
      case 'Mercury': return '☿️';
      case 'Mars': return '🔴';
      case 'Deep Space': return '🌌';
      default: return '🪐';
    }
  };

  if (loading) {
    return (
      <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
        <div className="animate-pulse text-white">Loading missions...</div>
      </Card>
    );
  }

  return (
    <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          🎯 Mission Center
        </span>
      </h2>

      <div className="space-y-4 max-h-80 overflow-y-auto">
        {missions.map((mission) => (
          <Card key={mission.id} className="bg-slate-700/30 border-purple-500/20 p-4 hover:bg-slate-700/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{getPlanetIcon(mission.planet)}</span>
                <h3 className="font-bold text-white">{mission.title}</h3>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${getDifficultyColor(mission.difficulty)} bg-slate-800/50`}>
                {mission.difficulty}
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-3">{mission.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">{mission.planet}</span>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                onClick={() => startMission(mission)}
              >
                Start Mission
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default MissionCenter;
