import HeroBusinessLoan from "./BusinessLoanHero"
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import business from "../../components/business-loan/business_loans" ;
import LoanExplanation from "../LoanExplanation";
import BusinessLoanProcess from "../../components/business-loan/BusinessLoanProcess";
import BusinessLoanEligibility from "./BusinessLoanEligibility";
import BusinessLoanDocuments from "./BusinessLoanDocuments";
import WhyChooseFL from "../personal-loan/WhyChooseFL";
import BussinessLoanForm from "../forms/BusinessLoanForm";

function BusinessLoanMain() {
  return (
    <div>
        <Navbar/>
        <HeroBusinessLoan/>
        <LoanExplanation heading={business[0].heading} p1={business[0].p1} p2={business[0].p2} image={business[0].image} />
        <BusinessLoanEligibility/>
        <BusinessLoanDocuments/>
        <BusinessLoanProcess/>
        <WhyChooseFL loanType="Business Loan" />
        <BussinessLoanForm/>
        <Footer/>
    </div>
  )
}

export default BusinessLoanMain ;