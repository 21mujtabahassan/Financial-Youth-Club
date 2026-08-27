import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../../../components/layout/PageLayout'
import {
  Plus, Edit3, Trash2, Eye, EyeOff, LogOut, FileText, Search,
  Users, Mic, Calendar, Mail, Download, LayoutDashboard, Sparkles, CheckCircle2, ShieldAlert, ArrowRight
} from 'lucide-react'

import { blogService } from '../../blogs/services/blogService'
import { adminAuthService } from '../services/adminAuthService'
import { speakerService } from '../../speakers/services/speakerService'
import { webinarService } from '../../webinars/services/webinarService'
import { newsletterService } from '../../newsletter/services/newsletterService'

import AdminBlogEditorModal from '../components/AdminBlogEditorModal'
import AdminSpeakerEditorModal from '../components/AdminSpeakerEditorModal'
import AdminWebinarEditorModal from '../components/AdminWebinarEditorModal'

const AdminBlogManagerPage = () => {
  const [activeTab, setActiveTab] = useState('overview') // 'overview' | 'blogs' | 'speakers' | 'webinars' | 'subscribers' | 'admins'
  
  // Data states
  const [blogs, setBlogs] = useState([])
  const [speakers, setSpeakers] = useState([])
  const [webinars, setWebinars] = useState([])
  const [subscribers, setSubscribers] = useState([])
  const [adminsList, setAdminsList] = useState([])

  // Modal states
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false)
  const [blogToEdit, setBlogToEdit] = useState(null)
  
  const [isSpeakerModalOpen, setIsSpeakerModalOpen] = useState(false)
  const [speakerToEdit, setSpeakerToEdit] = useState(null)

  const [isWebinarModalOpen, setIsWebinarModalOpen] = useState(false)
  const [webinarToEdit, setWebinarToEdit] = useState(null)

  // Search filter
  const [searchQuery, setSearchQuery] = useState('')

  // Add admin state
  const [newAdminEmail, setNewAdminEmail] = useState('')
  const [newAdminName, setNewAdminName] = useState('')
  const [newAdminRole, setNewAdminRole] = useState('Admin')
  const [adminSuccessMsg, setAdminSuccessMsg] = useState('')
  const [adminErrorMsg, setAdminErrorMsg] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    // Auth check
    const isAuth = sessionStorage.getItem('fyc_admin_authenticated')
    if (!isAuth) {
      navigate('/admin/login')
      return
    }
    refreshAllData()
  }, [])

  const refreshAllData = async () => {
    try {
      const blogsData = await blogService.getAllBlogsAdmin()
      setBlogs(blogsData)
    } catch (e) { console.error(e) }

    setSpeakers(speakerService.getSpeakers())
    setWebinars(webinarService.getWebinars())
    setSubscribers(newsletterService.getSubscribers())
    setAdminsList(adminAuthService.getAdmins())
  }

  const handleLogout = () => {
    sessionStorage.removeItem('fyc_admin_authenticated')
    sessionStorage.removeItem('fyc_admin_email')
    sessionStorage.removeItem('fyc_admin_name')
    sessionStorage.removeItem('fyc_admin_role')
    navigate('/admin/login')
  }

  // --- BLOG HANDLERS ---
  const handleOpenCreateBlog = () => { setBlogToEdit(null); setIsBlogModalOpen(true); }
  const handleOpenEditBlog = (b) => { setBlogToEdit(b); setIsBlogModalOpen(true); }
  const handleSaveBlog = async (formData) => {
    if (blogToEdit) await blogService.updateBlog(blogToEdit.id, formData)
    else await blogService.createBlog(formData)
    setIsBlogModalOpen(false)
    refreshAllData()
  }
  const handleToggleBlogStatus = async (b) => {
    await blogService.updateBlog(b.id, { status: b.status === 'published' ? 'draft' : 'published' })
    refreshAllData()
  }
  const handleDeleteBlog = async (b) => {
    if (window.confirm(`Delete article "${b.title}"?`)) {
      await blogService.deleteBlog(b.id)
      refreshAllData()
    }
  }

  // --- SPEAKER HANDLERS ---
  const handleOpenCreateSpeaker = () => { setSpeakerToEdit(null); setIsSpeakerModalOpen(true); }
  const handleOpenEditSpeaker = (s) => { setSpeakerToEdit(s); setIsSpeakerModalOpen(true); }
  const handleSaveSpeaker = (data) => {
    if (speakerToEdit) speakerService.updateSpeaker(speakerToEdit.id, data)
    else speakerService.createSpeaker(data)
    setIsSpeakerModalOpen(false)
    refreshAllData()
  }
  const handleDeleteSpeaker = (s) => {
    if (window.confirm(`Remove speaker ${s.name}?`)) {
      speakerService.deleteSpeaker(s.id)
      refreshAllData()
    }
  }

  // --- WEBINAR HANDLERS ---
  const handleOpenCreateWebinar = () => { setWebinarToEdit(null); setIsWebinarModalOpen(true); }
  const handleOpenEditWebinar = (w) => { setWebinarToEdit(w); setIsWebinarModalOpen(true); }
  const handleSaveWebinar = (data) => {
    if (webinarToEdit) webinarService.updateWebinar(webinarToEdit.id, data)
    else webinarService.createWebinar(data)
    setIsWebinarModalOpen(false)
    refreshAllData()
  }
  const handleDeleteWebinar = (w) => {
    if (window.confirm(`Delete webinar "${w.title}"?`)) {
      webinarService.deleteWebinar(w.id)
      refreshAllData()
    }
  }

  // --- NEWSLETTER HANDLERS ---
  const handleDeleteSubscriber = (id) => {
    if (window.confirm('Delete subscriber email?')) {
      newsletterService.deleteSubscriber(id)
      refreshAllData()
    }
  }

  // --- ADMIN HANDLERS ---
  const handleAddAdmin = (e) => {
    e.preventDefault()
    setAdminErrorMsg(''); setAdminSuccessMsg('')
    try {
      adminAuthService.addAdmin(newAdminEmail, newAdminName, newAdminRole)
      setAdminSuccessMsg(`Added ${newAdminEmail} as admin`)
      setNewAdminEmail(''); setNewAdminName('')
      refreshAllData()
    } catch (err) { setAdminErrorMsg(err.message) }
  }
  const handleRemoveAdmin = (adm) => {
    setAdminErrorMsg(''); setAdminSuccessMsg('')
    if (window.confirm(`Revoke admin access for ${adm.email}?`)) {
      try {
        adminAuthService.removeAdmin(adm.email)
        setAdminSuccessMsg(`Revoked admin access for ${adm.email}`)
        refreshAllData()
      } catch (err) { setAdminErrorMsg(err.message) }
    }
  }

  const currentAdminEmail = sessionStorage.getItem('fyc_admin_email') || '21mujtabahassan@gmail.com'

  return (
    <PageLayout
      title="FYC Admin Control Portal"
      subtitle={`Welcome back, ${currentAdminEmail}. Full platform governance and content control.`}
      badge="Admin Super Control"
    >
      {/* Navigation Tab Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #E2E8F0',
        marginBottom: '2rem',
        paddingBottom: '0.25rem',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              background: 'transparent', border: 'none',
              borderBottom: activeTab === 'overview' ? '3px solid #0EA5E9' : '3px solid transparent',
              color: activeTab === 'overview' ? '#0F172A' : '#64748B',
              fontWeight: activeTab === 'overview' ? 800 : 600, fontSize: '0.92rem', padding: '0.65rem 0.5rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem'
            }}
          >
            <LayoutDashboard size={16} color={activeTab === 'overview' ? '#0EA5E9' : '#64748B'} />
            Overview
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            style={{
              background: 'transparent', border: 'none',
              borderBottom: activeTab === 'blogs' ? '3px solid #0EA5E9' : '3px solid transparent',
              color: activeTab === 'blogs' ? '#0F172A' : '#64748B',
              fontWeight: activeTab === 'blogs' ? 800 : 600, fontSize: '0.92rem', padding: '0.65rem 0.5rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem'
            }}
          >
            <FileText size={16} color={activeTab === 'blogs' ? '#0EA5E9' : '#64748B'} />
            Blogs ({blogs.length})
          </button>

          <button
            onClick={() => setActiveTab('speakers')}
            style={{
              background: 'transparent', border: 'none',
              borderBottom: activeTab === 'speakers' ? '3px solid #0EA5E9' : '3px solid transparent',
              color: activeTab === 'speakers' ? '#0F172A' : '#64748B',
              fontWeight: activeTab === 'speakers' ? 800 : 600, fontSize: '0.92rem', padding: '0.65rem 0.5rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem'
            }}
          >
            <Mic size={16} color={activeTab === 'speakers' ? '#0EA5E9' : '#64748B'} />
            Speakers ({speakers.length})
          </button>

          <button
            onClick={() => setActiveTab('webinars')}
            style={{
              background: 'transparent', border: 'none',
              borderBottom: activeTab === 'webinars' ? '3px solid #0EA5E9' : '3px solid transparent',
              color: activeTab === 'webinars' ? '#0F172A' : '#64748B',
              fontWeight: activeTab === 'webinars' ? 800 : 600, fontSize: '0.92rem', padding: '0.65rem 0.5rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem'
            }}
          >
            <Calendar size={16} color={activeTab === 'webinars' ? '#0EA5E9' : '#64748B'} />
            Webinars ({webinars.length})
          </button>

          <button
            onClick={() => setActiveTab('subscribers')}
            style={{
              background: 'transparent', border: 'none',
              borderBottom: activeTab === 'subscribers' ? '3px solid #0EA5E9' : '3px solid transparent',
              color: activeTab === 'subscribers' ? '#0F172A' : '#64748B',
              fontWeight: activeTab === 'subscribers' ? 800 : 600, fontSize: '0.92rem', padding: '0.65rem 0.5rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem'
            }}
          >
            <Mail size={16} color={activeTab === 'subscribers' ? '#0EA5E9' : '#64748B'} />
            Subscribers ({subscribers.length})
          </button>

          <button
            onClick={() => setActiveTab('admins')}
            style={{
              background: 'transparent', border: 'none',
              borderBottom: activeTab === 'admins' ? '3px solid #0EA5E9' : '3px solid transparent',
              color: activeTab === 'admins' ? '#0F172A' : '#64748B',
              fontWeight: activeTab === 'admins' ? 800 : 600, fontSize: '0.92rem', padding: '0.65rem 0.5rem',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem'
            }}
          >
            <Users size={16} color={activeTab === 'admins' ? '#0EA5E9' : '#64748B'} />
            Team ({adminsList.length})
          </button>

        </div>

        <button
          onClick={handleLogout}
          style={{
            background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#475569',
            padding: '0.45rem 0.9rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem'
          }}
        >
          <LogOut size={14} /> Sign Out
        </button>
      </div>

      {/* TAB 1: OVERVIEW METRICS DASHBOARD */}
      {activeTab === 'overview' && (
        <div style={{ marginBottom: '4rem' }}>
          
          {/* Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.25rem', boxShadow: '0 4px 14px rgba(15,23,42,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Published Blogs</span>
                <FileText size={20} color="#0EA5E9" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A' }}>{blogs.length}</div>
              <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700, marginTop: '0.25rem' }}>Active on /blog</div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.25rem', boxShadow: '0 4px 14px rgba(15,23,42,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Guest Speakers</span>
                <Mic size={20} color="#D97706" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A' }}>{speakers.length}</div>
              <div style={{ fontSize: '0.75rem', color: '#D97706', fontWeight: 700, marginTop: '0.25rem' }}>Global Practitioners</div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.25rem', boxShadow: '0 4px 14px rgba(15,23,42,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Webinars & Sessions</span>
                <Calendar size={20} color="#8B5CF6" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A' }}>{webinars.length}</div>
              <div style={{ fontSize: '0.75rem', color: '#8B5CF6', fontWeight: 700, marginTop: '0.25rem' }}>Upcoming Keynotes</div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.25rem', boxShadow: '0 4px 14px rgba(15,23,42,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Subscribers</span>
                <Mail size={20} color="#10B981" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A' }}>{subscribers.length}</div>
              <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700, marginTop: '0.25rem' }}>Newsletter Community</div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.25rem', boxShadow: '0 4px 14px rgba(15,23,42,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Authorized Admins</span>
                <Users size={20} color="#6366F1" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A' }}>{adminsList.length}</div>
              <div style={{ fontSize: '0.75rem', color: '#6366F1', fontWeight: 700, marginTop: '0.25rem' }}>Team Access</div>
            </div>

          </div>

          {/* Quick Shortcuts */}
          <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: '#FFFFFF', padding: '2rem', borderRadius: '18px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 900, marginBottom: '0.5rem' }}>
              ⚡ Quick Admin Management Actions
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Fast shortcuts to publish new content, manage guest speakers, or export newsletter subscribers.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => { setActiveTab('blogs'); handleOpenCreateBlog(); }} className="btn-gold" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                + Create Blog Article
              </button>
              <button onClick={() => { setActiveTab('speakers'); handleOpenCreateSpeaker(); }} style={{ background: '#0EA5E9', color: '#FFF', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>
                + Add Guest Speaker
              </button>
              <button onClick={() => { setActiveTab('webinars'); handleOpenCreateWebinar(); }} style={{ background: '#8B5CF6', color: '#FFF', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>
                + Post Webinar Event
              </button>
              <button onClick={() => newsletterService.exportCSV()} style={{ background: '#10B981', color: '#FFF', border: 'none', padding: '0.65rem 1.25rem', borderRadius: '8px', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Download size={15} /> Export Subscribers CSV
              </button>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: BLOG ARTICLES MANAGER */}
      {activeTab === 'blogs' && (
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ position: 'relative', minWidth: '260px', flex: 1, maxWidth: '400px' }}>
              <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" placeholder="Search admin articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={{ width: '100%', padding: '0.55rem 0.85rem 0.55rem 2.35rem', borderRadius: '10px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.85rem', outline: 'none' }} />
            </div>
            <button onClick={handleOpenCreateBlog} className="btn-gold" style={{ padding: '0.6rem 1.3rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '8px', cursor: 'pointer' }}>
              <Plus size={16} /> Create New Article
            </button>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC', fontWeight: 800, color: '#0F172A' }}>
              All Blog Articles ({blogs.length})
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                    <th style={{ padding: '0.85rem 1.25rem' }}>Article Info</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Category</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Author & Date</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Status</th>
                    <th style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map(blog => (
                    <tr key={blog.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                      <td style={{ padding: '1rem 1.25rem' }}>
                        <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                          <img src={blog.coverImage} alt={blog.title} style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover' }} />
                          <div>
                            <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem' }}>{blog.title}</div>
                            {blog.featured && <span style={{ fontSize: '0.68rem', background: '#FEF3C7', color: '#D97706', fontWeight: 800, padding: '0.1rem 0.4rem', borderRadius: '4px' }}>★ Featured</span>}
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}><span style={{ background: '#E0F2FE', color: '#0284C7', fontSize: '0.72rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>{blog.category}</span></td>
                      <td style={{ padding: '1rem', color: '#64748B', fontSize: '0.82rem' }}><div style={{ fontWeight: 700, color: '#334155' }}>{blog.author}</div><div>{blog.date}</div></td>
                      <td style={{ padding: '1rem' }}><span style={{ background: blog.status === 'published' ? '#DCFCE7' : '#F1F5F9', color: blog.status === 'published' ? '#15803D' : '#64748B', fontSize: '0.72rem', fontWeight: 800, padding: '0.25rem 0.65rem', borderRadius: '9999px' }}>{blog.status}</span></td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                          <button onClick={() => handleToggleBlogStatus(blog)} style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '0.4rem', borderRadius: '6px', cursor: 'pointer' }}>{blog.status === 'published' ? <EyeOff size={15} /> : <Eye size={15} color="#0EA5E9" />}</button>
                          <button onClick={() => handleOpenEditBlog(blog)} style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '0.4rem', borderRadius: '6px', cursor: 'pointer' }}><Edit3 size={15} /></button>
                          <button onClick={() => handleDeleteBlog(blog)} style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', padding: '0.4rem', borderRadius: '6px', cursor: 'pointer', color: '#DC2626' }}><Trash2 size={15} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GUEST SPEAKERS MANAGER */}
      {activeTab === 'speakers' && (
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>Active Guest Speakers ({speakers.length})</span>
            <button onClick={handleOpenCreateSpeaker} className="btn-gold" style={{ padding: '0.6rem 1.3rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '8px', cursor: 'pointer' }}>
              <Plus size={16} /> Add Guest Speaker
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {speakers.map(spk => (
              <div key={spk.id} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <img src={spk.image} alt={spk.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0EA5E9' }} />
                  <div>
                    <h4 style={{ margin: 0, color: '#0F172A', fontSize: '1.1rem', fontWeight: 900 }}>{spk.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: '#0284C7', fontWeight: 800 }}>{spk.role}</span>
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>
                  "{spk.topic}"
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                  <button onClick={() => handleOpenEditSpeaker(spk)} style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}>Edit</button>
                  <button onClick={() => handleDeleteSpeaker(spk)} style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#DC2626', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: WEBINARS & WORKSHOPS MANAGER */}
      {activeTab === 'webinars' && (
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>Webinars & Workshops ({webinars.length})</span>
            <button onClick={handleOpenCreateWebinar} className="btn-gold" style={{ padding: '0.6rem 1.3rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '8px', cursor: 'pointer' }}>
              <Plus size={16} /> Post Webinar Event
            </button>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '0.85rem 1.25rem' }}>Event Title</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Date & Time</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Speaker</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Type</th>
                  <th style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {webinars.map(web => (
                  <tr key={web.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 800, color: '#0F172A' }}>{web.title}</td>
                    <td style={{ padding: '1rem', color: '#64748B', fontSize: '0.82rem' }}><div>{web.date}</div><div>{web.time}</div></td>
                    <td style={{ padding: '1rem', fontWeight: 700, color: '#0284C7' }}>{web.speaker}</td>
                    <td style={{ padding: '1rem' }}><span style={{ background: '#F3E8FF', color: '#7E22CE', fontSize: '0.72rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>{web.type}</span></td>
                    <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                        <button onClick={() => handleOpenEditWebinar(web)} style={{ background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '0.4rem', borderRadius: '6px', cursor: 'pointer' }}><Edit3 size={15} /></button>
                        <button onClick={() => handleDeleteWebinar(web)} style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#DC2626', padding: '0.4rem', borderRadius: '6px', cursor: 'pointer' }}><Trash2 size={15} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 5: NEWSLETTER SUBSCRIBERS */}
      {activeTab === 'subscribers' && (
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>Subscribers List ({subscribers.length})</span>
            <button onClick={() => newsletterService.exportCSV()} style={{ background: '#10B981', color: '#FFF', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Download size={16} /> Export CSV List
            </button>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '0.85rem 1.25rem' }}>Subscriber Email</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Date Subscribed</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Status</th>
                  <th style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map(sub => (
                  <tr key={sub.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 800, color: '#0F172A' }}>{sub.email}</td>
                    <td style={{ padding: '1rem', color: '#64748B', fontSize: '0.82rem' }}>{sub.date}</td>
                    <td style={{ padding: '1rem' }}><span style={{ background: '#DCFCE7', color: '#15803D', fontSize: '0.72rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>{sub.status}</span></td>
                    <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                      <button onClick={() => handleDeleteSubscriber(sub.id)} style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#DC2626', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 6: TEAM & ADMIN ACCESS CONTROL */}
      {activeTab === 'admins' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC', fontWeight: 800, color: '#0F172A' }}>
              Authorized Admin Team ({adminsList.length})
            </div>
            {adminSuccessMsg && <div style={{ background: '#F0FDF4', color: '#166534', padding: '0.75rem 1.25rem', fontSize: '0.82rem' }}>{adminSuccessMsg}</div>}
            {adminErrorMsg && <div style={{ background: '#FEF2F2', color: '#DC2626', padding: '0.75rem 1.25rem', fontSize: '0.82rem' }}>{adminErrorMsg}</div>}
            
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '0.85rem 1.25rem' }}>Admin User</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Role</th>
                  <th style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {adminsList.map(adm => (
                  <tr key={adm.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ fontWeight: 800, color: '#0F172A' }}>{adm.name}</div>
                      <div style={{ color: '#64748B', fontSize: '0.78rem' }}>{adm.email}</div>
                    </td>
                    <td style={{ padding: '1rem' }}><span style={{ background: adm.isSuperAdmin ? '#FEF3C7' : '#E0F2FE', color: adm.isSuperAdmin ? '#B45309' : '#0284C7', fontSize: '0.72rem', fontWeight: 800, padding: '0.2rem 0.65rem', borderRadius: '9999px' }}>{adm.role}</span></td>
                    <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                      {adm.isSuperAdmin ? <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontStyle: 'italic' }}>Super Admin</span> : (
                        <button onClick={() => handleRemoveAdmin(adm)} style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#DC2626', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}>Revoke Access</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.75rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.2rem', fontWeight: 900, marginBottom: '0.35rem' }}>Grant Admin Access</h3>
            <p style={{ color: '#64748B', fontSize: '0.82rem', marginBottom: '1.25rem' }}>Authorize team members to sign in to the FYC Admin Portal.</p>
            <form onSubmit={handleAddAdmin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>Member Email *</label>
                <input type="email" required placeholder="team.member@gmail.com" value={newAdminEmail} onChange={e => setNewAdminEmail(e.target.value)} style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>Full Name *</label>
                <input type="text" required placeholder="e.g. Sarah Khan" value={newAdminName} onChange={e => setNewAdminName(e.target.value)} style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>Role / Title</label>
                <select value={newAdminRole} onChange={e => setNewAdminRole(e.target.value)} style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}>
                  <option value="Admin">Admin</option>
                  <option value="Co-Founder & Admin">Co-Founder & Admin</option>
                  <option value="Executive Director">Executive Director</option>
                  <option value="Editor / Contributor">Editor / Contributor</option>
                </select>
              </div>
              <button type="submit" className="btn-navy" style={{ padding: '0.7rem', fontSize: '0.88rem', borderRadius: '8px', cursor: 'pointer', marginTop: '0.5rem' }}>
                + Add Authorized Admin
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Editor Modals */}
      <AdminBlogEditorModal isOpen={isBlogModalOpen} onClose={() => setIsBlogModalOpen(false)} blogToEdit={blogToEdit} onSave={handleSaveBlog} />
      <AdminSpeakerEditorModal isOpen={isSpeakerModalOpen} onClose={() => setIsSpeakerModalOpen(false)} speakerToEdit={speakerToEdit} onSave={handleSaveSpeaker} />
      <AdminWebinarEditorModal isOpen={isWebinarModalOpen} onClose={() => setIsWebinarModalOpen(false)} webinarToEdit={webinarToEdit} onSave={handleSaveWebinar} />

    </PageLayout>
  )
}

export default AdminBlogManagerPage
