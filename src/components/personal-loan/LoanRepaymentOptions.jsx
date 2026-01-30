function LoanRepaymentOptions({loanType}) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200
          p-6 md:p-8 transition-all duration-300"
      >
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
          Instant {loanType} Loan Repayment Options
        </h2>

        {/* INTRO */}
        <p className="text-slate-600 leading-relaxed text-sm mb-5">
          The {loanType} loan repayment options generally include payment in the
          following forms:
        </p>

        {/* REPAYMENT OPTIONS */}
        <ul className="list-disc pl-5 space-y-3 text-sm text-slate-600 leading-relaxed">
          <li>
            <span className="font-medium text-slate-800">Bullet Payment:</span>{" "}
            Monthly payment of interest followed by a lump sum payment of the
            principal amount. This option is available to a limited set of
            individuals.
          </li>

          <li>
            <span className="font-medium text-slate-800">EMIs:</span> Monthly
            payments of a fixed amount comprising both principal and interest,
            which may include:
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <span className="font-medium text-slate-800">
                  Partial Prepayment:
                </span>{" "}
                Paying more than one EMI to reduce the principal amount.
              </li>
              <li>
                <span className="font-medium text-slate-800">Foreclosure:</span>{" "}
                Paying the total outstanding amount to close the loan early.
                This may involve additional charges, so reviewing the terms is
                advised.
              </li>
            </ul>
          </li>
        </ul>

        {/* TIPS SECTION */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Tips for a Hassle-Free Loan Repayment Plan
          </h3>

          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 leading-relaxed">
            <li>
              Increase the down payment to directly reduce the EMI amount
            </li>
            <li>
              Assess your financial situation and set the EMI considering all
              expenses
            </li>
            <li>
              If you have multiple debts, prioritize closing high-interest
              loans first
            </li>
            <li>
              Try to pay more than the minimum amount to accelerate loan
              repayment
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoanRepaymentOptions;