import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import HeroCGTMSE from "./CGTMSEHero";
import LoanExplanation from "../../LoanExplanation";
import CGTMSEEligibility from "./CGTMSEEligibility";
import CGTMSEBenefits from "./CGTMSEProfit";
import CGTMSEEligibleBorrowers from "./CGTMSEEligibleBorrowers";
import BusinessLoanDocuments from "../BusinessLoanDocuments";
import WhyChooseFL from "../../personal-loan/WhyChooseFL";
import business from "../business_loans";

function CGTMSEComponent() {
  return (
    <div>
        <Navbar/>
        <HeroCGTMSE/>
        <LoanExplanation heading={business[2].heading} p1={business[2].p1} p2={business[2].p2} image={business[2].image} />
        <CGTMSEEligibility/>
        <BusinessLoanDocuments loanType="CGTMSE"/>
        <CGTMSEBenefits/>
        <CGTMSEEligibleBorrowers/>
        <WhyChooseFL loanType="CGTMSE" />
        <Footer/>
    </div>
  )
}

export default CGTMSEComponent ;