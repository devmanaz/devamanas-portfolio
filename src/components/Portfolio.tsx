import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: 'Instagram Page Audit for Café',
      category: 'Audit & Strategy',
      stats: '+150% Profile Views',
      improvement: 'Restructured bio, standardized highlight covers, and introduced a 3-pillar content strategy.'
    },
    {
      title: 'Content Strategy for Personal Brand',
      category: 'Content Strategy',
      stats: '10K+ Followers Gained',
      improvement: 'Shifted focus entirely to educational Reels and implemented an aggressive engagement tactic.'
    },
    {
      title: 'Full Social Media Management',
      category: 'Management',
      stats: '3x Engagement Rate',
      improvement: 'Created a cohesive visual identity and increased posting frequency with high-value carousels.'
    }
  ];

  return (
    <section id="work" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Featured Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Real strategies.<br />
              <span className="text-white/60">Real results.</span>
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <a href="#contact" className="px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors border border-white/10">
              See more on Instagram
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-black/40 border border-white/10 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-white/5 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="px-3 py-1 bg-accent/90 backdrop-blur text-white text-xs font-bold uppercase rounded-md tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <div className="inline-block px-3 py-1 bg-white/10 rounded-lg w-fit text-sm font-medium text-white/90 mb-4">
                  {project.stats}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mt-auto">
                  <span className="text-white/80 font-semibold">How:</span> {project.improvement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
