function HomeLoanBenefits({ productName = "Home Loan" }) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 p-6 md:p-8 transition-all duration-300">
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
          Can {productName} Be Helpful for Your Family?
        </h2>

        {/* INTRO */}
        <div className="rounded-2xl border mb-8">
          <p className="text-slate-700 leading-relaxed text-sm">
            {productName} helps you own your dream home with affordable EMIs, flexible repayment options, and tax benefits. Perfect for first-time buyers, upgrades, or balance transfers.
          </p>
        </div>

        {/* HOME BUYER EXAMPLES */}
        <div className="space-y-6 mb-8">
          <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border-l-4 border-orange-500">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-orange-600 font-bold text-lg">🏠</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 text-lg mb-2">First-Time Home Buyer</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Young professional buying their first apartment with low down payment and attractive interest rates.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-l-4 border-emerald-500">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-emerald-600 font-bold text-lg">🏡</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 text-lg mb-2">Home Upgraders</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Families upgrading to larger homes with balance transfer to save on interest costs.
              </p>
            </div>
          </div>
        </div>

        {/* BENEFITS GRID - Matching your image layout */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">
            Key {productName} Benefits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Benefit 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">📉</span>
              </div>
              <h4 className="font-semibold text-slate-900 text-lg mb-2">Competitive Rates</h4>
              <p className="text-sm text-slate-600">Lowest interest rates available</p>
            </div>

            {/* Benefit 2 */}
            <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="font-semibold text-slate-900 text-lg mb-2">No Prepayment Charges</h4>
              <p className="text-sm text-slate-600">Prepay anytime without penalties</p>
            </div>

            {/* Benefit 3 */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200 hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">⏳</span>
              </div>
              <h4 className="font-semibold text-slate-900 text-lg mb-2">Flexible Tenure</h4>
              <p className="text-sm text-slate-600">Up to 30 years repayment period</p>
            </div>

            {/* Benefit 4 */}
            <div className="group bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-200 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-slate-900 text-lg mb-2">Balance Transfer</h4>
              <p className="text-sm text-slate-600">Transfer home loan easily</p>
            </div>

            {/* Benefit 5 */}
            <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-200 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏗️</span>
              </div>
              <h4 className="font-semibold text-slate-900 text-lg mb-2">Construction Finance</h4>
              <p className="text-sm text-slate-600">Funding for under-construction properties</p>
            </div>

            {/* Benefit 6 */}
            <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-200 hover:shadow-lg hover:shadow-teal-200 transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="font-semibold text-slate-900 text-lg mb-2">Online Processing</h4>
              <p className="text-sm text-slate-600">Complete digital home loan journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLoanBenefits;