import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Technomind IT Solutions (TMITS)",
      period: "Aug 2023 – Present",
      description: [
        "Developed backend modules using Python and Django for school and college management systems.",
        "Built internal software TRM (Task Management System) for project tasks.",
        "Implemented frontend UI based on Figma designs using HTML, CSS, and Bootstrap.",
        "Developed and launched client website “BharteshBCA” using React/Next.js."
      ]
    },
    {
      title: "Android Developer",
      company: "Techtree IT System",
      period: "Nov 2022 – Mar 2023",
      description: [
        "Worked on Android UI/UX tasks using Android Studio.",
        "Designed application components based on Material Design guidelines.",
        "Completed tasks assigned via Jira and collaborated using Bitbucket."
      ]
    },
    {
      title: "Software Development Intern",
      company: "Infynow Technology",
      period: "Prior to Nov 2022",
      description: [
        "Worked on Project: Student Tracking System.",
        "Developed a system to track student attendance, marks, and academic progress."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900 relative">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full mix-blend-screen filter blur-[120px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-0 md:border-none space-y-12">
          {/* Vertical neon line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, type: 'spring' }}
              className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Timeline marker for desktop */}
              <motion.div 
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex absolute left-1/2 top-4 w-12 h-12 bg-slate-900 border-2 border-purple-500 rounded-full text-purple-400 items-center justify-center -translate-x-1/2 shadow-[0_0_20px_rgba(168,85,247,0.4)] z-10 cursor-pointer"
              >
                <Briefcase size={20} />
              </motion.div>
              
              {/* Timeline marker for mobile */}
              <div className="md:hidden absolute -left-[15px] top-6 w-8 h-8 bg-slate-900 border-2 border-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulseGlow"></div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-[45%]"></div>

              {/* Card */}
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -2 : 2 }}
                className="w-full md:w-[45%] ml-6 md:ml-0 group perspective"
              >
                <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-bl-full blur-xl -z-10 transition-transform duration-700 group-hover:scale-150"></div>
                  
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    <Calendar size={14} /> {exp.period}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{exp.title}</h3>
                  <h4 className="text-md font-semibold text-slate-400 mb-6 uppercase tracking-wider">{exp.company}</h4>
                  
                  <ul className="space-y-3 text-slate-300 text-sm md:text-base">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1.5 shrink-0 text-lg leading-none">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
