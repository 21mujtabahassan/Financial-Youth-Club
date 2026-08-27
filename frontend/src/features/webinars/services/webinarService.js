const LOCAL_STORAGE_WEBINARS_KEY = 'fyc_webinars_workshops_list'

const initialWebinars = [
  {
    id: 'webinar-1',
    title: 'Global Student Finance & Investment Banking Summit',
    date: 'September 15, 2026',
    time: '5:00 PM GMT',
    speaker: 'Sabrina Manero & Ledi Maisuradze',
    rsvpLink: 'https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC',
    type: 'Webinar',
    status: 'Upcoming'
  },
  {
    id: 'webinar-2',
    title: 'LinkedIn Personal Branding & Client Acquisition Masterclass',
    date: 'September 22, 2026',
    time: '6:00 PM GMT',
    speaker: 'Wardah Muzammil',
    rsvpLink: 'https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC',
    type: 'Workshop',
    status: 'Upcoming'
  }
]

const getStoredWebinars = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_WEBINARS_KEY)
  if (!data) {
    localStorage.setItem(LOCAL_STORAGE_WEBINARS_KEY, JSON.stringify(initialWebinars))
    return initialWebinars
  }
  try {
    return JSON.parse(data)
  } catch (e) {
    return initialWebinars
  }
}

const saveStoredWebinars = (list) => {
  localStorage.setItem(LOCAL_STORAGE_WEBINARS_KEY, JSON.stringify(list))
}

export const webinarService = {
  getWebinars() {
    return getStoredWebinars()
  },

  createWebinar(data) {
    const list = getStoredWebinars()
    const newWebinar = {
      id: `webinar-${Date.now()}`,
      title: data.title || 'FYC Keynote Session',
      date: data.date || 'TBD',
      time: data.time || '6:00 PM GMT',
      speaker: data.speaker || 'FYC Mentor',
      rsvpLink: data.rsvpLink || 'https://chat.whatsapp.com/HzUA3qjzlweGWUhhOJtraC',
      type: data.type || 'Webinar',
      status: data.status || 'Upcoming'
    }
    const updated = [newWebinar, ...list]
    saveStoredWebinars(updated)
    return newWebinar
  },

  updateWebinar(id, data) {
    const list = getStoredWebinars()
    const index = list.findIndex(w => w.id === id)
    if (index === -1) throw new Error('Webinar not found')

    list[index] = { ...list[index], ...data }
    saveStoredWebinars(list)
    return list[index]
  },

  deleteWebinar(id) {
    const list = getStoredWebinars()
    const updated = list.filter(w => w.id !== id)
    saveStoredWebinars(updated)
    return true
  }
}
