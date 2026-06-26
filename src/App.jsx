import { Routes, Route } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import AboutUs from './components/about-us/AboutUs';
import ContactUs from './components/contact-us/ContactUs' ;
import EmiCalculator from './components/emi-calculator/EmiCalculator';
import Gallery from './components/gallery/Gallery';

// Personal Loan
import LoanComponent from './components/personal-loan/LoanComponent';
import MarraigeLoan from './components/personal-loan/marraige-loan/MarraigeLoan';
import OverdraftLoanComponent from './components/personal-loan/personal-overdraft-loan/POverdraftLoanComponent';
import TravelLoanComponent from './components/personal-loan/travel-loan/TravelLoanComponent';
import AdvanceSalaryLoanComponent from './components/personal-loan/advance-salary-loan/AdvanceSalaryLoanComponent';
import MedicalLoanComponent from './components/personal-loan/medical-loan/MedicalLoanComponent';
import BalanaceTransferComponent from './components/personal-loan/bank-transfer-loan/BalanaceTransferLoanComponent';

// Business Loan
import BusinessLoanMain from './components/business-loan/BusinessLoanMain';
import PIDComponent from './components/business-loan/PID/PIDComponent';
import CGTMSEComponent from './components/business-loan/CGTMSE/CGTMSEComponent';
import WorkingCaptialComponent from './components/business-loan/Working-Capital/WorkingCapitalComponent';
import BusinessOverdraftComponent from './components/business-loan/Business-Overdraft/BusinessOverdraftComponent';


// Professional Loan
import CALoanComponent from './components/professional-loan/CA/CALoanComponent';
import CSLoanComponent from './components/professional-loan/CS/CSLoanComponent';
import DoctorLoanComponent from './components/professional-loan/Doctor/DoctorLoanComponent';

// Secured Loan
import HomeLoanComponent from './components/secured-loan/home-loan/HomeLoanComponent';
import CarLoanComponent from './components/secured-loan/car-loan/CarLoanComponent';
import LAPComponent from './components/secured-loan/lap/LAPComponent';
import CarRefinanceComponent from './components/secured-loan/car-refinancing-loan/CarRefinanceComponent';

// Forms
import PersonalLoanForm from "./components/forms/PersonalLoanForm";
import ProfessionalLoanForm from "./components/forms/ProfessionalLoanForm";
import BusinessLoanForm from "./components/forms/BusinessLoanForm";
import HomeLoanForm from "./components/forms/HomeLoanForm";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/resources/emi-calculator" element={<EmiCalculator />} />
        <Route path="/resources/gallery" element={<Gallery />} />
        {/* Personal Loan */}
        <Route path="/loans/personal/personal" element={<LoanComponent />}></Route>
        <Route path="/loans/personal/marriage" element={<MarraigeLoan />}></Route>
        <Route path="/loans/personal/personal-overdraft" element={<OverdraftLoanComponent />}></Route>
        <Route path="/loans/personal/travel" element={<TravelLoanComponent />}></Route>
        <Route path="/loans/personal/advance-salary" element={<AdvanceSalaryLoanComponent />}></Route>
        <Route path="/loans/personal/medical" element={<MedicalLoanComponent />}></Route>
        <Route path="/loans/personal/balance-transfer" element={<BalanaceTransferComponent />}></Route>

        {/* Professional Loan */}
        <Route path="/loans/professional/ca" element={<CALoanComponent />}></Route>
        <Route path="/loans/professional/cs" element={<CSLoanComponent />}></Route>
        <Route path="/loans/professional/doctor" element={<DoctorLoanComponent />}></Route>
        

        {/* Business Loan */}
        <Route path="/loans/business/business" element={<BusinessLoanMain />}></Route>
        <Route path="/loans/business/pid" element={<PIDComponent />}></Route>
        <Route path="/loans/business/cgtmse" element={<CGTMSEComponent />}></Route>
        <Route path="/loans/business/working-capital" element={<WorkingCaptialComponent />}></Route>
        <Route path="/loans/business/business-overdraft" element={<BusinessOverdraftComponent />}></Route>


        {/* Secured Loan */}
        <Route path="/loans/secured/home" element={<HomeLoanComponent />}></Route>
        <Route path="/loans/secured/car" element={<CarLoanComponent />}></Route>
        <Route path="/loans/secured/property" element={<LAPComponent />}></Route>
        <Route path="/loans/secured/car-refinance" element={<CarRefinanceComponent />}></Route>

        {/* Forms */}
        <Route path="/form" element={<HomeLoanForm />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;