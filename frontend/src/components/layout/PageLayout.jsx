import React from 'react'

const PageLayout = ({ children, title, subtitle, badge }) => {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
      {(title || subtitle) && (
        <div className="section-header">
          {badge && <span className="pill-badge" style={{ marginBottom: '0.6rem' }}>{badge}</span>}
          <h1 className="section-title">{title}</h1>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      <div>{children}</div>
    </div>
  )
}

export default PageLayout
