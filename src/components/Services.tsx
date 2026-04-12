import React from 'react';
import { motion } from 'framer-motion';
import { Globe, FileText, Share2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'IT Services',
      description: 'Custom website development and technical solutions tailored to your business needs.',
      points: ['Responsive Web Design', 'SEO Friendly Structure', 'Form Integration']
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'Content Strategy',
      description: 'Stop guessing what to post. Get a clear roadmap for content that converts.',
      points: ['Content planning', 'Reels ideas', 'Content calendar']
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: 'Social Media Management',
      description: 'Focus on your business while I handle your social media presence end-to-end.',
      points: ['Content handling', 'Caption writing', 'Growth-focused strategy']
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-2"
          >
            My Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How I can help you grow
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 group transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-transparent hover:border-white/5"
            >
              <div className="card-icon w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_10px_20px_rgba(139,92,246,0.5)]">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center text-white/80 font-medium">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
