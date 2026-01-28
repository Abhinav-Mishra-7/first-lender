import img1 from "../../../../public/9676925_4215155.jpg";

function MarriageLoanExplanation() {
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
            What is a Marriage Loan?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            A Marriage Loan is a type of personal loan designed to cover expenses related to a wedding — from the venue and catering to photography, outfits, and honeymoon plans. It’s an unsecured loan, which means no collateral is needed, and approval is typically quick based on your credit profile and income.
          </p>

          <p className="text-slate-600 leading-relaxed text-sm">
            FIRSTLENDER helps you get an instant marriage loan in India with
            minimal documentation and quick approval. We assist you in arranging
            funds easily so you can focus on creating lifelong memories, while
            enjoying competitive interest rates and flexible repayment options
            as per your requirement.
          </p>
        </div>
        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Marriage Loan"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default MarriageLoanExplanation;