// components/EmiHero.jsx - EXACTLY Like AboutHero Responsiveness
import { Calculator, IndianRupeeIcon, Percent, Calendar } from "lucide-react";
import CTAButton from "../shared/Button";

const EmiHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#f8df8e] via-[#fefce0] to-yellow-100 mb-8">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-8 md:py-6 lg:py-8 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT - EXACTLY Like AboutHero */}
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-black text-[11px] md:text-xs font-semibold tracking-[0.1rem] text-white shadow-lg">
              EMI <span className="text-yellow-500">CALCULATOR</span>
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-tight text-shadow-md">
              Calculate <span className="text-yellow-500 ml-1">EMI Instantly</span>
            </h1>

            <p className="text-md md:text-md lg:text-lg text-gray-800 max-w-xl leading-relaxed font-medium">
              Know your exact monthly payments before applying. Transparent calculations powered by bank-approved formulas from top lenders.
            </p>

            <p className="text-sm md:text-sm lg:text-md text-gray-700 max-w-lg">
              Instant eligibility, minimal paperwork, best rates from 50+ banks &amp; NBFCs.
            </p>

            <CTAButton variant="primary" size="sm">Try Calculator</CTAButton>
          </div>

          {/* RIGHT ILLUSTRATION - EXACTLY Like AboutHero */}
          <div className="relative">
            {/* Card background - PERFECT match */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg h-76 md:h-93 lg:h-93 rounded-3xl bg-linear-to-br from-yellow-200 to-yellow-50/90 shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-yellow-100/80 overflow-hidden">
              
              {/* Soft inner linear - PERFECT match */}
              <div className="absolute inset-0 bg-linear-to-t from-yellow-100/70 via-transparent to-white/60" />

              {/* Calculator Illustration */}
              <div className="relative p-6 md:p-8">
                <div className="w-full h-64 md:h-78 bg-linear-to-br from-slate-100 via-white to-slate-200 rounded-3xl shadow-2xl border-4 border-white/60 p-4 md:p-6 lg:p-8 flex flex-col items-center justify-between">
                  
                  {/* Calculator Screen */}
                  <div className="w-full bg-linear-to-r from-yellow-400/50 to-yellow-100/10 rounded-xl p-3 md:p-4 border-1 border-yellow-100/60 mb-3 md:mb-4 shadow-lg">
                    <div className="text-2xl md:text-3xl font-black text-yellow-600 text-center mb-1 md:mb-2 leading-tight">
                      ₹12,456
                    </div>
                    <div className="text-xs md:text-sm font-bold text-gray-700 uppercase tracking-wide text-center">
                      Monthly EMI
                    </div>
                  </div>

                  {/* Controls - Compact & Responsive */}
                  <div className="space-y-2.5 w-full px-1 md:px-2">
                    {/* Loan Amount */}
                    <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-700">
                      <IndianRupeeIcon size={12} className="text-yellow-500 md:w-4 md:h-4" />
                      <span className="min-w-[48px] md:min-w-[55px] truncate">5L</span>
                      <div className="flex-1 h-1.5 md:h-2 bg-linear-to-r from-yellow-300/70 to-orange-300/70 rounded-full shadow-inner">
                        <div className="h-full bg-linear-to-r from-yellow-500 to-orange-500 rounded-full shadow-sm w-[70%]" />
                      </div>
                    </div>

                    {/* Interest */}
                    <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-700">
                      <Percent size={12} className="text-blue-500 md:w-4 md:h-4" />
                      <span className="min-w-[35px]">12%</span>
                      <div className="flex-1 h-1.5 md:h-2 bg-linear-to-r from-blue-300/70 to-indigo-300/70 rounded-full shadow-inner">
                        <div className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm w-[40%]" />
                      </div>
                    </div>

                    {/* Tenure */}
                    <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-700">
                      <Calendar size={12} className="text-emerald-500 md:w-4 md:h-4" />
                      <span className="min-w-[45px]">5 Years</span>
                      <div className="flex-1 h-1.5 md:h-2 bg-linear-to-r from-emerald-300/70 to-green-300/70 rounded-full shadow-inner">
                        <div className="h-full bg-linear-to-r from-emerald-500 to-green-500 rounded-full shadow-sm w-[50%]" />
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-1.5 md:gap-2 w-full mt-2 md:mt-3 px-1 md:px-2">
                    <div className="flex-1 bg-linear-to-r from-yellow-300 to-yellow-600 text-white font-semibold py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm text-center shadow-md hover:shadow-lg transition-all">
                      Reset
                    </div>
                    <div className="flex-1 bg-linear-to-r from-yellow-300 to-yellow-600 text-white font-semibold py-1.5 md:py-2 px-2 md:px-3 rounded-lg text-xs md:text-sm text-center shadow-md hover:shadow-lg transition-all">
                      Calculate
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini stats - Commented out like AboutHero */}
            </div>

            {/* Subtle shadow oval - EXACTLY like AboutHero */}
            <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-40 md:w-56 rounded-full bg-black/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiHero;
