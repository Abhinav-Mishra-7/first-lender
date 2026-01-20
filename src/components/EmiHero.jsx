// components/EmiHero.jsx - Hero Section (Left Text + Right Calculator Image)
import { Calculator, TrendingUp, Percent, Clock, ShieldCheck  , IndianRupeeIcon , Calendar} from "lucide-react";
import CTAButton from "../components/shared/Button" ;

const miniStats = [
  { value: "Instant", label: "Results", size: "text-xs" },
  { value: "100%", label: "Accurate", size: "text-xs" },
  { value: "50K+", label: "Loans", size: "text-xs" }
];

const EmiHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f8df8e] via-[#fdfada] to-yellow-100 py-12 lg:py-14">
      {/* Background glows */}
      <div className="pointer-events-none absolute -right-24 -top-12 h-48 w-48 rounded-full bg-yellow-300/20 blur-xl" />
      <div className="pointer-events-none absolute -left-20 bottom-4 h-40 w-40 rounded-full bg-orange-200/20 blur-xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-[400px] lg:h-[350px]">
          
          {/* LEFT - EMI Text */}
          <div className="space-y-6 lg:space-y-14 pr-0 lg:pr-5">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-xs lg:text-sm font-semibold tracking-[0.2em] text-white shadow-md">
              EMI CALCULATOR
            </p>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-tight">
              Calculate Your <span className="text-yellow-500 drop-shadow-sm block lg:inline">EMI Instantly</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-700 max-w-md leading-relaxed">
              Know your exact monthly payments before applying. Transparent calculations powered by bank-approved formulas.
            </p>
            
            {/* CTA Buttons */}
            <CTAButton >Try Calculator</CTAButton>
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base flex-1 justify-center">
                <Calculator size={20} className="group-hover:scale-110 transition-all duration-300" />
                Try Calculator
              </button>
              <button className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base flex-1 justify-center">
                <TrendingUp size={20} className="group-hover:scale-110 transition-all duration-300" />
                Apply Now
              </button>
            </div> */}
          </div>

          {/* RIGHT - Calculator Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md rounded-2xl bg-gradient-to-br from-yellow-200/90 to-yellow-50 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-yellow-100/80 overflow-hidden h-[290px] lg:h-[380px]">
              
              {/* Inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/60 via-transparent to-white/40 rounded-2xl" />
              
              {/* Calculator Illustration */}
              <div className="relative z-10 flex items-center justify-center h-full p-6 lg:p-8">
                <div className="w-full h-64 lg:h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl border-4 border-white/50 p-6 flex flex-col items-center justify-between">
                  
                  {/* Calculator Screen */}
                  <div className="w-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl p-4 border-2 border-emerald-200/50 mb-4">
                    <div className="text-3xl font-black text-emerald-600 text-center mb-2">
                      ₹12,456
                    </div>
                    <div className="text-sm text-emerald-700 text-center font-bold uppercase tracking-wide">
                      Monthly EMI
                    </div>
                  </div>

                  {/* Slider Controls */}
                  <div className="space-y-3 w-full">
                    {/* Loan Amount Slider */}
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <IndianRupeeIcon size={14} className="text-yellow-500 font-bold" />
                      <span>₹5,00,000</span>
                      <div className="flex-1 h-1.5 bg-yellow-300 rounded-full">
                        <div className="w-3/4 h-1.5 bg-yellow-500 rounded-full" />
                      </div>
                    </div>

                    {/* Interest Slider */}
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <Percent size={14} className="text-blue-500" />
                      <span>12%</span>
                      <div className="flex-1 h-1.5 bg-blue-300 rounded-full">
                        <div className="w-2/5 h-1.5 bg-blue-500 rounded-full" />
                      </div>
                    </div>

                    {/* Tenure Slider */}
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <Calendar size={14} className="text-green-500" />
                      <span>5 Years</span>
                      <div className="flex-1 h-1.5 bg-green-300 rounded-full">
                        <div className="w-1/2 h-1.5 bg-green-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom buttons */}
                  <div className="flex gap-2 w-full mt-4">
                    <div className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-2 px-3 rounded-xl text-xs text-center shadow-md">
                      Reset
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-2 px-3 rounded-xl text-xs text-center shadow-md">
                      Calculate
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Stats at Bottom */}
              {/* <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 text-center text-xs z-20 text-black">
                {miniStats.map(({ value, label, size }, index) => (
                  <div 
                    key={index}
                    className="bg-yellow-50/95 backdrop-blur-sm border border-yellow-100 py-2.5 px-3 rounded-xl shadow-md hover:scale-105 transition-all duration-200"
                  >
                    <p className={`font-bold ${size} text-gray-900`}>
                      {value}
                    </p>
                    <p className="text-gray-600 font-medium">{label}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiHero;