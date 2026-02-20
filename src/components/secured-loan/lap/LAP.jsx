import img1 from "../../../../public/57166071_2304_i402_019_s_m004_c13_corporate_culture_composition.jpg";

function LoanAgainstPropertyLTV({ loanType = "Property" }) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
          items-center
          hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
      >
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
            Loan to Value (LTV) for <span className="capitalize">{loanType}</span> Loans
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            LTV for specialized properties remains consistent. Higher LTV can be considered on a case-to-case basis with tenure up to 15 years:
          </p>

          <div className="space-y-4 mb-6">
            {/* Industrial/Commercial Properties */}
            <div className="bg-blue-50 border-l-4 border-yellow-500 pl-4 pr-6 py-4 rounded-r-lg">
              <h4 className="font-semibold text-slate-900 text-sm mb-2">50% LTV</h4>
              <ul className="text-slate-600 text-xs list-disc pl-4 space-y-1">
                <li>Industrial Properties</li>
                <li>Warehouse</li>
                <li>Hotel</li>
                <li>Nursing Home</li>
                <li>Hospital</li>
                <li>Banquet Halls</li>
              </ul>
            </div>

            {/* School */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 pl-4 pr-6 py-4 rounded-r-lg">
              <h4 className="font-semibold text-slate-900 text-sm mb-2">40% LTV</h4>
              <p className="text-slate-600 text-xs">School</p>
            </div>

            {/* Marriage Gardens */}
            <div className="bg-green-50 border-l-4 border-yellow-500 pl-4 pr-6 py-4 rounded-r-lg">
              <h4 className="font-semibold text-slate-900 text-sm mb-2">30% LTV</h4>
              <p className="text-slate-600 text-xs">Marriage Gardens</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanAgainstPropertyLTV;