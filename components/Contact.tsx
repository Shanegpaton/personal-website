'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MessageCircle, Code } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual form handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-dark-900">
      <div className="container-max-width">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-lg text-dark-300">
              Interested in working together? I'd love to hear from you.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-code-blue mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-dark-100 mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-accent-400" />
                Let's Connect
              </h3>
              <p className="text-dark-300 mb-8 leading-relaxed">
                Prefer email or socials. Reach out and I'll get back quickly.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:shanegpaton@gmail.com"
                  className="flex items-center text-dark-300 hover:text-accent-400 transition-colors p-3 rounded-lg hover:bg-dark-800"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  shanegpaton@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/shanepaton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-dark-300 hover:text-accent-400 transition-colors p-3 rounded-lg hover:bg-dark-800"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  linkedin.com/in/shanepaton
                </a>
                <a
                  href="https://github.com/shanegpaton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-dark-300 hover:text-accent-400 transition-colors p-3 rounded-lg hover:bg-dark-800"
                >
                  <Github className="w-5 h-5 mr-3" />
                  github.com/shanegpaton
                </a>
              </div>
              
              {/* Code snippet */}
              <div className="mt-8 code-block">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-code-red rounded-full"></div>
                  <div className="w-3 h-3 bg-code-yellow rounded-full"></div>
                  <div className="w-3 h-3 bg-code-green rounded-full"></div>
                  <span className="text-dark-400 text-sm ml-2">contact.sh</span>
                </div>
                <div className="text-code-green">
                  <div className="mb-1">$ echo "Let's build something amazing!"</div>
                  <div className="text-accent-400">Let's build something amazing!</div>
                  <div className="mb-1">$ open mailto:shanegpaton@gmail.com</div>
                  <div className="text-code-blue">Launching email client ✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
