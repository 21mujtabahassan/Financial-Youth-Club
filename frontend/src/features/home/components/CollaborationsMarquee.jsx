import React from 'react'

const CollaborationsMarquee = () => {
  const partners = [
    {
      name: "Financial Youth Club",
      desc: "NGO Core Badge",
      svgLogo: (
        <svg width="44" height="44" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#38BDF8" stroke="#0F172A" strokeWidth="4" />
          <circle cx="50" cy="50" r="40" fill="#E0F2FE" />
          <text x="50" y="32" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="800" letterSpacing="0.5">FINANCIAL YOUTH CLUB</text>
          <text x="50" y="62" textAnchor="middle" fill="#0EA5E9" fontSize="26" fontWeight="900">FYC</text>
        </svg>
      )
    },
    {
      name: "Girls for Change",
      desc: "Pink Tax Initiative",
      svgLogo: (
        <svg width="44" height="44" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#FCE7F3" stroke="#F472B6" strokeWidth="3" />
          {/* Female Silhouette */}
          <path d="M50,22 Q64,22 64,36 Q64,50 50,56 Q36,50 36,36 Q36,22 50,22 Z" fill="#EC4899" />
          <path d="M30,80 Q50,60 70,80 Z" fill="#F472B6" />
          <path d="M60,26 C68,18 78,28 68,36" fill="none" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "EconFlow",
      desc: "Financial Education Partner",
      svgLogo: (
        <svg width="44" height="44" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="efGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          <path d="M20,65 Q35,20 60,40 T90,30" fill="none" stroke="url(#efGrad)" strokeWidth="12" strokeLinecap="round" />
          <path d="M10,40 Q45,80 80,60" fill="none" stroke="#38BDF8" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
        </svg>
      )
    },
    {
      name: "USA Economics Olympiad",
      desc: "USAEO National Competition",
      svgLogo: (
        <svg width="44" height="44" viewBox="0 0 100 100">
          <path d="M30,50 C30,30 50,30 50,50 C50,70 70,70 70,50 C70,30 50,30 50,50 C50,70 30,70 30,50 Z" 
                fill="none" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" />
          <path d="M50,50 C50,70 70,70 70,50 C70,30 50,30 50,50 Z" 
                fill="none" stroke="#F97316" strokeWidth="10" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "Audit Lens",
      desc: "Financial Advisory Monogram",
      svgLogo: (
        <svg width="44" height="44" viewBox="0 0 100 100">
          <circle cx="50" cy="42" r="28" fill="none" stroke="#0F172A" strokeWidth="8" />
          <line x1="68" y1="60" x2="88" y2="80" stroke="#0EA5E9" strokeWidth="10" strokeLinecap="round" />
          <circle cx="50" cy="42" r="14" fill="#0EA5E9" />
        </svg>
      )
    },
    {
      name: "The Capstone Program",
      desc: "Mentorship Monogram (TCP)",
      svgLogo: (
        <svg width="44" height="44" viewBox="0 0 100 100">
          <rect width="100" height="100" rx="16" fill="#0F172A" />
          <text x="50" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="34" fontWeight="900" fontFamily="sans-serif">TCP</text>
        </svg>
      )
    },
    {
      name: "The Professor Kev Show",
      desc: "Vibrant Media Badge",
      svgLogo: (
        <svg width="44" height="44" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#DC2626" />
          <text x="50" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="50" fontWeight="900" fontFamily="sans-serif">K</text>
        </svg>
      )
    },
    {
      name: "The World In Us",
      desc: "Global Podcast Emblem (TWIU)",
      svgLogo: (
        <svg width="44" height="44" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#15803D" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="#BBF7D0" strokeWidth="3" />
          <ellipse cx="50" cy="50" rx="32" ry="12" fill="none" stroke="#86EFAC" strokeWidth="3" />
          <line x1="18" y1="50" x2="82" y2="50" stroke="#86EFAC" strokeWidth="3" />
        </svg>
      )
    },
    {
      name: "Nhan Thao Van Hanh",
      desc: "Lotus Crest Seal",
      svgLogo: (
        <svg width="44" height="44" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#FDF2F8" stroke="#F472B6" strokeWidth="3" />
          <path d="M50,20 C40,40 20,45 35,65 C45,75 55,75 65,65 C80,45 60,40 50,20 Z" fill="#EC4899" />
          <path d="M50,30 C45,45 32,50 42,65 C48,70 52,70 58,65 C68,50 55,45 50,30 Z" fill="#10B981" />
        </svg>
      )
    },
    {
      name: "Rise & Rights Initiatives",
      desc: "Sunrise & Wings Motif",
      svgLogo: (
        <svg width="44" height="44" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3" />
          {/* Sunrise */}
          <circle cx="50" cy="60" r="20" fill="#F59E0B" />
          {/* Wings */}
          <path d="M15,45 Q35,35 50,60 Q65,35 85,45 Q65,60 50,75 Q35,60 15,45 Z" fill="#0EA5E9" opacity="0.8" />
        </svg>
      )
    }
  ]

  const list = [...partners, ...partners]

  return (
    <section style={{ padding: '4rem 0', background: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
        <span className="pill-badge" style={{ marginBottom: '0.5rem' }}>Strategic Alliance</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-navy)', fontSize: '2rem', fontWeight: 800 }}>
          International Collaborators & Partner Organizations
        </h2>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {list.map((item, idx) => (
            <div key={idx} className="white-card pop-card" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.1rem',
              minWidth: '320px',
              padding: '1.25rem 1.6rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
            }}>
              <div style={{ flexShrink: 0 }}>
                {item.svgLogo}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-navy)', fontSize: '1.05rem' }}>
                  {item.name}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollaborationsMarquee
