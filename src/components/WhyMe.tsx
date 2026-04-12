import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Users, Zap } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

const WhyMe = () => {
  const reasons = [
    {
      icon: <BarChart className="w-6 h-6 text-accent" />,
      title: 'Data-Driven Decisions',
      description: "Everything I do is backed by analytics. I test, iterate, and optimize so every piece of content performs intentionally."
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: 'Community First',
      description: "Vanity metrics don't pay the bills. I focus on building highly engaged communities that actually care about your brand."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: 'Fast Execution',
      description: 'The algorithm moves fast, and so do I. I stay on top of trends so your brand is always part of the conversation.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Why Work With Me</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Growth isn't an accident. <br />
            <span className="text-white/60">It's a process.</span>
          </h3>
          <p className="text-lg text-white/70 mb-8 max-w-xl">
            I don't believe in generic "post every day" advice. I believe in strategic thinking tailored specifically to your unique business goals and target audience. Let's build a machine that works for you 24/7.
          </p>
          <a
           href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors shadow-lg"
          >
            <ArrowUpRight size={16} />
            Start Project
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:w-1/2 flex flex-col gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 glass-panel rounded-2xl flex gap-6 items-start group transition-all duration-500 hover:translate-x-2 hover:-translate-y-1 hover:shadow-2xl hover:border-white/10 border border-transparent"
            >
              <div className="card-icon p-4 bg-white/5 rounded-xl border border-white/10 shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-white/10">
                {reason.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-white/60 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
