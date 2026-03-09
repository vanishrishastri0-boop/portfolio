import React from 'react';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 text-slate-400 relative overflow-hidden">
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-12 mb-16"
        >
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <a href="#" className="font-bold text-3xl tracking-tighter text-white inline-block mb-6 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulseGlow shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              VS.<span className="text-cyan-400">Portfolio</span>
            </a>
            <p className="max-w-sm mb-8 leading-relaxed text-slate-400 text-lg">
              Software Developer passionate about building robust backend systems and beautiful, highly animated functional user interfaces.
            </p>
            <div className="flex gap-4">
              <a href="mailto:vanishrishastri0@gmail.com" className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900/50 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:-translate-y-1">
                <Mail size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900/50 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900/50 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all hover:-translate-y-1">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Navigation</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors">Experience</a></li>
              <li><a href="#education" className="text-slate-400 hover:text-cyan-400 transition-colors">Education</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-4 font-medium text-slate-400">
              <li className="flex flex-col">
                <span className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Email</span>
                <a href="mailto:vanishrishastri0@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  vanishrishastri0@gmail.com
                </a>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Phone</span>
                <a href="tel:+917892210504" className="text-slate-300 hover:text-purple-400 transition-colors">
                  +91 7892210504
                </a>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Location</span>
                <span className="text-slate-300">
                  Belgaum, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} Vanishree Shastri. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            BACK TO TOP 
            <div className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900/50 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
