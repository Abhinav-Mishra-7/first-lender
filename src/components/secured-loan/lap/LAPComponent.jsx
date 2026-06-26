import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import HeroLoanAgainstProperty from "./HeroLAP";
import secured from "../secured-loan"
import LoanExplanation from "../../LoanExplanation"
import CarLoanEligibility from "../car-loan/CarLoanEligibility";
import HomeLoanDocuments from "../home-loan/HomeLoanDocuments"
import LoanAgainstPropertyLTV from "./LAP";
import WhyChooseFL from "../../personal-loan/WhyChooseFL";
import HomeLoanForm from "../../forms/HomeLoanForm"

function LAPComponent() {
  return (
    <div>
        <Navbar/>
        <HeroLoanAgainstProperty/>
        <LoanExplanation heading={secured[2].heading} p1={secured[2].p1} p2={secured[2].p2} p3={secured[2].p3} p4={secured[2].p4} p5={secured[2].p5} p6={secured[2].p6} image={secured[2].image}/>
        <CarLoanEligibility loanType="Loan Against Property" />
        <HomeLoanDocuments/>
        <LoanAgainstPropertyLTV/>
        <WhyChooseFL loanType="Loan Against Property"/>
        <HomeLoanForm/>
        <Footer/>
    </div>
  )
}

export default LAPComponent ;
