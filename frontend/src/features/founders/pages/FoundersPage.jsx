import React, { useState } from 'react'
import PageLayout from '../../../components/layout/PageLayout'
import { Quote, Sparkles, Award, Globe, Heart, ArrowRight, X, Radio, ShieldCheck, CheckCircle2, Zap, Users, GraduationCap, Building2 } from 'lucide-react'

const FoundersPage = () => {
  const [selectedFounder, setSelectedFounder] = useState(null)

  const adanData = {
    name: "ADAN SHAHZAD",
    roleTag: "FOUNDER & EXECUTIVE DIRECTOR:",
    subTitle: "Founder, Financial Youth Club",
    badge: "GLOBAL FINANCIAL DEMOCRATIZATION",
    image: "/images/founders/adan_shahzad.jpg",
    accentColor: "#0EA5E9",
    btnColor: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    btnGlow: "rgba(14, 165, 233, 0.3)",
    bgLight: "#F0F9FF",
    borderLight: "#BAE6FD",
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
    roleTag: "GIRLS FOR CHANGE FOUNDER:",
    subTitle: "Female Economic Equality & Audit Advocacy",
    badge: "FEMALE ECONOMIC EQUALITY & AUDIT ADVOCACY",
    image: "/images/founders/hooria_riasat.jpg",
    accentColor: "#DB2777",
    btnColor: "linear-gradient(135deg, #DB2777 0%, #BE185D 100%)",
    btnGlow: "rgba(219, 39, 119, 0.4)",
    bgLight: "#FFF1F2",
    borderLight: "#FECDD3",
    quote: "Financial inclusion requires price transparency and giving stay-at-home mothers practical tools to achieve economic autonomy.",
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
    <PageLayout
      title="MEET THE VISIONARIES"
      subtitle="Youth-Led. Purpose-Driven. Impact-Focused. Building a world where financial literacy is accessible to all."
      badge="Leadership & Legacy"
    >

      {/* Featured Founder Card - ADAN SHAHZAD */}
      <div style={{ maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
        
        {/* ADAN SHAHZAD CARD - EXACT PHOTO DESIGN */}
        <div
          className="white-card pop-card"
          style={{
            padding: '0',
            overflow: 'hidden',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 15px 40px rgba(15, 23, 42, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
            color: '#FFFFFF'
          }}
        >
          {/* Dark Polygonal Textured Header Banner */}
          <div style={{
            height: '220px',
            background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Triangular SVG Mesh Overlay */}
            <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.18 }} viewBox="0 0 400 220" preserveAspectRatio="none">
              <polygon points="0,0 200,220 400,0" fill="#38BDF8" />
              <polygon points="0,220 200,0 400,220" fill="#0EA5E9" />
              <line x1="0" y1="0" x2="400" y2="220" stroke="#FFFFFF" strokeWidth="1" />
              <line x1="400" y1="0" x2="0" y2="220" stroke="#FFFFFF" strokeWidth="1" />
            </svg>

            {/* Glowing Gold Halo Circular Frame */}
            <div style={{
              width: '145px',
              height: '145px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #F59E0B, #D97706)',
              padding: '4px',
              boxShadow: '0 0 25px rgba(245, 158, 11, 0.5)',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0F172A', overflow: 'hidden' }}>
                <img
                  src={adanData.image}
                  alt={adanData.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '1rem' }}>
            <div>
              <div style={{ color: '#F59E0B', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.04em' }}>
                {adanData.roleTag}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#F59E0B', fontSize: '1.75rem', fontWeight: 900, marginTop: '0.15rem' }}>
                {adanData.name}
              </h3>
              <div style={{ color: '#FFFFFF', fontSize: '0.92rem', fontWeight: 700 }}>
                {adanData.subTitle}
              </div>
            </div>

            {/* Italic Quote */}
            <p style={{ color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.5, fontStyle: 'italic', margin: 0 }}>
              "{adanData.quote}"
            </p>

            {/* Bullet Checklist with Pill Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#E2E8F0' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1.5px solid #F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle2 size={12} color="#F59E0B" />
                </div>
                <span>Featured on</span>
                <span style={{ background: '#0F172A', border: '1px solid #475569', color: '#FFF', fontWeight: 800, fontSize: '0.75rem', padding: '0.15rem 0.55rem', borderRadius: '9999px' }}>
                  The World in Us
                </span>
                <span>Podcast</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#E2E8F0' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1.5px solid #F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle2 size={12} color="#F59E0B" />
                </div>
                <span>Keynote Speaker on</span>
                <span style={{ background: '#0F172A', border: '1px solid #475569', color: '#FFF', fontWeight: 800, fontSize: '0.75rem', padding: '0.15rem 0.55rem', borderRadius: '9999px' }}>
                  The Capstone Program
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#E2E8F0' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1.5px solid #F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle2 size={12} color="#F59E0B" />
                </div>
                <span>Partnered with</span>
                <span style={{ background: '#0F172A', border: '1px solid #475569', color: '#FFF', fontWeight: 800, fontSize: '0.75rem', padding: '0.15rem 0.55rem', borderRadius: '9999px' }}>
                  USA Economics Olympiad (USAEO)
                </span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setSelectedFounder(adanData)}
              style={{
                marginTop: 'auto',
                padding: '0.85rem 1.5rem',
                borderRadius: '12px',
                background: '#0F172A',
                color: '#FFFFFF',
                border: '1.5px solid #F59E0B',
                fontWeight: 900,
                fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease',
                width: '100%'
              }}
            >
              READ ADAN'S FULL STORY →
            </button>
          </div>
        </div>

      </div>




      {/* Sleek Live Impact Metrics Glassmorphism Bar */}
      <div style={{
        background: '#F8FAFC',
        border: '1px solid #E2E8F0',
        borderRadius: '9999px',
        padding: '1.25rem 2.5rem',
        boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
        display: 'flex',
        justify: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Globe color="#0EA5E9" size={22} />
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#0F172A' }}>35+ Countries</div>
            <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Reached</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Users color="#D97706" size={22} />
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#0F172A' }}>12,000+ Youth</div>
            <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Empowered</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <GraduationCap color="#7C3AED" size={22} />
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#0F172A' }}>90+ Workshops</div>
            <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Delivered</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Building2 color="#10B981" size={22} />
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#0F172A' }}>21+ Alliances</div>
            <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>NGO Partners</div>
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

            <div style={{ background: selectedFounder.bgLight, border: `1px solid ${selectedFounder.borderLight}`, padding: '1rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <Quote size={20} color={selectedFounder.accentColor} style={{ marginBottom: '0.35rem' }} />
              <p style={{ color: '#0F172A', fontSize: '0.98rem', fontWeight: 700, lineHeight: 1.5, fontStyle: 'italic' }}>
                "{selectedFounder.quote}"
              </p>
            </div>

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
              <button onClick={() => setSelectedFounder(null)} className="btn-navy" style={{ padding: '0.7rem 1.75rem', fontSize: '0.88rem' }}>
                Close Bio Reader
              </button>
            </div>

          </div>
        </div>
      )}

    </PageLayout>
  )
}

export default FoundersPage
