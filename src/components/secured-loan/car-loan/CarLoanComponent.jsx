import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import HeroCarLoan from "./HeroCarLoan"
import secured from "../secured-loan"
import LoanExplanation from "../../LoanExplanation"
import CarLoanEligibility from "./CarLoanEligibility"
import CarLoanDocuments from "./CarLoanDocuments"
import WhyChooseFL from "../../personal-loan/WhyChooseFL"
import HomeLoanForm from "../../forms/HomeLoanForm"

function CarLoanComponent() {
  return (
    <div>
        <Navbar/>
        <HeroCarLoan/>
        <LoanExplanation heading={secured[1].heading} p1={secured[1].p1} p2={secured[1].p2} p3={secured[1].p3}  image={secured[1].image}/>
        <CarLoanEligibility/>
        <CarLoanDocuments/>
        <WhyChooseFL loanType="Car Loan"/>
        <HomeLoanForm/>
        <Footer/>
    </div>
  )
}

export default CarLoanComponent ;