import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import CampusInvolvement from '@/components/CampusInvolvement';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <CampusInvolvement />
      <Education />
      <Contact />
    </>
  );
}
