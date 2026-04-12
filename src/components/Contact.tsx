import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_whfk69l",
      "template_lf0y3sr",
      {
        name: name,
        email: email,
      },
      "M4dvP0NLgSuD_Kdsb"
    )
      .then(() => {
        window.history.pushState('', document.title, window.location.pathname + window.location.search);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setName('');
        setEmail('');
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">


      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Let's Expand.</h2>
            <p className="text-white/60 text-sm sm:text-lg">
              Ready to take your social presence to the next level?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left: Form */}
            <form className="space-y-6 flex flex-col" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-10 py-3.5 bg-white text-black font-bold text-[15px] rounded-full hover:bg-gray-200 transition-colors shadow-xl w-max"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Right: Contact Details */}
            <div className="flex flex-col justify-center h-full space-y-8 lg:border-l lg:border-white/10 lg:pl-16 pb-4">
              <div>
                <div className="space-y-8">
                  
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                      <Phone size={20} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm font-medium mb-1">Phone</p>
                      <p className="text-white font-medium">+91 9074061051</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-white/5 rounded-full border border-white/10 shrink-0">
                      <MapPin size={20} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm font-medium mb-1">Location</p>
                      <p className="text-white font-medium leading-relaxed">
                        Kochi, Kerala<br />
                        <span className="text-white/70 text-sm">India</span>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
