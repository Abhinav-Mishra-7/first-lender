function BillDiscountingHowItWorks({ productName = "Bill Discounting" }) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 p-6 md:p-8 transition-all duration-300">
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
          How {productName} Works ?
        </h2>

        {/* INTRO */}
        <p className="text-slate-600 leading-relaxed text-sm mb-5">
          {productName} provides immediate cash flow by converting your unpaid invoices into instant funding.
        </p>

        {/* PROCESS STEPS */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <span className="text-blue-600 font-bold text-xl mt-1">1</span>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Issuing a Bill</h4>
              <p className="text-sm text-slate-600">
                A bill or invoice is issued by a business to a buyer in exchange for delivery of products or services.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
            <span className="text-green-600 font-bold text-xl mt-1">2</span>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Discount Application</h4>
              <p className="text-sm text-slate-600">
                The business sells this bill to a financial institution at a discount. For example, if the bill is worth <span className="font-bold text-yellow-600">₹100,000</span>, the institution might purchase it for <span className="font-bold text-yellow-600">₹95,000</span>.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
            <span className="text-yellow-600 font-bold text-xl mt-1">3</span>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Immediate Cash Flow</h4>
              <p className="text-sm text-slate-600">
                The business receives <span className="font-bold text-green-600">₹95,000</span> immediately, allowing it to address cash flow needs.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
            <span className="text-purple-600 font-bold text-xl mt-1">4</span>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Collection</h4>
              <p className="text-sm text-slate-600">
                The financial institution collects the full <span className="font-bold text-yellow-600">₹100,000</span> from the buyer on the due date.
              </p>
            </div>
          </div>
        </div>

        {/* ADVANTAGES SECTION */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Advantages of {productName}
          </h3>

          <ul className="list-none space-y-3 text-sm text-slate-600 leading-relaxed">
            <li className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-emerald-600 font-bold mt-1 min-w-[20px]">✓</span>
              <span>Instant funds to manage operational costs</span>
            </li>
            <li className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-emerald-600 font-bold mt-1 min-w-[20px]">✓</span>
              <span>No need to inform buyer, preserving customer relationships</span>
            </li>
            <li className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-emerald-600 font-bold mt-1 min-w-[20px]">✓</span>
              <span>Short term financial relief without requiring additional collateral</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BillDiscountingHowItWorks;