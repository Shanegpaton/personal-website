'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, Code, Terminal } from 'lucide-react';
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
import { FaJava } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden" style={{height: 'calc(100vh - 4rem)'}}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-code-blue/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container-max-width relative z-10 flex-1 flex items-start pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-code-green" />
              <span className="text-code-green font-mono text-sm">shane@dev:~$</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Shane Paton</span>
            </h1>
            
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-accent-400" />
              <p className="text-xl text-accent-400 font-medium">
                Software Engineering Student
              </p>
            </div>
            
            <p className="text-lg text-dark-300 mb-8 leading-relaxed">
              I build <span className="text-code-green font-mono">scalable backend systems</span> and 
              <span className="text-code-blue font-mono"> high-impact web applications</span>. 
              Seeking Summer 2026 software engineering internships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/resume" className="btn-primary inline-flex items-center justify-center glow-effect">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Link>
              <Link href="#projects" className="btn-secondary inline-flex items-center justify-center">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </Link>
            </div>
            
          </div>
          
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-code-blue/20 rounded-lg blur-xl"></div>
                  <Image
                    src="/images/headshot.png"
                    alt="Shane Paton - Software Engineering Student"
                    width={400}
                    height={400}
                    className="relative rounded-lg shadow-2xl border border-dark-700"
                    priority
                  />
              <div className="absolute -bottom-4 -right-4 bg-dark-900 border border-accent-500 text-accent-400 p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-dark-300">Available for</p>
                <p className="text-lg font-bold text-accent-400">Summer 2026</p>
              </div>
              
              {/* Floating code elements */}
              <div className="absolute -top-4 -left-4 bg-dark-900 border border-code-green text-code-green p-2 rounded font-mono text-xs">
                {'<dev>'}
              </div>
              <div className="absolute top-1/2 -right-8 bg-dark-900 border border-code-blue text-code-blue p-2 rounded font-mono text-xs">
                {'{code}'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech stack scrolling bar - floating below content */}
      <div className="absolute bottom-16 left-0 right-0 z-10">
        <div className="relative overflow-hidden border-t border-dark-700 bg-dark-900/80 backdrop-blur-sm shadow-2xl mx-8 rounded-t-xl">
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-scroll">
              <div className="flex gap-4 whitespace-nowrap">
                <span className="btn-code flex items-center gap-2">
                  <SiCplusplus className="w-4 h-4" />
                  C++
                </span>
                <span className="btn-code flex items-center gap-2">
                  <FaJava className="w-4 h-4" />
                  Java
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiJavascript className="w-4 h-4" />
                  JavaScript
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiPython className="w-4 h-4" />
                  Python
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiDart className="w-4 h-4" />
                  Dart
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiPostgresql className="w-4 h-4" />
                  SQL
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiHtml5 className="w-4 h-4" />
                  HTML
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiCss3 className="w-4 h-4" />
                  CSS
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiReact className="w-4 h-4" />
                  React
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiFlutter className="w-4 h-4" />
                  Flutter
                </span>
                <span className="btn-code flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  MIXR
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiFirebase className="w-4 h-4" />
                  Firebase
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiSupabase className="w-4 h-4" />
                  Supabase
                </span>
                {/* Duplicate for seamless loop */}
                <span className="btn-code flex items-center gap-2">
                  <SiCplusplus className="w-4 h-4" />
                  C++
                </span>
                <span className="btn-code flex items-center gap-2">
                  <FaJava className="w-4 h-4" />
                  Java
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiJavascript className="w-4 h-4" />
                  JavaScript
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiPython className="w-4 h-4" />
                  Python
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiDart className="w-4 h-4" />
                  Dart
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiPostgresql className="w-4 h-4" />
                  SQL
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiHtml5 className="w-4 h-4" />
                  HTML
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiCss3 className="w-4 h-4" />
                  CSS
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiReact className="w-4 h-4" />
                  React
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiFlutter className="w-4 h-4" />
                  Flutter
                </span>
                <span className="btn-code flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  MIXR
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiFirebase className="w-4 h-4" />
                  Firebase
                </span>
                <span className="btn-code flex items-center gap-2">
                  <SiSupabase className="w-4 h-4" />
                  Supabase
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
