import img1 from "../../../../public/4530235_19222.jpg"

function DoctorEligibility({loanType = "Doctor"}) {
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
            Eligibility Criteria for a Quick <span className="capitalize">{loanType}</span> Loan
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            The eligibility criteria for {loanType} loans are specifically designed for medical professionals, with the following requirements:
          </p>

          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              <span className="font-medium text-slate-800">Age:</span> 21 to 60 years
            </li>
            <li>
              <span className="font-medium text-slate-800">Employment:</span> Consultants, physicians, practicing professionals working in a government, private hospital or a clinic
            </li>
            <li>
              <span className="font-medium text-slate-800">Profession:</span> MBBS, BDS, MD, MS, MDS, BAMS, BHMS, BPT or other medical degrees
            </li>
            <li>
              <span className="font-medium text-slate-800">Salaried Minimum:</span> Rs 15,000 per month
            </li>
            <li>
              <span className="font-medium text-slate-800">Credit Score:</span> 700 or above (higher score increases approval chances)
            </li>
            <li>
              <span className="font-medium text-slate-800">Self-Employed Income:</span> Minimum net annual income Rs 5 lakh
            </li>
            <li>
              <span className="font-medium text-slate-800">Practice Vintage:</span> Minimum 2 years of post-qualification experience
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Doctor Loan Eligibility"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default DoctorEligibility;