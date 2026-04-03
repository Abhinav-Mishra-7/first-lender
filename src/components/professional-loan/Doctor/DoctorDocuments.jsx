import img1 from "../../../assets/11879344_Checklist.jpg";

function DoctorDocuments({loanType = "Doctor"}) {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
        grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center
        hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
      >
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
            Documents for Fast Approval <span className="capitalize">{loanType}</span> Loan
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            The basic documents required for {loanType} loan online approval are:
          </p>

          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              <span className="font-medium text-slate-800">Application Form:</span> Duly filled application form with passport-sized photographs
            </li>
            <li>
              <span className="font-medium text-slate-800">Proof of Identity:</span> Passport / Voter ID / PAN Card, etc.
            </li>
            <li>
              <span className="font-medium text-slate-800">Proof of Residence:</span> Ration card / Utility Bills / Rental Agreement / Passport / Bank Statement or Passbook
            </li>
            <li>
              <span className="font-medium text-slate-800">Proof of Age:</span> PAN Card, Passport, any other certificate from a statutory authority
            </li>
            <li>
              <span className="font-medium text-slate-800">Proof of Income:</span> 
              <ul className="list-disc pl-5 mt-1 ml-4 text-xs space-y-1">
                <li>Form 26 AS / ITR / Form – 16 (self-employed professionals)</li>
                <li>Salary slips (salaried doctors)</li>
                <li>Bank Statements / Bank Passbook</li>
              </ul>
            </li>
            <li>
              <span className="font-medium text-slate-800">Professional Documents:</span> Last degree certificate and medical registration certificate
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt={`${loanType} Loan Documents`}
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default DoctorDocuments;