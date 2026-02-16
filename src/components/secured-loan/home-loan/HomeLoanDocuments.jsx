function HomeLoanDocuments({ productName = "Home Loan" }) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 p-6 md:p-8 transition-all duration-300">
        
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
          What Documents Are Required for {productName}?
        </h2>

        {/* INTRO */}
        <div className="rounded-2xl border mb-8">
          <p className="text-slate-700 leading-relaxed text-sm">
            To apply for a {productName}, you need identity, income, and property
            documents. These help lenders verify your eligibility and approve your
            loan faster with minimal processing delays.
          </p>
        </div>

        <div className="space-y-6">

          {/* KYC */}
          <div className="flex items-start space-x-4 p-5 bg-linear-to-r from-orange-50 to-yellow-50 rounded-2xl border-l-4 border-orange-500">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <span className="text-orange-600 font-bold text-lg">🪪</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 text-lg mb-3">
                KYC Documents
              </h4>

              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li>
                  <span className="font-medium text-slate-900">Identity & Address Proof:</span>{" "}
                  PAN Card, Aadhar Card, Proof of Residence
                </li>
                <li>
                  <span className="font-medium text-slate-900">For NRI Applicants:</span>{" "}
                  Passport
                </li>
              </ul>
            </div>
          </div>

          {/* INCOME */}
          <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-l-4 border-emerald-500">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-emerald-600 font-bold text-lg">💰</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 text-lg mb-3">
                Income Documents
              </h4>

              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li>
                  <span className="font-medium text-slate-900">Salaried Applicants:</span>{" "}
                  Salary slips and Form 16
                </li>
                <li>
                  <span className="font-medium text-slate-900">All Applicants:</span>{" "}
                  Bank statements for last 6–12 months
                </li>
                <li>
                  <span className="font-medium text-slate-900">Self-Employed / Professionals:</span>{" "}
                  ITR for last 3 years with financial statements
                </li>
              </ul>
            </div>
          </div>

          {/* PROPERTY */}
          <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border-l-4 border-indigo-500">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-indigo-600 font-bold text-lg">🏠</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 text-lg mb-3">
                Property Documents
              </h4>

              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                <li>
                  <span className="font-medium text-slate-900">Ownership Proof:</span>{" "}
                  Documents showing property ownership
                </li>
                <li>
                  <span className="font-medium text-slate-900">For Flats:</span>{" "}
                  Allotment letter from builder or society
                </li>
                <li>
                  <span className="font-medium text-slate-900">Tax Receipt:</span>{" "}
                  Latest property tax paid receipt
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeLoanDocuments;