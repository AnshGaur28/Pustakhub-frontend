import HeroSection from '../pages/heroSection.jsx';
import AboutUs from '../pages/aboutUs.jsx';
import Navigation from '../components/navigation.jsx';
import Footer from '../components/footer.jsx';
export default function LandingPage(){
    return (
        <>
            <Navigation className='sticky top-0 z-50'/>
            <HeroSection/>
            <AboutUs/>
            <Footer className='sticky bottom-0 z-50' /> 
        </>
    )
} 