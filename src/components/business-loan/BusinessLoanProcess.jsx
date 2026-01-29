function BusinessLoanProcess() {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 p-6 md:p-8 transition-all duration-300">
        
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
          What We Analyze Before Processing Your Loan
        </h2>

        {/* ANALYSIS CRITERIA */}
        <p className="text-slate-600 leading-relaxed text-sm mb-5">
          Our team carefully evaluates your profile to match you with the most suitable lender based on:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 leading-relaxed mb-8">
          <li><span className="font-medium text-slate-800">Current business turnover</span></li>
          <li><span className="font-medium text-slate-800">Industry type</span></li>
          <li><span className="font-medium text-slate-800">Business location</span></li>
          <li><span className="font-medium text-slate-800">Loan requirement</span></li>
          <li><span className="font-medium text-slate-800">Business vintage (years in operation)</span></li>
        </ul>

        {/* PROCESS SECTION */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Guided, Quick & Hassle-Free Process
          </h3>

          <p className="text-slate-600 leading-relaxed text-sm mb-5">
            Many business owners are unsure where and how to process their loan application. First Lender removes this confusion. Within strict timelines, we verify all credentials, analyze your profile, and route your application to the lender where your approval chances are highest.
          </p>
        </div>

        {/* BENEFITS SECTION */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Grow with Confidence
          </h3>

          <p className="text-slate-600 leading-relaxed text-sm mb-5">
            With First Lender, you don't just get funds—you get expert guidance, smart lender matching, and a smooth loan journey, helping your business grow without unnecessary risks.
          </p>
        </div>

        {/* TAGLINE */}
        <div className="mt-8 pt-6 border-t border-slate-200 text-center">
          <p className="text-xl md:text-2xl font-bold text-yellow-500 text-shadow-sm bg-clip-text">
            First Lender – Funding Growth. Building Futures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BusinessLoanProcess;