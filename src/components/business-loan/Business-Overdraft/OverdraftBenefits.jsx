function OverdraftBenefits() {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl hover:shadow-blue-200 transition-all duration-400">
        
        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-6 text-shadow-md">
          Benefits of Using Overdraft Facilities
        </h2>

        {/* MAIN BENEFITS SECTION */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-2xl border-l-4 border-yellow-500 mb-8">
          <p className="text-slate-700 leading-relaxed text-sm mb-6">
            Small business overdraft facilities provide small business owners with financing benefits tailored to the unpredictable cash needs that all companies face at times:
          </p>
          
          <div className="space-y-6">
            {/* On-Demand Access */}
            <div className="flex items-start space-x-4 p-5 bg-white shadow-md rounded-xl hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-linear-to-br from-yellow-200 to-yellow-500  rounded-lg flex items-center justify-center shrink-0 mt-1">
                <span className="text-yellow-600 font-bold text-lg">⚡</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-lg mb-2">On-Demand Access</h4>
                <p className="text-sm text-slate-700">
                  Once approved, funds can be accessed immediately without additional paperwork, helping businesses handle unexpected expenses.
                </p>
              </div>
            </div>

            {/* Interest on Used Amount */}
            <div className="flex items-start space-x-4 p-5 bg-white shadow-md rounded-xl hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-linear-to-br from-green-200 bg-green-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <span className="text-green-800 font-bold text-lg">₹</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-lg mb-2">Interest on Used Amount</h4>
                <p className="text-sm text-slate-700">
                  Interest is charged only on the overdrawn balance, reducing costs during periods of healthy cash flow.
                </p>
              </div>
            </div>

            {/* Flexible Repayments */}
            <div className="flex items-start space-x-4 p-5 bg-white shadow-md rounded-xl hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-linear-to-br from-blue-200 to-blue-500 rounded-lg flex items-center justify-center shrink-0 mt-1">
                <span className="text-blue-600 font-bold text-lg">↔️</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-lg mb-2">Flexible Repayments</h4>
                <p className="text-sm text-slate-700">
                  No fixed monthly repayments or usage restrictions, allowing <a href="https://www.shriramfinance.in/financial-faq-what-are-effective-ways-to-handle-cash-flow-in-a-business-with-seasonal-fluctuations" className="text-blue-600 hover:underline font-medium">businesses to manage cash flow fluctuations</a> effectively.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY TAKEAWAY */}
        <div className="p-6 bg-linear-to-r from-yellow-50/70 to-yellow-100/60 rounded-2xl">
          <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Perfect Cash Flow Solution
          </h3>
          <p className="text-sm text-slate-700">
            Overdraft facilities act as a financial safety net, giving businesses the flexibility to access funds exactly when needed without the burden of fixed repayments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverdraftBenefits;
