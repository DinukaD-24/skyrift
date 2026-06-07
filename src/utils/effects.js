// SKYRIFT — Scroll Progress & Magnetic Buttons Utility
import { useEffect } from 'react';
import { gsap } from 'gsap';

export function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      bar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export function useMagneticButtons() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const buttons = document.querySelectorAll('.magnetic-btn');

    const handlers = [];

    buttons.forEach((btn) => {
      const onMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 80;

        if (dist < maxDist) {
          const strength = (1 - dist / maxDist) * 12;
          gsap.to(btn, {
            x: dx * strength / dist,
            y: dy * strength / dist,
            duration: 0.3,
            ease: 'power2.out',
          });
        } else {
          gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
        }
      };

      const onMouseLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
      };

      window.addEventListener('mousemove', onMouseMove);
      btn.addEventListener('mouseleave', onMouseLeave);
      handlers.push({ btn, onMouseMove, onMouseLeave });
    });

    return () => {
      handlers.forEach(({ btn, onMouseMove, onMouseLeave }) => {
        window.removeEventListener('mousemove', onMouseMove);
        btn.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);
}
