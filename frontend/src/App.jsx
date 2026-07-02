import TopHeader from './components/TopHeader'
import Bottom_Header from './components/Bottom_Header';
import HeroSection from './components/Header'
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
import Footer from './components/Footer';
import MobileCategories from './components/MobileCategories';
function App() {

  return (
    <>
    <TopHeader/>
    <Bottom_Header/>
    <HeroSection/>
    <MobileCategories/>
    <TopSpecialties/>
    <FeaturedDoctors/>
    <MarqueeStrip/>
    <CompellingReasons/>
    <AboutUs />
    <Testimonials />
    <TrustedPartners/>
    <FAQSection/>
    <Mobile/>
    <RecentBlogs/>
    <FooterUpper/>
    <Footer/>

    </>
  )
}

export default App
