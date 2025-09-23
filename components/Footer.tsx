import { Code, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-max-width">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-6 h-6 text-accent-400" />
                <span className="text-xl font-bold gradient-text">Shane Paton</span>
              </div>
              <p className="text-dark-400 text-sm">
                Software Engineering Student building scalable systems and web applications.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-dark-200 font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-dark-400 hover:text-accent-400 transition-colors text-sm">
                  About
                </a>
                <a href="#projects" className="block text-dark-400 hover:text-accent-400 transition-colors text-sm">
                  Projects
                </a>
                <a href="/resume" className="block text-dark-400 hover:text-accent-400 transition-colors text-sm">
                  Resume
                </a>
                <a href="#contact" className="block text-dark-400 hover:text-accent-400 transition-colors text-sm">
                  Contact
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-dark-200 font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="mailto:shanegpaton@gmail.com"
                  className="text-dark-400 hover:text-accent-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/shanegpaton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-accent-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/shanepaton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-accent-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-dark-800 pt-8 text-center">
            <p className="text-dark-400 text-sm">
              © {new Date().getFullYear()} Shane Paton. All rights reserved.
            </p>
            <p className="text-dark-500 text-xs mt-2 font-mono">
              shanepaton.dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
