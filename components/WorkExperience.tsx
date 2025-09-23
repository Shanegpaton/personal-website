import { Briefcase, Calendar, MapPin, Award, Shield } from 'lucide-react';

const experiences = [
  {
    company: 'Modern Technology Solutions, Inc. (MTSI)',
    role: 'Software Engineering Intern',
    location: 'Dayton, OH',
    duration: '05/2025 – 08/2025',
    clearance: 'Interim Secret (TS/SCI in progress)',
    achievements: [
      'Achieved synchronized simulations across 5+ networked devices by leading networking implementation with Distributed Interactive Simulation (DIS) protocols over UDP',
      'Simulated realistic object behavior with a custom Plinko physics engine supporting 10+ balls at 60 FPS',
      'Reduced file size by up to 60% with a custom Huffman compressor/decompressor in C++, visualized decompressing and the Huffman Tree using MIXR'
    ],
    color: 'code-green'
  },
  {
    company: 'Noshable',
    role: 'Website Developer Intern',
    location: 'Remote',
    duration: '05/2024 – 08/2024',
    achievements: [
      'Enhanced data visualization by building a dynamic map page using Google Maps API, displaying over 9,000 custom markers',
      'Utilized Firebase for cloud storage to streamline datasets and reduce unnecessary API calls, saving ~$2,000 monthly',
      'Revamped UX by building interactive UI components in Flutter simplifying navigation and usability'
    ],
    color: 'code-blue'
  }
];

export default function WorkExperience() {
  return (
    <section id="experience" className="section-padding bg-dark-900">
      <div className="container-max-width">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Work Experience</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Professional experience building real-world software solutions and contributing to meaningful projects.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-code-blue mx-auto rounded-full mt-4"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="card-dark p-8 glow-effect animate-slide-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-accent-400" />
                      <h3 className="text-2xl font-bold text-dark-100">{experience.company}</h3>
                    </div>
                    <p className="text-xl text-accent-400 font-medium italic">{experience.role}</p>
                    {('clearance' in experience) && experience.clearance && (
                      <div className="w-fit mt-1 mb-2 inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-accent-500 bg-accent-500/10 text-accent-400 text-xs font-semibold uppercase tracking-wide">
                        <Shield className="w-3.5 h-3.5" />
                        <span>Clearance: {experience.clearance}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-dark-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-dark-200 mb-3">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <span className={`text-${experience.color} font-bold mt-1`}>▶</span>
                        <span className="text-dark-300 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
