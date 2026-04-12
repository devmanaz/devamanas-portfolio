import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyMe from './components/WhyMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const panels = () => document.querySelectorAll<HTMLElement>('.glass-panel');

    const handleMouseMove = (e: MouseEvent) => {
      panels().forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty('--mouse-x', `${x}px`);
        el.style.setProperty('--mouse-y', `${y}px`);

        const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
        el.classList.toggle('is-hovered', inside);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#0f1117', color: '#e8e8f0' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
