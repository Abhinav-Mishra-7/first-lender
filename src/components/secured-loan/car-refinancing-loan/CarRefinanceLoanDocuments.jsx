import img1 from "../../../assets/11879344_Checklist.jpg"

function CarRefinanceDocuments({ loanType = "Car Refinance" }) {
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
            Documents Required for a Quick <span className="capitalize">{loanType}</span>
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            Please keep the following documents ready for instant {loanType} loan processing:
          </p>

          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              <span className="font-medium text-slate-800">KYC Documents:</span> Aadhar / Passport / Voter ID / Driving Licence
            </li>
            <li>
              <span className="font-medium text-slate-800">RC:</span> RC of the vehicle
            </li>
            <li>
              <span className="font-medium text-slate-800">Registration Certificate</span>
            </li>
            <li>
              <span className="font-medium text-slate-800">Application Form</span>
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt={`${loanType} loan documents image`}
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CarRefinanceDocuments;