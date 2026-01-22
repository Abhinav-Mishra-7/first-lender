import { Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import AboutUs from './components/about-us/AboutUs';
import ContactUs from './components/contact-us/ContactUs' ;
import EmiCalculator from './components/emi-calculator/EmiCalculator';
import Gallery from './components/gallery/Gallery';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/resources/emi-calculator" element={<EmiCalculator />} />
        <Route path="/resources/gallery" element={<Gallery />} />
      </Routes>
  );
}

export default App;