import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Devamanas completely transformed how we approach social media. Our engagement is up 300% and we are finally getting inbound leads directly from Instagram.",
      author: "Sarah J.",
      role: "E-commerce Founder"
    },
    {
      text: "I was stuck at the same follower count for a year. Through a targeted content strategy, Devamanas helped me break through the noise and double my audience in just 3 months.",
      author: "Michael T.",
      role: "Personal Brand / Coach"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-accent uppercase tracking-wider mb-2"
        >
          Client Success
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-16"
        >
          Don't just take my word for it.
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 sm:p-10 rounded-3xl sm:rounded-[2rem] bg-black border border-white/10 text-left relative overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:border-white/20"
            >
              <div className="absolute top-6 right-8 text-white/5">
                <Quote size={80} />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-medium mb-6 sm:mb-8 relative z-10">
                "{test.text}"
              </p>
              <div className="relative z-10">
                <p className="text-white font-bold">{test.author}</p>
                <p className="text-white/50 text-sm">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
