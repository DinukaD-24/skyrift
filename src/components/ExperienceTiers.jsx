// SKYRIFT — Experience Tiers Section
import '../styles/ExperienceTiers.css';
import craftComponents from './crafts/index';

const tiers = [
  {
    num: '01',
    name: 'SOLO',
    subtitle: 'Fly your own way',
    price: '$120 – $500 / day',
    tag: 'Individual',
    crafts: ['hot-air-balloon', 'paraglider', 'hang-glider', 'ppg'],
    features: [
      'Self-guided flights',
      'Full equipment included',
      'Online safety module',
      'GPS tracker provided',
      '24/7 support hotline',
    ],
    accentColor: 'var(--sky-electric)',
  },
  {
    num: '02',
    name: 'GUIDED',
    subtitle: 'Expert-led adventures',
    price: '$350 – $900 / day',
    tag: 'Most Popular',
    crafts: ['ultralight', 'gyrocopter', 'autogyro', 'solar-plane'],
    features: [
      'Certified instructor included',
      'Pre-flight briefing (1hr)',
      'Photography package',
      'Lunch at altitude',
      'Certificate of completion',
      'Priority booking',
    ],
    accentColor: 'var(--sky-horizon)',
    highlighted: true,
  },
  {
    num: '03',
    name: 'EXPEDITION',
    subtitle: 'Beyond the horizon',
    price: '$900 – $2,400 / day',
    tag: 'Premium',
    crafts: ['zeppelin', 'jet-pack', 'wingsuit', 'ornithopter'],
    features: [
      'Multi-day itineraries',
      'Prestige craft access',
      'Personal flight coordinator',
      'Media crew available',
      'International routes',
      'Concierge ground service',
      'Post-flight debrief report',
    ],
    accentColor: 'var(--sky-storm)',
  },
];

export default function ExperienceTiers() {
  return (
    <section id="rates" className="experience section">
      <div className="container">
        <div className="section-header">
          <span className="label">— EXPERIENCE TIERS</span>
          <h2 className="section-title">PICK YOUR<br />ALTITUDE</h2>
        </div>

        <div className="tiers__grid">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`tier ${tier.highlighted ? 'tier--highlighted' : ''}`}
              style={{ '--accent': tier.accentColor }}
            >
              {/* Ghost number background */}
              <span className="tier__ghost-num" aria-hidden="true">{tier.num}</span>

              {tier.highlighted && (
                <div className="tier__popular-badge label">⚡ {tier.tag}</div>
              )}

              <div className="tier__content">
                <div className="tier__header">
                  <span className="label" style={{ color: 'var(--accent)' }}>{tier.tag}</span>
                  <h3 className="tier__name">{tier.name}</h3>
                  <p className="tier__subtitle">{tier.subtitle}</p>
                </div>

                {/* Craft silhouettes */}
                <div className="tier__crafts">
                  {tier.crafts.map((id) => {
                    const SVG = craftComponents[id];
                    return SVG ? (
                      <div key={id} className="tier__craft-icon">
                        <SVG size={36} animate={false} />
                      </div>
                    ) : null;
                  })}
                </div>

                <div className="tier__price label">{tier.price}</div>

                {/* Feature list */}
                <ul className="tier__features">
                  {tier.features.map((f, j) => (
                    <li key={j} className="tier__feature">
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="#booking"
                  className={`btn-wing ${tier.highlighted ? 'btn-wing-primary' : ''}`}
                  style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}
                  onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  GET STARTED →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
