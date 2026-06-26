import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import HeroMedicalLoan from "./MedicalLoanHero";
import LoanExplanation from "../../LoanExplanation";
import LoanEligibility from "../LoanEligibility";
import LoanDocuments from "../LoanDocuments";
import LoanRepaymentOptions from "../LoanRepaymentOptions";
import WhyChooseFL from "../WhyChooseFL";
import personal from "../personal_loans";
import PersonalLoanForm from "../../forms/PersonalLoanForm";

function MedicalLoanComponent() {
  return (
    <div className="w-full">
        <Navbar/>
        <HeroMedicalLoan/>
        <LoanExplanation heading={personal[5].heading} p1={personal[5].p1} p2={personal[5].p2} image={personal[5].image} />
        <LoanEligibility loanType='medical'/>
        <LoanDocuments loanType='medical'/>
        <LoanRepaymentOptions loanType="Medical" />
        <WhyChooseFL loanType='Medical Loan' />
        <PersonalLoanForm/>
        <Footer/>
    </div>
  )
}

export default MedicalLoanComponent;