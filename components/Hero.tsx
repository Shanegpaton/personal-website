'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, Code, Terminal, Settings } from 'lucide-react';
import { 
  SiCplusplus, 
  SiJavascript, 
  SiPython, 
  SiDart, 
  SiPostgresql, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiFlutter, 
  SiFirebase,
  SiSupabase 
} from 'react-icons/si';
import { FaJava, FaReact, FaPython, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const skills = [
  { name: "C++", icon: <SiCplusplus className="w-4 h-4" />, category: "Languages" },
  { name: "Java", icon: <FaJava className="w-4 h-4" />, category: "Languages" },
  { name: "JavaScript", icon: <FaJsSquare className="w-4 h-4" />, category: "Languages" },
  { name: "Python", icon: <FaPython className="w-4 h-4" />, category: "Languages" },
  { name: "Dart", icon: <SiDart className="w-4 h-4" />, category: "Languages" },
  { name: "SQL", icon: <SiPostgresql className="w-4 h-4" />, category: "Database" },
  { name: "HTML", icon: <FaHtml5 className="w-4 h-4" />, category: "Web Technologies" },
  { name: "CSS", icon: <FaCss3Alt className="w-4 h-4" />, category: "Web Technologies" },
  { name: "React", icon: <FaReact className="w-4 h-4" />, category: "Frameworks & Libraries" },
  { name: "Flutter", icon: <SiFlutter className="w-4 h-4" />, category: "Frameworks & Libraries" },
  { name: "MIXR", icon: <Settings className="w-4 h-4" />, category: "Tools & Platforms" },
  { name: "Firebase", icon: <SiFirebase className="w-4 h-4" />, category: "Tools & Platforms" },
  { name: "Supabase", icon: <SiSupabase className="w-4 h-4" />, category: "Tools & Platforms" },
];

export default function Hero() {
  return (
    <section className="flex flex-col bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden" style={{minHeight: 'calc(100svh - 4rem)'}}>
      {/* Organic background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.1),transparent_60%)]"></div>
      
      {/* Floating organic shapes */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-accent-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-32 right-16 w-64 h-64 bg-gradient-to-br from-code-blue/8 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
      <div className="absolute bottom-32 left-1/4 w-96 h-96 bg-gradient-to-br from-code-purple/6 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-accent-400/8 to-transparent rounded-full blur-2xl animate-pulse delay-1500"></div>
      
      {/* Flowing lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-code-blue/30 to-transparent"></div>
      
      <div className="container-max-width relative z-10 flex-1 flex items-start pt-16 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-code-green" />
              <span className="text-code-green font-mono text-sm">shane@dev:~$</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Shane Paton</span>
            </h1>
            
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Code className="w-5 h-5 text-accent-400" />
              <p className="text-lg sm:text-xl text-accent-400 font-medium">
                Software Engineering Student — Miami University, OH
              </p>
            </div>
            
                <p className="text-base sm:text-lg text-dark-300 mb-8 leading-relaxed">
                  Software engineering student with hands-on experience in <span className="text-code-green font-mono">full-stack development</span> and
                  <span className="text-code-blue font-mono"> high-performance simulation systems</span>.
                  Seeking Summer 2026 software engineering internships.
                </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/resume" className="btn-primary inline-flex items-center justify-center glow-effect">
                <Download className="w-5 h-5 mr-2" />
                 Resume
              </Link>
              <Link href="#projects" className="btn-secondary inline-flex items-center justify-center">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </Link>
            </div>
            
          </div>
          
          <div className="animate-slide-up">
            <div className="relative overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-code-blue/15 to-code-purple/10 rounded-3xl blur-2xl"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/5 to-code-blue/5 rounded-full blur-xl"></div>
                  <Image
                    src="/images/headshot.png"
                    alt="Shane Paton - Software Engineering Student"
                    width={400}
                    height={400}
                    className="relative rounded-3xl shadow-2xl border border-dark-700/50 backdrop-blur-sm"
                    priority
                  />
              <div className="absolute bottom-2 right-2 sm:bottom-2 sm:right-2 md:bottom-2 md:right-2 lg:bottom-2 lg:right-2 bg-gradient-to-br from-dark-900/90 to-dark-800/90 border border-accent-500/50 text-accent-400 p-4 rounded-2xl shadow-xl backdrop-blur-sm z-10">
                <p className="text-sm font-medium text-dark-300">Available for</p>
                <p className="text-lg font-bold text-accent-400">Summer 2026</p>
              </div>
              
                  {/* Floating code elements */}
                  <div className="absolute top-2 left-2 sm:top-2 sm:left-2 md:top-2 md:left-2 lg:top-2 lg:left-2 bg-gradient-to-br from-dark-900/90 to-dark-800/90 border border-code-green/50 text-code-green p-3 rounded-2xl font-mono text-xs z-10 shadow-lg backdrop-blur-sm">
                    {'full-stack'}
                  </div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-2 sm:top-1/2 sm:-translate-y-1/2 md:right-2 md:top-1/2 md:-translate-y-1/2 lg:right-2 lg:top-1/2 lg:-translate-y-1/2 bg-gradient-to-br from-dark-900/90 to-dark-800/90 border border-code-blue/50 text-code-blue p-3 rounded-2xl font-mono text-xs z-10 shadow-lg backdrop-blur-sm">
                    {'simulation'}
                  </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech stack scrolling bar - floating below content */}
      <div className="absolute left-0 right-0 z-10 bottom-8 md:bottom-16">
        <div className="relative overflow-hidden border-t border-dark-700/50 bg-gradient-to-r from-dark-900/90 via-dark-800/80 to-dark-900/90 backdrop-blur-sm shadow-2xl mx-4 sm:mx-8 rounded-t-3xl rounded-b-3xl">
          <div className="relative overflow-hidden py-3 sm:py-4">
            <div className="flex animate-scroll">
              <div className="flex gap-3 sm:gap-4 whitespace-nowrap flex-shrink-0">
                {/* First set */}
                {skills.map((skill, i) => (
                  <span key={i} className="btn-code flex items-center gap-2">
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
                {/* Second set - seamless duplicate */}
                {skills.map((skill, i) => (
                  <span key={`dup1-${i}`} className="btn-code flex items-center gap-2">
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
                {/* Third set - extra smoothness */}
                {skills.map((skill, i) => (
                  <span key={`dup2-${i}`} className="btn-code flex items-center gap-2">
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
