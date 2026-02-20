function CarRefinancingBenefits({ productName = "Car Refinancing" }) {
  const benefits = [
    {
      icon: "📉",
      title: "Competitive Interest Rates",
      desc:
        "Avail interest rates as low as 10% p.a., making it a cost‑effective way to access funds.",
      gradient: "from-blue-50 to-indigo-50",
      border: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      shadow: "hover:shadow-blue-200",
    },
    {
      icon: "🗓️",
      title: "Flexible Repayments",
      desc:
        "Choose the tenure that fits your budget and financial needs.",
      gradient: "from-emerald-50 to-teal-50",
      border: "border-emerald-200",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      shadow: "hover:shadow-emerald-200",
    },
    {
      icon: "🚗",
      title: "Up to 85% Financing",
      desc:
        "Get loan of up to 85% of your car’s value, making it a cost‑effective way to access funds.",
      gradient: "from-purple-50 to-pink-50",
      border: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      shadow: "hover:shadow-purple-200",
    },
    {
      icon: "📄",
      title: "Minimal Paperwork",
      desc:
        "Our car financing process comes with minimal paperwork, making it a hassle‑free experience.",
      gradient: "from-orange-50 to-yellow-50",
      border: "border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      shadow: "hover:shadow-orange-200",
    },
    {
      icon: "⚡",
      title: "Quick Application",
      desc:
        "Experience quick and convenient online application process, making it easier to access funds faster.",
      gradient: "from-indigo-50 to-blue-50",
      border: "border-indigo-200",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      shadow: "hover:shadow-indigo-200",
    },
    {
      icon: "💸",
      title: "Faster Approvals & Disbursals",
      desc:
        "Get the money you need quickly. Our approvals and disbursals are quick and convenient.",
      gradient: "from-teal-50 to-cyan-50",
      border: "border-teal-200",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      shadow: "hover:shadow-teal-200",
    },
  ];

  return (
    <div className="w-full bg-slate-50 py-10 px-3">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 p-6 md:p-8 transition-all duration-300">
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 ">
          {productName} Features & Benefits
        </h2>

        {/* SUBTITLE */}
        <p className="text-slate-600 mt-2 mb-8 text-sm">
          Here are the features and benefits of loan against car:
        </p>

        {/* BENEFITS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`group bg-linear-to-br ${b.gradient} p-6 rounded-2xl border ${b.border} hover:shadow-lg ${b.shadow} transition-all duration-300 text-center`}
            >
              <div
                className={`w-14 h-14 ${b.iconBg} rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <span className={`text-xl ${b.iconColor}`}>{b.icon}</span>
              </div>
              <h4 className="font-semibold text-slate-900 text-base mb-2">
                {b.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarRefinancingBenefits;