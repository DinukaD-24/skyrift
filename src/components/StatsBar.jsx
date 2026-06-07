// SKYRIFT — Stats Bar Section
import { useEffect, useRef, useState } from 'react';
import '../styles/StatsBar.css';

const stats = [
  { value: 4200, suffix: '+', label: 'Happy Flyers', prefix: '' },
  { value: 138, suffix: '', label: 'Licensed Craft', prefix: '' },
  { value: 99.1, suffix: '%', label: 'Safety Record', prefix: '' },
  { value: 12, suffix: '', label: 'Craft Categories', prefix: '' },
];

function AnimatedCounter({ target, suffix, prefix, isFloat, started }) {
  const [count, setCount] = useState(0);
  const startTime = useRef(null);
  const raf = useRef(null);
  const duration = 2000;

  useEffect(() => {
    if (!started) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setCount(isFloat ? target.toFixed(1) : target);
      return;
    }

    startTime.current = null;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isFloat ? current.toFixed(1) : Math.floor(current));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setCount(isFloat ? target.toFixed(1) : target);
      }
    };

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [started, target]);

  return <span className="stat__value">{prefix}{count}{suffix}</span>;
}

export default function StatsBar() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-bar" ref={ref}>
      <div className="stats-bar__inner">
        {stats.map((stat, i) => (
          <div key={i} className="stat">
            <AnimatedCounter
              target={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              isFloat={stat.value % 1 !== 0}
              started={started}
            />
            <span className="stat__label label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
