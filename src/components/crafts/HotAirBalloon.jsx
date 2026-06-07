// Hot Air Balloon SVG Component
export default function HotAirBalloon({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="balloonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5C1A" />
          <stop offset="50%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FF5C1A" />
        </linearGradient>
        <linearGradient id="balloonStripe" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
        <filter id="glow-balloon">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Balloon body group - floats */}
      <g style={animate ? { animation: 'balloon-float 4s ease-in-out infinite' } : {}}>
        {/* Main balloon body */}
        <ellipse cx="150" cy="80" rx="70" ry="75" fill="url(#balloonGrad)" stroke="#FF5C1A" strokeWidth="1.5" />

        {/* Balloon highlight */}
        <ellipse cx="125" cy="55" rx="25" ry="30" fill="url(#balloonStripe)" />

        {/* Vertical stripes */}
        {[-40,-20,0,20,40].map((x, i) => (
          <line key={i} x1={150+x} y1="10" x2={150+x*0.3} y2="155"
            stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        ))}

        {/* Top detail */}
        <ellipse cx="150" cy="10" rx="15" ry="8" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

        {/* Bottom opening */}
        <ellipse cx="150" cy="155" rx="20" ry="8" fill="var(--sky-midnight)" stroke="#FF5C1A" strokeWidth="1.5" />

        {/* Flame inside opening */}
        <g style={animate ? { transformOrigin: '150px 148px', animation: 'flame-flicker 0.4s ease-in-out infinite' } : {}}>
          <path d="M142,148 Q150,130 158,148" fill="none" stroke="#FFB347" strokeWidth="2" />
          <path d="M145,148 Q150,136 155,148" fill="none" stroke="#FF5C1A" strokeWidth="1.5" />
          <path d="M148,148 Q150,140 152,148" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
        </g>
        <ellipse cx="150" cy="148" rx="10" ry="4" fill="#FF8C00" opacity="0.6"
          style={animate ? { animation: 'flame-flicker 0.4s ease-in-out infinite' } : {}} />

        {/* Ropes */}
        <line x1="130" y1="155" x2="120" y2="178" stroke="rgba(232,237,247,0.5)" strokeWidth="1" />
        <line x1="135" y1="158" x2="130" y2="180" stroke="rgba(232,237,247,0.5)" strokeWidth="1" />
        <line x1="165" y1="158" x2="170" y2="180" stroke="rgba(232,237,247,0.5)" strokeWidth="1" />
        <line x1="170" y1="155" x2="180" y2="178" stroke="rgba(232,237,247,0.5)" strokeWidth="1" />

        {/* Basket */}
        <rect x="118" y="178" width="64" height="28" rx="3" fill="none" stroke="#E8EDF7" strokeWidth="2" />
        {/* Basket weave lines */}
        <line x1="130" y1="178" x2="130" y2="206" stroke="rgba(232,237,247,0.3)" strokeWidth="1" />
        <line x1="142" y1="178" x2="142" y2="206" stroke="rgba(232,237,247,0.3)" strokeWidth="1" />
        <line x1="158" y1="178" x2="158" y2="206" stroke="rgba(232,237,247,0.3)" strokeWidth="1" />
        <line x1="170" y1="178" x2="170" y2="206" stroke="rgba(232,237,247,0.3)" strokeWidth="1" />
        <line x1="118" y1="189" x2="182" y2="189" stroke="rgba(232,237,247,0.3)" strokeWidth="1" />

        {/* Passengers (silhouettes) */}
        <circle cx="135" cy="180" r="4" fill="rgba(232,237,247,0.4)" />
        <circle cx="165" cy="180" r="4" fill="rgba(232,237,247,0.4)" />
      </g>
    </svg>
  );
}
