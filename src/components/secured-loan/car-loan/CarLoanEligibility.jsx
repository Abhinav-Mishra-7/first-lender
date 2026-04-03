import img1 from "../../../assets/57166071_2304_i402_019_s_m004_c13_corporate_culture_composition.jpg"

function CarLoanEligibility({ loanType = "Car" }) {
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
            Eligibility Criteria for a Quick <span className="capitalize">{loanType}</span> Loan
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            Our {loanType} loan eligibility is simple and straightforward, designed for both salaried professionals and self-employed individuals:
          </p>

          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              <span className="font-medium text-slate-800">For Salaried:</span> Minimum monthly salary of Rs. 25,000
            </li>
            <li>
              <span className="font-medium text-slate-800">For Self-Employed:</span> ITR proof of past 2 years required
            </li>
            <li>
              <span className="font-medium text-slate-800">CIBIL Score:</span> 650 and above
            </li>
            <li>
              <span className="font-medium text-slate-800">Age:</span> 21 years to 60 years
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt={`${loanType} loan image`}
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CarLoanEligibility;
