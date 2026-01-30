import React from 'react';

const Events = () => {
  const events = [
    {
      title: 'Hackathon',
      description: '36-hour coding marathon to build innovative solutions',
      icon: '💻',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'AI/ML Workshop',
      description: 'Deep dive into machine learning and neural networks',
      icon: '🤖',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Web3 Summit',
      description: 'Explore blockchain, DeFi, and decentralized apps',
      icon: '⛓️',
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'Robotics Arena',
      description: 'Build and compete with autonomous robots',
      icon: '🦾',
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Cybersecurity CTF',
      description: 'Capture the flag challenges and security workshops',
      icon: '🔐',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Design Sprint',
      description: 'UI/UX design competition with industry mentors',
      icon: '🎨',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section className="events-section relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Event Tracks
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="event-card group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div className="text-6xl mb-4">{event.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{event.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
