// SKYRIFT — Fleet Showcase (Orbital Layout)
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { crafts } from '../data/crafts';
import craftComponents from './crafts/index';
import '../styles/Fleet.css';

const ORBIT_RADIUS_DESKTOP = 400;
const ORBIT_RADIUS_LAPTOP = 330;
const ORBIT_RADIUS_TABLET = 270;

export default function Fleet() {
  const [selected, setSelected] = useState(crafts[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [orbitRadius, setOrbitRadius] = useState(ORBIT_RADIUS_DESKTOP);
  const panelRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width >= 1200) {
        setOrbitRadius(ORBIT_RADIUS_DESKTOP);
      } else if (width >= 992) {
        setOrbitRadius(ORBIT_RADIUS_LAPTOP);
      } else {
        setOrbitRadius(ORBIT_RADIUS_TABLET);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelect = (craft) => {
    if (craft.id === selected.id || isTransitioning) return;
    
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setSelected(craft);
      return;
    }

    setIsTransitioning(true);
    gsap.to(panelRef.current, {
      opacity: 0, scale: 0.95, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        setSelected(craft);
        gsap.fromTo(panelRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.4)', onComplete: () => setIsTransitioning(false) }
        );
      }
    });
  };

  const CraftSVG = craftComponents[selected.id];

  const getOrbitPos = (index, total, radius) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  // orbitRadius is managed by state

  return (
    <section id="fleet" className="fleet section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="label">— THE FLEET</span>
          <h2 className="section-title">CHOOSE<br />YOUR CRAFT</h2>
        </div>

        {!isMobile ? (
          /* ORBITAL LAYOUT (Desktop / Tablet) */
          <div className="fleet__orbital">
            {/* Center SVG display */}
            <div className="fleet__center-display" ref={panelRef}>
              <div className="fleet__craft-svg">
                {CraftSVG && <CraftSVG size={240} animate={true} />}
              </div>
              <div className="fleet__craft-info">
                <h3 className="fleet__craft-name">{selected.name}</h3>
                <p className="fleet__craft-tagline">{selected.tagline}</p>
                <div className="fleet__spec-strip">
                  <div className="fleet__spec">
                    <span className="label">Max Alt</span>
                    <span className="fleet__spec-val">{selected.specs.maxAlt}</span>
                  </div>
                  <div className="fleet__spec">
                    <span className="label">Top Speed</span>
                    <span className="fleet__spec-val">{selected.specs.topSpeed}</span>
                  </div>
                  <div className="fleet__spec">
                    <span className="label">Experience</span>
                    <span className="fleet__spec-val">{selected.specs.experience}</span>
                  </div>
                </div>
                <div className="fleet__price-row">
                  <span className="fleet__price">from ${selected.price}<span>/day</span></span>
                  <div className="fleet__availability">
                    {selected.available ? (
                      <><span className="dot-available" /><span className="label">Available Now</span></>
                    ) : (
                      <><span className="dot-booked" /><span className="label">Booked Through {selected.bookedThrough}</span></>
                    )}
                  </div>
                </div>
                <div className="fleet__actions">
                  <a href="#booking" className="btn-wing btn-wing-primary"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    RENT NOW
                  </a>
                  <button className="btn-ghost">VIEW DETAILS</button>
                </div>
              </div>
            </div>

            {/* Orbit nodes */}
            <div className="fleet__orbit-container">
              {crafts.map((craft, i) => {
                const pos = getOrbitPos(i, crafts.length, orbitRadius);
                const NodeSVG = craftComponents[craft.id];
                const isSelected = craft.id === selected.id;
                return (
                  <div
                    key={craft.id}
                    className={`fleet__node ${isSelected ? 'is-selected' : ''}`}
                    style={{
                      transform: `translate(${pos.x}px, ${pos.y}px)`,
                    }}
                    onClick={() => handleSelect(craft)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleSelect(craft)}
                    aria-label={`Select ${craft.name}`}
                  >
                    <div className="fleet__node-inner">
                      {NodeSVG && <NodeSVG size={50} animate={isSelected} />}
                    </div>
                    <span className="fleet__node-label label">{craft.name}</span>
                    {/* Connector line to center */}
                    <svg className="fleet__connector" aria-hidden="true" style={{ overflow: 'visible' }}>
                      <line
                        x1="50%" y1="50%"
                        x2={`calc(50% - ${pos.x}px)`}
                        y2={`calc(50% - ${pos.y}px)`}
                        stroke={isSelected ? 'var(--sky-electric)' : 'rgba(255,255,255,0.08)'}
                        strokeWidth="1"
                        strokeDasharray={isSelected ? 'none' : '4 4'}
                        style={isSelected ? { animation: 'line-pulse 2s ease-in-out infinite' } : {}}
                      />
                    </svg>
                  </div>
                );
              })}

              {/* Center ring decoration */}
              <div
                className="fleet__orbit-ring"
                style={{
                  width: `${orbitRadius * 2}px`,
                  height: `${orbitRadius * 2}px`,
                }}
              />
            </div>
          </div>
        ) : (
          /* MOBILE: Horizontal scroll strip */
          <div className="fleet__mobile">
            <div className="fleet__mobile-strip">
              {crafts.map((craft) => {
                const NodeSVG = craftComponents[craft.id];
                const isSelected = craft.id === selected.id;
                return (
                  <button
                    key={craft.id}
                    className={`fleet__mobile-card ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => handleSelect(craft)}
                  >
                    {NodeSVG && <NodeSVG size={80} animate={isSelected} />}
                    <span className="label">{craft.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Center display for mobile */}
            <div className="fleet__center-display fleet__center-display--mobile" ref={panelRef}>
              <div className="fleet__craft-svg">
                {CraftSVG && <CraftSVG size={220} animate={true} />}
              </div>
              <div className="fleet__craft-info">
                <h3 className="fleet__craft-name">{selected.name}</h3>
                <p className="fleet__craft-tagline">{selected.tagline}</p>
                <div className="fleet__spec-strip">
                  <div className="fleet__spec">
                    <span className="label">Max Alt</span>
                    <span className="fleet__spec-val">{selected.specs.maxAlt}</span>
                  </div>
                  <div className="fleet__spec">
                    <span className="label">Speed</span>
                    <span className="fleet__spec-val">{selected.specs.topSpeed}</span>
                  </div>
                </div>
                <div className="fleet__price-row">
                  <span className="fleet__price">from ${selected.price}<span>/day</span></span>
                  <div className="fleet__availability">
                    {selected.available ? (
                      <><span className="dot-available" /><span className="label">Available</span></>
                    ) : (
                      <><span className="dot-booked" /><span className="label">Booked</span></>
                    )}
                  </div>
                </div>
                <a href="#booking" className="btn-wing btn-wing-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  RENT NOW
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
