// SKYRIFT — Main App Component
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Fleet from './components/Fleet';
import ExperienceTiers from './components/ExperienceTiers';
import HowItWorks from './components/HowItWorks';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import { useScrollProgress, useMagneticButtons } from './utils/effects';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useScrollProgress();
  useMagneticButtons();

  // Section entrance animations
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        gsap.set(section, { opacity: 1, y: 0 });
      });
      return;
    }

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(section,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
        once: true,
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  // Parallax on scroll for hero elements
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const heroHeadline = document.querySelector('.hero__headline');
    if (heroHeadline) {
      ScrollTrigger.create({
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(heroHeadline, { y: self.progress * -80 });
        },
      });
    }
  }, []);

  return (
    <div className="app">
      {/* Global scroll progress bar */}
      <div id="scroll-progress" />

      {/* Custom cursor */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <StatsBar />
        <Fleet />
        <ExperienceTiers />
        <HowItWorks />
        <BookingForm />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
