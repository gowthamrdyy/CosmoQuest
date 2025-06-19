
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const AstroBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm AstroBot, your cosmic companion! 🤖✨ Ask me anything about space, astronomy, planets, or the universe!",
      sender: 'bot'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const spaceResponses = {
    'sun': "The Sun is a G-type main-sequence star that contains 99.86% of the Solar System's mass! It's about 4.6 billion years old and will continue burning for about 5 billion more years. ☀️",
    'moon': "The Moon is Earth's only natural satellite! It was formed about 4.5 billion years ago, likely from debris after a Mars-sized object collided with Earth. It controls our tides! 🌙",
    'mars': "Mars, the Red Planet! It's red because of iron oxide (rust) on its surface. It has the largest volcano in the solar system (Olympus Mons) and evidence suggests it once had liquid water! 🔴",
    'jupiter': "Jupiter is the largest planet in our solar system! It's a gas giant with over 80 moons, including the four Galilean moons. Its Great Red Spot is a storm larger than Earth! 🪐",
    'black hole': "Black holes are regions where gravity is so strong that nothing, not even light, can escape! They form when massive stars collapse. The closest one to Earth is about 1,000 light-years away! 🕳️",
    'galaxy': "Our galaxy, the Milky Way, contains over 100 billion stars! It's a spiral galaxy about 100,000 light-years across. We're located in one of its spiral arms called the Orion Arm! 🌌",
    'earth': "Earth is the third planet from the Sun and the only known planet with life! It's about 4.5 billion years old and has one moon. 71% of its surface is covered by water! 🌍",
    'space': "Space is the vast, mostly empty expanse that exists beyond Earth's atmosphere. It's filled with stars, planets, galaxies, and mysterious dark matter and dark energy! 🚀",
    'astronaut': "Astronauts are brave explorers who travel to space! The first human in space was Yuri Gagarin in 1961. Today, astronauts live and work on the International Space Station! 👨‍🚀"
  };

  const getRandomResponse = () => {
    const responses = [
      "That's a fascinating question about the cosmos! 🌟",
      "The universe is full of amazing mysteries! Let me think about that... 🤔",
      "Space exploration never ceases to amaze me! 🚀",
      "The vastness of the universe holds so many secrets! ✨",
      "That's an excellent astronomical question! 🔭"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const userInput = inputMessage.toLowerCase();
      let botResponse = getRandomResponse();

      // Check for space-related keywords
      for (const [keyword, response] of Object.entries(spaceResponses)) {
        if (userInput.includes(keyword)) {
          botResponse = response;
          break;
        }
      }

      // Special responses for greetings
      if (userInput.includes('hello') || userInput.includes('hi')) {
        botResponse = "Hello there, space explorer! 👋 What cosmic mysteries would you like to explore today?";
      } else if (userInput.includes('thank')) {
        botResponse = "You're welcome! Keep exploring the cosmos with curiosity! 🌟 Is there anything else about space you'd like to know?";
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
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

      <div className="container mx-auto px-6 pb-12 relative z-10 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🤖 AstroBot
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Your AI space companion for cosmic knowledge!
          </p>
        </div>

        <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm h-96 flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-700/50 border border-purple-500/30 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-700/50 border border-purple-500/30 text-white px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-purple-500/30">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me about space, planets, stars..."
                className="flex-1 bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400"
              />
              <Button
                onClick={sendMessage}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              >
                Send 🚀
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Questions */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-center mb-4 text-cyan-400">Quick Questions to Try:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Tell me about black holes",
              "How big is our galaxy?",
              "What makes Mars red?",
              "How far is the nearest star?"
            ].map((question, index) => (
              <Button
                key={index}
                onClick={() => {
                  setInputMessage(question);
                  setTimeout(() => sendMessage(), 100);
                }}
                variant="outline"
                className="border-purple-500/30 text-gray-300 hover:bg-slate-700/50 text-left justify-start"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstroBot;
