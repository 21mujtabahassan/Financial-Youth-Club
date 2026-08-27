import React from 'react'
import Hero from '../components/Hero'
import HeroFeaturesGrid from '../components/HeroFeaturesGrid'
import AboutUsSection from '../components/AboutUsSection'
import GuestSpeakersSection from '../components/GuestSpeakersSection'
import FoundersVision from '../components/FoundersVision'
import CollaborationsMarquee from '../components/CollaborationsMarquee'
import InstitutesTicker from '../components/InstitutesTicker'
import WorkHistoryTimeline from '../components/WorkHistoryTimeline'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <HeroFeaturesGrid />
      <AboutUsSection />
      <GuestSpeakersSection />
      <FoundersVision />
      <CollaborationsMarquee />
      <InstitutesTicker />
      <WorkHistoryTimeline />
    </main>
  )
}

export default HomePage



