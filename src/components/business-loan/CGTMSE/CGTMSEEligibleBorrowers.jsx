function CGTMSEEligibleBorrowers() {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl hover:shadow-blue-200 transition-all duration-400">
        
        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-6 text-shadow-md">
          Eligible Borrowers/Units
        </h2>

        {/* ELIGIBLE BORROWERS */}
        <div className="mb-8">
          <ul className="text-slate-600 text-sm leading-relaxed space-y-3 list-disc pl-5">
            <li>
              <span className="font-semibold text-slate-800">MSE Units:</span> Loans sanctioned to Micro and Small Enterprises (MSE) units, as per the definition of the Ministry of MSMEs engaged in all eligible activities including trading activity up to ₹10.00 crores.
            </li>
            <li>
              <span className="font-semibold text-slate-800">Udyam Registration:</span> Obtention of Udyam Registration Number is mandatory for obtaining Guarantee Cover.
            </li>
          </ul>
        </div>

        {/* NOT ELIGIBLE */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Credit facilities not eligible under the Scheme:</h3>
          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li> Any credit facility covered under Deposit Insurance and Credit Guarantee Corporation or RBI schemes.</li>
            <li> Credit facilities additionally covered by Government insurance or general insurers.</li>
            <li> Credit facilities already covered through NCGTC Ltd.</li>
            <li> Credit facilities inconsistent with any law or RBI directives.</li>
            <li> Credit facilities where previous guarantee has been invoked but not repaid.</li>
            <li> Credit facilities sanctioned against collateral security/third party guarantee (except Hybrid Security model).</li>
          </ul>
        </div>

        {/* HYBRID SECURITY */}
        <div className="mb-8 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
          <h4 className="font-semibold text-slate-900 mb-2 text-lg">Hybrid Security:</h4>
          <p className="text-sm text-slate-700">
            CGTMSE introduced "Hybrid Security" product in 2018 where Banks/FIs can obtain collateral security for part of credit facility, remaining covered under CGTMSE up to ₹10.00 crores.
          </p>
        </div>

        {/* ANNUAL GUARANTEE FEE */}
        <div className="p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
          <h4 className="font-semibold text-slate-900 mb-2 text-lg">Annual Guarantee Fee Structure:</h4>
          <p className="text-sm text-slate-700">
            Annual Guarantee Fee payable upfront for first year and annually for continuation. Fee concessions available for select borrower categories, units at designated places, and ZED Certified units.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CGTMSEEligibleBorrowers;