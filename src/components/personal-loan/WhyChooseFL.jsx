import img1 from "../../../public/4530235_19222.jpg";

function WhyChooseFL({loanType}) {
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
            Top Reasons to Choose FIRSTLENDER for Your {loanType}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            {loanType} are an easy and quick fix for your temporary fund
            requirements. Yet, the decision should be made with complete
            consideration. If you are exploring the options, cease the hunt now.
            At <span className="font-medium">FIRSTLENDER</span>,
            we are committed to offering a trusted, reliable, and authentic
            experience along with the best personal loan solutions in India.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            We are best known for offering:
          </p>

          <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
            <li>
              Loan comparison option to find the lowest interest rate from multiple options of Banks/NBFCs available in the market.
            </li>
            <li>
              Secure and easily accessible processes and transactions
            </li>
            <li>
              A wide variety of personal loan options
            </li>
            <li>
              Seamless and fully online process to urgently meet your needs
            </li>
            <li>
              Hassle-free online application process for maximum convenience
            </li>
            <li>
              Complete transparency throughout the loan process
            </li>
            <li>
              Personalised guidance at every step
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Why Choose My Mudra"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseFL;