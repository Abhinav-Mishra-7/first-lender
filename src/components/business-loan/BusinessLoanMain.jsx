import HeroBusinessLoan from "./BusinessLoanHero"
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import business from "../../components/business-loan/business_loans" ;
import LoanExplanation from "../LoanExplanation";
import BusinessLoanProcess from "../../components/business-loan/BusinessLoanProcess";
import LoanEligibility from "../personal-loan/LoanEligibility";
import LoanDocuments from "../personal-loan/LoanDocuments";
import WhyChooseFL from "../personal-loan/WhyChooseFL";

function BusinessLoanMain() {
  return (
    <div>
        <Navbar/>
        <HeroBusinessLoan/>
        <LoanExplanation heading={business[0].heading} p1={business[0].p1} p2={business[0].p2} image={business[0].image} />
        <LoanEligibility loanType="business" />
        <LoanDocuments loanType="business" />
        <BusinessLoanProcess/>
        <WhyChooseFL/>
        <Footer/>
    </div>
  )
}

export default BusinessLoanMain ;