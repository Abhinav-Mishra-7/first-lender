import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import HeroCSLoan from "./CSLoanHero";
import CAEligibility from "../CA/CAEligibility";
import CADocuments from "../CA/CADocuments";
import LoanRepaymentOptions from "../../personal-loan/LoanRepaymentOptions";
import WhyChooseFL from "../../personal-loan/WhyChooseFL";
import professional from "../professional-loan";
import LoanExplanation from "../../LoanExplanation";

function CSLoanComponent() {
  return (
    <div>
        <Navbar/>
        <HeroCSLoan/>
        <LoanExplanation heading={professional[1].heading} p1={professional[1].p1} p2={professional[1].p2} p3={professional[1].p3} image={professional[1].image} p4={professional[1].p4} p5={professional[1].p5} />
        <CAEligibility loanType="CS" />
        <CADocuments loanType="CS" />
        <LoanRepaymentOptions loanType="CS" />
        <WhyChooseFL loanType="CS Loan" />
        <Footer/>
    </div>
  )
}

export default CSLoanComponent ;
