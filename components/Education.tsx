import { Heart, Award } from 'lucide-react';
import Image from 'next/image';

export default function Education() {
  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-max-width">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Education & Involvement</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-code-blue mx-auto rounded-full"></div>
          </div>
          
              <div className="card-dark p-8 mb-8 animate-slide-in-up">
            <p className="text-lg text-dark-300 leading-relaxed text-center">
              Hi, I'm Shane from Cincinnati, Ohio. I'm currently pursuing Computer Science with a Management minor
              at Miami University and seeking a full-time software engineering role starting in January 2027,
              where I can challenge myself, work hard, and grow as a developer. I enjoy building and problem-solving to create solutions
              that make a genuine impact. If I sound like a fit, I'd love to connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="code-block">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-code-red rounded-full"></div>
                  <div className="w-3 h-3 bg-code-yellow rounded-full"></div>
                  <div className="w-3 h-3 bg-code-green rounded-full"></div>
                  <span className="text-dark-400 text-sm ml-2">shane@dev:~$</span>
                </div>
                <div className="text-code-green">
                  <div className="mb-1">$ whoami</div>
                  <div className="text-accent-400">Computer Science at Miami University</div>
                  <div className="mb-1">$ gpa</div>
                  <div className="text-code-blue">3.98 / 4.0</div>
                  <div className="mb-1">$ graduation</div>
                  <div className="text-code-purple">Jan 2026</div>
                </div>
              </div>
              
              <div className="card-dark p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-dark-800 rounded-full flex items-center justify-center text-dark-100 font-semibold text-lg">ΘΤ</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-100 mb-2">Theta Tau Engineering Fraternity</h3>
                    <p className="text-dark-300">
                      Active member of Theta Tau, collaborating with fellow engineering students on professional development, service initiatives, and technical growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-dark p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center">
                    <Image src="/images/techstars.png" alt="Techstars logo" width={56} height={56} className="w-12 h-12 md:w-14 md:h-14 aspect-square object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-100 mb-2">Techstars Startup Weekend</h3>
                    <p className="text-dark-300">
                      Collaborated in a team of 5 to build a startup prototype and pitch it,
                      placing 3rd and winning $1,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-slide-in-right">
              <div className="card-dark p-6">
                <h3 className="text-lg font-semibold text-dark-100 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-code-yellow" />
                  Leadership
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  Co-founded the Sports Modeling & Analytics Club at Miami University. Built a full-stack web application using React, Next.js, and Supabase, hosted on Vercel. Check it out: <a href="https://smacmu.com" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:underline">smacmu.com</a>.
                </p>
              </div>

              <div className="card-dark p-6">
                <h3 className="text-lg font-semibold text-dark-100 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-code-red" />
                  Recreation
                </h3>
                <ul className="list-disc list-inside text-dark-300 space-y-1">
                  <li>Association for Computing Machinery (ACM)</li>
                  <li>Intramural Soccer and Hockey</li>
                  <li>Pickleball Club</li>
                  <li>Golf Club</li>
                  <li>Chi Psi Social Fraternity</li>
                  <li>Guitar</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
