import React from 'react';

const About = () => {
  const stats = [
    { value: '1000+', label: 'Participants', color: 'cyan' },
    { value: '50+', label: 'Workshops', color: 'purple' },
    { value: '$100K', label: 'Prize Pool', color: 'pink' },
    { value: '48', label: 'Hours', color: 'green' },
  ];

  return (
    <section className="about-section relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="about-content">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About NEXUS
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                NEXUS 2026 is not just another tech fest—it's a convergence of brilliant minds, 
                groundbreaking ideas, and limitless possibilities. Experience the future of technology 
                through hands-on workshops, competitive challenges, and inspiring talks from industry leaders.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Whether you're a coder, designer, innovator, or dreamer, NEXUS is your platform to 
                create, compete, and connect with the tech community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`stat-card bg-gradient-to-br from-${stat.color}-900/30 to-${stat.color}-800/20 border border-${stat.color}-500/30 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                >
                  <div className={`text-4xl font-bold text-${stat.color}-400 mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
