"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image?: string;
  bullets?: string[];
};

const TABS = [
  { key: 'web', label: 'Web & Full Stack', emoji: '🌐' },
  { key: 'systems', label: 'Systems & Backend', emoji: '⚙️' },
  { key: 'mobile', label: 'Mobile & Games', emoji: '📱🎮' },
] as const;

const PROJECTS: Record<typeof TABS[number]['key'], Project[]> = {
  web: [
    {
      title: 'SMAC',
      description: 'Full-stack Next.js + Supabase site for Sports Modeling and Analytics Club, hosted on Vercel.',
      tech: ['Next.js', 'React', 'TypeScript', 'Supabase'],
      github: 'https://smacmu.com',
      bullets: [
        'Next.js, Supabase, and Vercel for a scalable full-stack platform',
        'Sports analytics tools with role-based access and real-time sync',
        'Built to support growth of Miami University’s Sports Modeling & Analytics Club',
      ],
    },
    {
      title: 'Personal Website',
      description: 'Portfolio site (this one), built with Next.js and Tailwind.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/Shanegpaton/personal-website',
      bullets: [
        'Next.js App Router with TypeScript and Tailwind for a fast, modern UI',
        'Accessible, recruiter-focused design with SEO meta, sitemap, and OG tags',
        'Vercel-ready with optimized images, dark theme, and responsive layouts',
      ],
    },
    {
      title: 'Song Ranker',
      description: 'React app using Spotify API to rank songs via drag-and-drop playlists.',
      tech: ['React', 'TypeScript', 'Spotify API'],
      github: 'https://github.com/shanegpaton/song-ranker',
      image: '/images/projects/spotify-ranker.jpg',
      bullets: [
        'Introduced song searching via Spotify API to streamline exploration',
        'Real-time UI updates with React hooks for responsiveness',
        'Drag-and-drop ranking replicating Spotify-like UX',
      ],
    },
  ],
  systems: [
    {
      title: 'Order Matching Engine',
      description: 'C++ multithreaded backend simulating a high-performance trade matching engine.',
      tech: ['C++', 'Multithreading', 'Concurrency'],
      github: 'https://github.com/shanegpaton/order-matching-engine',
      image: '/images/projects/matching-engine.jpg',
      bullets: [
        'Processes 750,000+ orders/sec with low-latency threading',
        'Custom memory pool cuts dynamic allocations by >50%',
        'Batching and synchronization ensure thread safety and throughput',
      ],
    },
    {
      title: 'Huffman Tree Visualizer',
      description: 'C++ application for file compression and decompression with visualization using the MIXR framework.',
      tech: ['C++', 'Data Structures', 'MIXR'],
      github: 'https://github.com/shanegpaton/huffman-compressor-visualizer',
      bullets: [
        'Implemented Huffman encoding/decoding with priority queues and tree structures',
        'Integrated MIXR to dynamically render compression/decompression in real time',
        'Built an interactive Huffman tree visualization to show encoding and decoding steps',
      ],
    },
  ],
  mobile: [
    {
      title: 'Marathon Map',
      description: 'Flutter + Firebase app for tracking marathons across the U.S. with add/edit functionality.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
      github: 'https://github.com/shanegpaton/marathon-map',
      image: '/images/projects/marathon-map.jpg',
      bullets: [
        'Firestore sync scales to 1,000+ entries without conflicts',
        'Dynamic forms for all 50 states with real-time map updates',
        'Editable log improves data management and usability',
      ],
    },
    {
      title: 'Plinko',
      description: 'Interactive Plinko game with a custom physics engine, built in C++ and visualized using the MIXR framework.',
      tech: ['C++', 'MIXR', 'Physics', 'Simulation'],
      github: 'https://github.com/shanegpaton/MIXRPlinko',
      bullets: [
        'Designed real-time collision detection and physics for ball-to-peg and ball-to-ball interactions',
        'Implemented customizable gameplay with adjustable gravity, bounce, and ball color',
        'Integrated live score tracking and smooth animated visuals for engaging simulations',
      ],
    },
  ],
};

export default function Projects() {
  const [active, setActive] = useState<typeof TABS[number]['key']>('web');

  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="container-max-width">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-code-blue mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-dark-900/70 border border-dark-700 rounded-xl p-1">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500
                  ${active === tab.key ? 'bg-dark-700 text-dark-100' : 'text-dark-300 hover:text-dark-100 hover:bg-dark-800'}`}
                aria-pressed={active === tab.key}
              >
                <span className="mr-2" aria-hidden>{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div key={active} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {PROJECTS[active].map((proj) => (
              <Link key={proj.title} href={proj.github} target="_blank" rel="noopener noreferrer" className="card-dark rounded-xl border border-dark-700 hover:border-accent-500 transition-colors shadow-md hover:shadow-lg overflow-hidden min-h-[22rem] flex flex-col group">
                {proj.image ? (
                  <div className="relative h-32 md:h-36 w-full overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                  </div>
                ) : (
                  <div className="h-32 md:h-36 w-full bg-gradient-to-r from-dark-800 to-dark-700" />
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xl font-semibold text-dark-100 group-hover:text-accent-400 transition-colors">
                    {proj.title}
                  </div>
                  <p className="text-dark-300 mt-2 mb-4">{proj.description}</p>
                  {proj.bullets && (
                    <ul className="space-y-1 mb-4">
                      {proj.bullets.map((b) => (
                        <li key={b} className="text-sm text-dark-300 flex items-start">
                          <span className="text-accent-400 mr-2">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium bg-dark-700 text-dark-200 border border-dark-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
