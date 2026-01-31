import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import HeroPersonalOverdraftLoan from "./PersonalOverdraftLoanHero";
import LoanExplanation from "../../LoanExplanation";
import LoanEligibility from "../LoanEligibility";
import LoanDocuments from "../LoanDocuments";
import LoanRepaymentOptions from "../LoanRepaymentOptions";
import WhyChooseFL from "../WhyChooseFL";
import personal from "../personal_loans";

function OverdraftLoanComponent() {
  return (
    <div className="w-full">
        <Navbar/>
        <HeroPersonalOverdraftLoan/>
        <LoanExplanation heading={personal[2].heading} p1={personal[2].p1} p2={personal[2].p2} image={personal[2].image} />
        <LoanEligibility loanType='personal overdraft'/>
        <LoanDocuments loanType='personal overdraft'/>
        <LoanRepaymentOptions loanType="Personal overdraft" />
        <WhyChooseFL loanType='Personal Overdraft Loan' />
        <Footer/>
    </div>
  )
}

export default OverdraftLoanComponent;