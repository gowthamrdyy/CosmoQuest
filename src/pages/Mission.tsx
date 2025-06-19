
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Mission = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [mission, setMission] = useState<any>(location.state?.mission || null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (!mission && id) {
      fetchMission();
    }
  }, [id, mission]);

  const fetchMission = async () => {
    const { data, error } = await supabase
      .from('missions')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching mission:', error);
      navigate('/explore-map');
    } else {
      setMission(data);
    }
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    const newAnswers = [...answers, selectedAnswer || 0];
    setAnswers(newAnswers);

    if (selectedAnswer === mission.quiz_questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < mission.quiz_questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
      completeMission(newAnswers);
    }
  };

  const completeMission = async (finalAnswers: number[]) => {
    if (!user) return;

    const finalScore = Math.round((score / mission.quiz_questions.length) * 100);
    
    const { error } = await supabase
      .from('user_missions')
      .upsert({
        user_id: user.id,
        mission_id: mission.id,
        completed_at: new Date().toISOString(),
        score: finalScore,
        status: 'completed'
      });

    if (error) {
      console.error('Error completing mission:', error);
    } else {
      toast.success('Mission completed! 🚀');
      
      // Award badge if score is high enough
      if (finalScore >= 80) {
        awardBadge();
      }
    }
  };

  const awardBadge = async () => {
    if (!user) return;

    // Simple badge awarding logic - could be more sophisticated
    const { data: badges } = await supabase
      .from('badges')
      .select('*')
      .limit(1);

    if (badges && badges.length > 0) {
      const { error } = await supabase
        .from('user_badges')
        .insert({
          user_id: user.id,
          badge_id: badges[0].id
        });

      if (!error) {
        toast.success('Badge earned! 🏆');
      }
    }
  };

  if (!mission) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-xl">🚀 Loading mission...</div>
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

      <div className="container mx-auto px-6 py-12 relative z-10 max-w-4xl">
        {!showResult ? (
          <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white">{mission.title}</h1>
              <span className="text-cyan-400">
                Question {currentQuestion + 1}/{mission.quiz_questions.length}
              </span>
            </div>

            {currentQuestion === 0 && (
              <div className="mb-8 p-6 bg-slate-700/30 rounded-lg border border-purple-500/20">
                <h2 className="text-xl font-bold text-cyan-400 mb-3">Mission Briefing</h2>
                <p className="text-gray-300 mb-4">{mission.content}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-400">Planet: {mission.planet}</span>
                  <span className={`px-2 py-1 rounded ${
                    mission.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    mission.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {mission.difficulty}
                  </span>
                </div>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl text-white mb-6">
                {mission.quiz_questions[currentQuestion].question}
              </h3>
              
              <div className="grid gap-4">
                {mission.quiz_questions[currentQuestion].options.map((option: string, index: number) => (
                  <Button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`p-4 text-left justify-start ${
                      selectedAnswer === index 
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600" 
                        : "border-purple-500/30 text-gray-300 hover:bg-slate-700/50"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}. {option}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button 
                onClick={() => navigate('/explore-map')}
                variant="outline"
                className="border-gray-500 text-gray-300 hover:bg-gray-500/20"
              >
                Exit Mission
              </Button>
              <Button 
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:opacity-50"
              >
                {currentQuestion + 1 === mission.quiz_questions.length ? 'Complete Mission' : 'Next'}
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm p-8 text-center">
            <div className="text-6xl mb-4">
              {score === mission.quiz_questions.length ? '🏆' : score >= mission.quiz_questions.length / 2 ? '🎉' : '📚'}
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Mission Complete!</h2>
            <p className="text-xl text-cyan-400 mb-2">
              Score: {score}/{mission.quiz_questions.length} ({Math.round((score / mission.quiz_questions.length) * 100)}%)
            </p>
            <p className="text-lg text-gray-300 mb-6">
              {score === mission.quiz_questions.length ? 'Perfect! You\'re ready for the next challenge!' :
               score >= mission.quiz_questions.length / 2 ? 'Great job! You\'re making progress!' :
               'Keep learning and try again!'}
            </p>
            <div className="space-x-4">
              <Button 
                onClick={() => navigate('/explore-map')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              >
                Return to Galaxy Map
              </Button>
              <Button 
                onClick={() => navigate('/dashboard')}
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
              >
                View Dashboard
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Mission;
