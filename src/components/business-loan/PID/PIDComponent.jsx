import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import HeroPID from "./HeroPID";
import LoanExplanation from "../../LoanExplanation";
import BusinessLoanEligibility from "../BusinessLoanEligibility";
import BusinessLoanDocuments from "../BusinessLoanDocuments";
import WhyChooseFL from "../../personal-loan/WhyChooseFL";
import business from "../business_loans";
import BillDiscountingHowItWorks from "./BillDiscountingHowItWorks";
import InvoiceDiscountingBenefits from "./InvoiceDiscountingBenefits";
import BussinessLoanForm from "../../forms/BusinessLoanForm"

function PIDComponent() {
  return (
    <div>
        <Navbar/>
        <HeroPID/>
        <LoanExplanation heading={business[1].heading} p1={business[1].p1} p2={business[1].p2} image={business[1].image} />
        <BillDiscountingHowItWorks/>
        <InvoiceDiscountingBenefits/>
        <BusinessLoanEligibility loanType="PID"/>
        <BusinessLoanDocuments loanType="PID"/>
        <WhyChooseFL loanType="PID" />
        <BussinessLoanForm/>
        <Footer/>
    </div>
  )
}

export default PIDComponent ;