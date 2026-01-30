import React from 'react';

const Schedule = () => {
  const schedule = [
    { time: '09:00 AM', event: 'Registration & Breakfast', day: 'Day 1' },
    { time: '10:30 AM', event: 'Opening Ceremony & Keynote', day: 'Day 1' },
    { time: '12:00 PM', event: 'Hackathon Begins', day: 'Day 1' },
    { time: '02:00 PM', event: 'Workshop Session 1', day: 'Day 1' },
    { time: '06:00 PM', event: 'Networking Dinner', day: 'Day 1' },
    { time: '09:00 PM', event: 'Midnight Hacking Session', day: 'Day 1' },
    { time: '08:00 AM', event: 'Breakfast & Mentorship', day: 'Day 2' },
    { time: '12:00 PM', event: 'Project Submissions', day: 'Day 2' },
    { time: '02:00 PM', event: 'Final Presentations', day: 'Day 2' },
    { time: '05:00 PM', event: 'Awards & Closing Ceremony', day: 'Day 2' },
  ];

  return (
    <section className="schedule-section relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Event Schedule
        </h2>
        <div className="relative">

          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                    <div className="text-sm text-cyan-400 font-semibold mb-2">
                      {item.day}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {item.time}
                    </div>
                    <div className="text-gray-300">{item.event}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black shadow-[0_0_20px_rgba(0,255,255,0.8)]" />
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
