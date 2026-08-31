import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../../../components/layout/PageLayout'
import { Lock, KeyRound, ShieldAlert, CheckCircle2 } from 'lucide-react'
import { adminAuthService } from '../services/adminAuthService'

const AdminLoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    
    const result = adminAuthService.authenticate(email, password)
    
    if (result.success) {
      sessionStorage.setItem('fyc_admin_authenticated', 'true')
      sessionStorage.setItem('fyc_admin_email', result.admin.email)
      sessionStorage.setItem('fyc_admin_name', result.admin.name)
      sessionStorage.setItem('fyc_admin_role', result.admin.role)
      navigate('/admin/blogs')
    } else {
      setError(result.error)
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
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#EAF7FD', border: '1px solid #4FC3E8', color: '#0A2647', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto' }}>
              <Lock size={26} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0A2647', fontSize: '1.4rem', fontWeight: 900, margin: 0 }}>
              Admin Sign In
            </h2>
            <p style={{ color: '#475569', fontSize: '0.82rem', marginTop: '0.25rem' }}>
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
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0A2647', marginBottom: '0.35rem' }}>
                Admin Email
              </label>
              <input
                type="email"
                placeholder="21mujtabahassan@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  background: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0A2647', marginBottom: '0.35rem' }}>
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
                  background: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-gold"
              style={{ background: 'linear-gradient(135deg, #4FC3E8 0%, #2FA8D8 100%)', color: '#071B33', fontWeight: 900, padding: '0.75rem', fontSize: '0.9rem', width: '100%', marginTop: '0.5rem', borderRadius: '8px', cursor: 'pointer' }}
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
