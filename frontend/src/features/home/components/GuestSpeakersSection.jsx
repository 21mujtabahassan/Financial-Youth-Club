import React, { useState, useEffect } from 'react'
import { Sparkles, CheckCircle2, ArrowRight, Mic, Award, Users, Globe, X } from 'lucide-react'
import { speakerService } from '../../speakers/services/speakerService'

const GuestSpeakersSection = () => {
  const [speakers, setSpeakers] = useState([])
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  useEffect(() => {
    setSpeakers(speakerService.getSpeakers())
  }, [])

  return (
    <section style={{ padding: '5rem 0', background: '#EAF7FD', borderTop: '1px solid rgba(79, 195, 232, 0.2)', borderBottom: '1px solid rgba(79, 195, 232, 0.2)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#FFFFFF',
            color: '#0A2647',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 800,
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            border: '1px solid rgba(79, 195, 232, 0.4)',
            boxShadow: '0 2px 10px rgba(79, 195, 232, 0.1)'
          }}>
            <Mic size={14} color="#2FA8D8" /> FYC GUEST SPEAKERS & MENTORS
          </span>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            color: '#0A2647',
            fontSize: '2.2rem',
            fontWeight: 900,
            maxWidth: '800px',
            margin: '0 auto 0.75rem auto',
            lineHeight: 1.25,
            letterSpacing: '-0.02em'
          }}>
            Learn Directly from World-Class Founders & Global Industry Leaders
          </h2>

          <p style={{ color: '#475569', fontSize: '1.02rem', maxWidth: '650px', margin: '0 auto' }}>
            Exclusive keynote sessions, networking masterclasses, and career guidance from international practitioners.
          </p>
        </div>

        {/* Guest Speakers Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 320px))',
          justifyContent: 'center',
          gap: '2rem',
          margin: '0 auto'
        }}>
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="pop-card"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(79, 195, 232, 0.3)',
                borderRadius: '20px',
                padding: '2.25rem 1.75rem 1.75rem 1.75rem',
                boxShadow: '0 10px 30px rgba(10, 38, 71, 0.07)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Speaker Photo */}
              <div style={{
                width: '125px',
                height: '125px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #4FC3E8',
                boxShadow: '0 8px 24px rgba(79, 195, 232, 0.3)',
                marginBottom: '1.25rem',
                flexShrink: 0
              }}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Speaker Name */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: '#0A2647',
                fontSize: '1.4rem',
                fontWeight: 900,
                margin: '0 0 0.35rem 0',
                lineHeight: 1.25
              }}>
                {speaker.name}
              </h3>

              {/* Speaker Role */}
              <div style={{
                color: '#2FA8D8',
                fontSize: '0.82rem',
                fontWeight: 800,
                marginBottom: '1.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.03em'
              }}>
                {speaker.role}
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedSpeaker(speaker)}
                style={{
                  marginTop: 'auto',
                  background: 'linear-gradient(135deg, #0A2647 0%, #071B33 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(10, 38, 71, 0.2)',
                  transition: 'all 0.25s ease',
                  width: '100%'
                }}
              >
                View More Info →
              </button>

            </div>
          ))}
        </div>

      </div>

      {/* Speaker Profile Modal */}
      {selectedSpeaker && (
        <div className="modal-overlay" onClick={() => setSelectedSpeaker(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '560px' }}>
            <button
              onClick={() => setSelectedSpeaker(null)}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                background: '#EAF7FD', border: 'none', borderRadius: '50%',
                width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#0A2647'
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '85px', height: '85px', borderRadius: '50%', overflow: 'hidden', border: '3.5px solid #4FC3E8', flexShrink: 0 }}>
                <img src={selectedSpeaker.image} alt={selectedSpeaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span style={{ background: '#4FC3E8', color: '#071B33', fontSize: '0.7rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                  FYC Keynote Speaker
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0A2647', fontSize: '1.5rem', fontWeight: 900, marginTop: '0.25rem' }}>
                  {selectedSpeaker.name}
                </h3>
                <div style={{ color: '#2FA8D8', fontWeight: 800, fontSize: '0.88rem' }}>{selectedSpeaker.role}</div>
              </div>
            </div>

            {/* Topic Box */}
            <div style={{ background: '#EAF7FD', border: '1px solid rgba(79, 195, 232, 0.3)', padding: '1rem 1.15rem', borderRadius: '12px', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2FA8D8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>🎙️ Keynote Session Topic:</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0A2647', marginTop: '0.25rem' }}>"{selectedSpeaker.topic}"</div>
            </div>

            {/* Key Highlights */}
            {selectedSpeaker.highlights && selectedSpeaker.highlights.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ color: '#0A2647', fontSize: '0.92rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.6rem' }}>
                  Session Highlights
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {selectedSpeaker.highlights.map((point, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: '#0F1B2B', lineHeight: 1.45 }}>
                      <CheckCircle2 color="#2FA8D8" size={16} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bio Description */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#0A2647', fontSize: '0.92rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.4rem' }}>
                Speaker Profile & Overview
              </h4>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                {selectedSpeaker.bio}
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setSelectedSpeaker(null)} className="btn-navy" style={{ padding: '0.65rem 1.75rem', fontSize: '0.88rem' }}>
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .speaker-heading { font-size: 1.55rem !important; }
        }
      `}</style>
    </section>
  )
}

export default GuestSpeakersSection
