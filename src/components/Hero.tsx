import { ArrowUpRight, LayoutList } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">


      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12 pt-40 sm:pt-52 pb-16 sm:pb-24 max-w-4xl mx-auto w-full flex flex-col items-center text-center">


        {/* Main Heading */}
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
          Heyy, I'm Devamanas.
          <span className="text-white/50 block mt-3 text-sm sm:text-lg lg:text-xl font-medium tracking-wide">
            growing brands through content &amp; strategy.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/45 text-base sm:text-lg leading-relaxed max-w-[600px] mb-10">
          Building strong online presence for brands and creators with data-driven
          social media tactics and thumb-stopping content.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="
              group inline-flex items-center justify-center gap-2.5
              px-8 py-3.5 rounded-full w-full sm:w-auto
              bg-white text-black text-sm font-semibold
              hover:bg-white/90 active:scale-[0.98]
              transition-all duration-200
            "
          >
            <ArrowUpRight size={16} />
            Work With Me
          </a>

          <a
            href="#services"
            className="
              group inline-flex items-center justify-center gap-2.5
              px-8 py-3.5 rounded-full w-full sm:w-auto
              bg-white/[0.06] border border-white/10 text-white text-sm font-semibold
              hover:bg-white/[0.1] active:scale-[0.98]
              transition-all duration-200
            "
          >
            <LayoutList size={15} className="text-white/70" />
            View Services
          </a>
        </div>

        {/* Company Carousel */}
        <div className="mt-16 sm:mt-24 border-t border-white/10 pt-8 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-6 text-center">
            Working with
          </p>
          <motion.div
            className="flex w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {/* First set */}
            <div className="flex justify-around items-center gap-10 sm:gap-16 px-5 sm:px-8">
              {["Lenient Tree", "Global Brands", "Mnz Graphy", "Brik Community"].map((company, index) => (
                <span key={`1-${index}`} className="text-white/40 font-bold text-base sm:text-lg tracking-tight opacity-70 whitespace-nowrap">
                  {company}
                </span>
              ))}
            </div>
            {/* Duplicated set for seamless infinite scroll */}
            <div className="flex justify-around items-center gap-10 sm:gap-16 px-5 sm:px-8">
              {["Lenient Tree", "Global Brands", "Mnz Graphy", "Brik Community"].map((company, index) => (
                <span key={`2-${index}`} className="text-white/40 font-bold text-base sm:text-lg tracking-tight opacity-70 whitespace-nowrap">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-transparent pointer-events-none z-0" />
    </section>
  );
};

export default Hero;
