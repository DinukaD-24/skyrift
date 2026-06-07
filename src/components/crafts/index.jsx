// All Craft SVG Components
import HotAirBalloon from './HotAirBalloon';

export function Paraglider({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="chutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="50%" stopColor="#5B4DFF" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
      {/* Canopy */}
      <g style={animate ? { transformOrigin: '150px 60px', animation: 'canopy-breathe 2.5s ease-in-out infinite' } : {}}>
        <path d="M40,80 Q90,20 150,15 Q210,20 260,80 Q225,90 200,80 Q175,60 150,58 Q125,60 100,80 Q75,90 40,80 Z"
          fill="url(#chutGrad)" stroke="#00F0FF" strokeWidth="1.5" opacity="0.9" />
        {/* Cells */}
        {[70, 100, 130, 160, 190, 220].map((x, i) => (
          <line key={i} x1={x} y1="18" x2={x} y2="75" stroke="rgba(0,240,255,0.3)" strokeWidth="0.8" />
        ))}
        {/* Highlight */}
        <path d="M80,65 Q120,25 160,22 Q140,28 105,65 Z" fill="rgba(255,255,255,0.15)" />
      </g>
      {/* Lines to pilot */}
      {[80,110,150,190,220].map((x, i) => (
        <line key={i} x1={x} y1="78" x2="150" y2="150" stroke="rgba(0,240,255,0.4)" strokeWidth="0.8" />
      ))}
      {/* Pilot */}
      <g style={animate ? { animation: 'float-slow 3s ease-in-out infinite' } : {}}>
        <ellipse cx="150" cy="148" rx="18" ry="10" fill="rgba(0,240,255,0.15)" stroke="#00F0FF" strokeWidth="1" />
        <circle cx="150" cy="138" r="8" fill="none" stroke="rgba(232,237,247,0.6)" strokeWidth="1.5" />
        {/* Harness body */}
        <rect x="142" y="144" width="16" height="20" rx="3" fill="none" stroke="rgba(232,237,247,0.4)" strokeWidth="1.5" />
        <path d="M142,150 L130,165 M158,150 L170,165" stroke="rgba(232,237,247,0.4)" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function HangGlider({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="hangGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="50%" stopColor="#FF5C1A" />
          <stop offset="100%" stopColor="#FFB347" />
        </linearGradient>
      </defs>
      <g style={animate ? { animation: 'float-gentle 3.5s ease-in-out infinite' } : {}}>
        {/* Main sail */}
        <path d="M20,100 L150,30 L280,100 L150,110 Z" fill="url(#hangGrad)" stroke="#FF5C1A" strokeWidth="2" opacity="0.85" />
        {/* Battens */}
        {[60,100,150,200,240].map((x,i) => (
          <line key={i} x1={x} y1={i===2?30:100} x2="150" y2={i===2?30:110} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        ))}
        {/* Leading edge */}
        <path d="M20,100 L150,30 L280,100" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        {/* Control bar */}
        <line x1="100" y1="110" x2="200" y2="110" stroke="rgba(232,237,247,0.7)" strokeWidth="2.5" />
        <line x1="150" y1="50" x2="150" y2="110" stroke="rgba(232,237,247,0.6)" strokeWidth="2" />
        {/* Bracing wires */}
        <line x1="40" y1="98" x2="150" y2="108" stroke="rgba(232,237,247,0.3)" strokeWidth="0.8" />
        <line x1="260" y1="98" x2="150" y2="108" stroke="rgba(232,237,247,0.3)" strokeWidth="0.8" />
        {/* Pilot hang */}
        <line x1="150" y1="110" x2="150" y2="140" stroke="rgba(232,237,247,0.5)" strokeWidth="1.5" />
        <path d="M140,140 Q150,150 160,140 Q160,165 150,170 Q140,165 140,140 Z" fill="none" stroke="rgba(232,237,247,0.6)" strokeWidth="1.5" />
        <circle cx="150" cy="132" r="7" fill="none" stroke="rgba(232,237,247,0.6)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function Ultralight({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="ultraGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8FF00" />
          <stop offset="100%" stopColor="rgba(200,255,0,0.5)" />
        </linearGradient>
      </defs>
      <g style={animate ? { animation: 'float-gentle 3s ease-in-out infinite' } : {}}>
        {/* Fuselage */}
        <path d="M30,100 L240,90 L280,100 L240,110 L30,100 Z" fill="none" stroke="#C8FF00" strokeWidth="2" />
        <path d="M30,100 L240,95 L260,100 L240,105 L30,100 Z" fill="rgba(200,255,0,0.1)" />
        {/* Main wings */}
        <path d="M100,95 L60,60 L200,85 L200,115 L60,140 L100,105" fill="url(#ultraGrad)" stroke="#C8FF00" strokeWidth="1.5" opacity="0.7" />
        {/* Wing detail */}
        <line x1="80" y1="70" x2="200" y2="88" stroke="rgba(200,255,0,0.3)" strokeWidth="1" />
        <line x1="200" y1="88" x2="200" y2="112" stroke="rgba(200,255,0,0.4)" strokeWidth="1.5" />
        {/* Tail */}
        <path d="M30,100 L10,75 L40,95" fill="none" stroke="#C8FF00" strokeWidth="1.5" />
        <path d="M30,100 L10,125 L40,105" fill="none" stroke="#C8FF00" strokeWidth="1.5" />
        {/* Propeller */}
        <circle cx="280" cy="100" r="3" fill="#C8FF00" />
        <g style={animate ? { transformOrigin: '280px 100px', animation: 'spin-fast 0.4s linear infinite' } : {}}>
          <line x1="280" y1="80" x2="280" y2="120" stroke="rgba(232,237,247,0.6)" strokeWidth="3" strokeLinecap="round" />
          <line x1="260" y1="100" x2="300" y2="100" stroke="rgba(232,237,247,0.6)" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* Cockpit */}
        <ellipse cx="200" cy="93" rx="20" ry="10" fill="rgba(0,240,255,0.15)" stroke="rgba(0,240,255,0.5)" strokeWidth="1" />
        {/* Struts */}
        <line x1="120" y1="75" x2="150" y2="100" stroke="rgba(232,237,247,0.4)" strokeWidth="1" />
        <line x1="120" y1="125" x2="150" y2="100" stroke="rgba(232,237,247,0.4)" strokeWidth="1" />
        {/* Landing gear */}
        <line x1="170" y1="108" x2="155" y2="130" stroke="rgba(232,237,247,0.5)" strokeWidth="1.5" />
        <line x1="200" y1="108" x2="195" y2="130" stroke="rgba(232,237,247,0.5)" strokeWidth="1.5" />
        <line x1="148" y1="130" x2="165" y2="130" stroke="rgba(232,237,247,0.5)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function Gyrocopter({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <g style={animate ? { animation: 'float-gentle 2.8s ease-in-out infinite' } : {}}>
        {/* Fuselage */}
        <path d="M80,120 L220,110 L250,120 L220,130 L80,120 Z" fill="none" stroke="#5B4DFF" strokeWidth="2" />
        <ellipse cx="185" cy="115" rx="30" ry="12" fill="rgba(91,77,255,0.15)" stroke="rgba(91,77,255,0.5)" strokeWidth="1" />
        {/* Tail fin */}
        <path d="M80,120 L40,90 L75,115" fill="none" stroke="#5B4DFF" strokeWidth="1.5" />
        <path d="M80,120 L45,130 L78,122" fill="none" stroke="#5B4DFF" strokeWidth="1" />
        {/* Pusher prop */}
        <circle cx="255" cy="120" r="3" fill="#5B4DFF" />
        <g style={animate ? { transformOrigin: '255px 120px', animation: 'spin-fast 0.5s linear infinite' } : {}}>
          <line x1="255" y1="100" x2="255" y2="140" stroke="rgba(232,237,247,0.5)" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* Rotor mast */}
        <line x1="160" y1="110" x2="160" y2="65" stroke="rgba(232,237,247,0.7)" strokeWidth="2" />
        {/* Main rotor */}
        <g style={animate ? { transformOrigin: '160px 65px', animation: 'rotor-spin 0.8s linear infinite' } : {}}>
          <ellipse cx="160" cy="65" rx="80" ry="6" fill="none" stroke="rgba(91,77,255,0.7)" strokeWidth="2" />
          <line x1="80" y1="65" x2="240" y2="65" stroke="rgba(232,237,247,0.5)" strokeWidth="3" strokeLinecap="round" />
          <line x1="120" y1="50" x2="200" y2="80" stroke="rgba(232,237,247,0.4)" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Cockpit bubble */}
        <ellipse cx="185" cy="110" rx="25" ry="15" fill="rgba(0,240,255,0.1)" stroke="rgba(0,240,255,0.4)" strokeWidth="1.5" />
        {/* Struts / landing gear */}
        <line x1="140" y1="128" x2="125" y2="155" stroke="rgba(232,237,247,0.4)" strokeWidth="1.5" />
        <line x1="180" y1="128" x2="195" y2="155" stroke="rgba(232,237,247,0.4)" strokeWidth="1.5" />
        <line x1="115" y1="155" x2="145" y2="155" stroke="rgba(232,237,247,0.4)" strokeWidth="1.5" />
        <line x1="185" y1="155" x2="215" y2="155" stroke="rgba(232,237,247,0.4)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function Zeppelin({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="zepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5B4DFF" />
          <stop offset="40%" stopColor="#8B80FF" />
          <stop offset="100%" stopColor="#5B4DFF" />
        </linearGradient>
      </defs>
      <g style={animate ? { animation: 'zeppelin-drift 5s ease-in-out infinite' } : {}}>
        {/* Envelope */}
        <ellipse cx="150" cy="95" rx="130" ry="45" fill="url(#zepGrad)" stroke="#5B4DFF" strokeWidth="2" />
        {/* Highlight */}
        <ellipse cx="115" cy="75" rx="60" ry="15" fill="rgba(255,255,255,0.1)" />
        {/* Seams */}
        {[0, 1, 2].map(i => (
          <path key={i} d={`M${30 + i*90},95 Q${75 + i*90},50 ${120 + i*90},95 Q${75 + i*90},140 ${30 + i*90},95`}
            fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        ))}
        {/* Gondola */}
        <rect x="100" y="135" width="100" height="25" rx="5" fill="none" stroke="#5B4DFF" strokeWidth="2" />
        <line x1="120" y1="135" x2="120" y2="160" stroke="rgba(91,77,255,0.4)" strokeWidth="1" />
        <line x1="150" y1="135" x2="150" y2="160" stroke="rgba(91,77,255,0.4)" strokeWidth="1" />
        <line x1="180" y1="135" x2="180" y2="160" stroke="rgba(91,77,255,0.4)" strokeWidth="1" />
        {/* Windows */}
        {[115, 150, 185].map((x, i) => (
          <ellipse key={i} cx={x} cy="147" rx="7" ry="5" fill="rgba(0,240,255,0.2)" stroke="rgba(0,240,255,0.5)" strokeWidth="1" />
        ))}
        {/* Suspension cables */}
        <line x1="110" y1="138" x2="100" y2="120" stroke="rgba(232,237,247,0.3)" strokeWidth="0.8" />
        <line x1="190" y1="138" x2="200" y2="120" stroke="rgba(232,237,247,0.3)" strokeWidth="0.8" />
        {/* Tail fins */}
        <path d="M20,95 L5,70 L30,88" fill="none" stroke="#5B4DFF" strokeWidth="2" />
        <path d="M20,95 L5,120 L30,102" fill="none" stroke="#5B4DFF" strokeWidth="2" />
        {/* Propellers */}
        <circle cx="115" cy="162" r="3" fill="#5B4DFF" />
        <g style={animate ? { transformOrigin: '115px 162px', animation: 'spin-fast 0.8s linear infinite' } : {}}>
          <line x1="115" y1="152" x2="115" y2="172" stroke="rgba(232,237,247,0.6)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <circle cx="185" cy="162" r="3" fill="#5B4DFF" />
        <g style={animate ? { transformOrigin: '185px 162px', animation: 'spin-fast 0.8s linear infinite' } : {}}>
          <line x1="185" y1="152" x2="185" y2="172" stroke="rgba(232,237,247,0.6)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        {/* SKYRIFT branding on envelope */}
        <text x="150" y="100" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="12"
          fontFamily="'Bebas Neue', sans-serif" letterSpacing="4">SKYRIFT</text>
      </g>
    </svg>
  );
}

export function WingsuitGlider({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#5B4DFF" />
        </linearGradient>
      </defs>
      <g style={animate ? { animation: 'jet-float 2.5s ease-in-out infinite' } : {}}>
        {/* Body / torso */}
        <rect x="135" y="70" width="30" height="70" rx="10" fill="none" stroke="#00F0FF" strokeWidth="2" />
        {/* Head */}
        <circle cx="150" cy="62" r="12" fill="none" stroke="rgba(0,240,255,0.6)" strokeWidth="2" />
        {/* Helmet visor */}
        <path d="M140,58 Q150,68 160,58" fill="rgba(0,240,255,0.2)" stroke="rgba(0,240,255,0.5)" strokeWidth="1" />
        {/* Left wing */}
        <path d="M135,80 L40,130 L60,140 L135,110 Z" fill="url(#suitGrad)" stroke="#00F0FF" strokeWidth="1.5" opacity="0.8" />
        {/* Right wing */}
        <path d="M165,80 L260,130 L240,140 L165,110 Z" fill="url(#suitGrad)" stroke="#00F0FF" strokeWidth="1.5" opacity="0.8" />
        {/* Leg wing left */}
        <path d="M138,135 L80,170 L100,175 L140,145 Z" fill="rgba(0,240,255,0.4)" stroke="#00F0FF" strokeWidth="1" />
        {/* Leg wing right */}
        <path d="M162,135 L220,170 L200,175 L160,145 Z" fill="rgba(0,240,255,0.4)" stroke="#00F0FF" strokeWidth="1" />
        {/* Wing fabric detail lines */}
        {[1,2,3,4].map(i => (
          <line key={i} x1={135-i*18} y1={80+i*8} x2={135} y2={80+i*8} stroke="rgba(0,240,255,0.2)" strokeWidth="0.8" />
        ))}
        {[1,2,3,4].map(i => (
          <line key={i} x1={165+i*18} y1={80+i*8} x2={165} y2={80+i*8} stroke="rgba(0,240,255,0.2)" strokeWidth="0.8" />
        ))}
        {/* Speed lines */}
        <line x1="20" y1="60" x2="60" y2="65" stroke="rgba(0,240,255,0.2)" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="15" y1="75" x2="55" y2="78" stroke="rgba(0,240,255,0.15)" strokeWidth="1" strokeDasharray="4,6" />
      </g>
    </svg>
  );
}

export function PoweredParaglider({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="ppgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FF5C1A" />
        </linearGradient>
      </defs>
      {/* Canopy */}
      <g style={animate ? { transformOrigin: '150px 55px', animation: 'canopy-breathe 3s ease-in-out infinite' } : {}}>
        <path d="M40,75 Q90,15 150,12 Q210,15 260,75 Q225,85 200,75 Q175,55 150,52 Q125,55 100,75 Q75,85 40,75 Z"
          fill="url(#ppgGrad)" stroke="#FFB347" strokeWidth="1.5" opacity="0.85" />
        {[70, 100, 130, 160, 190, 220].map((x, i) => (
          <line key={i} x1={x} y1="15" x2={x} y2="72" stroke="rgba(255,92,26,0.3)" strokeWidth="0.8" />
        ))}
        <path d="M80,60 Q120,22 155,18 Q135,25 108,60 Z" fill="rgba(255,255,255,0.12)" />
      </g>
      {/* Lines */}
      {[80,110,150,190,220].map((x, i) => (
        <line key={i} x1={x} y1="73" x2="150" y2="145" stroke="rgba(255,179,71,0.4)" strokeWidth="0.8" />
      ))}
      {/* Pilot + motor unit */}
      <g style={animate ? { animation: 'float-slow 3s ease-in-out infinite' } : {}}>
        {/* Seat / harness */}
        <path d="M130,145 L170,145 L175,175 L125,175 Z" fill="rgba(255,92,26,0.15)" stroke="#FF5C1A" strokeWidth="1.5" />
        {/* Motor frame (circular cage) */}
        <circle cx="150" cy="160" r="28" fill="none" stroke="rgba(232,237,247,0.4)" strokeWidth="1.5" strokeDasharray="5,3" />
        {/* Motor unit */}
        <rect x="138" y="148" width="24" height="24" rx="4" fill="rgba(255,92,26,0.2)" stroke="#FF5C1A" strokeWidth="1.5" />
        {/* Propeller */}
        <g style={animate ? { transformOrigin: '150px 160px', animation: 'spin-fast 0.3s linear infinite' } : {}}>
          <ellipse cx="150" cy="160" rx="20" ry="4" fill="rgba(232,237,247,0.5)" stroke="rgba(232,237,247,0.6)" strokeWidth="1" />
        </g>
        {/* Pilot body */}
        <circle cx="150" cy="130" r="8" fill="none" stroke="rgba(232,237,247,0.6)" strokeWidth="1.5" />
        {/* Exhaust dots */}
        <circle cx="150" cy="188" r="2" fill="#FF5C1A" opacity="0.6" />
        <circle cx="155" cy="193" r="1.5" fill="#FF5C1A" opacity="0.4" />
        <circle cx="145" cy="192" r="1" fill="#FF5C1A" opacity="0.3" />
      </g>
    </svg>
  );
}

export function Ornithopter({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="ornGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5C1A" />
          <stop offset="100%" stopColor="#FFB347" />
        </linearGradient>
      </defs>
      {/* Body */}
      <ellipse cx="150" cy="110" rx="50" ry="20" fill="none" stroke="#FF5C1A" strokeWidth="2" />
      <ellipse cx="150" cy="105" rx="30" ry="12" fill="rgba(255,92,26,0.15)" stroke="rgba(255,92,26,0.4)" strokeWidth="1" />
      {/* Head cockpit */}
      <ellipse cx="185" cy="108" rx="20" ry="14" fill="rgba(0,240,255,0.1)" stroke="#00F0FF" strokeWidth="1.5" />
      {/* Tail */}
      <path d="M100,110 L60,95 L70,108 L60,121 L100,110 Z" fill="url(#ornGrad)" stroke="#FF5C1A" strokeWidth="1" />
      {/* Left wing - flapping */}
      <g style={animate ? { transformOrigin: '150px 100px', animation: 'wing-flap-left 0.6s ease-in-out infinite' } : {}}>
        <path d="M140,100 Q90,55 40,80 Q60,90 100,95 Q120,98 140,100 Z"
          fill="url(#ornGrad)" stroke="#FF5C1A" strokeWidth="1.5" opacity="0.8" />
        {/* Feather/vane details */}
        {[1,2,3].map(i => (
          <line key={i} x1={140-i*30} y1={100-i*10} x2={150-i*25} y2={100+i*2}
            stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        ))}
      </g>
      {/* Right wing - flapping */}
      <g style={animate ? { transformOrigin: '150px 100px', animation: 'wing-flap-right 0.6s ease-in-out infinite' } : {}}>
        <path d="M160,100 Q210,55 260,80 Q240,90 200,95 Q180,98 160,100 Z"
          fill="url(#ornGrad)" stroke="#FF5C1A" strokeWidth="1.5" opacity="0.8" />
        {[1,2,3].map(i => (
          <line key={i} x1={160+i*30} y1={100-i*10} x2={150+i*25} y2={100+i*2}
            stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        ))}
      </g>
      {/* Wing hinge points */}
      <circle cx="150" cy="100" r="5" fill="#FF5C1A" />
    </svg>
  );
}

export function SolarPlane({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="solarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8FF00" />
          <stop offset="50%" stopColor="rgba(200,255,0,0.6)" />
          <stop offset="100%" stopColor="#C8FF00" />
        </linearGradient>
        <linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,240,255,0.8)" />
          <stop offset="100%" stopColor="rgba(91,77,255,0.8)" />
        </linearGradient>
      </defs>
      <g style={animate ? { animation: 'float-slow 4.5s ease-in-out infinite' } : {}}>
        {/* Slim fuselage */}
        <path d="M40,100 L240,95 L280,100 L240,105 L40,100 Z" fill="none" stroke="#C8FF00" strokeWidth="2" />
        <path d="M40,100 L230,97 L270,100 L230,103 L40,100 Z" fill="rgba(200,255,0,0.1)" />
        {/* Main wings - very slender */}
        <g style={animate ? { transformOrigin: '150px 100px', animation: 'wing-breathe 4s ease-in-out infinite' } : {}}>
          <path d="M110,98 L20,88 L20,92 L110,100 Z" fill="url(#solarGrad)" stroke="#C8FF00" strokeWidth="1.5" opacity="0.9" />
          <path d="M110,102 L20,108 L20,112 L110,100 Z" fill="url(#solarGrad)" stroke="#C8FF00" strokeWidth="1.5" opacity="0.9" />
          <path d="M150,97 L280,82 L280,87 L150,99 Z" fill="url(#solarGrad)" stroke="#C8FF00" strokeWidth="1.5" opacity="0.9" />
          <path d="M150,103 L280,113 L280,118 L150,101 Z" fill="url(#solarGrad)" stroke="#C8FF00" strokeWidth="1.5" opacity="0.9" />
          {/* Solar panels on wings */}
          {[-8,-3,2,7].map((y,i) => (
            <rect key={i} x={35+i*18} y={88+y} width="12" height="4" rx="0.5"
              fill="url(#panelGrad)" opacity="0.7"
              style={animate ? { animation: `solar-pulse ${1.5+i*0.3}s ease-in-out infinite` } : {}} />
          ))}
          {[175,195,215,235,255].map((x,i) => (
            <rect key={i} x={x} y="86" width="12" height="4" rx="0.5"
              fill="url(#panelGrad)" opacity="0.7"
              style={animate ? { animation: `solar-pulse ${1.5+i*0.2}s ease-in-out infinite` } : {}} />
          ))}
        </g>
        {/* Tail */}
        <path d="M40,100 L15,78 L45,95" fill="none" stroke="#C8FF00" strokeWidth="1.5" />
        <path d="M40,100 L15,122 L45,105" fill="none" stroke="#C8FF00" strokeWidth="1.5" />
        {/* Propeller */}
        <circle cx="280" cy="100" r="3" fill="#C8FF00" />
        <g style={animate ? { transformOrigin: '280px 100px', animation: 'spin-fast 0.5s linear infinite' } : {}}>
          <line x1="280" y1="83" x2="280" y2="117" stroke="rgba(232,237,247,0.5)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="263" y1="100" x2="297" y2="100" stroke="rgba(232,237,247,0.5)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        {/* Cockpit */}
        <ellipse cx="230" cy="97" rx="18" ry="9" fill="rgba(0,240,255,0.15)" stroke="rgba(0,240,255,0.5)" strokeWidth="1" />
        {/* Solar reflection highlight */}
        <path d="M25,86 L75,83 L75,85 L25,88 Z" fill="rgba(255,255,255,0.15)" />
        <path d="M170,81 L280,70 L280,72 L170,83 Z" fill="rgba(255,255,255,0.15)" />
      </g>
    </svg>
  );
}

export function JetPack({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="jetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5C1A" />
          <stop offset="100%" stopColor="#FFB347" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="rgba(255,92,26,0)" />
        </linearGradient>
      </defs>
      <g style={animate ? { animation: 'jet-float 1.5s ease-in-out infinite' } : {}}>
        {/* Pilot body */}
        <rect x="128" y="55" width="44" height="70" rx="8" fill="none" stroke="rgba(232,237,247,0.5)" strokeWidth="1.5" />
        {/* Helmet */}
        <ellipse cx="150" cy="50" rx="20" ry="18" fill="none" stroke="rgba(232,237,247,0.6)" strokeWidth="2" />
        <path d="M133,48 Q140,62 150,64 Q160,62 167,48" fill="rgba(0,240,255,0.15)" stroke="rgba(0,240,255,0.5)" strokeWidth="1.5" />
        {/* Arms */}
        <path d="M128,75 L100,90 L104,96 L132,85" fill="none" stroke="rgba(232,237,247,0.5)" strokeWidth="2" strokeLinecap="round" />
        <path d="M172,75 L200,90 L196,96 L168,85" fill="none" stroke="rgba(232,237,247,0.5)" strokeWidth="2" strokeLinecap="round" />
        {/* Jet pack unit */}
        <rect x="118" y="65" width="64" height="55" rx="5" fill="url(#jetGrad)" stroke="#FF5C1A" strokeWidth="2" />
        {/* Pack details */}
        <rect x="124" y="72" width="22" height="30" rx="3" fill="rgba(0,0,0,0.3)" />
        <rect x="154" y="72" width="22" height="30" rx="3" fill="rgba(0,0,0,0.3)" />
        {/* Nozzles */}
        <rect x="126" y="118" width="18" height="10" rx="3" fill="rgba(255,92,26,0.6)" stroke="#FF5C1A" strokeWidth="1.5" />
        <rect x="156" y="118" width="18" height="10" rx="3" fill="rgba(255,92,26,0.6)" stroke="#FF5C1A" strokeWidth="1.5" />
        {/* Left exhaust flame */}
        <g style={animate ? { transformOrigin: '135px 128px', animation: 'flame-flicker 0.2s ease-in-out infinite' } : {}}>
          <path d="M128,128 Q135,155 142,128" fill="url(#flameGrad)" opacity="0.9" />
          <path d="M130,128 Q135,148 140,128" fill="white" opacity="0.6" />
        </g>
        {/* Right exhaust flame */}
        <g style={animate ? { transformOrigin: '165px 128px', animation: 'flame-flicker 0.25s ease-in-out infinite reverse' } : {}}>
          <path d="M158,128 Q165,158 172,128" fill="url(#flameGrad)" opacity="0.9" />
          <path d="M160,128 Q165,148 170,128" fill="white" opacity="0.6" />
        </g>
        {/* Legs */}
        <line x1="138" y1="125" x2="132" y2="165" stroke="rgba(232,237,247,0.4)" strokeWidth="2" />
        <line x1="162" y1="125" x2="168" y2="165" stroke="rgba(232,237,247,0.4)" strokeWidth="2" />
        {/* Boots */}
        <ellipse cx="128" cy="167" rx="12" ry="6" fill="none" stroke="rgba(232,237,247,0.4)" strokeWidth="1.5" />
        <ellipse cx="172" cy="167" rx="12" ry="6" fill="none" stroke="rgba(232,237,247,0.4)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function Autogyro({ size = 300, animate = true }) {
  return (
    <svg viewBox="0 0 300 200" width={size} height={size * 0.667} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="autoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FF5C1A" />
        </linearGradient>
      </defs>
      <g style={animate ? { animation: 'float-gentle 3.2s ease-in-out infinite' } : {}}>
        {/* Fuselage */}
        <path d="M60,115 L220,105 L260,115 L220,125 L60,115 Z" fill="none" stroke="#FFB347" strokeWidth="2" />
        {/* Open cockpit */}
        <ellipse cx="185" cy="110" rx="28" ry="15" fill="rgba(0,240,255,0.1)" stroke="rgba(0,240,255,0.4)" strokeWidth="1.5" />
        {/* Windshield */}
        <path d="M170,102 Q185,95 200,102 L195,110 Q185,106 175,110 Z" fill="rgba(0,240,255,0.15)" stroke="rgba(0,240,255,0.5)" strokeWidth="1" />
        {/* Wheels */}
        <circle cx="140" cy="135" r="12" fill="none" stroke="#FFB347" strokeWidth="2" />
        <circle cx="140" cy="135" r="5" fill="rgba(255,179,71,0.3)" />
        <circle cx="190" cy="135" r="10" fill="none" stroke="#FFB347" strokeWidth="2" />
        {/* Struts */}
        <line x1="140" y1="123" x2="150" y2="110" stroke="rgba(232,237,247,0.5)" strokeWidth="1.5" />
        <line x1="190" y1="125" x2="195" y2="112" stroke="rgba(232,237,247,0.5)" strokeWidth="1.5" />
        {/* Short stub wings */}
        <path d="M155,108 L90,100 L90,102 L155,112 Z" fill="url(#autoGrad)" opacity="0.7" stroke="#FFB347" strokeWidth="1" />
        <path d="M205,108 L265,100 L265,102 L205,112 Z" fill="url(#autoGrad)" opacity="0.7" stroke="#FFB347" strokeWidth="1" />
        {/* Rotor mast */}
        <line x1="175" y1="105" x2="175" y2="55" stroke="rgba(232,237,247,0.7)" strokeWidth="2" />
        {/* Large free-spinning rotor */}
        <g style={animate ? { transformOrigin: '175px 55px', animation: 'rotor-spin 1.2s linear infinite' } : {}}>
          <ellipse cx="175" cy="55" rx="90" ry="8" fill="none" stroke="rgba(255,179,71,0.6)" strokeWidth="2" />
          <line x1="85" y1="55" x2="265" y2="55" stroke="rgba(232,237,247,0.6)" strokeWidth="3" strokeLinecap="round" />
          <line x1="130" y1="38" x2="220" y2="72" stroke="rgba(232,237,247,0.4)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="175" cy="55" r="5" fill="#FFB347" />
        </g>
        {/* Front propeller */}
        <circle cx="260" cy="115" r="3" fill="#FFB347" />
        <g style={animate ? { transformOrigin: '260px 115px', animation: 'spin-fast 0.6s linear infinite' } : {}}>
          <line x1="260" y1="98" x2="260" y2="132" stroke="rgba(232,237,247,0.5)" strokeWidth="3" strokeLinecap="round" />
          <line x1="243" y1="115" x2="277" y2="115" stroke="rgba(232,237,247,0.5)" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* Tail */}
        <path d="M60,115 L25,90 L55,108" fill="none" stroke="#FFB347" strokeWidth="1.5" />
        <path d="M60,115 L25,135 L55,120" fill="none" stroke="#FFB347" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export { HotAirBalloon };
export default {
  'hot-air-balloon': HotAirBalloon,
  'paraglider': Paraglider,
  'hang-glider': HangGlider,
  'ultralight': Ultralight,
  'gyrocopter': Gyrocopter,
  'zeppelin': Zeppelin,
  'wingsuit': WingsuitGlider,
  'ppg': PoweredParaglider,
  'ornithopter': Ornithopter,
  'solar-plane': SolarPlane,
  'jet-pack': JetPack,
  'autogyro': Autogyro,
};
