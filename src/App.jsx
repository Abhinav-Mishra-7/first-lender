import { Routes, Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import AboutUs from './components/about-us/AboutUs';
import ContactUs from './components/contact-us/ContactUs' ;
import EmiCalculator from './components/emi-calculator/EmiCalculator';
import Gallery from './components/gallery/Gallery';
import LoanComponent from './components/personal-loan/LoanComponent';
import MarraigeLoan from './components/personal-loan/marraige-loan/MarraigeLoan';
import BusinessLoanMain from './components/business-loan/BusinessLoanMain';

// Professional Loan
import CALoanComponent from './components/professional-loan/CA/CALoanComponent';
import CSLoanComponent from './components/professional-loan/CS/CSLoanComponent';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/resources/emi-calculator" element={<EmiCalculator />} />
        <Route path="/resources/gallery" element={<Gallery />} />
        {/* Personal Loan */}
        <Route path="/loans/personal/personal" element={<LoanComponent />}></Route>
        <Route path="/loans/personal/marriage" element={<MarraigeLoan />}></Route>

        {/* Professional Loan */}
        <Route path="/loans/professional/ca" element={<CALoanComponent />}></Route>
        <Route path="/loans/professional/cs" element={<CSLoanComponent />}></Route>

        {/* Business Loan */}
        <Route path="/loans/business" element={<BusinessLoanMain />}></Route>
      </Routes>
  );
}

export default App;