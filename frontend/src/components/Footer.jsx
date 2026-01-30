import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              NEXUS 2026
            </h3>
            <p className="text-gray-400">Innovate. Collaborate. Transform.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                About
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Events
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Schedule
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Sponsors
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
              >
                <span className="text-xl">𝕏</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              >
                <span className="text-xl">in</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-500/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
              >
                <span className="text-xl">IG</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              >
                <span className="text-xl">DC</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2026 NEXUS. All rights reserved. Built with React, Vite & GSAP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
