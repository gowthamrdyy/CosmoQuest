
import React from 'react';

const Footer = () => {
  const footerLinks = {
    Platform: ['Explore Map', 'Simulation Labs', 'Quiz Center', 'AstroBot'],
    Learn: ['Getting Started', 'Tutorials', 'Documentation', 'Blog'],
    Community: ['Discord', 'GitHub', 'YouTube', 'Instagram'],
    Company: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service']
  };

  const socialIcons = [
    { name: 'YouTube', icon: '📺', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'GitHub', icon: '⚡', url: '#' }
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-purple-500/30 relative">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CosmoQuest
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your journey through the universe starts here. Learn, explore, and conquer the stars with the most engaging space education platform.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-purple-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 CosmoQuest. All rights reserved. Made with ❤️ from Earth 🌍
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-purple-500/30">
              <span className="text-cyan-400 text-xs font-medium">
                🚀 Powering space education across 127 countries • 2.5M+ lessons completed • ∞ dreams launched
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
