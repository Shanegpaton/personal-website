'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    const section = new URLSearchParams(window.location.search).get('section');
    if (!section) return;

    const target = document.getElementById(section);
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    window.history.replaceState({}, '', '/');
  }, []);

  return (
    <>
      <Hero />
      <Education />
      <WorkExperience />
      <Projects />
      <Contact />
    </>
  );
}
