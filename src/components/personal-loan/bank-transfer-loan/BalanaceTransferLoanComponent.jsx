import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
import HeroBalanceTransfer from "./BalanceTransferHero";
import LoanExplanation from "../../LoanExplanation";
import LoanEligibility from "../LoanEligibility";
import LoanDocuments from "../LoanDocuments";
import LoanRepaymentOptions from "../LoanRepaymentOptions";
import WhyChooseFL from "../WhyChooseFL";
import personal from "../personal_loans";

function BalanaceTransferComponent() {
  return (
    <div className="w-full">
        <Navbar/>
        <HeroBalanceTransfer/>
        <LoanExplanation heading={personal[6].heading} p1={personal[6].p1} p2={personal[6].p2} image={personal[6].image} />
        <LoanEligibility loanType='bank transfer'/>
        <LoanDocuments loanType='bank transfer'/>
        <LoanRepaymentOptions loanType="Bank Transfer" />
        <WhyChooseFL loanType='Bank Transfer' />
        <Footer/>
    </div>
  )
}

export default BalanaceTransferComponent;