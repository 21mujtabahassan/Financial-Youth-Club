import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Quote, Sparkles, Award, Globe, Heart, ArrowRight, X, Radio, ShieldCheck, CheckCircle2, Zap, Users, GraduationCap, Building2 } from 'lucide-react'
import StarfieldBackground from '../../../components/common/StarfieldBackground'

const FoundersVision = () => {
  const [selectedFounder, setSelectedFounder] = useState(null)

  const adanData = {
    name: "Adan Shahzad — Founder & Executive Director",
    displayName: "ADAN SHAHZAD",
    roleTag: "FOUNDER & EXECUTIVE DIRECTOR:",
    subTitle: "Founder, Financial Youth Club",
    badge: "GLOBAL FINANCIAL DEMOCRATIZATION",
    image: "/images/founders/adan_shahzad.jpg",
    accentColor: "#4FC3E8",
    btnColor: "#4FC3E8",
    btnGlow: "rgba(79, 195, 232, 0.3)",
    bgLight: "#EAF7FD",
    borderLight: "rgba(79, 195, 232, 0.3)",
    quote: "Our mission at Financial Youth Club is to eliminate economic education barriers for students globally by connecting them directly with Wall Street partners and Ivy League mentors.",
    checkPoints: [
      "Featured on The World in Us Podcast",
      "Keynote Speaker on The Capstone Program",
      "Partnered with USA Economics Olympiad (USAEO)"
    ],
    journeyPoints: [
      "Founded FYC as a 100% free non-profit initiative for global youth",
      "Scaled operations across 35+ countries with 90+ community workshops",
      "Formed strategic alliances with USA Economics Olympiad (USAEO) & ECONFLOW",
      "Featured keynote speaker on international financial podcasts & migration summits"
    ],
    mediaFeatures: [
      { title: "The World in Us (501c3)", desc: "Global Podcast on Money Management & Studying Abroad" },
      { title: "The Capstone Program", desc: "Featured Keynote on Youth Financial Empowerment (Feb 2026)" },
      { title: "The Professor Kev Show", desc: "Live Discussion on Financial Innovation & Youth Club (Mar 2026)" },
      { title: "Nhan Than Van Hanh", desc: "Podcast on Financial Knowledge for Safer Migration" }
    ],
    alliances: ["USAEO", "ECONFLOW", "Rise & Rights", "Libros Con Sentido", "Audit Lens"]
  }

  const hooriaData = {
    name: "HOORIA RIASAT",
    roleTag: "CO-FOUNDER & AUDIT ADVOCATE:",
    subTitle: "Co-Founder, FYC & Audit Associate",
    badge: "FINANCIAL AUTONOMY & AUDIT ADVOCACY",
    image: "/images/founders/hooria_riasat.jpg",
    accentColor: "#4FC3E8",
    btnColor: "#4FC3E8",
    btnGlow: "rgba(79, 195, 232, 0.4)",
    bgLight: "#EAF7FD",
    borderLight: "rgba(79, 195, 232, 0.3)",
    quote: "Financial inclusion requires economic price transparency and giving stay-at-home mothers practical tools to achieve financial autonomy.",
    checkPoints: [
      "Economic Price Transparency",
      "CA & Audit Specialized Understanding",
      "Financial Literacy for Stay-at-Home Mothers"
    ],
    journeyPoints: [
      "Chartered Accountant Finalist & Audit Associate at Deloitte / KPMG",
      "Spearheaded financial price transparency initiatives",
      "Delivered 90+ grassroots financial literacy sessions for stay-at-home mothers & young women",
      "Keynote speaker on 'Can Auditors Catch Every Fraud? Fraud Detection & Internal Controls'"
    ],
    mediaFeatures: [
      { title: "Price Transparency Initiative", desc: "Advocacy on Economic Price Equality" },
      { title: "Women in Finance Roundtable", desc: "Promoting Female Representation in Banking & Audit" },
      { title: "Stay-at-Home Mothers Bootcamp", desc: "Practical Household Budgeting & Economic Autonomy" },
      { title: "Fraud Detection Masterclass", desc: "Audit Reports, IFRS Standards & Corporate Governance" }
    ],
    alliances: ["Deloitte", "KPMG", "Rise & Rights", "ACCA Global"]
  }

  return (
    <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #FFFFFF 0%, #EAF7FD 100%)', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#FFFFFF',
            color: '#0A2647',
            padding: '0.4rem 1.1rem',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 800,
            marginBottom: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            border: '1px solid rgba(79, 195, 232, 0.4)',
            boxShadow: '0 2px 10px rgba(79, 195, 232, 0.1)'
          }}>
            <Sparkles size={14} color="#2FA8D8" /> Leadership & Legacy
          </span>
          
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            color: '#0A2647',
            fontSize: '2.5rem',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            textTransform: 'uppercase'
          }}>
            MEET THE VISIONARIES
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '640px', margin: '0.5rem auto 0 auto' }}>
            Youth-Led. Purpose-Driven. Impact-Focused. Building a world where financial literacy is accessible to all.
          </p>
        </div>

        {/* Featured Founder Card - ADAN SHAHZAD (EXACT MATCHING DESIGN) */}
        <div style={{ maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          
          <div
            className="pop-card founder-adan-card"
            style={{
              position: 'relative',
              padding: '2.75rem 3rem',
              borderRadius: '24px',
              border: '1px solid rgba(79, 195, 232, 0.25)',
              boxShadow: '0 20px 50px rgba(5, 15, 31, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              background: 'linear-gradient(180deg, #123A5E 0%, #0A2647 35%, #071B33 70%, #050F1F 100%)',
              color: '#FFFFFF',
              overflow: 'hidden'
            }}
          >
            {/* Embedded Night Sky Starfield Texture */}
            <StarfieldBackground opacity={0.85} />

            {/* Left Side: Circular Avatar Frame */}
            <div style={{
              width: '135px',
              height: '135px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)',
              padding: '4px',
              boxShadow: '0 0 25px rgba(79, 195, 232, 0.5)',
              flexShrink: 0,
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0A2647', overflow: 'hidden' }}>
                <img
                  src={adanData.image}
                  alt={adanData.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Side: Content & Action */}
            <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: '#FFFFFF',
                fontSize: '1.65rem',
                fontWeight: 800,
                lineHeight: 1.25,
                margin: '0 0 0.85rem 0',
                letterSpacing: '-0.01em'
              }}>
                Adan Shahzad — Founder & Executive Director
              </h3>

              <p style={{
                color: '#EAF7FD',
                opacity: 0.9,
                fontSize: '1.02rem',
                lineHeight: 1.6,
                margin: '0 0 1.5rem 0',
                fontWeight: 400
              }}>
                "{adanData.quote}"
              </p>

              <button
                onClick={() => setSelectedFounder(adanData)}
                style={{
                  background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)',
                  color: '#071B33',
                  border: 'none',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(79, 195, 232, 0.3)',
                  transition: 'all 0.25s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                Read Adan's full story
              </button>
            </div>
          </div>

        </div>

        {/* Sleek Live Impact Metrics Glassmorphism Bar */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(79, 195, 232, 0.3)',
          borderRadius: '9999px',
          padding: '1.25rem 2.5rem',
          boxShadow: '0 4px 20px rgba(10, 38, 71, 0.05)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Globe color="#2FA8D8" size={22} />
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#0A2647' }}>35+ Countries</div>
              <div style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Reached</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Users color="#4FC3E8" size={22} />
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#0A2647' }}>12,000+ Youth</div>
              <div style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Empowered</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <GraduationCap color="#2FA8D8" size={22} />
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#0A2647' }}>90+ Workshops</div>
              <div style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>Delivered</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Building2 color="#0A2647" size={22} />
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#0A2647' }}>21+ Alliances</div>
              <div style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase' }}>NGO Partners</div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Bio Reader Modal */}
      {selectedFounder && (
        <div className="modal-overlay" onClick={() => setSelectedFounder(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedFounder(null)}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                background: '#F1F5F9', border: 'none', borderRadius: '50%',
                width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#0F172A'
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: `3px solid ${selectedFounder.accentColor}` }}>
                <img src={selectedFounder.image} alt={selectedFounder.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span style={{ background: selectedFounder.accentColor, color: '#FFF', fontSize: '0.72rem', fontWeight: 800, padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>
                  {selectedFounder.badge}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.6rem', fontWeight: 900, marginTop: '0.3rem' }}>
                  {selectedFounder.name}
                </h3>
                <div style={{ color: selectedFounder.accentColor, fontWeight: 800, fontSize: '0.9rem' }}>
                  {selectedFounder.subTitle}
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div style={{ background: selectedFounder.bgLight, border: `1px solid ${selectedFounder.borderLight}`, padding: '1rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <Quote size={20} color={selectedFounder.accentColor} style={{ marginBottom: '0.35rem' }} />
              <p style={{ color: '#0F172A', fontSize: '0.98rem', fontWeight: 700, lineHeight: 1.5, fontStyle: 'italic' }}>
                "{selectedFounder.quote}"
              </p>
            </div>

            {/* Journey Keypoints */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#0F172A', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                Founder's Journey & Leadership
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedFounder.journeyPoints.map((pt, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#475569', fontSize: '0.9rem' }}>
                    <CheckCircle2 color={selectedFounder.accentColor} size={18} /> {pt}
                  </div>
                ))}
              </div>
            </div>

            {/* Media & Keynote Highlights */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#0F172A', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                Media Features & Keynotes
              </h4>
              <div className="grid-2" style={{ gap: '0.75rem' }}>
                {selectedFounder.mediaFeatures.map((m, i) => (
                  <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.85rem' }}>{m.title}</div>
                    <div style={{ color: '#64748B', fontSize: '0.78rem' }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>


            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setSelectedFounder(null)} className="btn-navy" style={{ padding: '0.7rem 1.75rem', fontSize: '0.88rem', width: '100%', maxWidth: '240px' }}>
                Close Bio Reader
              </button>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .founders-title { font-size: 1.75rem !important; }
          .founder-adan-card {
            flex-direction: column !important;
            text-align: center !important;
            padding: 2rem 1.25rem !important;
            gap: 1.5rem !important;
          }
          .founder-card-body { padding: 1.5rem 1rem 1.75rem 1rem !important; }
          .founder-modal-header { flex-direction: column !important; text-align: center !important; }
          .founder-modal-img { margin: 0 auto 0.75rem auto !important; }
        }
      `}</style>
    </section>
  )
}

export default FoundersVision
