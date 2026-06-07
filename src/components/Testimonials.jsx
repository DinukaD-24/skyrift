// SKYRIFT — Testimonials Section (Dual Marquee)
import { testimonials } from '../data/crafts';
import '../styles/Testimonials.css';

function StarRating({ count = 5 }) {
  return (
    <div className="testimonial-bubble__stars" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="testimonial-bubble__star">★</span>
      ))}
    </div>
  );
}

function TestimonialBubble({ testimonial }) {
  return (
    <div className="testimonial-bubble">
      <StarRating count={5} />
      <div className="testimonial-bubble__alt label">ALT: {testimonial.altitude}</div>
      <blockquote className="testimonial-bubble__quote">
        "{testimonial.quote}"
      </blockquote>
      <div className="testimonial-bubble__footer">
        <span className="testimonial-bubble__pilot label">{testimonial.pilot}</span>
        <span className="testimonial-bubble__craft label">{testimonial.craft}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Split into two rows — first half and second half, each doubled for loop
  const half = Math.ceil(testimonials.length / 2);
  const row1 = [...testimonials.slice(0, half), ...testimonials.slice(0, half)];
  const row2 = [...testimonials.slice(half), ...testimonials, ...testimonials.slice(half)];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-header">
          <span className="label">— PILOT LOGS</span>
          <h2 className="section-title">WORDS FROM<br />THE ALTITUDE</h2>
        </div>
      </div>

      <div className="marquee-rows">
        {/* Row 1 — scrolls left */}
        <div className="marquee-container" aria-label="Pilot testimonials row 1">
          <div className="marquee-track">
            {row1.map((t, i) => (
              <TestimonialBubble key={`r1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-container marquee-container--reverse" aria-label="Pilot testimonials row 2">
          <div className="marquee-track">
            {row2.map((t, i) => (
              <TestimonialBubble key={`r2-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
