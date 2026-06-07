// SKYRIFT — Hero Section
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HotAirBalloon from './crafts/HotAirBalloon';
import '../styles/Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const balloonRef = useRef(null);
  const headlineRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);
  const scrollIndRef = useRef(null);

  // Mouse parallax on balloon
  useEffect(() => {
    const hero = heroRef.current;
    const balloon = balloonRef.current;
    if (!hero || !balloon) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (e.clientX - rect.left - cx) / cx;
      const dy = (e.clientY - rect.top - cy) / cy;
      const angle = dx * 8;
      balloon.style.transform = `rotate(${angle}deg)`;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP entrance animation
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      gsap.set(heroRef.current, { opacity: 1 });
      gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], { y: 0, opacity: 1 });
      gsap.set(subRef.current, { opacity: 1, y: 0 });
      gsap.set(btnsRef.current, { scale: 1, opacity: 1 });
      gsap.set(balloonRef.current, { x: 0, opacity: 1 });
      gsap.set(scrollIndRef.current, { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.1 });

    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 })
      .fromTo(line1Ref.current, { y: 120, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.6)
      .fromTo(line2Ref.current, { y: 120, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.75)
      .fromTo(line3Ref.current, { y: 120, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.9)
      .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 1.3)
      .fromTo(btnsRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, 1.5)
      .fromTo(balloonRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, 1.8)
      .fromTo(scrollIndRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 2.0);

    return () => tl.kill();
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Animated star field */}
      <div className="hero__stars" aria-hidden="true">
        <div className="stars-layer stars-layer--slow" />
        <div className="stars-layer stars-layer--medium" />
        <div className="stars-layer stars-layer--fast" />
      </div>

      {/* Sky glow elements */}
      <div className="hero__glow hero__glow--orange" aria-hidden="true" />
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />


      <div className="hero__content">
        {/* Left: text content */}
        <div className="hero__text">
          {/* Headline */}
          <div className="hero__headline" ref={headlineRef}>
            <div className="hero__line-wrapper">
              <h1 className="hero__line" ref={line1Ref}>LEAVE</h1>
            </div>
            <div className="hero__line-wrapper">
              <h1 className="hero__line hero__line--indent" ref={line2Ref}>THE GROUND</h1>
            </div>
            <div className="hero__line-wrapper">
              <h1 className="hero__line" ref={line3Ref}>
                BEHIND
                <span className="hero__accent"> ↗</span>
              </h1>
            </div>
          </div>

          {/* Subline */}
          <p className="hero__sub label" ref={subRef}>
            12 aircraft · 6 continents · 1 booking platform
          </p>

          {/* CTA Buttons */}
          <div className="hero__buttons" ref={btnsRef}>
            <a href="#booking" className="btn-wing btn-wing-primary magnetic-btn"
              onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M1,5 L15,5 M10,1 L15,5 L10,9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              BOOK A FLIGHT
            </a>
            <a href="#fleet" className="btn-ghost magnetic-btn"
              onClick={(e) => { e.preventDefault(); document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth' }); }}>
              EXPLORE FLEET
            </a>
          </div>
        </div>

        {/* Right: Hero Balloon */}
        <div className="hero__balloon" ref={balloonRef} aria-hidden="true">
          <HotAirBalloon size={460} animate={true} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" ref={scrollIndRef} aria-hidden="true">
        <span className="hero__scroll-label label">SCROLL TO FLY</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
