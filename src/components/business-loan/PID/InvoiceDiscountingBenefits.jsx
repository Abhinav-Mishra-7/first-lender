function InvoiceDiscountingBenefits({ productName = "Invoice Discounting" }) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 p-6 md:p-8 transition-all duration-300">
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
          Can {productName} Be Helpful for Your Business?
        </h2>

        {/* INTRO */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 mb-8">
          <p className="text-slate-700 leading-relaxed text-sm">
            {productName} is ideal for businesses that have constantly validated sales by invoices on hand but face cash flow problems. It's especially useful for businesses dealing with long payment terms and seasonal cash flow fluctuations.
          </p>
        </div>

        {/* BUSINESS EXAMPLES */}
        <div className="space-y-6 mb-8">
          <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border-l-4 border-orange-500">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-orange-600 font-bold text-lg">🏭</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 text-lg mb-2">Manufacturing Business</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Contracts with a finance company to liquidate its invoices for money to purchase raw materials and make supplier payments.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-l-4 border-emerald-500">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-emerald-600 font-bold text-lg">💼</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 text-lg mb-2">Consulting Company</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Does invoice discounting to create a financial cushion for periods between fulfilling clients' projects and receiving payments for services provided.
              </p>
            </div>
          </div>
        </div>

        {/* PERFECT FOR SECTION */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Perfect For Businesses With:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
              <span className="text-indigo-600 font-bold text-xl min-w-[24px]">✓</span>
              <span className="text-sm text-slate-700 font-medium">Validated invoices but delayed payments</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
              <span className="text-indigo-600 font-bold text-xl min-w-[24px]">✓</span>
              <span className="text-sm text-slate-700 font-medium">Long payment terms from buyers</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
              <span className="text-indigo-600 font-bold text-xl min-w-[24px]">✓</span>
              <span className="text-sm text-slate-700 font-medium">Seasonal cash flow fluctuations</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
              <span className="text-indigo-600 font-bold text-xl min-w-[24px]">✓</span>
              <span className="text-sm text-slate-700 font-medium">Immediate working capital needs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDiscountingBenefits;