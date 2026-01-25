import img1 from "../../../public/12085315_20944141 (1).jpg";

function ProfessionalLoanExplanation() {
  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
          grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center
          hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
      >
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4">
            What is a Professional Loan?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            A professional loan is a type of unsecured loan specifically designed
            for self-employed professionals such as doctors, chartered
            accountants, architects, engineers, consultants, and other qualified
            professionals. It helps meet business-related and professional
            financial needs without requiring any collateral.
          </p>

          <p className="text-slate-600 leading-relaxed text-sm">
            FIRSTLENDER assists professionals in securing quick and hassle-free
            professional loans in India with minimal documentation. Whether it is
            for expanding your practice, purchasing equipment, or managing
            working capital, we help you access competitive interest rates and
            flexible repayment options tailored to your professional needs.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Professional Loan"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfessionalLoanExplanation;
