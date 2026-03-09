import React from 'react';
import { Layers, MonitorSmartphone, PenTool, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: <Layers size={24} className="text-cyan-400" />,
      skills: ["Python", "Django", "React", "Next.js"],
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
    },
    {
      title: "Frontend Technologies",
      icon: <MonitorSmartphone size={24} className="text-emerald-400" />,
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
    },
    {
      title: "Tools & Platforms",
      icon: <PenTool size={24} className="text-orange-400" />,
      skills: ["Git", "Jira", "Bitbucket", "Figma To UI"],
      color: "from-orange-500/20 to-rose-500/20",
      borderColor: "border-orange-500/30",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
    },
    {
      title: "Core Expertise",
      icon: <Database size={24} className="text-purple-400" />,
      skills: ["API Integration", "CRUD Systems", "Responsive Design"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 hover:gap-8 transition-all duration-500">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`glass-card rounded-[2rem] p-8 flex flex-col group ${category.hoverShadow}`}
            >
              <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${category.color} border ${category.borderColor} shadow-inner`}>
                <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                  {category.icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-emerald-400 transition-colors">{category.title}</h3>
              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className={`px-4 py-2 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white text-sm rounded-xl font-medium transition-all border border-slate-700/50 hover:${category.borderColor} cursor-pointer`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
