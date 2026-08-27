import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const AdminWebinarEditorModal = ({ isOpen, onClose, webinarToEdit, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '6:00 PM GMT',
    speaker: '',
    rsvpLink: 'https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC',
    type: 'Webinar',
    status: 'Upcoming'
  })

  useEffect(() => {
    if (webinarToEdit) {
      setFormData({
        title: webinarToEdit.title || '',
        date: webinarToEdit.date || '',
        time: webinarToEdit.time || '6:00 PM GMT',
        speaker: webinarToEdit.speaker || '',
        rsvpLink: webinarToEdit.rsvpLink || 'https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC',
        type: webinarToEdit.type || 'Webinar',
        status: webinarToEdit.status || 'Upcoming'
      })
    } else {
      setFormData({
        title: '',
        date: '',
        time: '6:00 PM GMT',
        speaker: '',
        rsvpLink: 'https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC',
        type: 'Webinar',
        status: 'Upcoming'
      })
    }
  }, [webinarToEdit, isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 99999 }}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem' }}
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
          {webinarToEdit ? 'Edit Webinar / Workshop' : 'Post Upcoming Webinar'}
        </h2>
        <p style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          Publish upcoming live webinars, guest speaker sessions, and bootcamp RSVP links.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Session Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. M&A Due Diligence & Valuation Masterclass"
              style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                Event Date *
              </label>
              <input
                type="text"
                required
                value={formData.date}
                onChange={e => setFormData({ ...formData, date: e.target.value })}
                placeholder="e.g. September 18, 2026"
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                Time *
              </label>
              <input
                type="text"
                required
                value={formData.time}
                onChange={e => setFormData({ ...formData, time: e.target.value })}
                placeholder="e.g. 6:00 PM GMT"
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                Featured Speaker(s)
              </label>
              <input
                type="text"
                value={formData.speaker}
                onChange={e => setFormData({ ...formData, speaker: e.target.value })}
                placeholder="e.g. Sabrina Manero"
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                Event Type
              </label>
              <select
                value={formData.type}
                onChange={e => setFormData({ ...formData, type: e.target.value })}
                style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.88rem', outline: 'none' }}
              >
                <option value="Webinar">Webinar</option>
                <option value="Workshop">Workshop</option>
                <option value="Bootcamp">Bootcamp</option>
                <option value="AMA Session">AMA Session</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              RSVP Link / Join URL *
            </label>
            <input
              type="url"
              required
              value={formData.rsvpLink}
              onChange={e => setFormData({ ...formData, rsvpLink: e.target.value })}
              placeholder="https://chat.whatsapp.com/..."
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
              {webinarToEdit ? 'Save Changes' : 'Publish Webinar'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AdminWebinarEditorModal
