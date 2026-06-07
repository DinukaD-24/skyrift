// SKYRIFT — Footer with CSS Skyline
import '../styles/Footer.css';

const footerLinks = {
  'FLEET': ['Hot Air Balloon', 'Paraglider', 'Hang Glider', 'Ultralight', 'Gyrocopter', 'Jet Pack'],
  'COMPANY': ['About SKYRIFT', 'Our Story', 'Partners', 'Press Kit', 'Careers'],
  'SAFETY': ['Safety Standards', 'Training Modules', 'Insurance Info', 'Weather Policy', 'Emergency Contacts'],
  'LEGAL': ['Terms of Service', 'Privacy Policy', 'Refund Policy', 'Cookie Settings', 'Accessibility'],
};

// Social craft silhouettes - each represents a platform using a flying craft
const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
        {/* Balloon */}
        <ellipse cx="12" cy="7" rx="6" ry="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="13" width="6" height="3" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="9.5" y1="13" x2="8" y2="16" stroke="currentColor" strokeWidth="0.8" />
        <line x1="14.5" y1="13" x2="16" y2="16" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
        {/* Glider */}
        <path d="M2,9 L14,4 L26,9 L14,11 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="5" x2="14" y2="11" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
        {/* Jet */}
        <path d="M4,9 L18,5 L24,9 L18,13 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10,7 L8,11 L14,9" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M24,9 L28,7 L26,9 L28,11 Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
        {/* Zeppelin */}
        <ellipse cx="16" cy="8" rx="14" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="13" width="12" height="2.5" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="14" x2="10" y2="14" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* CSS Skyline */}
      <div className="footer__skyline" aria-hidden="true">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="footer__skyline-svg">
          {/* Buildings as rectangles of varying heights */}
          <rect x="0" y="100" width="60" height="60" fill="#0C1020" />
          <rect x="55" y="60" width="40" height="100" fill="#111827" />
          <rect x="90" y="80" width="55" height="80" fill="#0C1020" />
          <rect x="140" y="40" width="35" height="120" fill="#111827" />
          <rect x="170" y="70" width="50" height="90" fill="#0C1020" />
          <rect x="215" y="90" width="45" height="70" fill="#111827" />
          <rect x="255" y="30" width="30" height="130" fill="#0C1020" />
          <rect x="280" y="60" width="55" height="100" fill="#111827" />
          <rect x="330" y="80" width="40" height="80" fill="#0C1020" />
          <rect x="365" y="50" width="45" height="110" fill="#111827" />
          <rect x="405" y="75" width="60" height="85" fill="#0C1020" />
          <rect x="460" y="35" width="35" height="125" fill="#111827" />
          <rect x="490" y="65" width="50" height="95" fill="#0C1020" />
          <rect x="535" y="85" width="45" height="75" fill="#111827" />
          <rect x="575" y="45" width="40" height="115" fill="#0C1020" />
          <rect x="610" y="70" width="55" height="90" fill="#111827" />
          <rect x="660" y="55" width="30" height="105" fill="#0C1020" />
          <rect x="685" y="90" width="50" height="70" fill="#111827" />
          <rect x="730" y="40" width="40" height="120" fill="#0C1020" />
          <rect x="765" y="65" width="55" height="95" fill="#111827" />
          <rect x="815" y="80" width="45" height="80" fill="#0C1020" />
          <rect x="855" y="30" width="35" height="130" fill="#111827" />
          <rect x="885" y="60" width="50" height="100" fill="#0C1020" />
          <rect x="930" y="75" width="55" height="85" fill="#111827" />
          <rect x="980" y="50" width="40" height="110" fill="#0C1020" />
          <rect x="1015" y="85" width="45" height="75" fill="#111827" />
          <rect x="1055" y="40" width="30" height="120" fill="#0C1020" />
          <rect x="1080" y="70" width="55" height="90" fill="#111827" />
          <rect x="1130" y="55" width="45" height="105" fill="#0C1020" />
          <rect x="1170" y="80" width="50" height="80" fill="#111827" />
          <rect x="1215" y="35" width="35" height="125" fill="#0C1020" />
          <rect x="1245" y="65" width="55" height="95" fill="#111827" />
          <rect x="1295" y="85" width="40" height="75" fill="#0C1020" />
          <rect x="1330" y="45" width="50" height="115" fill="#111827" />
          <rect x="1375" y="70" width="65" height="90" fill="#0C1020" />
          {/* Antenna spires */}
          <line x1="141" y1="40" x2="141" y2="20" stroke="#111827" strokeWidth="2" />
          <circle cx="141" cy="18" r="3" fill="var(--sky-horizon)" opacity="0.6" />
          <line x1="257" y1="30" x2="257" y2="8" stroke="#111827" strokeWidth="2" />
          <circle cx="257" cy="6" r="3" fill="var(--sky-horizon)" opacity="0.6" />
          <line x1="463" y1="35" x2="463" y2="12" stroke="#111827" strokeWidth="2" />
          <circle cx="463" cy="10" r="3" fill="var(--sky-electric)" opacity="0.5" />
          <line x1="858" y1="30" x2="858" y2="5" stroke="#111827" strokeWidth="2" />
          <circle cx="858" cy="3" r="3" fill="var(--sky-horizon)" opacity="0.7" />
          {/* Windows (dots) */}
          {[60, 90, 145, 172, 216, 257, 282, 367, 407, 463, 493].map((x,i) => (
            <rect key={i} x={x+5} y={60+i*5} width="4" height="3" fill="rgba(0,240,255,0.15)" />
          ))}
        </svg>

        {/* Tiny drifting balloon in skyline */}
        <div className="footer__balloon-drift" aria-hidden="true">
          <svg viewBox="0 0 80 110" width="60" height="80">
            <ellipse cx="40" cy="35" rx="25" ry="28" fill="rgba(255,92,26,0.6)" stroke="#FF5C1A" strokeWidth="1.5" />
            <rect x="28" y="62" width="24" height="10" rx="2" fill="none" stroke="#E8EDF7" strokeWidth="1" />
            <line x1="29" y1="62" x2="26" y2="72" stroke="rgba(232,237,247,0.5)" strokeWidth="0.8" />
            <line x1="51" y1="62" x2="54" y2="72" stroke="rgba(232,237,247,0.5)" strokeWidth="0.8" />
            <path d="M33,62 Q40,50 47,62" fill="none" stroke="#FFB347" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Footer content */}
      <div className="footer__content">
        <div className="container">
          {/* Top row: Logo + links */}
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <svg width="24" height="16" viewBox="0 0 24 16">
                  <path d="M0,8 Q4,2 8,8 Q12,14 16,8 Q20,2 24,8" fill="none" stroke="var(--sky-horizon)" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>SKYRIFT</span>
              </div>
              <p className="footer__tagline">Leave the ground behind.</p>
              <div className="footer__social">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} className="footer__social-link" aria-label={link.label}>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer__col">
                <h4 className="footer__col-title label">{title}</h4>
                <ul className="footer__col-links">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="footer__bottom">
            <span className="label footer__copyright">
              © 2026 SKYRIFT · All altitudes reserved
            </span>
            <span className="label footer__meta">
              Built for the sky · 12 craft · 6 continents
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
