import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"
import HeroBusinessOverdraftLoan from "./HeroBusinessOverdraft"
import LoanExplanation from "../../LoanExplanation"
import business from "../business_loans"
import OverdraftVsBusinessLoans from "./OverdraftVsBusinessLoans"
import BusinessLoanEligibility from "../BusinessLoanEligibility"
import BusinessLoanDocuments from "../BusinessLoanDocuments"
import OverdraftBenefits from "./OverdraftBenefits"
import WhyChooseFL from "../../personal-loan/WhyChooseFL"
import BussinessLoanForm from "../../forms/BusinessLoanForm"

function BusinessOverdraftComponent() {
    return (
        <div>
            <Navbar/>
            <HeroBusinessOverdraftLoan/>
            <LoanExplanation heading={business[3].heading} p1={business[3].p1} p2={business[3].p2} image={business[3].image} />
            <BusinessLoanEligibility loanType="Business Overdraft"/> 
            <BusinessLoanDocuments loanType="Business Overdraft"/>
            <OverdraftBenefits/>
            <OverdraftVsBusinessLoans/>
            <WhyChooseFL loanType="Business Overdraft"/>
            <BussinessLoanForm/>
            <Footer/>
        </div>
    )
}

export default BusinessOverdraftComponent
