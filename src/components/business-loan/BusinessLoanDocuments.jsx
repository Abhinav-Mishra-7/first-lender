import img1 from "../../../public/11879344_Checklist.jpg";

function BusinessLoanDocuments({loanType = "Business"}) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
        grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center
        hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
      >
        {/* LEFT CONTENT - Business Loan Specific */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
            Documents for Fast Approval <span className="capitalize">{loanType}</span> Loan
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            The basic documents required for {loanType} loan online approval are:
          </p>

          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              <span className="font-medium text-slate-800">KYC:</span> Aadhar Card and PAN Card of applicants
            </li>
            <li>
              <span className="font-medium text-slate-800">Entity KYC:</span> GST Certificate and Udyog Aadhaar Certificate
            </li>
            <li>
              <span className="font-medium text-slate-800">Financials:</span> Last 2 years ITR with Financials
            </li>
            <li>
              <span className="font-medium text-slate-800">Bank Statement:</span> Last 1 year Bank Statement of Business Account
            </li>
            <li>
              <span className="font-medium text-slate-800">Photograph:</span> Passport size photograph of applicants
            </li>
            <li>
              <span className="font-medium text-slate-800">Address Proof:</span> Residence address proof
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE - Same */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Business Loan Documents"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessLoanDocuments;