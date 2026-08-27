import React from 'react'

const InstitutesTicker = () => {
  const institutes = [
    {
      name: "Barclays",
      badge: "Eagle Emblem",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <path d="M50,5 L20,25 L30,55 L50,45 L70,55 L80,25 Z" fill="#00AEEF" />
          <text x="50" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">🦅</text>
        </svg>
      )
    },
    {
      name: "Bank of America",
      badge: "Flag Grid",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <rect x="10" y="10" width="35" height="18" fill="#E11D48" />
          <rect x="55" y="10" width="35" height="18" fill="#1D4ED8" />
          <rect x="10" y="32" width="35" height="18" fill="#1D4ED8" />
          <rect x="55" y="32" width="35" height="18" fill="#E11D48" />
        </svg>
      )
    },
    {
      name: "Goldman Sachs",
      badge: "Blue Square",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <rect x="15" y="5" width="70" height="50" fill="#1D4ED8" rx="4" />
          <text x="50" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="serif">GS</text>
        </svg>
      )
    },
    {
      name: "J.P. Morgan",
      badge: "Serif Wordmark",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <text x="50" y="36" textAnchor="middle" fill="#0F172A" fontSize="20" fontWeight="bold" fontFamily="serif">JPM</text>
        </svg>
      )
    },
    {
      name: "KPMG",
      badge: "4 Blue Blocks",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <rect x="5" y="15" width="20" height="30" fill="#0284C7" />
          <rect x="28" y="15" width="20" height="30" fill="#0284C7" />
          <rect x="51" y="15" width="20" height="30" fill="#0284C7" />
          <rect x="74" y="15" width="20" height="30" fill="#0284C7" />
          <text x="50" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">KPMG</text>
        </svg>
      )
    },
    {
      name: "PwC",
      badge: "Geometric Prism",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <rect x="20" y="10" width="25" height="25" fill="#E11D48" />
          <rect x="40" y="20" width="25" height="25" fill="#F59E0B" />
          <text x="78" y="38" fill="#0F172A" fontSize="16" fontWeight="bold">pwc</text>
        </svg>
      )
    },
    {
      name: "Deloitte.",
      badge: "Green Dot Dot",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <text x="45" y="38" textAnchor="middle" fill="#0F172A" fontSize="16" fontWeight="bold">Deloitte</text>
          <circle cx="88" cy="36" r="4" fill="#86EFAC" />
        </svg>
      )
    },
    {
      name: "Bain & Company",
      badge: "Red Line Compass",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <text x="40" y="36" textAnchor="middle" fill="#CC0000" fontSize="18" fontWeight="bold">BAIN</text>
          <line x1="75" y1="10" x2="90" y2="50" stroke="#CC0000" strokeWidth="4" />
        </svg>
      )
    },
    {
      name: "Coca-Cola",
      badge: "Ribbon Script",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <rect x="5" y="10" width="90" height="40" fill="#DC2626" rx="8" />
          <text x="50" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="serif">Coca-Cola</text>
        </svg>
      )
    },
    {
      name: "L'Oréal",
      badge: "Spaced Serif",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <text x="50" y="36" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="bold" letterSpacing="2">L'ORÉAL</text>
        </svg>
      )
    },
    {
      name: "LSE",
      badge: "Red Square Coat",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <rect x="25" y="5" width="50" height="50" fill="#DC2626" rx="4" />
          <text x="50" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900">LSE</text>
        </svg>
      )
    },
    {
      name: "UPenn",
      badge: "Blue & Red Shield",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <path d="M25,10 L75,10 L75,35 Q75,55 50,55 Q25,55 25,35 Z" fill="#1E3A8A" />
          <path d="M50,10 L75,10 L75,35 Q75,55 50,55 Z" fill="#DC2626" />
          <text x="50" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Penn</text>
        </svg>
      )
    },
    {
      name: "Duke University",
      badge: "Block D Seal",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <rect x="25" y="8" width="50" height="44" fill="#1E3A8A" rx="4" />
          <text x="50" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900">D</text>
        </svg>
      )
    },
    {
      name: "UC Berkeley",
      badge: "Blue & Gold Seal",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <circle cx="50" cy="30" r="24" fill="#1E3A8A" stroke="#F59E0B" strokeWidth="3" />
          <text x="50" y="36" textAnchor="middle" fill="#F59E0B" fontSize="12" fontWeight="bold">Cal</text>
        </svg>
      )
    },
    {
      name: "LUMS",
      badge: "Green Shield Crest",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <path d="M25,10 L75,10 L75,35 Q75,55 50,55 Q25,55 25,35 Z" fill="#15803D" />
          <text x="50" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">LUMS</text>
        </svg>
      )
    },
    {
      name: "NUST",
      badge: "Blue Circular Seal",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <circle cx="50" cy="30" r="24" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
          <text x="50" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">NUST</text>
        </svg>
      )
    },
    {
      name: "HKU",
      badge: "Dragon/Lion Shield",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <path d="M25,10 L75,10 L75,35 Q75,55 50,55 Q25,55 25,35 Z" fill="#15803D" />
          <text x="50" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">HKU</text>
        </svg>
      )
    },
    {
      name: "CFA / ACCA / CA",
      badge: "Finance Certification",
      svg: (
        <svg width="36" height="24" viewBox="0 0 100 60">
          <circle cx="50" cy="30" r="24" fill="#D97706" />
          <text x="50" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">CFA</text>
        </svg>
      )
    }
  ]

  const list = [...institutes, ...institutes]

  return (
    <section style={{ padding: '3rem 0', background: 'var(--bg-light)', borderBottom: '1px solid var(--border-light)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h3 className="ticker-heading" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-muted)', fontSize: '0.88rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Mentors Representing Leading Global Organizations & Universities
        </h3>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track" style={{ animationDuration: '34s' }}>
          {list.map((item, idx) => (
            <div key={idx} className="pop-card institute-card" style={{
              display: 'flex', alignItems: 'center', gap: '0.85rem',
              padding: '0.75rem 1.35rem', borderRadius: '14px',
              border: '1px solid var(--border-light)', background: '#FFFFFF',
              fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-navy)',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
              minWidth: '190px',
              flexShrink: 0
            }}>
              <div style={{ flexShrink: 0 }}>
                {item.svg}
              </div>
              <span style={{ whiteSpace: 'nowrap' }}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .ticker-heading { font-size: 0.76rem !important; }
          .institute-card {
            padding: 0.55rem 1rem !important;
            min-width: 160px !important;
            font-size: 0.82rem !important;
            border-radius: 10px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default InstitutesTicker
