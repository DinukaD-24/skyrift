// SKYRIFT — How It Works Section (Alternating Timeline Layout)
import { useEffect, useRef } from 'react';
import '../styles/HowItWorks.css';

const steps = [
  {
    num: '01',
    title: 'Choose Your Craft',
    desc: 'Browse our fleet of 12 extraordinary flying machines. Filter by experience level, thrill factor, or pure curiosity.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="var(--sky-electric)" strokeWidth="1.5" />
        <path d="M10,16 Q16,8 22,16 Q16,24 10,16 Z" fill="rgba(0,240,255,0.15)" stroke="var(--sky-electric)" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="3" fill="var(--sky-electric)" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Pick Your Date',
    desc: 'Live availability calendar with real-time slot confirmation. No double bookings, no surprises — ever.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="22" rx="3" stroke="var(--sky-flare)" strokeWidth="1.5" />
        <line x1="4" y1="12" x2="28" y2="12" stroke="var(--sky-flare)" strokeWidth="1.5" />
        <line x1="10" y1="4" x2="10" y2="8" stroke="var(--sky-flare)" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="4" x2="22" y2="8" stroke="var(--sky-flare)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="20" r="3" fill="var(--sky-flare)" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Complete Briefing',
    desc: 'Our 15-minute online safety module — interactive, mandatory, and genuinely interesting. Pass it once, fly for life.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8,4 L24,4 L28,10 L28,28 L4,28 L4,10 Z" stroke="var(--sky-altitude)" strokeWidth="1.5" />
        <path d="M24,4 L24,10 L28,10" stroke="var(--sky-altitude)" strokeWidth="1.5" />
        <path d="M10,16 L14,20 L22,12" stroke="var(--sky-altitude)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Take Flight',
    desc: 'Collect keys, meet your instructor if applicable, and leave everything below behind. This is exactly why you came.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4,20 Q8,8 16,6 Q24,4 28,12" fill="none" stroke="var(--sky-horizon)" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M16,14 L22,10 L24,14 L20,16 Z" fill="var(--sky-horizon)" />
        <path d="M18,15 L14,18 L16,14" fill="rgba(255,92,26,0.5)" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      contentRefs.current.forEach(el => el?.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    contentRefs.current.forEach(el => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="how-it-works section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="label">— THE PROCESS</span>
          <h2 className="section-title">HOW IT<br />WORKS</h2>
        </div>

        <div className="hiw__track">
          <div className="hiw__steps">
            {steps.map((step, i) => (
              <div key={i} className="hiw__step">
                {/* Center node */}
                <div className="hiw__step-node">
                  <div className="hiw__step-icon">{step.icon}</div>
                  <span className="hiw__step-number label">{step.num}</span>
                </div>

                {/* Content panel */}
                <div
                  className="hiw__step-content"
                  ref={el => contentRefs.current[i] = el}
                >
                  <h3 className="hiw__step-title">{step.title}</h3>
                  <p className="hiw__step-desc">{step.desc}</p>
                </div>

                {/* Ghost number — opposite side */}
                <div className="hiw__step-ghost" aria-hidden="true">{step.num}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
