import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import HeroWorkingCapitalLoan from "./HeroWorkingCapitalLoan";
import WorkingCapitalExplanation from "./WorkingCapitalExplanation";
import BusinessLoanEligibility from "../BusinessLoanEligibility";
import BusinessLoanDocuments from "../BusinessLoanDocuments";
import WhyChooseFL from "../../personal-loan/WhyChooseFL";
// import business from "../business_loans";

function WorkingCaptialComponent() {
  return (
    <div>
        <Navbar/>
        <HeroWorkingCapitalLoan/>
        <WorkingCapitalExplanation/>
        <BusinessLoanEligibility loanType="Working Capital Loan" />
        <BusinessLoanDocuments loanType="Working Capital Loan"/>
        {/* <CGTMSEBenefits/> */}
        {/* <CGTMSEEligibleBorrowers/> */}
        <WhyChooseFL loanType="Working Capital Loan" />
        <Footer/>
    </div>
  )
}

export default WorkingCaptialComponent ;