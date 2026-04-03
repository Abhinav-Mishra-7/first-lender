import rightImage from "../../assets/flat-lay-business-concept.jpg"

const HowEmiWorks = () => {
  return (
    <section className="relative mb-20 px-3 h-full w-full">
      <div className="relative max-w-6xl mx-auto w-full px-6 lg:px-10 py-16 md:py-12 lg:py-10 mt-5 bg-gradient-to-r from-[#f8df8e] via-[#fefce0] to-yellow-100 rounded-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">          
          {/* LEFT CONTENT */}
          <div className="space-y-6 md:space-y-6 lg:space-y-6">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-black text-[11px] md:text-xs font-semibold tracking-[0.1rem] text-white shadow-lg">
              HOW <span className="text-yellow-500">EMI</span> WORKS?
            </p>

            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-800 leading-tight py-2 bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text">
              How Does EMI <span className="text-yellow-500 font-bold">Calculator Online Work?</span>
            </h1>

            <div className="text-sm md:text-base lg:text-lg text-gray-800 max-w-xl leading-relaxed font-medium space-y-3">
              
              {/* EMI Formula Card */}
              <div className="backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-yellow-100/50 shadow-lg">
                <span className="text-base font-semibold">EMI is calculated with a very simple formula:</span>
                <div className="text-xs md:text-sm text-gray-800 font-medium mb-2 flex items-center gap-2">
                  <span>EMI = P × r × (1 + r) <sup>n</sup> / ((1 + r) <sup>n</sup> - 1)</span>
                </div>
                <div className="text-xs text-gray-600 flex flex-col gap-1">
                  <div><span className="font-semibold">P :</span> Loan amount or principal</div>
                  <div><span className="font-semibold">r :</span> Monthly interest rate, which is Annual Rate ÷ 12</div>
                  <div className="md:col-span-2"><span className="font-semibold">n :</span> Loan tenure in months</div>
                </div>
              </div>

              <div className="pt-4 space-y-2 ml-2">
                <p className="font-semibold text-gray-700 text-sm">Assume that you have borrowed ₹5,00,000 at an annual interest rate of 12% for 3 years:</p>
                <ul className="space-y-2 pl-1 text-sm mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0" />
                    <span>Loan Amount (P): ₹5,00,000</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0" />
                    <span>Interest Rate (r): 12% yearly = 1% monthly</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0" />
                    <span>Loan Period (n): 36 months</span>
                  </li>
                </ul>
                <p className="bg-amber-100/60 rounded-xl p-4 shadow-lg inline mt-3 text-sm font-semibold">EMI will be about ₹15,684</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE - Perfect Card */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg rounded-3xl bg-linear-to-br from-yellow-200 to-yellow-50/90 shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-yellow-100/80 overflow-hidden h-110">
              
              {/* Soft inner gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-yellow-100/70 via-transparent to-white/60" />

              {/* EMI Formula Visual */}
              <div className="relative p-6 md:p-8 flex items-center justify-center">
                <img
                  src={rightImage}
                  alt="EMI calculation formula visualization"
                  className="w-full h-96 md:h-94 lg:h-93 object-cover md:object-cover lg:object-cover rounded-2xl shadow-2xl mx-auto drop-shadow-lg"
                />
              </div>

              {/* Subtle shadow oval */}
              <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-40 md:w-56 rounded-full bg-black/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowEmiWorks;