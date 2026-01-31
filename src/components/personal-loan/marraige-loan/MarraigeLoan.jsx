import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import HeroMarriageLoan from "./HeroMarriageLoan"
import LoanEligibility from "../LoanEligibility"
import WhyChooseFL from "../WhyChooseFL"
import LoanExplanation from "../../LoanExplanation"
import personal from "../personal_loans"
import LoanDocuments from "../LoanDocuments"
import LoanRepaymentOptions from "../LoanRepaymentOptions"

function MarraigeLoan() {
  return (
    <div>
      <Navbar/>
      <HeroMarriageLoan/>
      <LoanExplanation heading={personal[1].heading} p1={personal[1].p1} p2={personal[1].p2} p3={personal[1].p3} image={personal[1].image} />
      <LoanEligibility loanType='Marriage Loan'/>
      <LoanDocuments loanType='Marriage'/>
      <LoanRepaymentOptions loanType="Marriage" />
      <WhyChooseFL loanType='Marriage Loan'/>
      <Footer/>
    </div>
  )
}

export default MarraigeLoan
