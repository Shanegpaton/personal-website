import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-dark-900">
      <div className="container-max-width">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Academic foundation in Software Engineering with a focus on practical application and real-world problem solving.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-code-blue mx-auto rounded-full mt-4"></div>
          </div>

          <div className="card-dark p-8 glow-effect">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-dark-800 p-3 rounded-lg border border-accent-500">
                    <GraduationCap className="w-8 h-8 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-dark-100">Miami University</h3>
                    <div className="flex items-center gap-2 text-dark-400">
                      <MapPin className="w-4 h-4" />
                      <span>Oxford, OH</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-2xl font-semibold text-accent-400">Bachelor of Science in Software Engineering</h4>
                  
                  <div className="flex flex-wrap gap-6 text-dark-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Expected Graduation: May 2027</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>GPA: 3.97 / 4.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-dark-200 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-code-green" />
                  Academic Focus
                </h5>
                <ul className="space-y-2 text-dark-300">
                  <li className="flex items-start gap-2">
                    <span className="text-code-green font-bold">▶</span>
                    <span>Software Engineering Principles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-code-green font-bold">▶</span>
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-code-green font-bold">▶</span>
                    <span>System Design & Architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-code-green font-bold">▶</span>
                    <span>Database Management</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-dark-200 flex items-center gap-2">
                  <Award className="w-5 h-5 text-code-blue" />
                  Academic Excellence
                </h5>
                <ul className="space-y-2 text-dark-300">
                  <li className="flex items-start gap-2">
                    <span className="text-code-blue font-bold">▶</span>
                    <span>Maintaining 3.97 GPA across all coursework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-code-blue font-bold">▶</span>
                    <span>Balancing academics with internships and leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-code-blue font-bold">▶</span>
                    <span>Applying theoretical knowledge to real projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-code-blue font-bold">▶</span>
                    <span>Continuous learning and skill development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
