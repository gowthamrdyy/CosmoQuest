
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    toast.success('Message sent! We\'ll get back to you soon! 🚀');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              📡 Contact Mission Control
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Have questions about the cosmos or need help with your space journey?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-8">
            <h2 className="text-2xl font-bold text-white mb-6">📨 Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border-purple-500/30 text-white"
                  placeholder="Your space explorer name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border-purple-500/30 text-white"
                  placeholder="your.email@cosmos.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border-purple-500/30 text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-700/50 border border-purple-500/30 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Tell us about your cosmic questions or feedback..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
              >
                🚀 Send Message to Space
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold text-white mb-4">📧 Direct Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <p className="text-gray-300">Email us directly at:</p>
                    <a 
                      href="mailto:iamgowthamsree@gmail.com"
                      className="text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      iamgowthamsree@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold text-white mb-4">🌐 Follow Our Journey</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📷</div>
                  <div>
                    <p className="text-gray-300">Follow on Instagram:</p>
                    <a 
                      href="https://instagram.com/gowthamrdyy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 font-semibold"
                    >
                      @gowthamrdyy
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold text-white mb-4">🚀 Quick Help</h3>
              <div className="space-y-3">
                <Link to="/astro-bot" className="block">
                  <div className="flex items-center space-x-3 hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="text-2xl">🤖</div>
                    <div>
                      <p className="text-white font-semibold">Ask AstroBot</p>
                      <p className="text-gray-300 text-sm">Get instant answers to space questions</p>
                    </div>
                  </div>
                </Link>
                
                <Link to="/progress-log" className="block">
                  <div className="flex items-center space-x-3 hover:bg-slate-700/30 p-3 rounded-lg transition-all duration-300">
                    <div className="text-2xl">📊</div>
                    <div>
                      <p className="text-white font-semibold">Check Progress</p>
                      <p className="text-gray-300 text-sm">View your learning journey</p>
                    </div>
                  </div>
                </Link>
              </div>
            </Card>

            <Card className="bg-slate-800/30 border-purple-500/30 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold text-white mb-4">⭐ Fun Fact</h3>
              <p className="text-gray-300">
                Did you know? The nearest star to Earth (besides the Sun) is Proxima Centauri, 
                which is about 4.24 light-years away. Even traveling at the speed of light, 
                it would take over 4 years to reach it! 🌟
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
