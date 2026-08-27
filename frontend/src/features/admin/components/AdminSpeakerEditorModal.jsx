import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const AdminSpeakerEditorModal = ({ isOpen, onClose, speakerToEdit, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    topic: '',
    image: '',
    bio: '',
    highlightsText: ''
  })

  useEffect(() => {
    if (speakerToEdit) {
      setFormData({
        name: speakerToEdit.name || '',
        role: speakerToEdit.role || '',
        topic: speakerToEdit.topic || '',
        image: speakerToEdit.image || '',
        bio: speakerToEdit.bio || '',
        highlightsText: Array.isArray(speakerToEdit.highlights)
          ? speakerToEdit.highlights.join('\n')
          : (speakerToEdit.highlights || '')
      })
    } else {
      setFormData({
        name: '',
        role: '',
        topic: '',
        image: '/images/speakers/lixu-chen.png',
        bio: '',
        highlightsText: ''
      })
    }
  }, [speakerToEdit, isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      ...formData,
      highlights: formData.highlightsText.split('\n').filter(Boolean)
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 99999 }}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            background: '#F1F5F9', border: 'none', borderRadius: '50%',
            width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#0F172A'
          }}
        >
          <X size={20} />
        </button>

        <h2 style={{ fontFamily: 'var(--font-heading)', color: '#0F172A', fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.25rem' }}>
          {speakerToEdit ? 'Edit Guest Speaker' : 'Add New Guest Speaker'}
        </h2>
        <p style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          Add or update global guest speaker headshots, keynote topics, and bio details on FYC Web.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Speaker Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Lixu Chen"
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Professional Role & Title *
            </label>
            <input
              type="text"
              required
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
              placeholder="e.g. Incoming Analyst at Goldman Sachs"
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Keynote Workshop Topic *
            </label>
            <input
              type="text"
              required
              value={formData.topic}
              onChange={e => setFormData({ ...formData, topic: e.target.value })}
              placeholder="e.g. Breaking into Investment Banking & Recruitment"
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Headshot Image URL or Path *
            </label>
            <input
              type="text"
              required
              value={formData.image}
              onChange={e => setFormData({ ...formData, image: e.target.value })}
              placeholder="/images/speakers/lixu-chen.png or https://..."
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Highlights Bullet Points (One point per line) *
            </label>
            <textarea
              required
              rows={4}
              value={formData.highlightsText}
              onChange={e => setFormData({ ...formData, highlightsText: e.target.value })}
              placeholder="Point 1&#10;Point 2&#10;Point 3"
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Full Profile Bio *
            </label>
            <textarea
              required
              rows={4}
              value={formData.bio}
              onChange={e => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Detailed background, accomplishments, and career story..."
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '0.5rem', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
            <button
              type="button"
              onClick={onClose}
              style={{ background: '#F1F5F9', border: 'none', color: '#475569', padding: '0.65rem 1.25rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-navy"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.85rem', borderRadius: '8px', cursor: 'pointer' }}
            >
              {speakerToEdit ? 'Save Changes' : 'Add Guest Speaker'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AdminSpeakerEditorModal
