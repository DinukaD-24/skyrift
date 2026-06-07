import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    let raf;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      raf = requestAnimationFrame(animateRing);
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .clickable')) {
        ring.style.width = '50px';
        ring.style.height = '50px';
        ring.style.borderColor = 'var(--sky-horizon)';
        ring.style.backgroundColor = 'rgba(255, 92, 26, 0.1)';
      } else {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'var(--sky-electric)';
        ring.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        id="cursor-dot"
        style={{
          position: 'fixed',
          top: '-4px',
          left: '-4px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--sky-horizon)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px var(--sky-horizon)',
        }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        style={{
          position: 'fixed',
          top: '-16px',
          left: '-16px',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid var(--sky-electric)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease',
        }}
      />
    </>
  );
}
