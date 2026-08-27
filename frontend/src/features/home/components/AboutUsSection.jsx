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
    <section style={{ padding: '4.5rem 0', background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#F1F5F9',
            color: '#0F172A',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 800,
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            <Sparkles size={14} color="#0EA5E9" /> ABOUT FINANCIAL YOUTH CLUB
          </span>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            color: '#0F172A',
            fontSize: '2.3rem',
            fontWeight: 900,
            maxWidth: '880px',
            margin: '0 auto 0.75rem auto',
            lineHeight: 1.25,
            letterSpacing: '-0.02em'
          }}>
            Democratizing Global Financial Literacy & Economic Empowerment
          </h2>

          <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto' }}>
            Youth-Led. Purpose-Driven. Impact-Focused. Connecting students, stay-at-home mothers, and young entrepreneurs with world-class mentors.
          </p>
        </div>

        {/* Pro Impact Metrics Bar with Animated Counter */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1rem',
          marginBottom: '3rem'
        }} className="grid-4">
          <div className="pop-stat">
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0EA5E9' }}>
              <AnimatedCounter end={35} suffix="+" />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Global Mentors</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#D97706' }}>
              <AnimatedCounter end={20} suffix="+" />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Countries Represented</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#DB2777' }}>
              <AnimatedCounter end={4} />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Continents Reached</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#7C3AED' }}>
              <AnimatedCounter end={90} suffix="+" />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Workshops Delivered</div>
          </div>
          <div className="pop-stat">
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#10B981' }}>
              <AnimatedCounter end={21} suffix="+" />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>NGO Alliances</div>
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
                  boxShadow: '0 4px 14px rgba(15,23,42,0.06)'
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
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.35) 60%, rgba(15, 23, 42, 0.1) 100%)'
                }} />
                
                <div style={{ position: 'relative', zIndex: 2, padding: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    background: '#0EA5E9',
                    color: '#FFFFFF',
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
                  <p style={{ color: '#E2E8F0', fontSize: '0.78rem', lineHeight: 1.35 }}>
                    {reg.desc}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* 4 Interactive UI/UX Feature Tabs */}
        <div style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '18px',
          padding: '2rem',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
          marginBottom: '3.5rem'
        }}>
          {/* Tab Selector Buttons without Emojis */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {[
              { id: 'mission', label: 'Mission & Purpose', color: '#0F172A' },
              { id: 'pinktax', label: 'Girls for Change & Pink Tax', color: '#DB2777' },
              { id: 'media', label: 'Media & Strategic Alliances', color: '#7C3AED' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? tab.color : '#FFFFFF',
                  color: activeTab === tab.id ? '#FFFFFF' : '#0F172A',
                  border: '1px solid #CBD5E1',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  boxShadow: activeTab === tab.id ? '0 4px 14px rgba(15,23,42,0.15)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>


          {/* TAB 1: MISSION & PURPOSE */}
          {activeTab === 'mission' && (
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span style={{ color: '#0EA5E9', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  PURPOSE-DRIVEN NGO
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.6rem', fontWeight: 900, margin: '0.4rem 0 0.85rem 0' }}>
                  Eliminating Economic Barriers for Students & Women
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  Financial Youth Club is a registered non-profit organization dedicated to breaking down financial literacy barriers. We connect ambitious youth, stay-at-home mothers, and female entrepreneurs with industry leaders from <strong>J.P. Morgan, Goldman Sachs, Harvard, and LSE</strong>.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontSize: '0.88rem' }}>
                    <CheckCircle2 color="#0EA5E9" size={16} /> 100% Free Workshops, Webinars & Bootcamps
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontSize: '0.88rem' }}>
                    <CheckCircle2 color="#0EA5E9" size={16} /> Materials translated into Urdu, Hindi, Spanish, and Chinese
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontSize: '0.88rem' }}>
                    <CheckCircle2 color="#0EA5E9" size={16} /> Partnered with ECONFLOW & USA Economics Olympiad (USAEO)
                  </div>
                </div>
                <Link to="/about" className="btn-gold" style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}>
                  Explore Full About Page <ArrowRight size={15} />
                </Link>
              </div>

              <div className="white-card pop-card">
                <h4 style={{ color: '#0EA5E9', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.85rem' }}>Recruiting Active Student Roles</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.88rem' }}>💼 FYC Consultants Track</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Advise on investment strategy, client engagement, market & sector analysis.</div>
                  </div>
                  <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.88rem' }}>📈 Financial Markets Research Analysts</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Research global markets, analyze macroeconomic trends & publish reports.</div>
                  </div>
                  <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.88rem' }}>🎙️ Guest Speakers & Industry Practitioners</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Deliver keynote webinars and share unique market & career forecasts.</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GIRLS FOR CHANGE & PINK TAX */}
          {activeTab === 'pinktax' && (
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span style={{ color: '#DB2777', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  GENDER ECONOMIC EQUALITY
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.6rem', fontWeight: 900, margin: '0.4rem 0 0.85rem 0' }}>
                  Understanding The Pink Tax Campaign
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  "Same product. Same purpose. So why does hers cost more?" Led by Co-Founder <strong>Hooria Riasat</strong> (Audit Associate at Deloitte/KPMG), Girls for Change tackles gendered price markups (e.g. <em>For Her $6.29 vs. For Him $5.49</em>) and advocates for price transparency and female financial autonomy.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontSize: '0.88rem' }}>
                    <CheckCircle2 color="#DB2777" size={16} /> Economic Price Transparency & Advocacy Campaigns
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontSize: '0.88rem' }}>
                    <CheckCircle2 color="#DB2777" size={16} /> Budgeting & Financial Independence Bootcamps for Stay-at-Home Mothers
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontSize: '0.88rem' }}>
                    <CheckCircle2 color="#DB2777" size={16} /> Women in Finance & Audit Circles
                  </div>
                </div>
                <Link to="/campaigns" className="btn-gold" style={{ background: '#DB2777', padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}>
                  Explore Campaign <ArrowRight size={15} />
                </Link>
              </div>

              <div className="framed-portrait pop-card" style={{ padding: '1rem', textAlign: 'center', background: '#FFF5F8' }}>
                <img
                  src="/images/founders/hooria_riasat.jpg"
                  alt="Hooria Riasat - Founder Girls for Change"
                  style={{ width: '100%', height: '220px', objectFit: 'contain', borderRadius: '6px' }}
                />
                <div style={{ padding: '0.75rem 0 0 0', borderTop: '1px solid #FBCFE8' }}>
                  <div style={{ fontWeight: 900, color: '#0F172A', fontSize: '1.1rem' }}>HOORIA RIASAT</div>
                  <div style={{ color: '#DB2777', fontWeight: 800, fontSize: '0.82rem' }}>Founder, Girls for Change • Audit Associate</div>
                  <div style={{ color: '#64748B', fontSize: '0.78rem', marginTop: '0.25rem' }}>"Same product. Same purpose. So why does hers cost more?"</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: MEDIA & STRATEGIC ALLIANCES */}
          {activeTab === 'media' && (
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span style={{ color: '#7C3AED', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  FEATURED PODCASTS & PARTNERSHIPS
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.5rem', fontWeight: 900, margin: '0.4rem 0 0.85rem 0' }}>
                  Featured Conversations & Alliances
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  Our Founder Adan Shahzad has been featured across international media platforms and global podcasts sharing FYC's vision for financial literacy.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontSize: '0.88rem' }}>
                    <Radio color="#7C3AED" size={16} /> <strong>The World in Us (501c3)</strong> Podcast Feature
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontSize: '0.88rem' }}>
                    <Radio color="#7C3AED" size={16} /> <strong>The Capstone Program</strong> Spotlight (Feb 2026)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontSize: '0.88rem' }}>
                    <Radio color="#7C3AED" size={16} /> <strong>The Professor Kev Show</strong> Keynote (March 2026)
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontSize: '0.88rem' }}>
                    <Globe color="#7C3AED" size={16} /> Partners: <strong>ECONFLOW</strong>, <strong>USA Economics Olympiad (USAEO)</strong> & <strong>Rise and Rights Initiatives</strong>
                  </div>
                </div>
                <Link to="/collaborations" className="btn-gold" style={{ background: '#7C3AED', padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}>
                  View All Collaborations <ArrowRight size={15} />
                </Link>
              </div>

              <div className="white-card pop-card" style={{ background: '#F8FAFC' }}>
                <h4 style={{ color: '#7C3AED', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.85rem' }}>Global Institution Partners</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {topEmployers.map((emp, idx) => (
                    <span key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#0F172A', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800 }}>
                      {emp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  )
}

export default AboutUsSection
