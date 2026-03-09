import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "GSS College, Belgaum",
      year: "2020 – 2022",
      score: "Passed with Distinction"
    },
    {
      degree: "Pre-University Course (PUC)",
      institution: "RPD College",
      year: "2018 – 2021",
      score: "79%"
    },
    {
      degree: "SSLC",
      institution: "Gomatesh High School, Belgaum",
      year: "2017",
      score: "84%"
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-950 relative">
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[100px] -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15, type: 'spring' }}
              whileHover={{ y: -10 }}
              className="group relative glass-card p-8 rounded-3xl hover:border-indigo-500/50 hover:bg-slate-800/60 shadow-lg transition-all overflow-hidden flex flex-col"
            >
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-indigo-500/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 ease-in-out blur-xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-slate-900 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.2)] flex items-center justify-center text-indigo-400 mb-6 group-hover:text-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-indigo-300 transition-colors">{edu.degree}</h3>
                <p className="font-medium text-slate-400 mb-6">{edu.institution}</p>
                
                <div className="flex items-center justify-between text-sm mt-auto pt-6 border-t border-slate-700/50 group-hover:border-indigo-500/30 transition-colors">
                  <span className="bg-slate-900/50 text-slate-300 px-4 py-1.5 rounded-full shadow-inner border border-slate-700/50">{edu.year}</span>
                  <span className="font-bold text-cyan-400 bg-cyan-950/30 px-4 py-1.5 rounded-full border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
