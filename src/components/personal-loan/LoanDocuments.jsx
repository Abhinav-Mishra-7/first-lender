import img1 from "../../assets/11879344_Checklist.jpg";

function LoanDocuments({loanType}) {
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
              <span className="font-medium text-slate-800">
                Identity & Address Proof:
              </span>{" "}
              Aadhaar Card and PAN Card
            </li>
            <li>
              <span className="font-medium text-slate-800">
                Bank Statement:
              </span>{" "}
              Last six months bank statement
            </li>
            <li>
              <span className="font-medium text-slate-800">
                Salary Slip:
              </span>{" "}
              Latest three months salary slips (for salaried employees)
            </li>
            <li>
              <span className="font-medium text-slate-800">
                Photograph:
              </span>{" "}
              2–3 passport-sized photographs
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Personal Loan Documents"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default LoanDocuments;