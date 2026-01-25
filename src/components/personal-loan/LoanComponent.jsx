import HeroSection from "./PersonalLoanHero";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import LoanExplanation from "../personal-loan/LoanExplanation";
import LoanEligibility from "./LoanEligibility";
import LoanDocuments from "./LoanDocuments";
import LoanRepaymentOptions from "./LoanRepaymentOptions";
import LoanComparisonTable from "./LoanComparisonTable";
import WhyChooseFL from "./WhyChooseFL";

function LoanComponent() {
  return (
    <div className="w-full">
        <Navbar/>
        <HeroSection/>
        <LoanExplanation/>
        <LoanEligibility/>
        <LoanDocuments/>
        <LoanRepaymentOptions/>
        <LoanComparisonTable/>
        <WhyChooseFL/>
        <Footer/>
    </div>
  )
}

export default LoanComponent;