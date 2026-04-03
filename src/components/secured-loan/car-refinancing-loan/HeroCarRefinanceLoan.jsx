import flag from "../../../assets/flag.webp";

const HeroCarRefinancing = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#f8df8e] via-[#fdfada] to-yellow-100 mt-22 md:mt-25.5 mb-0">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-8 md:py-7 lg:py-7 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT - Car Refinancing Specific */}
          <div className="space-y-4 md:space-y-4 lg:space-y-5">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-black text-[11px] md:text-xs font-semibold tracking-[0.1rem] text-white shadow-lg">
              Welcome To
              <span className="text-yellow-400"> FIRSTLENDER</span>
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
              Car Loan
              <span className="block md:inline"> Refinancing</span>
            </h1>

            <p className="mt-2 text-slate-700 text-base md:text-sm max-w-xl">
              Lower your existing car loan EMIs instantly. Get better interest rates, longer tenure options, quick approval, and instant cashback on balance transfer.
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Feature text="Lower Interest Rates" />
              <Feature text="Reduce EMIs" />
              <Feature text="Quick Balance Transfer" />
              <Feature text="Instant Cashback" />
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-4xl border-x-4 border-yellow-400 shadow-xl p-6 md:p-4">

              <h3 className="text-base font-medium text-slate-900 text-center">
                Check Best
                <span className="text-yellow-500"> Car Refinance </span>
                Offers
              </h3>

              {/* INPUT */}
              <div className="mt-1.5 flex text-sm items-center gap-2 rounded-lg lg:px-12 lg:py-1 md:px-5 px-10">
                <img src={flag} alt="indian flag" className="h-4" loading="lazy"/>
                <span className="text-slate-600 font-medium">+91</span>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-50 outline-none text-slate-700 border-2 border-gray-400 rounded-sm px-4 py-1 font-medium required"
                />
              </div>

              {/* BUTTON */}
              <div className="w-full flex items-center justify-center lg:pl-5 md:pl-4 pl-4">
                <button className="mt-4 w-65 text-sm bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-full font-medium transition cursor-pointer">
                  Continue
                </button>
              </div>

              {/* CONSENT */}
              <div className="flex justify-center items-center">
                <input type="checkbox" className="bg-black relative bottom-0.5 cursor-pointer" />
                <p className="text-xs text-slate-600 text-center leading-relaxed mt-4 ml-1">
                  By submitting, you agree to our
                  <span className="text-blue-700 cursor-pointer"> Privacy Policy</span>,
                  <span className="text-blue-700 cursor-pointer"> Terms & </span>
                  <p>
                    Conditions and{" "}
                    <span className="text-blue-700 cursor-pointer">
                      Credit Score Policy <span className="text-black">.</span>
                    </span>
                  </p>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Feature = ({ text }) => (
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 p-2 rounded-full font-bold bg-green-600 flex items-center justify-center text-white text-[10px]">
      ✓
    </div>
    <span className="text-slate-700 text-xs">
      {text}
    </span>
  </div>
);

export default HeroCarRefinancing;