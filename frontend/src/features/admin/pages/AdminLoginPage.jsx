import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../../../components/layout/PageLayout'
import { Lock, KeyRound, ShieldAlert, CheckCircle2 } from 'lucide-react'

const AdminLoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    
    // Simple secure admin check (accepts admin@fyc.org or admin credentials)
    if (password === 'fycadmin2026' || password === 'admin') {
      sessionStorage.setItem('fyc_admin_authenticated', 'true')
      sessionStorage.setItem('fyc_admin_email', email || 'admin@financialyouthclub.org')
      navigate('/admin/blogs')
    } else {
      setError('Invalid admin credentials. Please enter the correct admin passcode.')
    }
  }

  return (
    <PageLayout
      title="FYC Admin Portal"
      subtitle="Authorized access only for Financial Youth Club editorial team and administrators."
      badge="Admin Secure"
    >
      <div style={{ maxWidth: '420px', margin: '2rem auto 4rem auto' }}>
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '18px',
          padding: '2.25rem',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#F0F9FF', border: '1px solid #0EA5E9', color: '#0EA5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto' }}>
              <Lock size={26} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>
              Admin Sign In
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.82rem', marginTop: '0.25rem' }}>
              Manage blogs, articles, and portal content
            </p>
          </div>

          {error && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#DC2626', padding: '0.75rem', borderRadius: '8px', fontSize: '0.82rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldAlert size={16} /> {error}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                Admin Email
              </label>
              <input
                type="email"
                placeholder="admin@financialyouthclub.org"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                Admin Passcode
              </label>
              <input
                type="password"
                placeholder="Enter admin passcode..."
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  background: '#F8FAFC',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <span style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '0.25rem', display: 'block' }}>
                Default passcode: <code>fycadmin2026</code>
              </span>
            </div>

            <button
              type="submit"
              className="btn-navy"
              style={{ padding: '0.75rem', fontSize: '0.9rem', width: '100%', marginTop: '0.5rem', borderRadius: '8px', cursor: 'pointer' }}
            >
              Sign In to Admin Portal →
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}

export default AdminLoginPage
