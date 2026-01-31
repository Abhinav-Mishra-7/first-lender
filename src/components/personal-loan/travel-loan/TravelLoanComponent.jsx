import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import HeroTravelLoan from "./TravelLoanHero";
import LoanExplanation from "../../LoanExplanation";
import LoanEligibility from "../LoanEligibility";
import LoanDocuments from "../LoanDocuments";
import LoanRepaymentOptions from "../LoanRepaymentOptions";
import WhyChooseFL from "../WhyChooseFL";
import personal from "../personal_loans";

function TravelLoanComponent() {
  return (
    <div className="w-full">
        <Navbar/>
        <HeroTravelLoan/>
        <LoanExplanation heading={personal[3].heading} p1={personal[3].p1} p2={personal[3].p2} image={personal[3].image} />
        <LoanEligibility loanType='travel'/>
        <LoanDocuments loanType='travel'/>
        <LoanRepaymentOptions loanType="Travel" />
        <WhyChooseFL loanType='Travel Loan' />
        <Footer/>
    </div>
  )
}

export default TravelLoanComponent;