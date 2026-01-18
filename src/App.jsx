import { Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import AboutUs from './components/about-us/AboutUs';
import ContactUs from './components/ContactUs' ;

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
  );
}

export default App;