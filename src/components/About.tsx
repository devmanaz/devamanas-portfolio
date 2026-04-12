import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">About Me</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 text-white leading-tight">
            I don't just post content. <br className="hidden md:block" />
            <span className="text-white/60">I build communities.</span>
          </h3>
          <motion.p
            className="text-lg text-white/70 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I'm Devamanas. I'm a social media and content strategist passionate about helping small businesses and personal brands unlock their digital potential.
          </motion.p>
          <motion.p
            className="text-lg text-white/70 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            I believe that every brand has a unique story. My job is to translate that story into a growth-focused strategy that turns casual scrollers into loyal customers. Let's make the algorithm work for you.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-5 glass-panel rounded-2xl group transition-all duration-500 hover:-translate-y-1.5 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-white/10 cursor-default">
              <h4 className="text-3xl font-bold text-white mb-1 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent origin-left">2y+</h4>
              <p className="text-white/60 text-sm">Experience</p>
            </div>
            <div className="p-5 glass-panel rounded-2xl group transition-all duration-500 hover:-translate-y-1.5 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-white/10 cursor-default">
              <h4 className="text-3xl font-bold text-white mb-1 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent origin-left">10+</h4>
              <p className="text-white/60 text-sm">Brands Scaled</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

