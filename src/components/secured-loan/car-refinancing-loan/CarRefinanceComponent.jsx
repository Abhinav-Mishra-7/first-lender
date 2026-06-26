import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import HeroCarRefinancing from "./HeroCarRefinanceLoan";
import secured from "../secured-loan"
import LoanExplanation from "../../LoanExplanation"
import CarRefinancingBenefits from "./CarRefinancingBenefits";
import CarLoanApplicantTypes from "./CarRefinanceEligibility";
import CarRefinanceDocuments from "./CarRefinanceLoanDocuments";
import WhyChooseFL from "../../personal-loan/WhyChooseFL";
import HomeLoanForm from "../../forms/HomeLoanForm"

function CarRefinanceComponent() {
  return (
    <div>
        <Navbar/>
        <HeroCarRefinancing/>
        <LoanExplanation heading={secured[3].heading} p1={secured[3].p1} p2={secured[3].p2} p3={secured[3].p3}  image={secured[3].image}/>
        <CarRefinancingBenefits/>
        <CarLoanApplicantTypes/>
        <CarRefinanceDocuments/>
        <WhyChooseFL loanType="Car Refinance"/>
        <HomeLoanForm/>
        <Footer/>
    </div>
  )
}

export default CarRefinanceComponent ;