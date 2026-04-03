// ContactHero.jsx - Updated to match AboutHero styling exactly
import { Phone, MessageCircle } from "lucide-react";
import img1 from "../../assets/yellow-model-career-kit-arrangement.jpg"

const miniStats = [
  { value: "24 Hrs", label: "Response", size: "text-xs" },
  { value: "100%", label: "Secure", size: "text-xs" },
  { value: "10K+", label: "Queries", size: "text-xs" }
];

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#f8df8e] via-[#fdfada] to-yellow-100 md:mt-3 lg:mt-5">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-8 md:py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT CONTENT - Exact AboutHero styling */}
          <div className="space-y-5 md:space-y-6 lg:space-y-8">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-black text-[11px] md:text-xs font-semibold tracking-[0.1rem] text-white shadow-lg">
              CONTACT WITH<span className="text-yellow-500">US</span>
            </p>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-tight text-shadow-md">
              Ready to <span className="text-yellow-500 ml-1">Talk Loans?</span>
            </h1>
            
            {/* Paragraph 1 */}
            <p className="text-md md:text-md lg:text-lg text-gray-700 max-w-xl leading-relaxed font-medium">
              Connect with our loan experts. Get personalized solutions within <span className="font-bold text-yellow-600">24 hours</span>.
            </p>
            
            {/* Paragraph 2 */}
            <p className="text-sm md:text-md lg:text-base text-gray-600 max-w-xl leading-relaxed">
              From MSME working capital loans to personal loans and credit card limit enhancements, our specialists guide you through the entire process with zero hassle.
            </p>
            
            {/* Paragraph 3 */}
            <p className="text-sm md:text-md lg:text-base text-gray-600 max-w-xl leading-relaxed">
              Whether you're a small business owner needing CGTMSE-backed funding or a salaried professional seeking quick personal finance, we've helped <span className="font-semibold text-yellow-600">10K+</span> customers succeed.
            </p>
            
            {/* Quick Contact Numbers - Adjusted spacing */}
            {/* <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="tel:+918287830373" className="group flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm">
                <Phone size={18} className="group-hover:scale-110 transition-all duration-300" />
                +91-82878 30373
              </a>
              <a href="https://wa.me/918114466003" className="group flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm">
                <MessageCircle size={18} className="group-hover:scale-110 transition-all duration-300" />
                WhatsApp
              </a>
            </div> */}
          </div>

          {/* RIGHT ILLUSTRATION AREA - Exact AboutHero styling */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg rounded-3xl bg-gradient-to-br from-yellow-200 to-yellow-50/90 shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-yellow-100/80 overflow-hidden">
              {/* soft inner gradient - Exact match */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/70 via-transparent to-white/60" />
              
              {/* main illustration */}
              <div className="relative p-6 md:p-5 lg:p-8">
                <img
                  src={img1}
                  alt="Contact our loan experts at FIRSTLENDER"
                  className="w-full h-52 md:h-64 lg:object-cover md:object-contain mx-auto drop-shadow-md"
                  loading="lazy"
                />
                
                {/* mini stats strip at bottom - Exact AboutHero styling */}
                <div className="mt-4 md:-mt-2 lg:mt-4 grid grid-cols-3 gap-3 text-center text-[11px] md:text-xs">
                  {miniStats.map(({ value, label }, index) => (
                    <div key={index} className="rounded-2xl bg-yellow-50 border border-yellow-100 py-3">
                      <p className="text-base md:text-lg font-bold text-gray-900">{value}</p>
                      <p className="text-gray-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* subtle shadow oval under card - Exact match */}
            <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-40 md:w-56 rounded-full bg-black/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
