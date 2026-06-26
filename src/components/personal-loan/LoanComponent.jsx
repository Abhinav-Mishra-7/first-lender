import HeroSection from "./PersonalLoanHero";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import LoanExplanation from "../LoanExplanation";
import LoanEligibility from "./LoanEligibility";
import LoanDocuments from "./LoanDocuments";
import LoanRepaymentOptions from "./LoanRepaymentOptions";
import LoanComparisonTable from "./LoanComparisonTable";
import WhyChooseFL from "./WhyChooseFL";
import personal from "./personal_loans";
import PersonalLoanForm from "../forms/PersonalLoanForm";

function LoanComponent() {
  return (
    <div className="w-full">
        <Navbar/>
        <HeroSection/>
        <LoanExplanation heading={personal[0].heading} p1={personal[0].p1} p2={personal[0].p2} image={personal[0].image} />
        <LoanEligibility loanType='personal'/>
        <LoanDocuments loanType='personal'/>
        <LoanRepaymentOptions loanType="Personal" />
        <LoanComparisonTable/>
        <WhyChooseFL loanType='Personal Loan' />
        <PersonalLoanForm/>
        <Footer/>
    </div>
  )
}

export default LoanComponent;