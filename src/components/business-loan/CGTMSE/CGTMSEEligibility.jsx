import img1 from "../../../assets/4530235_19222.jpg"

function CGTMSEEligibility({loanType = "CGTMSE"}) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
          grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center
          hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
      >
        {/* LEFT CONTENT - Simple Bullet Points */}
        <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
                Eligibility Criteria for a Quick CGTMSE
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                The eligibility criteria for CGTMSE are minimal, with the
                requirement to meet the following:
            </p>
            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
                <li>New and existing small and medium-sized enterprises.</li>
                <li>Manufacturing and service businesses.</li>
                <li>All trading firms, as long as they are under the MSME definition.</li>
                <li>A loan can be taken only from banks, NBFCs, or financial institutions that are listed with CGTMSE.</li>
                <li>The borrower should be over 18 years old.</li>
                <li>Firms already supported by other state or national schemes can also benefit.</li>
                <li>Any activities that fall under the service sector according to the MSMED Act, 2006, are eligible.</li>
                <li>Income Tax Permanent Account Number (IT PAN) is required when the amount of the loan is more than ₹5 lakh.</li>
                <li>Udyam Registration Number</li>
                <li>Viable and profitable business with a good track record.</li>
            </ul>
        </div>

        {/* RIGHT IMAGE - No border, no shadow */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="CGTMSE Loan Eligibility"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CGTMSEEligibility;
