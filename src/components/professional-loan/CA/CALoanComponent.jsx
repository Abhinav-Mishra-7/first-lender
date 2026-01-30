import Navbar from "../../shared/Navbar"
import HeroProfessionalLoan from "./CALoanHero"
import Footer from "../../shared/Footer"
import CAEligibility from "./CAEligibility";
import CADocuments from "./CADocuments";
import LoanRepaymentOptions from "../../personal-loan/LoanRepaymentOptions";
// import LoanComparisonTable from "../../personal-loan/LoanComparisonTable";
import WhyChooseFL from "../../personal-loan/WhyChooseFL";
import professional from "../professional-loan";
import LoanExplanation from "../../LoanExplanation";

function CALoanComponent() {
  return (
    <div>
        <Navbar/>
        <HeroProfessionalLoan/>
        <LoanExplanation heading={professional[0].heading} p1={professional[0].p1} p2={professional[0].p2} p3={professional[0].p3} image={professional[0].image} />
        <CAEligibility/>
        <CADocuments/>
        <LoanRepaymentOptions/>
        {/* <LoanComparisonTable/> */}
        <WhyChooseFL loanType="CA Loan" />
        <Footer/>
    </div>
  )
}

export default CALoanComponent ;
