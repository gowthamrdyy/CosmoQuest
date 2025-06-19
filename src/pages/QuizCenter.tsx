
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const QuizCenter = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const quizData = {
    easy: {
      title: 'Space Basics',
      questions: [
        {
          question: "What is the closest star to Earth?",
          options: ["Proxima Centauri", "The Sun", "Alpha Centauri", "Sirius"],
          correct: 1
        },
        {
          question: "How many planets are in our solar system?",
          options: ["7", "8", "9", "10"],
          correct: 1
        },
        {
          question: "What is the largest planet in our solar system?",
          options: ["Saturn", "Neptune", "Jupiter", "Earth"],
          correct: 2
        }
      ]
    },
    medium: {
      title: 'Solar System Explorer',
      questions: [
        {
          question: "Which planet has the most moons?",
          options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
          correct: 1
        },
        {
          question: "What is the Great Red Spot?",
          options: ["A crater on Mars", "A storm on Jupiter", "A nebula", "A galaxy"],
          correct: 1
        },
        {
          question: "How long does it take light from the Sun to reach Earth?",
          options: ["8 seconds", "8 minutes", "8 hours", "8 days"],
          correct: 1
        }
      ]
    },
    hard: {
      title: 'Cosmic Phenomena',
      questions: [
        {
          question: "What is the Schwarzschild radius?",
          options: ["The distance to the nearest star", "The event horizon of a black hole", "The radius of the observable universe", "The orbital radius of Pluto"],
          correct: 1
        },
        {
          question: "What type of star will our Sun become at the end of its life?",
          options: ["Black hole", "Neutron star", "White dwarf", "Red giant"],
          correct: 2
        },
        {
          question: "What is dark matter primarily composed of?",
          options: ["Unknown particles", "Black holes", "Dead stars", "Gas clouds"],
          correct: 0
        }
      ]
    }
  };

  const startQuiz = (difficulty: 'easy' | 'medium' | 'hard') => {
    setSelectedDifficulty(difficulty);
    setCurrentQuiz(quizData[difficulty]);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    if (selectedAnswer === currentQuiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < currentQuiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setSelectedDifficulty(null);
    setCurrentQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'from-green-500 to-green-600';
      case 'medium': return 'from-yellow-500 to-yellow-600';
      case 'hard': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

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
        {!selectedDifficulty ? (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  🧠 Quiz Center
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Test your space knowledge with interactive quizzes!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {Object.entries(quizData).map(([difficulty, data]) => (
                <Card key={difficulty} className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6 hover:bg-slate-700/50 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">
                    {difficulty === 'easy' ? '🌟' : difficulty === 'medium' ? '🚀' : '🌌'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 capitalize">{difficulty}</h3>
                  <h4 className="text-lg text-cyan-400 mb-3">{data.title}</h4>
                  <p className="text-gray-300 mb-6">{data.questions.length} Questions</p>
                  <Button 
                    onClick={() => startQuiz(difficulty as 'easy' | 'medium' | 'hard')}
                    className={`bg-gradient-to-r ${getDifficultyColor(difficulty)} hover:opacity-80 w-full`}
                  >
                    Start Quiz
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        ) : showResult ? (
          <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm p-8 max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-4">
              {score === currentQuiz.questions.length ? '🏆' : score >= currentQuiz.questions.length / 2 ? '🎉' : '📚'}
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h2>
            <p className="text-xl text-cyan-400 mb-2">
              Your Score: {score}/{currentQuiz.questions.length}
            </p>
            <p className="text-lg text-gray-300 mb-6">
              {score === currentQuiz.questions.length ? 'Perfect! You\'re a space expert!' :
               score >= currentQuiz.questions.length / 2 ? 'Great job! Keep learning!' :
               'Keep studying the cosmos!'}
            </p>
            <div className="space-x-4">
              <Button 
                onClick={resetQuiz}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              >
                Try Another Quiz
              </Button>
              <Button 
                onClick={() => startQuiz(selectedDifficulty as 'easy' | 'medium' | 'hard')}
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
              >
                Retry Quiz
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm p-8 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">{currentQuiz.title}</h2>
              <span className="text-cyan-400">
                Question {currentQuestion + 1}/{currentQuiz.questions.length}
              </span>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl text-white mb-6">
                {currentQuiz.questions[currentQuestion].question}
              </h3>
              
              <div className="grid gap-4">
                {currentQuiz.questions[currentQuestion].options.map((option: string, index: number) => (
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
                onClick={resetQuiz}
                variant="outline"
                className="border-gray-500 text-gray-300 hover:bg-gray-500/20"
              >
                Exit Quiz
              </Button>
              <Button 
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:opacity-50"
              >
                {currentQuestion + 1 === currentQuiz.questions.length ? 'Finish' : 'Next'}
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default QuizCenter;
