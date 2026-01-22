import { DollarSign, Calendar, Percent , Clock } from "lucide-react";

const inputConfig = [
  {
    key: "loanAmount",
    label: "Loan Amount",
    min: 0,
    max: 10000000,
    step: 50000,
    suffix: "₹"
  },
  {
    key: "interestRate",
    label: "Rate of Interest",
    min: 0,
    max: 50,
    step: 0.1,
    suffix: "%"
  },
  {
    key: "tenure",
    label: "Tenure (In Months)",
    min: 12,
    max: 180,
    step: 12,
    suffix: "🕒"
  }
];

const EmiCalculatorSection = ({ formData, setFormData, results }) => {
  return (
    <section className="h-full w-full flex flex-col justify-center mb-13 bg-white px-3">

       <div className="max-w-6xl mx-auto w-full shadow-xl py-5 rounded-xl bg-linear-to-r  from-[#f8df8e] via-[#fefce0] to-yellow-100">
        <h1 className="text-gray-800 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-shadow-md">EMI <span className="text-yellow-400 text-center text-2xl md:text-3xl lg:text-4xl font-bold">Calculator</span></h1>
        <p className="text-gray-600 text-center font-medium">Calculate the interest and EMI before borrow</p>
        {/* ===== Calculator Layout ===== */}
        <div className="max-w-6xl mx-auto w-full px-6 lg:px-6 grid grid-cols-1 lg:grid-cols-2 flex-1 items-center pt-10">

            {/* ================= LEFT ================= */}
            <div className="flex flex-col gap-5 pb-7">
            {/* EMI Card */}
            <div className="inline-block bg-linear-to-r from-amber-400 to-amber-500 
                rounded-2xl px-6 py-4 shadow-xl w-fit">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-900/90">
                Monthly EMI
                </p>
                <p className="text-3xl font-extrabold text-slate-900">
                ₹{results.EMI.toLocaleString()}
                </p>
                <p className="text-xs font-medium text-slate-900/90">
                for {formData.tenure} months
                </p>
            </div>

            {/* Donut - Principal + Interest = 100% */}
            <div className="flex items-center gap-10 w-full">
            <div className="relative w-40 h-40 group p-2 bg-gradient-to-br from-yellow-50/80 to-orange-50/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
                
                {/* CORRECTED SVG Donut - Principal + Interest = 100% */}
                <svg viewBox="0 0 42 42" className="w-36 h-36 mx-auto -rotate-90 transition-all duration-700 block">
                
                {/* Background Ring */}
                <defs>
                    <radialGradient id="bgGrad" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#fefce8"/>
                    <stop offset="70%" stopColor="#fef3c7"/>
                    <stop offset="100%" stopColor="#fde68a"/>
                    </radialGradient>
                </defs>
                <circle
                    cx="21"
                    cy="21"
                    r="14.5"
                    fill="none"
                    stroke="url(#bgGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                />

                {/* PRINCIPAL - Gold (0% to principalPercent%) */}
                <defs>
                    <linearGradient id="principalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#facc15"/>
                    <stop offset="50%" stopColor="#eab308"/>
                    <stop offset="100%" stopColor="#ca8a04"/>
                    </linearGradient>
                </defs>
                <circle
                    cx="21"
                    cy="21"
                    r="14.5"
                    fill="none"
                    stroke="url(#principalGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${results.principalPercent * 1.8} ${100 * 1.8}`}
                    className="transition-all duration-1000 ease-out origin-center"
                />

                {/* INTEREST - Amber (principalPercent% to 100%) */}
                <defs>
                    <linearGradient id="interestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316"/>
                    <stop offset="50%" stopColor="#ea580c"/>
                    <stop offset="100%" stopColor="#c2410c"/>
                    </linearGradient>
                </defs>
                <circle
                    cx="21"
                    cy="21"
                    r="14.5"
                    fill="none"
                    stroke="url(#interestGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${(100-results.principalPercent) * 1.8} ${results.principalPercent * 1.8}`}
                    strokeDashoffset={`${results.principalPercent * 1.8}`}
                    className="transition-all duration-1000 ease-out origin-center"
                />
                </svg>

                {/* Round Center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-white/95 via-white/90 to-white/80 backdrop-blur-xl rounded-full shadow-2xl border-4 border-white/70 ring-2 ring-white/40 flex flex-col items-center justify-center text-center p-1">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider leading-tight">Total</p>
                <p className="text-xs font-semibold text-gray-900 leading-tight mt-0.5">
                    ₹{results.totalAmount.toLocaleString()}
                </p>
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-400 pointer-events-none z-20">
                <div className="bg-gradient-to-r from-slate-900/98 to-gray-900/98 backdrop-blur-xl text-white text-xs rounded-xl px-4 py-2 shadow-2xl border border-slate-700/50">
                    <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-md"/>
                    <span>Principal: ₹{formData.loanAmount.toLocaleString()} </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 shadow-md"/>
                    <span>Interest: ₹{results.totalInterest.toLocaleString()} </span>
                    </div>
                </div>
                </div>
            </div>

            {/* Legend with % */}
            <div className="space-y-4 text-sm min-w-[120px]">
                <div className="flex items-center gap-3 p-2.5 rounded-xl border-2 border-yellow-300/60 bg-gradient-to-r from-yellow-50 to-orange-50/50 shadow-lg">
                <div className="w-3.5 h-3.5 rounded-full shadow-md ring-1 ring-white/50" 
                    style={{background: 'linear-gradient(45deg, #facc15, #eab308)'}} />
                <div> 
                    <div className="font-semibold text-slate-800 text-sm">Principal</div>
                </div>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl border-2 border-orange-400/60 bg-gradient-to-r from-orange-50 to-yellow-50/50 shadow-lg">
                <div className="w-3.5 h-3.5 rounded-full shadow-md ring-1 ring-white/50" 
                    style={{background: 'linear-gradient(45deg, #f97316, #ea580c)'}} />
                <div>
                    <div className="font-semibold text-slate-800 text-sm">Interest</div>
                    
                </div>
                </div>
            </div>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-amber-100/60 rounded-xl p-4 shadow-lg">
                <p className="text-xs text-slate-500 font-semibold">Principal</p>
                <p className="text-lg font-bold text-slate-800">
                    ₹ {formData.loanAmount.toLocaleString()}
                </p>
                </div>
                <div className="bg-amber-100/60 rounded-xl p-4 shadow-lg">
                <p className="text-xs text-slate-500 font-semibold">Total Interest</p>
                <p className="text-lg font-bold text-slate-800">
                    ₹ {results.totalInterest.toLocaleString()}
                </p>
                </div>
            </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex flex-col gap-10">
                {inputConfig.map(({ key, label, min, max, step, suffix }) => (
                    <div key={key} className="space-y-3">

                    {/* Label + Value */}
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold text-slate-900">
                        {label}
                        </p>

                        {/* Input with suffix */}
                        {/* <div className="flex items-center bg-slate-100 rounded-xl overflow-hidden border border-slate-300">
                        <input
                            type="tel"
                            value={formData[key]}
                            onChange={(e) =>
                            setFormData({
                                ...formData,
                                [key]: Number(e.target.value)
                            })
                            }
                            className="w-40 px-3 py-2 bg-transparent text-lg font-medium 
                                    text-slate-900 focus:outline-none"
                        />
                        {suffix == "🕒" ? <div className="lg:px-3 lg:py-2 md:px-3 md:py-2 sm:pr-13 sm:pl-3 sm:py-2 px-3 py-2 bg-yellow-500 text-black text-sm lg:text-lg font-semibold">
                            {suffix}
                        </div> :
                            <div className="px-5 py-3 bg-yellow-500 text-black text-sm lg:text-lg font-semibold">
                            {suffix}
                        </div>
                        }
                        
                        </div> */}
                        {/* HYPER RESPONSIVE Input + Suffix Component */}
                        <div className="flex items-stretch bg-slate-100/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-300/70 shadow-sm hover:shadow-md transition-all duration-300">
                        {/* Input Field - Flexible Width */}
                        <input
                            type="tel"
                            value={formData[key]}
                            onChange={(e) =>
                            setFormData({
                                ...formData,
                                [key]: Number(e.target.value)
                            })
                            }
                            className="flex-1 min-w-0 px-4 py-2 bg-transparent text-base lg:text-lg font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all duration-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none max-w-45"
                            placeholder="0"
                        />
                        
                        {/* Responsive Suffix Button */}
                        <div className={`
                            flex items-center justify-center text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                            bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700
                            shadow-md hover:shadow-lg active:shadow-sm
                            transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                            px-3 sm:px-4 md:px-5 lg:px-6
                            py-2 sm:py-2.5 md:py-3
                            min-w-[50px] whitespace-nowrap
                            rounded-r-xl
                        `}>
                            {suffix}
                        </div>
                        </div>

                    </div>

                    {/* Slider */}
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={formData[key]}
                        onChange={(e) =>
                        setFormData({
                            ...formData,
                            [key]: Number(e.target.value)
                        })
                        }
                        className="
                        w-full h-2 rounded-full appearance-none cursor-pointer
                        bg-linear-to-r from-[#ffc628] via-[#ffdd1c] to-yellow-300/70
                        [&::-webkit-slider-thumb]:appearance-none
                        [&::-webkit-slider-thumb]:h-5
                        [&::-webkit-slider-thumb]:w-5
                        [&::-webkit-slider-thumb]:rounded
                        [&::-webkit-slider-thumb]:bg-gray-500
                        [&::-webkit-slider-thumb]:cursor-pointer
                        "
                    />
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

// const SliderBlock = ({ label, value, children }) => (
//   <div className="bg-amber-50 rounded-xl p-4">
//     <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
//       <span>{label}</span>
//       <span>{value}</span>
//     </div>
//     {children}
//   </div>
// );

export default EmiCalculatorSection;
