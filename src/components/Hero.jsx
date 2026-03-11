import React from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">

      {/* Background decoration elements */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-[600px] h-[600px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="inline-block px-4 py-2 rounded-full bg-cyan-950/50 flex items-center w-fit border border-cyan-500/30 text-cyan-400 font-medium text-sm mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)] mx-auto md:mx-0">
              <span className="relative flex h-2 w-2 inline-block mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Work
            </motion.div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 text-glow">
                Vanishree Shastri
              </span>
            </motion.h1>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="text-2xl md:text-3xl font-medium text-slate-400 mb-6">
              Software Developer
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Passionate about learning modern technologies and building scalable, high-performance web solutions with <span className="text-cyan-400 font-semibold">2.7 years</span> of experience in full-stack development.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }} whileTap={{ scale: 0.95 }} href="mailto:vanishrishastri0@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 rounded-xl font-bold hover:bg-cyan-400 transition-all">
                <Mail size={18} /> Contact Me
              </motion.a>
              <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)" }} whileTap={{ scale: 0.95 }} href="#projects" className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-700 text-white rounded-xl font-medium hover:bg-slate-800 transition-all">
                View Work <ExternalLink size={18} />
              </motion.a>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center md:justify-start gap-6 text-slate-400">
              <motion.a whileHover={{ scale: 1.2, translateY: -5, color: '#22d3ee', textShadow: "0 0 10px rgba(34,211,238,0.5)" }} target='_blank' href="http://www.linkedin.com/in/vanishree-shastri-18709325b" className="p-3 bg-slate-900/80 rounded-full border border-slate-800 hover:border-cyan-500/50 transition-all"><Linkedin size={20} /></motion.a>
              <motion.a whileHover={{ scale: 1.2, translateY: -5, color: '#22d3ee', textShadow: "0 0 10px rgba(34,211,238,0.5)" }} target='_blank' href="https://portfolio-sigma-peach-28.vercel.app" className="p-3 bg-slate-900/80 rounded-full border border-slate-800 hover:border-cyan-500/50 transition-all"><Github size={20} /></motion.a>
            </motion.div>
          </motion.div>

          {/* Info Card - Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex-1 w-full max-w-md animate-float"
          >
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-bl-full blur-2xl -z-10 transition-transform duration-700 group-hover:scale-150 group-hover:bg-cyan-500/20"></div>

              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulseGlow"></div>
                Quick Contact
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4 group/item cursor-pointer">
                  <div className="p-3 bg-slate-800/80 text-cyan-400 rounded-xl border border-white/5 group-hover/item:border-cyan-500/50 group-hover/item:text-cyan-300 transition-colors shadow-[0_0_10px_rgba(6,182,212,0)] group-hover/item:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <a href="mailto:vanishrishastri0@gmail.com"><Mail size={20} /></a>
                  </div>
                  <div>
                    <a href="mailto:vanishrishastri0@gmail.com"><p className="text-sm text-slate-400 font-medium">Email</p></a>
                    <a href="mailto:vanishrishastri0@gmail.com"><p className="text-slate-200 font-medium break-all group-hover/item:text-white transition-colors">vanishrishastri0@gmail.com</p></a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group/item cursor-pointer">
                  <div className="p-3 bg-slate-800/80 text-purple-400 rounded-xl border border-white/5 group-hover/item:border-purple-500/50 group-hover/item:text-purple-300 transition-colors shadow-[0_0_10px_rgba(168,85,247,0)] group-hover/item:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Phone</p>
                    <p className="text-slate-200 font-medium group-hover/item:text-white transition-colors">+91 7892210504</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group/item cursor-pointer">
                  <div className="p-3 bg-slate-800/80 text-emerald-400 rounded-xl border border-white/5 group-hover/item:border-emerald-500/50 group-hover/item:text-emerald-300 transition-colors shadow-[0_0_10px_rgba(16,185,129,0)] group-hover/item:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Location</p>
                    <p className="text-slate-200 font-medium group-hover/item:text-white transition-colors">Belgaum, Karnataka, India</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
