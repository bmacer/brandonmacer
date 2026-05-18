import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Code2, 
  ChevronRight,
  Send,
  CheckCircle2
} from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Log', href: '#log' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      title: 'AI Integration & Tooling',
      description: 'Inject standard language model APIs seamlessly into legacy tech stacks or internal operational support channels to automatically parse, summarize, and route chaotic raw business data streams.',
      icon: <Cpu className="w-8 h-8 text-emerald-400" />,
    },
    {
      title: 'Workflow Automation',
      description: 'Building lightweight, secure, stable API middleware and data-sync pipelines that accurately handle communication between distinct external business platforms, eliminating manual double-entry human errors.',
      icon: <Workflow className="w-8 h-8 text-emerald-400" />,
    },
    {
      title: 'Technical Solutions Support',
      description: 'Deep architectural systems troubleshooting, performance bottleneck profiling, comprehensive operations documentation audits, and dedicated systems optimization triage.',
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    },
  ];

  const projects = [
    {
      title: 'Evrloot',
      description: 'Custom frontend interfaces, complex localized state management pipelines, data mapping schemas, and clean, performant canvas or grid logic rendering layers.',
      problemSolved: 'Solved the challenge of visualizing complex real-time game data with performant rendering and seamless state synchronization.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
      link: 'https://github.com/bmacer/evrloot',
    },
    {
      title: 'Clipperz',
      description: 'Practical everyday utility execution, precise problem-solving capabilities, and user experience-focused responsive design tool parameters.',
      problemSolved: 'Streamlined the digital clipping and organization process with an intuitive, mobile-first interface and robust local storage.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
      link: 'https://github.com/bmacer/clipperz',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-slate-900/80 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-white tracking-tight">Brandon Macer</a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-all duration-200 ease-in-out hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            Brandon Macer
          </h1>
          <p className="text-base text-slate-400 md:text-xl max-w-2xl mt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            I am a technical solutions engineer who bridges the gap between complex software systems and real-world business needs. 
            I specialize in building automation workflows and AI integrations that eliminate operational friction for technical and non-technical teams alike.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <a 
              href="#services" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-md transition text-center flex items-center justify-center gap-2"
            >
              Explore Services
              <ChevronRight size={18} />
            </a>
            <a 
              href="#projects" 
              className="border border-slate-700 hover:bg-slate-800 text-slate-300 px-6 py-3 rounded-md transition text-center"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Services Section */}
        <section id="services" className="py-20 border-t border-slate-900">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-slate-400 max-w-2xl">Specialized technical solutions designed to drive efficiency and eliminate manual overhead.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 border border-slate-800 p-6 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/80 group"
              >
                <div>
                  <div className="mb-6 p-3 bg-slate-900 rounded-lg inline-block group-hover:bg-emerald-500/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <a href="#contact" className="text-emerald-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:text-emerald-300 transition-colors">
                    Inquire <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projects" className="py-20 border-t border-slate-900">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Portfolio Showcase</h2>
            <p className="text-slate-400 max-w-2xl">Independent software implementations focusing on performance and user utility.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-700">
                {/* Placeholder Image Container */}
                <div className="aspect-video bg-slate-800 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-slate-500 font-mono text-sm uppercase tracking-widest">{project.title} Asset Frame</span>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all">
                      <Code2 size={20} />
                    </a>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">Problem Solved</h4>
                    <p className="text-slate-400 text-sm italic">
                      "{project.problemSolved}"
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Log Section */}
        <section id="log" className="py-20 border-t border-slate-900">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Things I got done</h2>
            <p className="text-slate-400 max-w-2xl">A running log of recent technical milestones and successful implementations.</p>
          </div>
          
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-slate-800">
              <div className="absolute -left-[1px] top-0 w-[1px] h-full bg-gradient-to-b from-emerald-500 to-transparent"></div>
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              
              <div className="mb-2">
                <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">Today</span>
                <span className="ml-3 text-slate-500 text-sm font-medium">{new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</span>
              </div>
              
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3 group">
                  <CheckCircle2 size={18} className="mt-1 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-200">Created this portfolio and consulting landing page from scratch.</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <CheckCircle2 size={18} className="mt-1 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-200">Created a script to make requests for Atlassian XRay API keys streamlined, integrating an automatic browser popup and automatic safe credential sharing with 1Password.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-slate-900">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-400">Ready to optimize your workflows or integrate AI? Let's discuss your requirements.</p>
          </div>
          <div className="max-w-md mx-auto bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md p-3 text-white outline-none w-full transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 ml-1">Business Name (Optional)</label>
                <input 
                  type="text" 
                  placeholder="Acme Corp"
                  className="bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md p-3 text-white outline-none w-full transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md p-3 text-white outline-none w-full transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 ml-1">Project Requirements</label>
                <select className="bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md p-3 text-white outline-none w-full transition-all appearance-none cursor-pointer">
                  <option>Automation Pipeline Architecture</option>
                  <option>AI System Integration</option>
                  <option>General Engineering Advisory</option>
                  <option>Full-Time Role Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 ml-1">Project Overview</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project needs..."
                  className="bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-md p-3 text-white outline-none w-full transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-md transition flex items-center justify-center gap-2 group"
              >
                Send Inquiry
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-900 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Brandon Macer. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/bmacer" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Code2 size={20} />
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
