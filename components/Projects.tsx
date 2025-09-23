import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Code2, Zap, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Spotify Song Ranker',
    description: 'React application for discovering and ranking music with Spotify integration.',
    bullets: [
      'Introduced song searching via Spotify API, enabling users to fetch tracks and streamline exploration',
      'Incorporated real-time UI updates with React hooks, improving responsiveness',
      'Implemented drag-and-drop song ranking, replicating Spotify\'s design for intuitive UX'
    ],
    tech: ['React', 'JavaScript', 'Spotify API', 'CSS'],
    image: '/images/projects/spotify-ranker.jpg',
    github: 'https://github.com/shanegpaton/spotify-ranker',
    demo: '#',
    icon: Zap,
    color: 'code-green'
  },
  {
    title: 'Order Matching Engine',
    description: 'High-performance C++ engine for processing financial orders with multithreading.',
    bullets: [
      'Designed a multithreaded, low-latency order matching engine capable of processing 750,000+ orders per second',
      'Created a custom memory pool cutting dynamic memory allocation by over 50%',
      'Built batching and synchronization mechanisms ensuring thread safety and efficiency'
    ],
    tech: ['C++', 'Multithreading', 'Memory Management', 'Performance Optimization'],
    image: '/images/projects/matching-engine.jpg',
    github: 'https://github.com/shanegpaton/order-matching-engine',
    demo: '#',
    icon: Code2,
    color: 'code-blue'
  },
  {
    title: 'Marathon Map',
    description: 'Flutter app for tracking marathon progress across all 50 U.S. states.',
    bullets: [
      'Enabled scalable cloud synchronization handling 1,000+ user entries without sync issues via Firebase Firestore',
      'Built dynamic forms for all 50 U.S. states, updating a map view in real time',
      'Constructed an editable log page allowing users to manipulate entries and increase usability'
    ],
    tech: ['Flutter', 'Firebase', 'Dart', 'Google Maps API'],
    image: '/images/projects/marathon-map.jpg',
    github: 'https://github.com/shanegpaton/marathon-map',
    demo: '#',
    icon: Smartphone,
    color: 'code-purple'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-dark-800">
      <div className="container-max-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in backend systems, 
            mobile development, and web applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-code-blue mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="card-dark overflow-hidden glow-effect group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`bg-dark-900/90 p-2 rounded-lg border border-${project.color} text-${project.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-100 mb-2 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-300 mb-4">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {project.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm text-dark-300 flex items-start">
                        <span className={`text-${project.color} mr-2 font-bold`}>▶</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-700 text-dark-200 text-xs font-medium rounded-full border border-dark-600 hover:border-accent-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className="flex items-center text-dark-400 hover:text-accent-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </Link>
                    <Link
                      href={project.demo}
                      className="flex items-center text-dark-400 hover:text-accent-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
