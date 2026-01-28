import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import HeroMarriageLoan from "./HeroMarriageLoan"
import MarriageLoanExplanation from "./MarriageLoanExplanation"
import LoanEligibility from "../LoanEligibility"
import WhyChooseFL from "../WhyChooseFL"

function MarraigeLoan() {
  return (
    <div>
      <Navbar/>
      <HeroMarriageLoan/>
      <MarriageLoanExplanation/>
      <LoanEligibility loanType='Marriage Loan'/>
      <WhyChooseFL loanType='Marriage Loan' />
      <Footer/>
    </div>
  )
}

export default MarraigeLoan
