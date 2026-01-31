import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import HeroDoctorLoan from "./DoctorLoanHero";
import DoctorEligibility from "./DoctorEligibility";
import DoctorDocuments from "./DoctorDocuments";
import LoanRepaymentOptions from "../../personal-loan/LoanRepaymentOptions";
import WhyChooseFL from "../../personal-loan/WhyChooseFL";
import professional from "../professional-loan";
import LoanExplanation from "../../LoanExplanation";

function DoctorLoanComponent() {
  return (
    <div>
        <Navbar/>
        <HeroDoctorLoan/>
        <LoanExplanation heading={professional[2].heading} p1={professional[2].p1} p2={professional[2].p2} image={professional[2].image} />
        <DoctorEligibility/>
        <DoctorDocuments/>
        <LoanRepaymentOptions loanType="Doctor" />
        <WhyChooseFL loanType="Doctor Loan" />
        <Footer/>
    </div>
  )
}

export default DoctorLoanComponent ;