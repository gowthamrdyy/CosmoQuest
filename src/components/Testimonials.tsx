
import React from 'react';
import { Card } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Captain Leo',
      age: 12,
      quote: 'This is way more fun than my science class! I learned about black holes and now I want to be an astronaut!',
      avatar: '👦',
      level: 'Galaxy Explorer',
      rating: 5
    },
    {
      name: 'Professor Luna',
      role: 'Science Teacher',
      quote: 'Perfect for introducing my students to astronomy! The interactive map keeps them engaged for hours.',
      avatar: '👩‍🏫',
      level: 'Educator',
      rating: 5
    },
    {
      name: 'Stellar Sarah',
      age: 15,
      quote: 'The simulation labs are incredible! I launched my own rocket and learned orbital mechanics.',
      avatar: '👧',
      level: 'Cosmic Commander',
      rating: 5
    },
    {
      name: 'Dr. Cosmos',
      role: 'Parent & Astrophysicist',
      quote: 'Finally, a platform that makes complex space concepts accessible and fun for kids. Brilliant!',
      avatar: '👨‍🔬',
      level: 'Expert Reviewer',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-5 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1000"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Explorers Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of space enthusiasts on their cosmic learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {testimonial.name}
                      {testimonial.age && (
                        <span className="text-cyan-400 font-normal">, Age {testimonial.age}</span>
                      )}
                    </h3>
                    <p className="text-sm text-purple-400 font-semibold">
                      {testimonial.level}
                      {testimonial.role && ` • ${testimonial.role}`}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 italic leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>

                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-70"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <span className="text-cyan-400 font-semibold">⭐ 4.9/5 stars from 1,247 space explorers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
