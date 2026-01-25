import Navbar from "../shared/Navbar"
import HeroProfessionalLoan from "./ProfessionalLoanHero"
import Footer from "../shared/Footer"
import LoanEligibility from "../personal-loan/LoanEligibility";
import LoanDocuments from "../personal-loan/LoanDocuments";
import LoanRepaymentOptions from "../personal-loan/LoanRepaymentOptions";
import LoanComparisonTable from "../personal-loan/LoanComparisonTable";
import WhyChooseFL from "../personal-loan/WhyChooseFL";
import ProfessionalLoanExplanation from "./ProfessionalLoanExplanation";

function ProLoanComponent() {
  return (
    <div>
        <Navbar/>
        <HeroProfessionalLoan/>
        <ProfessionalLoanExplanation/>
        <LoanEligibility/>
        <LoanDocuments/>
        <LoanRepaymentOptions/>
        <LoanComparisonTable/>
        <WhyChooseFL/>
        <Footer/>
    </div>
  )
}

export default ProLoanComponent ;
