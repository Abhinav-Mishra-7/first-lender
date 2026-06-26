import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import HeroWorkingCapitalLoan from "./HeroWorkingCapitalLoan";
import WorkingCapitalExplanation from "./WorkingCapitalExplanation";
import BusinessLoanEligibility from "../BusinessLoanEligibility";
import BusinessLoanDocuments from "../BusinessLoanDocuments";
import WhyChooseFL from "../../personal-loan/WhyChooseFL";
import BussinessLoanForm from "../../forms/BusinessLoanForm"

function WorkingCaptialComponent() {
  return (
    <div>
        <Navbar/>
        <HeroWorkingCapitalLoan/>
        <WorkingCapitalExplanation/>
        <BusinessLoanEligibility loanType="Working Capital Loan" />
        <BusinessLoanDocuments loanType="Working Capital Loan"/>
        <WhyChooseFL loanType="Working Capital Loan" />
        <BussinessLoanForm/>
        <Footer/>
    </div>
  )
}

export default WorkingCaptialComponent ;