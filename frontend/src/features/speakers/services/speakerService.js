import { guestSpeakers } from '../data/speakersData'

const LOCAL_STORAGE_SPEAKERS_KEY = 'fyc_guest_speakers_list'

const getStoredSpeakers = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_SPEAKERS_KEY)
  if (!data) {
    localStorage.setItem(LOCAL_STORAGE_SPEAKERS_KEY, JSON.stringify(guestSpeakers))
    return guestSpeakers
  }
  try {
    return JSON.parse(data)
  } catch (e) {
    return guestSpeakers
  }
}

const saveStoredSpeakers = (speakers) => {
  localStorage.setItem(LOCAL_STORAGE_SPEAKERS_KEY, JSON.stringify(speakers))
}

export const speakerService = {
  getSpeakers() {
    return getStoredSpeakers()
  },

  createSpeaker(data) {
    const list = getStoredSpeakers()
    const newSpeaker = {
      id: `speaker-${Date.now()}`,
      name: data.name || 'New Guest Speaker',
      role: data.role || 'Guest Speaker & Mentor',
      topic: data.topic || 'Financial Career Masterclass',
      image: data.image || '/images/speakers/lixu-chen.png',
      highlights: Array.isArray(data.highlights)
        ? data.highlights
        : (data.highlights || '').split('\n').filter(Boolean),
      bio: data.bio || ''
    }
    const updated = [newSpeaker, ...list]
    saveStoredSpeakers(updated)
    return newSpeaker
  },

  updateSpeaker(id, data) {
    const list = getStoredSpeakers()
    const index = list.findIndex(s => s.id === id)
    if (index === -1) throw new Error('Speaker not found')

    const updatedSpeaker = {
      ...list[index],
      ...data,
      highlights: Array.isArray(data.highlights)
        ? data.highlights
        : (data.highlights || '').split('\n').filter(Boolean)
    }

    list[index] = updatedSpeaker
    saveStoredSpeakers(list)
    return updatedSpeaker
  },

  deleteSpeaker(id) {
    const list = getStoredSpeakers()
    const updated = list.filter(s => s.id !== id)
    saveStoredSpeakers(updated)
    return true
  }
}
