import React, { useState } from 'react'
import { Sparkles, CheckCircle2, ArrowRight, Mic, Award, Users, Globe, X } from 'lucide-react'
import { guestSpeakers } from '../../speakers/data/speakersData'

const GuestSpeakersSection = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  return (
    <section style={{ padding: '5rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#FEF3C7',
            color: '#D97706',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 800,
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            <Mic size={14} color="#D97706" /> FYC GUEST SPEAKERS & MENTORS
          </span>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            color: '#0F172A',
            fontSize: '2.2rem',
            fontWeight: 900,
            maxWidth: '800px',
            margin: '0 auto 0.75rem auto',
            lineHeight: 1.25,
            letterSpacing: '-0.02em'
          }}>
            Learn Directly from World-Class Founders & Global Industry Leaders
          </h2>

          <p style={{ color: '#64748B', fontSize: '1.02rem', maxWidth: '650px', margin: '0 auto' }}>
            Exclusive keynote sessions, networking masterclasses, and career guidance from international practitioners.
          </p>
        </div>

        {/* Guest Speakers Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: guestSpeakers.length === 1 ? 'minmax(320px, 680px)' : 'repeat(auto-fit, minmax(320px, 1fr))',
          justifyContent: 'center',
          gap: '2rem',
          margin: '0 auto'
        }}>
          {guestSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="pop-card"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Speaker Card Top Header */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid #0EA5E9',
                  boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)',
                  flexShrink: 0
                }}>
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <span style={{
                    background: '#E0F2FE',
                    color: '#0284C7',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    display: 'inline-block',
                    marginBottom: '0.35rem'
                  }}>
                    {speaker.role}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#0F172A',
                    fontSize: '1.45rem',
                    fontWeight: 900,
                    margin: 0,
                    lineHeight: 1.2
                  }}>
                    {speaker.name}
                  </h3>
                </div>
              </div>

              {/* Topic Box */}
              <div style={{
                background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
                border: '1px solid #CBD5E1',
                padding: '1rem 1.15rem',
                borderRadius: '12px',
                marginBottom: '1.25rem'
              }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>
                  🎙️ Keynote Session Topic
                </div>
                <div style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.35 }}>
                  "{speaker.topic}"
                </div>
              </div>

              {/* Highlights Bullet List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {speaker.highlights.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: '#334155', lineHeight: 1.45 }}>
                    <CheckCircle2 color="#0EA5E9" size={16} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Action button */}
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #F1F5F9', textAlign: 'right' }}>
                <button
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="btn-navy"
                  style={{ padding: '0.55rem 1.25rem', fontSize: '0.82rem', borderRadius: '8px', cursor: 'pointer' }}
                >
                  View Full Profile & Bio →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Speaker Profile Modal */}
      {selectedSpeaker && (
        <div className="modal-overlay" onClick={() => setSelectedSpeaker(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '540px' }}>
            <button
              onClick={() => setSelectedSpeaker(null)}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                background: '#F1F5F9', border: 'none', borderRadius: '50%',
                width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#0F172A'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '84px', height: '84px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #0EA5E9', flexShrink: 0 }}>
                <img src={selectedSpeaker.image} alt={selectedSpeaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span style={{ background: '#0EA5E9', color: '#FFF', fontSize: '0.7rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                  FYC Guest Speaker
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.45rem', fontWeight: 900, marginTop: '0.25rem' }}>
                  {selectedSpeaker.name}
                </h3>
                <div style={{ color: '#0284C7', fontWeight: 800, fontSize: '0.88rem' }}>{selectedSpeaker.role}</div>
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '10px', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase' }}>Keynote Workshop Topic:</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginTop: '0.25rem' }}>"{selectedSpeaker.topic}"</div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {selectedSpeaker.bio}
            </p>

            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setSelectedSpeaker(null)} className="btn-navy" style={{ padding: '0.65rem 1.5rem', fontSize: '0.85rem' }}>
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default GuestSpeakersSection
