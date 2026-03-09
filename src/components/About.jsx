import React from 'react';
import { Terminal, Lightbulb, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: <Terminal className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={32} />,
      title: "Backend Development",
      description: "Building robust APIs and modules using Python and Django for complex management systems."
    },
    {
      icon: <Code2 className="text-purple-400 group-hover:text-purple-300 transition-colors" size={32} />,
      title: "Modern Frontend",
      description: "Creating responsive, beautiful UIs from Figma designs using React, Next.js, and Tailwind CSS."
    },
    {
      icon: <Lightbulb className="text-emerald-400 group-hover:text-emerald-300 transition-colors" size={32} />,
      title: "Problem Solving",
      description: "Developing custom CRUD-based systems and integrating dynamic data effectively."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/20 rounded-full mix-blend-screen filter blur-[100px] -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am a Trainee Software Developer with over 2.7 years of professional experience bridging the gap between elegant design and technical realization. My journey involves creating intuitive user interfaces and architecting solid backend systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5, type: 'spring' }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[2rem] group"
            >
              <div className="w-16 h-16 bg-slate-900/80 rounded-2xl flex items-center justify-center shadow-inner border border-white/10 mb-8 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  {item.icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
