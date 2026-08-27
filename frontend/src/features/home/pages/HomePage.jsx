import React from 'react'
import CinematicIntroLoader from '../../../components/common/CinematicIntroLoader'
import Hero from '../components/Hero'
import HeroFeaturesGrid from '../components/HeroFeaturesGrid'
import AboutUsSection from '../components/AboutUsSection'
import GuestSpeakersSection from '../components/GuestSpeakersSection'
import FoundersVision from '../components/FoundersVision'
import CollaborationsMarquee from '../components/CollaborationsMarquee'
import InstitutesTicker from '../components/InstitutesTicker'
import VorexCorePartnershipSection from '../components/VorexCorePartnershipSection'
import WorkHistoryTimeline from '../components/WorkHistoryTimeline'

const HomePage = () => {
  return (
    <main>
      <CinematicIntroLoader />
      <Hero />
      <HeroFeaturesGrid />
      <AboutUsSection />
      <GuestSpeakersSection />
      <FoundersVision />
      <CollaborationsMarquee />
      <InstitutesTicker />
      <VorexCorePartnershipSection />
      <WorkHistoryTimeline />
    </main>
  )
}

export default HomePage



