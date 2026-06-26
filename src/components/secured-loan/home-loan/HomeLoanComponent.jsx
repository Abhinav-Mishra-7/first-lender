import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import HeroHomeLoan from "./HeroHomeLoan"
import secured from "../secured-loan"
import LoanExplanation from "../../LoanExplanation"
import HomeLoanBenefits from "./HomeLoanBenefits"
import HomeLoanDocuments from "./HomeLoanDocuments"
import MaximumLoanAmount from "./MaximumLoanAmount"
import WhyChooseFL from "../../personal-loan/WhyChooseFL";
import HomeLoanForm from "../../forms/HomeLoanForm"

function HomeLoanComponent() {
  return (
    <div>
        <Navbar/>
        <HeroHomeLoan/>
        <LoanExplanation heading={secured[0].heading} p1={secured[0].p1} p2={secured[0].p2} p3={secured[0].p3} image={secured[0].image}/>
        <HomeLoanBenefits/>
        <HomeLoanDocuments/>
        <MaximumLoanAmount/>
        <WhyChooseFL loanType="Home Loan"/>
        <HomeLoanForm/>
        <Footer/>
    </div>
  )
}

export default HomeLoanComponent ;
