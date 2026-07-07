import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MobileCategories from './components/MobileCategories'
import HeroSection from '../../components/layout/Header'
import TopSpecialties from './components/TopSpecialities'
import FeaturedDoctors from './components/FeaturedDoctor';
import MarqueeStrip from './components/MarqueeStripe';
import CompellingReasons from './components/CompellingReasons';
import AboutUs from './components/About';
import Testimonials from './components/Testimonial';
import TrustedPartners from './components/TrustedPartners'
import FAQSection from './components/FaqSections';
import Mobile from './components/Mobile'
import RecentBlogs from './components/RecentBlogs';
import FooterUpper from './components/FooterUpper'


export default function HomePage() {
  return (


     
          <>
       <HeroSection />
      <MobileCategories />
      <TopSpecialties />
      <FeaturedDoctors />
      <MarqueeStrip />
      <CompellingReasons />
      <AboutUs />
      <Testimonials />
      <FAQSection />
      <Mobile />
      <RecentBlogs />
      <FooterUpper />
            
          </>
       

  )
}

