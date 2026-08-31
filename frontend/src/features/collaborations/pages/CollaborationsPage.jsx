import React, { useState } from 'react'
import PageLayout from '../../../components/layout/PageLayout'
import { Globe, ArrowRight, X, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import VorexCorePartnershipSection from '../../home/components/VorexCorePartnershipSection'

const partnersList = [
  {
    id: 'girls-for-change',
    name: 'Girls for Change',
    category: 'Female Economic Equality',
    tag: 'Pink Tax Initiative',
    accentColor: '#DB2777',
    bgLight: '#FFF1F2',
    svgLogo: (
      <svg width="44" height="44" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="#FCE7F3" stroke="#F472B6" strokeWidth="3" />
        <path d="M50,22 Q64,22 64,36 Q64,50 50,56 Q36,50 36,36 Q36,22 50,22 Z" fill="#EC4899" />
        <path d="M30,80 Q50,60 70,80 Z" fill="#F472B6" />
        <path d="M60,26 C68,18 78,28 68,36" fill="none" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    summary: 'Joint advocacy campaign tackling gendered price markups ("The Pink Tax") and empowering stay-at-home mothers with financial tools.',
    details: 'Spearheaded by Co-Founder Hooria Riasat (Audit Associate @ Deloitte/KPMG), this partnership advocates for price transparency and female financial autonomy.',
    stats: ['10,000+ Women Reached', 'Pink Tax Research', '100% Free Workshops'],
    linkText: 'Explore Pink Tax Campaign'
  },
  {
    id: 'econflow',
    name: 'EconFlow',
    category: 'Financial Education',
    tag: 'EdTech Alliance',
    accentColor: '#0EA5E9',
    bgLight: '#F0F9FF',
    svgLogo: (
      <svg width="44" height="44" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="efGradCollabFloating" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        <path d="M20,65 Q35,20 60,40 T90,30" fill="none" stroke="url(#efGradCollabFloating)" strokeWidth="12" strokeLinecap="round" />
        <path d="M10,40 Q45,80 80,60" fill="none" stroke="#38BDF8" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
      </svg>
    ),
    summary: 'Partnering to transform financial education and interactive learning modules for the next generation of global youth.',
    details: 'EconFlow and FYC co-develop digital curricula, economic case studies, and interactive budgeting toolkits distributed freely to schools worldwide.',
    stats: ['Digital Curricula', '35+ Countries', '5,000+ Students'],
    linkText: 'Learn About EconFlow'
  },
  {
    id: 'usaeo',
    name: 'USA Economics Olympiad',
    category: 'Academic Competition',
    tag: 'USA National Alliance',
    accentColor: '#2563EB',
    bgLight: '#EFF6FF',
    svgLogo: (
      <svg width="44" height="44" viewBox="0 0 100 100">
        <path d="M30,50 C30,30 50,30 50,50 C50,70 70,70 70,50 C70,30 50,30 50,50 C50,70 30,70 30,50 Z" 
              fill="none" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" />
        <path d="M50,50 C50,70 70,70 70,50 C70,30 50,30 50,50 Z" 
              fill="none" stroke="#F97316" strokeWidth="10" strokeLinecap="round" />
      </svg>
    ),
    summary: 'Contributing to the future of economics education by supporting America\'s leading non-profit economics competition.',
    details: 'Through this strategic partnership, FYC provides high school competitors with mentorship from Ivy League scholars and Wall Street professionals.',
    stats: ['Partnered with USAEO', '50+ High School Chapters', 'Ivy League Mentors'],
    linkText: 'Explore USAEO Mentorship'
  },
  {
    id: 'audit-lens',
    name: 'Audit Lens',
    category: 'Corporate Governance',
    tag: 'Audit Advisory',
    accentColor: '#4F46E5',
    bgLight: '#EEF2FF',
    svgLogo: (
      <svg width="44" height="44" viewBox="0 0 100 100">
        <circle cx="50" cy="42" r="28" fill="none" stroke="#0F172A" strokeWidth="8" />
        <line x1="68" y1="60" x2="88" y2="80" stroke="#0EA5E9" strokeWidth="10" strokeLinecap="round" />
        <circle cx="50" cy="42" r="14" fill="#0EA5E9" />
      </svg>
    ),
    summary: 'Professional audit case studies and financial statement masterclasses led by Big Four associates.',
    details: 'Provides FYC scholars with real-world audit reports, internal control frameworks, and corporate fraud detection case studies.',
    stats: ['Big Four Insights', 'Fraud Detection', 'IFRS Standards'],
    linkText: 'View Audit Masterclass'
  },
  {
    id: 'the-capstone-program',
    name: 'The Capstone Program',
    category: 'Leadership & Mentorship',
    tag: 'Student Capstone',
    accentColor: '#7C3AED',
    bgLight: '#F5F3FF',
    svgLogo: (
      <svg width="44" height="44" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="16" fill="#0F172A" />
        <text x="50" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="34" fontWeight="900" fontFamily="sans-serif">TCP</text>
      </svg>
    ),
    summary: 'Connecting high school leaders with corporate finance practitioners for hands-on capstone projects.',
    details: 'Featured Founder Adan Shahzad on February 24th, 2026, highlighting capstone research projects and corporate presentation skillbuilding.',
    stats: ['Featured Interview', 'Student Capstones', 'Corporate Judges'],
    linkText: 'View Capstone Highlights'
  },
  {
    id: 'professor-kev-show',
    name: 'The Professor Kev Show',
    category: 'Academic Broadcast',
    tag: 'Keynote Feature',
    accentColor: '#DC2626',
    bgLight: '#FEF2F2',
    svgLogo: (
      <svg width="44" height="44" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="#DC2626" />
        <text x="50" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="50" fontWeight="900" fontFamily="sans-serif">K</text>
      </svg>
    ),
    summary: 'Live broadcasting partner featuring FYC founders discussing youth financial democratization.',
    details: 'Hosted Founder Adan Shahzad on March 18th, 2026 for a deep-dive conversation on non-profit scaling, youth empowerment, and financial literacy.',
    stats: ['March 2026 Keynote', 'Live Q&A', 'Global Audience'],
    linkText: 'Watch Keynote Episode'
  },
  {
    id: 'the-world-in-us',
    name: 'The World In Us',
    category: 'Global Podcast & Media',
    tag: '501(c)3 Media Spotlight',
    accentColor: '#16A34A',
    bgLight: '#F0FDF4',
    svgLogo: (
      <svg width="44" height="44" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="#15803D" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="#BBF7D0" strokeWidth="3" />
        <ellipse cx="50" cy="50" rx="32" ry="12" fill="none" stroke="#86EFAC" strokeWidth="3" />
        <line x1="18" y1="50" x2="82" y2="50" stroke="#86EFAC" strokeWidth="3" />
      </svg>
    ),
    summary: 'Featured global podcast spotlight discussing money management, financial literacy, and studying abroad.',
    details: 'Founder Adan Shahzad joined The World in Us to discuss how FYC is democratizing finance education for underprivileged students across 35+ countries.',
    stats: ['Global Reach', '501(c)3 Non-Profit', 'International Airtime'],
    linkText: 'Listen to Podcast Segment'
  },
  {
    id: 'nhan-thao-van-hanh',
    name: 'Nhan Thao Van Hanh',
    category: 'Migration & Inclusion',
    tag: 'Global Literacy',
    accentColor: '#E11D48',
    bgLight: '#FFF1F2',
    svgLogo: (
      <svg width="44" height="44" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="#FDF2F8" stroke="#F472B6" strokeWidth="3" />
        <path d="M50,20 C40,40 20,45 35,65 C45,75 55,75 65,65 C80,45 60,40 50,20 Z" fill="#EC4899" />
        <path d="M50,30 C45,45 32,50 42,65 C48,70 52,70 58,65 C68,50 55,45 50,30 Z" fill="#10B981" />
      </svg>
    ),
    summary: 'Specialized literacy series providing personal finance guidance for international students and migrant workers.',
    details: 'Focuses on financial knowledge for safer migration, international money transfers, emergency funds, and avoiding financial scams.',
    stats: ['Safer Migration Track', 'Multilingual Guides', 'Community Support'],
    linkText: 'Explore Migration Literacy'
  },
  {
    id: 'rise-and-rights',
    name: 'Rise & Rights Initiatives',
    category: 'Women in Finance',
    tag: 'Youth Empowerment',
    accentColor: '#D97706',
    bgLight: '#FEF3C7',
    svgLogo: (
      <svg width="44" height="44" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3" />
        <circle cx="50" cy="60" r="20" fill="#F59E0B" />
        <path d="M15,45 Q35,35 50,60 Q65,35 85,45 Q65,60 50,75 Q35,60 15,45 Z" fill="#0EA5E9" opacity="0.8" />
      </svg>
    ),
    summary: 'Joint initiative empowering young female graduates to pursue careers in Investment Banking, PE, and Audit.',
    details: 'Co-hosts "Women in Finance" roundtables and resume bootcamps to increase female representation in senior financial leadership.',
    stats: ['Women in Finance', 'Mentorship Panels', 'Career Bootcamps'],
    linkText: 'View Joint Workshops'
  },
  {
    id: 'fyc-core',
    name: 'Financial Youth Club',
    category: 'NGO Core Initiative',
    tag: 'Global Non-Profit',
    accentColor: '#0EA5E9',
    bgLight: '#E0F2FE',
    svgLogo: (
      <svg width="44" height="44" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="#38BDF8" stroke="#0F172A" strokeWidth="4" />
        <circle cx="50" cy="50" r="40" fill="#E0F2FE" />
        <text x="50" y="32" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="800" letterSpacing="0.5">FINANCIAL YOUTH CLUB</text>
        <text x="50" y="62" textAnchor="middle" fill="#0EA5E9" fontSize="26" fontWeight="900">FYC</text>
      </svg>
    ),
    summary: 'Democratizing high-finance education and economic literacy for youth, stay-at-home mothers, and aspiring founders worldwide.',
    details: 'Our core umbrella NGO coordinating 90+ community workshops, regional chapters in 35+ countries, and global mentorship programs.',
    stats: ['35+ Countries', '90+ Workshops', '100% Free Tuition'],
    linkText: 'View FYC Core Mission'
  }
]

const CollaborationsPage = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { key: 'all', label: 'All Collaborators (10)' },
    { key: 'Female Economic Equality', label: 'Female Empowerment' },
    { key: 'Academic Competition', label: 'Academic & Olympiads' },
    { key: 'Global Podcast & Media', label: 'Media & Podcasts' },
    { key: 'Corporate Governance', label: 'Audit & Consulting' }
  ]


  const displayedPartners = selectedCategory === 'all'
    ? partnersList
    : partnersList.filter(p => p.category === selectedCategory)

  const totalItems = displayedPartners.length
  const radius = 240 // radius in pixels

  return (
    <PageLayout
      title="International Collaborations & Alliances"
      subtitle="Partnered with 21+ global organizations, academic olympiads, and media platforms across 4 continents."
      badge="Global Ecosystem"
    >

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => {
              setSelectedCategory(cat.key)
              setHoveredPartner(null)
            }}
            style={{
              background: selectedCategory === cat.key ? 'linear-gradient(135deg, #0A2647 0%, #071B33 100%)' : '#FFFFFF',
              color: selectedCategory === cat.key ? '#FFFFFF' : '#0A2647',
              border: selectedCategory === cat.key ? '1px solid #0A2647' : '1px solid #CBD5E1',
              padding: '0.6rem 1.4rem',
              borderRadius: '9999px',
              fontSize: '0.88rem',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: selectedCategory === cat.key ? '0 4px 14px rgba(10, 38, 71, 0.25)' : '0 2px 8px rgba(0,0,0,0.03)',
              transition: 'all 0.25s ease'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FLOATING ORBIT WHEEL SECTION (NO CONTAINING BOX - FLOATING ON PLAIN WHITE BACKGROUND) */}
      <div style={{
        background: 'transparent',
        border: 'none',
        padding: '2rem 0 5rem 0',
        position: 'relative',
        minHeight: '640px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible'
      }}>

        {/* MAIN ORBIT WHEEL CONTAINER WITH MOUSE LEAVE RESUME */}
        <div
          className="orbit-wheel-wrapper"
          onMouseLeave={() => setHoveredPartner(null)}
          style={{
            position: 'relative',
            width: `${radius * 2 + 160}px`,
            height: `${radius * 2 + 160}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >

          {/* Glowing Textured Ambient Outer Ring */}
          <div style={{
            position: 'absolute',
            width: `${radius * 2 + 20}px`,
            height: `${radius * 2 + 20}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79, 195, 232, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
            pointerEvents: 'none'
          }} />

          {/* Dotted & Textured Circular Orbit Track Ring */}
          <div style={{
            position: 'absolute',
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            borderRadius: '50%',
            border: '2px dashed #94A3B8',
            pointerEvents: 'none',
            boxShadow: '0 0 30px rgba(79, 195, 232, 0.15)'
          }} />

          {/* CENTRAL CORE HUB WITH MULTI-RING TEXTURE */}
          <div style={{
            width: '170px',
            height: '170px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0A2647 0%, #071B33 100%)',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '1.25rem',
            boxShadow: '0 10px 35px rgba(7, 27, 51, 0.3), 0 0 20px rgba(79, 195, 232, 0.4)',
            zIndex: 3,
            position: 'relative',
            border: '4px solid #4FC3E8'
          }}>
            <Globe color="#4FC3E8" size={34} style={{ marginBottom: '0.25rem' }} />
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '0.98rem', lineHeight: 1.25 }}>
              GLOBAL NGO ALLIANCES
            </div>
            <div style={{ fontSize: '0.7rem', color: '#4FC3E8', fontWeight: 800, marginTop: '0.25rem', letterSpacing: '0.05em' }}>
              21+ PARTNERS
            </div>
          </div>

          {/* SPINNING ORBIT RING FOR SPOKES & NODES */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              animation: hoveredPartner ? 'none' : 'orbitSpin 35s linear infinite',
              animationPlayState: hoveredPartner ? 'paused' : 'running',
              transition: 'all 0.5s ease'
            }}
          >
            {/* SVG Spoke / Rope Radial Connectors from Core Hub to Nodes */}
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'visible',
                pointerEvents: 'none'
              }}
            >
              {displayedPartners.map((partner, index) => {
                const isHovered = hoveredPartner && hoveredPartner.id === partner.id
                const hasHover = Boolean(hoveredPartner)

                let angleDegrees = (index / totalItems) * 360

                if (hasHover) {
                  if (isHovered) {
                    angleDegrees = 0
                  } else {
                    const nonHoveredIndex = displayedPartners
                      .filter(p => p.id !== hoveredPartner.id)
                      .findIndex(p => p.id === partner.id)
                    const nonHoveredTotal = totalItems - 1
                    const startAngle = 110
                    const endAngle = 250
                    angleDegrees = startAngle + (nonHoveredIndex / Math.max(1, nonHoveredTotal - 1)) * (endAngle - startAngle)
                  }
                }

                const angleRad = (angleDegrees * Math.PI) / 180
                const center = (radius * 2 + 160) / 2
                const targetX = center + radius * Math.cos(angleRad)
                const targetY = center + radius * Math.sin(angleRad)

                return (
                  <line
                    key={`spoke-${partner.id}`}
                    x1={center}
                    y1={center}
                    x2={targetX}
                    y2={targetY}
                    stroke={isHovered ? partner.accentColor : '#CBD5E1'}
                    strokeWidth={isHovered ? '3.5' : '2'}
                    strokeDasharray={isHovered ? 'none' : '6 4'}
                    opacity={isHovered ? 1 : 0.65}
                    style={{ transition: 'all 0.5s ease' }}
                  />
                )
              })}
            </svg>

            {/* Orbiting Partner Nodes */}
            {displayedPartners.map((partner, index) => {
              const isHovered = hoveredPartner && hoveredPartner.id === partner.id
              const hasHover = Boolean(hoveredPartner)

              let angleDegrees = (index / totalItems) * 360

              if (hasHover) {
                if (isHovered) {
                  angleDegrees = 0
                } else {
                  const nonHoveredIndex = displayedPartners
                    .filter(p => p.id !== hoveredPartner.id)
                    .findIndex(p => p.id === partner.id)
                  const nonHoveredTotal = totalItems - 1
                  const startAngle = 110
                  const endAngle = 250
                  angleDegrees = startAngle + (nonHoveredIndex / Math.max(1, nonHoveredTotal - 1)) * (endAngle - startAngle)
                }
              }

              const angleRad = (angleDegrees * Math.PI) / 180
              const xPos = radius * Math.cos(angleRad)
              const yPos = radius * Math.sin(angleRad)

              return (
                <div
                  key={partner.id}
                  onMouseEnter={() => setHoveredPartner(partner)}
                  onClick={() => setHoveredPartner(partner)}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${xPos}px - ${isHovered ? 44 : 36}px)`,
                    top: `calc(50% + ${yPos}px - ${isHovered ? 44 : 36}px)`,
                    width: isHovered ? '88px' : '72px',
                    height: isHovered ? '88px' : '72px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: `3px solid ${isHovered ? partner.accentColor : '#CBD5E1'}`,
                    boxShadow: isHovered
                      ? `0 0 30px ${partner.accentColor}`
                      : '0 6px 18px rgba(15,23,42,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: isHovered ? 20 : 5,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transform: isHovered ? 'scale(1.2)' : hasHover ? 'scale(0.88)' : 'scale(1)',
                    opacity: hasHover && !isHovered ? 0.7 : 1
                  }}
                >
                  {/* Counter-rotating container so SVG Logo remains perfectly upright! */}
                  <div style={{
                    animation: hoveredPartner ? 'none' : 'counterSpin 35s linear infinite',
                    animationPlayState: hoveredPartner ? 'paused' : 'running',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {partner.svgLogo}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        {/* EXPANDED RIGHT HEMISPHERE DETAIL CARD PANEL */}
        {hoveredPartner && (
          <div
            className="drop-box orbit-detail-card"
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '380px',
              background: '#FFFFFF',
              border: `2px solid ${hoveredPartner.accentColor}`,
              borderRadius: '20px',
              padding: '1.75rem',
              boxShadow: `0 16px 40px -10px ${hoveredPartner.accentColor}33`,
              zIndex: 30
            }}
          >

            {/* Close Button */}
            <button
              onClick={() => setHoveredPartner(null)}
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: '#F1F5F9', border: 'none', borderRadius: '50%',
                width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#0F172A'
              }}
            >
              <X size={18} />
            </button>

            {/* Partner Header Logo & Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <div style={{ flexShrink: 0 }}>
                {hoveredPartner.svgLogo}
              </div>
              <div>
                <span style={{
                  background: hoveredPartner.accentColor,
                  color: '#FFFFFF',
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  padding: '0.15rem 0.6rem',
                  borderRadius: '9999px'
                }}>
                  {hoveredPartner.tag}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.35rem', fontWeight: 900, marginTop: '0.2rem', lineHeight: 1.25 }}>
                  {hoveredPartner.name}
                </h3>
              </div>
            </div>

            {/* Category */}
            <div style={{ color: '#64748B', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.85rem' }}>
              {hoveredPartner.category}
            </div>

            {/* Summary */}
            <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '0.85rem' }}>
              {hoveredPartner.summary}
            </p>

            {/* Details */}
            <p style={{ color: '#64748B', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '1.25rem', background: hoveredPartner.bgLight, padding: '0.75rem', borderRadius: '8px' }}>
              {hoveredPartner.details}
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              {hoveredPartner.stats.map((st, k) => (
                <span key={k} style={{ background: '#F1F5F9', color: '#0F172A', fontWeight: 800, fontSize: '0.72rem', padding: '0.25rem 0.6rem', borderRadius: '6px' }}>
                  ✓ {st}
                </span>
              ))}
            </div>

            {/* Link */}
            <Link
              to="/programs"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                background: hoveredPartner.accentColor,
                color: '#FFFFFF',
                padding: '0.75rem',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.85rem',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              {hoveredPartner.linkText} <ArrowRight size={16} />
            </Link>

          </div>
        )}

      </div>

      {/* VorexCore & Strategic Partnership Showcase Card */}
      <div style={{ marginBottom: '3.5rem' }}>
        <VorexCorePartnershipSection />
      </div>

      {/* Grid View Below */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.75rem', fontWeight: 900 }}>
          All Partner Organizations & Alliances
        </h3>
      </div>

      <div className="grid-3" style={{ gap: '1.5rem' }}>
        {partnersList.map((p, idx) => (
          <div
            key={idx}
            className="white-card pop-card"
            onClick={() => setHoveredPartner(p)}
            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ flexShrink: 0 }}>
                {p.svgLogo}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, color: '#0F172A', fontSize: '1.1rem' }}>
                  {p.name}
                </div>
                <div style={{ color: p.accentColor, fontWeight: 800, fontSize: '0.78rem' }}>
                  {p.category}
                </div>
              </div>
            </div>
            <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.5 }}>
              {p.summary}
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '0.5rem', color: '#0EA5E9', fontWeight: 800, fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Click to Focus in Orbit <ArrowRight size={15} />
            </div>
          </div>
        ))}
      </div>

    </PageLayout>
  )
}

export default CollaborationsPage
