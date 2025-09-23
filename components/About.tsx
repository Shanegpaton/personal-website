import { Code, GraduationCap, Target, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-max-width">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-code-blue mx-auto rounded-full"></div>
          </div>
          
          <div className="card-dark p-8 mb-8">
            <p className="text-lg text-dark-300 leading-relaxed text-center">
              I'm a Software Engineering student at Miami University with a 3.97 GPA and hands-on experience in internships, research, and personal projects. I enjoy building scalable backend systems, full-stack applications, and exploring ways technology can solve real-world problems. I am currently seeking Summer 2026 software engineering internship opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-dark-800 p-3 rounded-lg border border-dark-700">
                  <GraduationCap className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-100 mb-2">Education</h3>
                  <p className="text-dark-300">
                    Software Engineering student at Miami University with a 3.97 GPA, 
                    expected graduation May 2027.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-dark-800 p-3 rounded-lg border border-dark-700">
                  <Code className="w-6 h-6 text-code-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-100 mb-2">Development</h3>
                  <p className="text-dark-300">
                    I enjoy turning ideas into production-ready software — from 
                    performance-critical C++ systems to user-facing web and mobile apps.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-dark-800 p-3 rounded-lg border border-dark-700">
                  <Target className="w-6 h-6 text-code-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-100 mb-2">Goals</h3>
                  <p className="text-dark-300">
                    Currently seeking a Software Engineering internship for Summer 2026. 
                    Passionate about creating efficient, scalable solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card-dark p-6">
                <h3 className="text-lg font-semibold text-dark-100 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-code-yellow" />
                  Academic Excellence
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  Maintaining a 3.97 GPA while balancing coursework, internships, and leadership roles. 
                  Committed to continuous learning and applying theoretical knowledge to real-world projects.
                </p>
              </div>
              
              <div className="code-block">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-code-red rounded-full"></div>
                  <div className="w-3 h-3 bg-code-yellow rounded-full"></div>
                  <div className="w-3 h-3 bg-code-green rounded-full"></div>
                  <span className="text-dark-400 text-sm ml-2">shane@dev:~$</span>
                </div>
                <div className="text-code-green">
                  <div className="mb-1">$ whoami</div>
                  <div className="text-accent-400">Software Engineering Student</div>
                  <div className="mb-1">$ gpa</div>
                  <div className="text-code-blue">3.97 / 4.0</div>
                  <div className="mb-1">$ graduation</div>
                  <div className="text-code-purple">May 2027</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
