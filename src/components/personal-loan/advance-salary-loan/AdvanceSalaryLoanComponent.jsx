import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import HeroAdvanceSalaryLoan from "./AdvanceSalaryLoanHero";
import LoanExplanation from "../../LoanExplanation";
import LoanEligibility from "../LoanEligibility";
import LoanDocuments from "../LoanDocuments";
import LoanRepaymentOptions from "../LoanRepaymentOptions";
import WhyChooseFL from "../WhyChooseFL";
import personal from "../personal_loans";

function AdvanceSalaryLoanComponent() {
  return (
    <div className="w-full">
        <Navbar/>
        <HeroAdvanceSalaryLoan/>
        <LoanExplanation heading={personal[4].heading} p1={personal[4].p1} p2={personal[4].p2} image={personal[4].image} />
        <LoanEligibility loanType='advance salary'/>
        <LoanDocuments loanType='advance salary'/>
        <LoanRepaymentOptions loanType="Advance Salary" />
        <WhyChooseFL loanType='Advance Salary Loan' />
        <Footer/>
    </div>
  )
}

export default AdvanceSalaryLoanComponent;