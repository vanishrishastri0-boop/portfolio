import React from 'react';
import { ExternalLink, Github, Code2, Users, LayoutTemplate } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "TRM – Task Management System",
      description: "An internal tool created to efficiently manage team tasks, monitor workflow, and ensure timely project deliveries within the organization.",
      tags: ["Python", "Django", "Bootstrap"],
      icon: <Users size={32} className="text-cyan-400"/>,
      gradient: "from-cyan-900/40 to-blue-900/40",
      accent: "cyan"
    },
    {
      title: "BharteshBCA Website",
      description: "A comprehensive client website developed meticulously from Figma designs, ensuring a pixel-perfect, highly responsive user interface.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      icon: <LayoutTemplate size={32} className="text-purple-400"/>,
      gradient: "from-purple-900/40 to-pink-900/40",
      accent: "purple"
    },
    {
      title: "Student Tracking System",
      description: "A software solution designed to monitor student attendance, grades, and academic progress, simplifying administrative overhead.",
      tags: ["HTML/CSS", "Backend Sys", "Database"],
      icon: <Code2 size={32} className="text-emerald-400"/>,
      gradient: "from-emerald-900/40 to-teal-900/40",
      accent: "emerald"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-cyan-900/20 rounded-full mix-blend-screen blur-[120px] z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-purple-900/20 rounded-full mix-blend-screen blur-[150px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mx-auto md:mx-0 mb-6"></div>
            <p className="text-lg text-slate-400 leading-relaxed">
              A selection of recent work highlighting my full-stack capabilities, from robust internal tools to pixel-perfect client websites.
            </p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 border border-slate-700 text-cyan-400 rounded-2xl hover:bg-slate-700 hover:border-cyan-500/50 transition-all shrink-0 font-bold"
          >
            <Github size={20} /> View GitHub
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -15 }}
              className={`group flex flex-col glass-card rounded-[2.5rem] overflow-hidden hover:shadow-[0_0_30px_rgba(var(--${project.accent}-500),0.2)] h-full`}
            >
              <div className={`h-56 bg-gradient-to-br ${project.gradient} p-8 flex flex-col justify-between relative overflow-hidden`}>
                {/* Abstract shape overlay */}
                <div className={`absolute bottom-0 right-0 w-48 h-48 bg-${project.accent}-500/20 rounded-full filter blur-[40px] translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div className={`w-16 h-16 bg-slate-900/80 backdrop-blur-md rounded-2xl flex items-center justify-center border border-${project.accent}-500/30 relative z-10 group-hover:scale-110 transition-transform shadow-lg`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mt-auto relative z-10 group-hover:text-cyan-300 transition-colors drop-shadow-md">{project.title}</h3>
              </div>
              
              <div className="p-8 flex-1 flex flex-col bg-slate-900/50">
                <p className="text-slate-400 leading-relaxed mb-8 flex-1 text-lg">
                  {project.description}
                </p>
                
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`text-sm font-semibold text-${project.accent}-300 bg-${project.accent}-900/30 px-4 py-2 rounded-xl border border-${project.accent}-500/30`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={`pt-6 border-t border-slate-700/50 w-full flex justify-between items-center group-hover:border-${project.accent}-500/30 transition-colors`}>
                  <a href="#" className={`font-bold text-slate-400 hover:text-${project.accent}-400 flex items-center gap-2 text-md transition-colors`}>
                    View Details <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
