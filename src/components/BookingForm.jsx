// SKYRIFT — Booking Form Section
import React, { useState, useRef } from 'react';
import { crafts } from '../data/crafts';
import craftComponents from './crafts/index';
import '../styles/BookingForm.css';

const durationOptions = [
  { id: 'half', label: 'Half Day', multiplier: 0.6 },
  { id: 'full', label: 'Full Day', multiplier: 1 },
  { id: 'multi', label: 'Multi Day', multiplier: 2.5 },
];

const experienceOptions = [
  { id: 'none', label: 'None', level: 1 },
  { id: 'beginner', label: 'Beginner', level: 2 },
  { id: 'intermediate', label: 'Intermediate', level: 3 },
  { id: 'advanced', label: 'Advanced', level: 4 },
  { id: 'expert', label: 'Expert', level: 5 },
];

export default function BookingForm() {
  const [selectedCraft, setSelectedCraft] = useState(crafts[0]);
  const [duration, setDuration] = useState('full');
  const [experience, setExperience] = useState('none');
  const [date, setDate] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [submitState, setSubmitState] = useState('idle'); // idle | loading | success
  const formRef = useRef(null);

  const currentDuration = durationOptions.find(d => d.id === duration);
  const totalPrice = Math.round(selectedCraft.price * (currentDuration?.multiplier || 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitState !== 'idle') return;
    setSubmitState('loading');
    setTimeout(() => setSubmitState('success'), 2500);
  };

  return (
    <section id="booking" className="booking section">
      <div className="container">
        <div className="section-header">
          <span className="label">— BOOKING</span>
          <h2 className="section-title">FILE YOUR<br />FLIGHT PLAN</h2>
        </div>

        <div className="cockpit" ref={formRef}>
          {/* Cockpit accent lines */}
          <div className="cockpit__accent-top" aria-hidden="true" />
          <div className="cockpit__accent-bottom" aria-hidden="true" />

          <form className="cockpit__form" onSubmit={handleSubmit} noValidate>
            {/* LEFT: Craft selector */}
            <div className="cockpit__left">
              <span className="label cockpit__section-label">SELECT CRAFT</span>
              <div className="craft-chips">
                {crafts.map((craft) => {
                  const SVG = craftComponents[craft.id];
                  const isSelected = craft.id === selectedCraft.id;
                  return (
                    <button
                      key={craft.id}
                      type="button"
                      className={`craft-chip ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => setSelectedCraft(craft)}
                      aria-label={craft.name}
                      id={`craft-chip-${craft.id}`}
                    >
                      <div className="craft-chip__svg">
                        {SVG && <SVG size={28} animate={false} />}
                      </div>
                      <span className="label craft-chip__label">{craft.name}</span>
                      {craft.available ? (
                        <span className="dot-available" style={{ width: '5px', height: '5px' }} />
                      ) : (
                        <span className="dot-booked" style={{ width: '5px', height: '5px' }} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected craft preview */}
              <div className="selected-craft-info">
                {(() => {
                  const PreviewSVG = craftComponents[selectedCraft.id];
                  return PreviewSVG ? <PreviewSVG size={120} animate={true} /> : null;
                })()}
                <div>
                  <h4 className="selected-craft-info__name">{selectedCraft.name}</h4>
                  <p className="selected-craft-info__tagline">{selectedCraft.tagline}</p>
                  <div className="label" style={{ marginTop: '0.5rem', color: 'var(--sky-horizon)' }}>
                    ${selectedCraft.price} base / day
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Details form */}
            <div className="cockpit__right">
              <span className="label cockpit__section-label">FLIGHT DETAILS</span>

              {/* Date picker */}
              <div className="form-group">
                <label className="form-label label" htmlFor="flight-date">DEPARTURE DATE</label>
                <input
                  type="date"
                  id="flight-date"
                  className="form-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              {/* Duration */}
              <div className="form-group">
                <label className="form-label label">FLIGHT DURATION</label>
                <div className="toggle-group">
                  {durationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      id={`duration-${opt.id}`}
                      className={`toggle-btn ${duration === opt.id ? 'is-active' : ''}`}
                      onClick={() => setDuration(opt.id)}
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="toggle-btn__wing">
                        <path d="M0,4 Q3,0 6,4 Q9,8 12,4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience level */}
              <div className="form-group">
                <label className="form-label label">EXPERIENCE LEVEL</label>
                <div className="experience-selector">
                  {experienceOptions.map((opt) => (
                    <label
                      key={opt.id}
                      className={`exp-option ${experience === opt.id ? 'is-selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="experience"
                        value={opt.id}
                        checked={experience === opt.id}
                        onChange={() => setExperience(opt.id)}
                        className="sr-only"
                      />
                      <div className="exp-meter">
                        {[1,2,3,4,5].map(n => (
                          <div key={n} className={`exp-bar ${n <= opt.level ? 'filled' : ''}`} />
                        ))}
                      </div>
                      <span className="label">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* License upload */}
              <div className="form-group">
                <label className="form-label label">PILOT LICENSE / ID</label>
                <div
                  className={`upload-zone ${dragOver ? 'is-drag-over' : ''}`}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOver(false); }}
                >
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="upload-zone__plane">
                    <path d="M2,12 L22,6 L28,12 L22,18 L2,12 Z" stroke="var(--sky-horizon)" strokeWidth="1.5" fill="rgba(255,92,26,0.08)" />
                    <path d="M14,9 L10,14 L16,12" fill="none" stroke="var(--sky-horizon)" strokeWidth="1" />
                    <path d="M28,12 L32,10 L30,12 L32,14 Z" fill="var(--sky-horizon)" />
                  </svg>
                  <p className="upload-zone__text">Drag & drop or <span>click to upload</span></p>
                  <span className="label upload-zone__hint">PDF, JPG, PNG — max 10MB</span>
                </div>
              </div>

              {/* Price summary */}
              <div className="price-summary">
                <div className="price-summary__row">
                  <span className="label">Base rate ({selectedCraft.name})</span>
                  <span className="label">${selectedCraft.price}/day</span>
                </div>
                <div className="price-summary__row">
                  <span className="label">Duration ({currentDuration?.label})</span>
                  <span className="label">×{currentDuration?.multiplier}</span>
                </div>
                <div className="price-summary__row price-summary__total">
                  <span className="label">TOTAL ESTIMATED</span>
                  <span className="price-summary__amount">${totalPrice}</span>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                id="confirm-flight-btn"
                className={`submit-btn ${submitState}`}
                disabled={submitState !== 'idle'}
              >
                {submitState === 'idle' && (
                  <>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                      <path d="M1,6 L17,6 M12,1 L17,6 L12,11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    CONFIRM FLIGHT PLAN
                  </>
                )}
                {submitState === 'loading' && (
                  <span className="submit-btn__loading">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" className="submit-btn__plane">
                      <path d="M2,8 L18,3 L22,8 L18,13 L2,8 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M10,6 L8,10 L13,8" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    TAKING OFF...
                  </span>
                )}
                {submitState === 'success' && (
                  <span className="submit-btn__success">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6,10 L9,13 L14,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    YOU'RE CLEARED FOR TAKEOFF
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
