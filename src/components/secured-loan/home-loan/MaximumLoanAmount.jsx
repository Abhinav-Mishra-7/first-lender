function MaximumLoanAmount({ loanType = "Home" }) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200
        p-6 md:p-8 transition-all duration-300"
      >
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-6 text-shadow-md text-left">
          Maximum Loan Amount and Repayment Period
        </h2>

        {/* TWO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* LOAN AMOUNT */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-yellow-500 mb-4 text-shadow-xs">
              How Much Can I Borrow Against My Property?
            </h3>

            <ul className="list-disc pl-5 space-y-3 text-sm text-slate-600 leading-relaxed">
              <li>
                Up to <span className="font-medium text-slate-900">90%</span> of
                the property value for loans up to{" "}
                <span className="font-medium text-slate-900">₹ 30 lakh</span>.
              </li>
              <li>
                For loan amounts between{" "}
                <span className="font-medium text-slate-900">
                  ₹ 30 lakh and ₹ 75 lakh
                </span>
                , up to <span className="font-medium text-slate-900">80%</span>{" "}
                of the property value.
              </li>
              <li>
                For loans above{" "}
                <span className="font-medium text-slate-900">₹ 75 lakh</span>, up
                to <span className="font-medium text-slate-900">75%</span> of the
                property value.
              </li>
            </ul>
          </div>

          {/* REPAYMENT */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-yellow-500 mb-4 text-shadow-xs">
              How Long Can I Repay My {loanType} Loan?
            </h3>

            <ul className="list-disc pl-5 space-y-3 text-sm text-slate-600 leading-relaxed">
              <li>
                <span className="font-medium text-slate-900">
                  Salaried applicants:
                </span>{" "}
                Repayment period up to{" "}
                <span className="font-medium text-slate-900">30 years</span>.
              </li>
              <li>
                <span className="font-medium text-slate-900">
                  Self-employed applicants:
                </span>{" "}
                Repayment period up to{" "}
                <span className="font-medium text-slate-900">25 years</span>.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MaximumLoanAmount;