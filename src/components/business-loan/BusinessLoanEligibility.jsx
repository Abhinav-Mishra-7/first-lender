import img1 from "../../assets/4530235_19222.jpg"

function BusinessLoanEligibility({loanType = "Business Loan"}) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
          grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center
          hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
      >
        {/* LEFT CONTENT - Business Loan Specific */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
            Eligibility Criteria for a Quick <span className="capitalize">{loanType}</span>
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            The eligibility criteria for {loanType}s are minimal, with the requirement to meet the following:
          </p>

          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              <span className="font-medium text-slate-800">Age:</span> Applicant should be aged between 21 to 65 years
            </li>
            <li>
              <span className="font-medium text-slate-800">Annual Turnover:</span> The minimum annual turnover of the business should be Rs. 30 lacs
            </li>
            <li>
              <span className="font-medium text-slate-800">CIBIL Requirement:</span> Applicant must have a credit score of 700 or more
            </li>
            <li>
              <span className="font-medium text-slate-800">Entity Type:</span> The business should be running as Proprietorship Firm, Partnership Firm, LLP or a Private Limited Company
            </li>
            <li>
              <span className="font-medium text-slate-800">Residency:</span> You must be a resident of India with valid proof of address
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE - Same */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Business Loan Eligibility"
            className="w-full max-w-md rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessLoanEligibility;
