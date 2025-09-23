import { Users, Trophy, Calendar, Target, Award, Brain } from 'lucide-react';

const involvements = [
  {
    organization: 'Sports Modeling & Analytics Club',
    role: 'Co-founder & CTO',
    duration: '05/2025 – Present',
    description: 'Leading technical development for a sports analytics platform',
    achievements: [
      'Implemented authentication, role-based access control, and real-time data sync with React, Next.js, and Supabase',
      'Built a full-stack web app supporting ~50 users in managing sports analytics and betting insights',
      'Learned AI modeling techniques to develop a predictive college football betting model'
    ],
    icon: Users,
    color: 'code-green'
  },
  {
    organization: 'Association for Computing Machinery (ACM)',
    role: 'Member',
    duration: '02/2025 – Present',
    description: 'Active participation in computing community and professional development',
    achievements: [
      'Discussed trending topics in computing and software development, including AI agents and web scrapers'
    ],
    icon: Brain,
    color: 'code-blue'
  },
  {
    organization: 'Techstars Startup Weekend',
    role: 'Participant',
    duration: '08/2023',
    description: 'Collaborative startup development and pitch competition',
    achievements: [
      'Collaborated with a team of five to build a prototype and pitch for a mental health awareness clothing brand',
      'Delivered a VC-style presentation to an audience of ~100 people',
      'Generated $1,000 in revenue and placed 3rd, winning an additional $1,000'
    ],
    icon: Trophy,
    color: 'code-yellow'
  }
];

export default function CampusInvolvement() {
  return (
    <section id="involvement" className="section-padding bg-dark-800">
      <div className="container-max-width">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Campus Involvement & Leadership</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Active participation in campus organizations and leadership roles that demonstrate initiative and collaboration.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-code-blue mx-auto rounded-full mt-4"></div>
          </div>

          <div className="space-y-8">
            {involvements.map((involvement, index) => {
              const IconComponent = involvement.icon;
              return (
                <div key={index} className="card-dark p-8 glow-effect">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`bg-dark-800 p-3 rounded-lg border border-${involvement.color}`}>
                          <IconComponent className={`w-6 h-6 text-${involvement.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-dark-100">{involvement.organization}</h3>
                      </div>
                      <p className="text-xl text-accent-400 font-medium mb-2 italic">{involvement.role}</p>
                      <div className="flex items-center gap-4 text-dark-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{involvement.duration}</span>
                        </div>
                      </div>
                      <p className="text-dark-300 mb-4">{involvement.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-dark-200 mb-3">Key Contributions:</h4>
                    <ul className="space-y-3">
                      {involvement.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <span className={`text-${involvement.color} font-bold mt-1`}>▶</span>
                          <span className="text-dark-300 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
