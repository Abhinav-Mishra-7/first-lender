import img1 from "../../../../public/4530235_19222.jpg"

function CAEligibility({loanType = "CA"}) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
          grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center
          hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
      >
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
            Eligibility Criteria for <span className="capitalize">{loanType}</span>s
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            The eligibility criteria for CA loans are specifically designed for chartered accountants, with the following requirements:
          </p>

          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              <span className="font-medium text-slate-800">Age:</span> 22 years at the time of loan application and 65 years at the time of loan maturity
            </li>
            <li>
              <span className="font-medium text-slate-800">Eligible Entities:</span>
              <ul className="list-disc pl-5 mt-1 ml-4 text-xs space-y-1">
                <li>Proprietorship firms</li>
                <li>Partnership Firms</li>
                <li>Limited Liability Partnerships</li>
                <li>Private Limited Companies</li>
                <li>CA firm registered with ICAI</li>
              </ul>
            </li>
            <li>
              <span className="font-medium text-slate-800">CA Certification:</span> CAs having Certificate of Membership or Certificate of Practice atleast 3 years old issued by ICAI
            </li>
            <li>
              <span className="font-medium text-slate-800">Business Vintage:</span> Minimum 3 years
            </li>
            <li>
              <span className="font-medium text-slate-800">Business Turnover:</span> Minimum Rs 10 lakh in the recent year
            </li>
            <li>
              <span className="font-medium text-slate-800">Credit Score:</span> Above 650
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="CA Loan Eligibility"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CAEligibility;