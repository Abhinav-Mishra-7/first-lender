import img1 from "../../../../public/57166071_2304_i402_019_s_m004_c13_corporate_culture_composition.jpg";

function CarLoanApplicantTypes({ productName = "Car Refinance" }) {
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
            Eligibility Criteria for a Quick <span className="capitalize">{productName}</span>
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6 text-sm">
            Our {productName} eligibility is simple and transparent for both self‑employed and salaried applicants. Review the key requirements below to understand qualification criteria.
          </p>

          <div className="space-y-6">
            {/* SELF EMPLOYED */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 ">
                Self‑Employed Applicants
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm leading-relaxed list-disc pl-5">
                <li>
                  <span className="font-medium text-slate-800">Age & Residency:</span> Indian resident aged between 21 and 59 years at loan maturity
                </li>
                <li>
                  <span className="font-medium text-slate-800">Income Criteria:</span> Minimum income requirement based on car model and vehicle age
                </li>
                <li>
                  <span className="font-medium text-slate-800">Repayment Tenure:</span> Repayment tenure considered for eligibility assessment
                </li>
                <li>
                  <span className="font-medium text-slate-800">Business Stability:</span> Stable business continuity and financial profile preferred
                </li>
              </ul>
            </div>

            {/* SALARIED */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Salaried Individuals
              </h3>
              <ul className="space-y-2 text-slate-600 text-sm leading-relaxed list-disc pl-5">
                <li>
                  <span className="font-medium text-slate-800">Age & Residency:</span> Indian resident aged between 21 and 59 years at loan maturity
                </li>
                <li>
                  <span className="font-medium text-slate-800">Income Criteria:</span> Minimum salary requirement based on car model and vehicle age
                </li>
                <li>
                  <span className="font-medium text-slate-800">Repayment Tenure:</span> Repayment term factored into eligibility calculation
                </li>
                <li>
                  <span className="font-medium text-slate-800">Employment Stability:</span> Consistent employment and income stability required
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt={`${productName} eligibility`}
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CarLoanApplicantTypes;
