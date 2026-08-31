import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Globe, Heart, Award, CheckCircle2, ArrowRight, ShieldCheck, Users, Radio, Briefcase, ExternalLink, X, BookOpen, GraduationCap, Building2 } from 'lucide-react'
import AnimatedCounter from '../../../components/common/AnimatedCounter'

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState('mission')

  const topEmployers = [
    'J.P. Morgan', 'Goldman Sachs', 'Bain & Company', 'Deloitte', 'PwC', 'KPMG',
    'Barclays', 'Coca-Cola', 'Harvard University', 'LSE', 'UC Berkeley', 'Warwick', 'LUMS', 'NUST'
  ]

  const regions = [
    {
      title: "FINANCIAL LITERACY IN PAKISTAN",
      image: "/images/hero/hero_pakistan.jpg",
      tag: "90+ Workshops",
      desc: "Empowering youth & stay-at-home mothers across local communities."
    },
    {
      title: "LEARNING IN THE UK",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      tag: "Ivy League & LSE",
      desc: "World-class mentorship sessions with leading financial institution experts."
    },
    {
      title: "IMPACT IN THE USA",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      tag: "USAEO Partner",
      desc: "Connecting students with top Wall Street and Silicon Valley professionals."
    },
    {
      title: "GROWING IN THE UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      tag: "Middle East Chapter",
      desc: "Expanding financial inclusion summits across GCC countries."
    }
  ]

  return (
    <section style={{ padding: '4.5rem 0', background: 'linear-gradient(180deg, #EAF7FD 0%, #FFFFFF 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#FFFFFF',
            border: '1px solid rgba(79, 195, 232, 0.4)',
            color: '#0A2647',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 800,
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 10px rgba(79, 195, 232, 0.1)'
          }}>
            <Sparkles size={14} color="#2FA8D8" /> ABOUT FINANCIAL YOUTH CLUB
          </span>

          <h2 className="about-heading" style={{
            fontFamily: 'var(--font-heading)',
            color: '#0A2647',
            fontSize: '2.3rem',
            fontWeight: 900,
            maxWidth: '880px',
            margin: '0 auto 0.75rem auto',
            lineHeight: 1.25,
            letterSpacing: '-0.02em'
          }}>
            Democratizing Global Financial Literacy & Economic Empowerment
          </h2>

          <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
            Youth-Led. Purpose-Driven. Impact-Focused. Connecting students, stay-at-home mothers, and young entrepreneurs with world-class mentors.
          </p>
        </div>

        {/* Pro Impact Metrics Bar with Animated Counter */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }} className="about-metrics-bar">
          <div className="pop-stat">
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#2FA8D8' }}>
              <AnimatedCounter end={35} suffix="+" />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase' }}>Global Mentors</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0A2647' }}>
              <AnimatedCounter end={20} suffix="+" />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase' }}>Countries Represented</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#4FC3E8' }}>
              <AnimatedCounter end={4} />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase' }}>Continents Reached</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#071B33' }}>
              <AnimatedCounter end={90} suffix="+" />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase' }}>Workshops Delivered</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#2FA8D8' }}>
              <AnimatedCounter end={21} suffix="+" />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase' }}>NGO Alliances</div>
          </div>
        </div>

        {/* 4 Regional Impact Picture Cards (Clickable) */}
        <div className="grid-4" style={{ gap: '1.25rem', marginBottom: '3.5rem' }}>
          {regions.map((reg, idx) => {
            const regionKey = reg.title.includes('PAKISTAN') ? 'pakistan' :
                              reg.title.includes('UK') ? 'uk' :
                              reg.title.includes('USA') ? 'usa' : 'uae'
            return (
              <Link
                to={`/programs?region=${regionKey}`}
                key={idx}
                className="pop-card"
                style={{
                  textDecoration: 'none',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '240px',
                  boxShadow: '0 4px 14px rgba(10, 38, 71, 0.06)'
                }}
              >
                <img
                  src={reg.image}
                  alt={reg.title}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0, left: 0
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(to top, rgba(7, 27, 51, 0.92) 0%, rgba(10, 38, 71, 0.4) 60%, rgba(10, 38, 71, 0.1) 100%)'
                }} />
                
                <div style={{ position: 'relative', zIndex: 2, padding: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)',
                    color: '#071B33',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px'
                  }}>
                    {reg.tag}
                  </span>
                  <span style={{
                    background: 'rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px'
                  }}>
                    View Programs →
                  </span>
                </div>

                <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', padding: '1rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    fontWeight: 900,
                    marginBottom: '0.25rem',
                    lineHeight: 1.3
                  }}>
                    {reg.title}
                  </h3>
                  <p style={{ color: '#EAF7FD', fontSize: '0.78rem', lineHeight: 1.35, opacity: 0.9 }}>
                    {reg.desc}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* 4 Interactive UI/UX Feature Tabs */}
        <div style={{
          background: '#EAF7FD',
          border: '1px solid rgba(79, 195, 232, 0.25)',
          borderRadius: '18px',
          padding: '2rem',
          boxShadow: '0 4px 20px -2px rgba(10, 38, 71, 0.04)',
          marginBottom: '3.5rem'
        }}>
          {/* Tab Selector Buttons without Emojis */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {[
              { id: 'mission', label: 'Mission & Purpose', color: '#0A2647' },
              { id: 'media', label: 'Media & Strategic Alliances', color: '#0A2647' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? 'linear-gradient(135deg, #0A2647 0%, #071B33 100%)' : '#FFFFFF',
                  color: activeTab === tab.id ? '#FFFFFF' : '#0A2647',
                  border: '1px solid rgba(79, 195, 232, 0.3)',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  boxShadow: activeTab === tab.id ? '0 4px 14px rgba(10, 38, 71, 0.2)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 4: MEDIA & STRATEGIC ALLIANCES */}
          {activeTab === 'media' && (
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span style={{ color: '#2FA8D8', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  FEATURED PODCASTS & PARTNERSHIPS
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0A2647', fontSize: '1.5rem', fontWeight: 900, margin: '0.4rem 0 0.85rem 0' }}>
                  Featured Conversations & Alliances
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Our Founder Adan Shahzad has been featured across international media platforms and global podcasts sharing FYC's vision for financial literacy.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0A2647', fontSize: '0.88rem' }}>
                    <Radio color="#2FA8D8" size={16} /> <strong>The World in Us (501c3)</strong> Podcast Feature
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0A2647', fontSize: '0.88rem' }}>
                    <Radio color="#2FA8D8" size={16} /> <strong>The Capstone Program</strong> Spotlight (Feb 2026)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0A2647', fontSize: '0.88rem' }}>
                    <Radio color="#2FA8D8" size={16} /> <strong>The Professor Kev Show</strong> Keynote (March 2026)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0A2647', fontSize: '0.88rem' }}>
                    <Globe color="#2FA8D8" size={16} /> Partners: <strong>ECONFLOW</strong>, <strong>USA Economics Olympiad (USAEO)</strong> & <strong>Rise and Rights Initiatives</strong>
                  </div>
                </div>
                <Link to="/collaborations" className="btn-gold" style={{ background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)', color: '#071B33', padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}>
                  View All Collaborations <ArrowRight size={15} />
                </Link>
              </div>

              <div className="white-card pop-card" style={{ background: '#FFFFFF' }}>
                <h4 style={{ color: '#0A2647', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.85rem' }}>Global Institution Partners</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {topEmployers.map((emp, idx) => (
                    <span key={idx} style={{ background: '#EAF7FD', border: '1px solid rgba(79, 195, 232, 0.3)', color: '#0A2647', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800 }}>
                      {emp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-heading { font-size: 1.55rem !important; }
          .about-metrics-bar {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutUsSection
