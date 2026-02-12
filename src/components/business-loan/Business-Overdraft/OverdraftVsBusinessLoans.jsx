function OverdraftVsBusinessLoans() {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl hover:shadow-blue-200 transition-all duration-400">
        
        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-6 text-shadow-md">
          Overdrafts vs Business Loans
        </h2>

        {/* MAIN COMPARISON */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-2xl border-l-4 border-yellow-500 mb-8">
          <p className="text-slate-700 leading-relaxed text-sm mb-4">
            While a small business loan provides a <span className="font-semibold text-slate-900">lump sum upfront</span>, overdrafts offer <span className="font-semibold text-slate-900">ongoing, reusable financing</span> as needed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-white border-2 border-yellow-200 rounded-xl">
              <h4 className="font-semibold text-slate-900 mb-2">Overdraft Benefits:</h4>
              <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
                <li>Higher limits than credit card cash advances</li>
                <li>Greater flexibility in drawdown & repayment</li>
                <li>Only used during low cash flow periods</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white border-2 border-blue-200 rounded-xl">
              <h4 className="font-semibold text-slate-900 mb-2">Business Loans For:</h4>
              <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
                <li>Longer-term requirements</li>
                <li>Fixed debt obligations</li>
                <li>Lump sum disbursal upfront</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-sm font-medium">
            In short, <span className="font-semibold text-yellow-700">overdrafts</span> are generally intended for <span className="font-semibold text-yellow-700">short-term working capital needs</span>, while business loans are more suited for longer-term requirements.
          </p>
        </div>

        {/* KEY TAKEAWAY */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Choose Right:</h3>
          <p className="text-sm text-slate-700">
            Business owners utilize overdraft funds only during cash crunches instead of committing to debt obligations regardless of current revenue status.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverdraftVsBusinessLoans;
