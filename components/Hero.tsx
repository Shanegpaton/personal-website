'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, Code, Terminal, Cloud } from 'lucide-react';
import {
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiReact,
  SiFlutter,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
} from 'react-icons/si';
import { FaJava, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
  { name: 'React', icon: <SiReact className="w-4 h-4" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="w-4 h-4" /> },
  { name: 'Python', icon: <SiPython className="w-4 h-4" /> },
  { name: 'C++', icon: <SiCplusplus className="w-4 h-4" /> },
  { name: 'Java', icon: <FaJava className="w-4 h-4" /> },
  { name: 'SQL', icon: <SiPostgresql className="w-4 h-4" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4" /> },
  { name: 'HTML', icon: <FaHtml5 className="w-4 h-4" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-4 h-4" /> },
  { name: 'Flutter', icon: <SiFlutter className="w-4 h-4" /> },
  { name: 'Dart', icon: <SiFlutter className="w-4 h-4" /> },
  { name: 'Azure', icon: <Cloud className="w-4 h-4" /> },
  { name: 'Docker', icon: <SiDocker className="w-4 h-4" /> },
  { name: 'Kubernetes', icon: <SiKubernetes className="w-4 h-4" /> },
  { name: 'Terraform', icon: <SiTerraform className="w-4 h-4" /> },
  { name: 'GitHub Actions', icon: <SiGithubactions className="w-4 h-4" /> },
  { name: 'Firebase', icon: <SiFirebase className="w-4 h-4" /> },
  { name: 'Supabase', icon: <SiSupabase className="w-4 h-4" /> },
];

const repeatedSkills = [...skills, ...skills];

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
                  Open to full-time software engineering roles starting January 2027.
                </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/resume" className="btn-primary inline-flex items-center justify-center glow-effect">
                <Download className="w-5 h-5 mr-2" />
                 Resume
              </Link>
              <Link href="/?section=projects" className="btn-secondary inline-flex items-center justify-center">
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
                <p className="text-sm font-medium text-dark-300">Available</p>
                <p className="text-lg font-bold text-accent-400">Jan 2027</p>
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

      <div className="absolute left-0 right-0 z-10 bottom-8 md:bottom-16 px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-dark-700/60 bg-gradient-to-r from-dark-900/90 via-dark-800/80 to-dark-900/90 shadow-2xl backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark-900 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark-900 to-transparent z-10" />
          <div className="tech-marquee">
            <div className="tech-track">
              {repeatedSkills.map((skill, index) => (
                <span key={`${skill.name}-${index}`} className="tech-pill">
                  <span className="tech-icon">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
