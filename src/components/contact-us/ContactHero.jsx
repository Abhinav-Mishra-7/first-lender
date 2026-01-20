// ContactHero.jsx - Compact Hero (Same style as AboutHero)
import { Phone, MessageCircle, Clock } from "lucide-react";

const miniStats = [
  { value: "24 Hrs", label: "Response", size: "text-xs" },
  { value: "100%", label: "Secure", size: "text-xs" },
  { value: "10K+", label: "Queries", size: "text-xs" }
];

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#f8df8e] via-[#fdfada] to-yellow-100 py-12 lg:py-14">
      {/* Subtle top border */}
      {/* <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 opacity-80" /> */}
      
      {/* Background glows */}
      {/* <div className="pointer-events-none absolute -right-24 -top-12 h-48 w-48 rounded-full bg-yellow-300/20 blur-xl" />
      <div className="pointer-events-none absolute -left-20 bottom-4 h-40 w-40 rounded-full bg-orange-200/20 blur-xl" /> */}

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-[400px] lg:h-[350px]">
          {/* LEFT - Contact Text */}
          <div className="space-y-6 lg:space-y-14 pr-0 lg:pr-5">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-xs lg:text-sm font-semibold tracking-[0.2em] text-white shadow-md">
              CONTACT US
            </p>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-tight">
              Ready to <span className="text-yellow-500 drop-shadow-sm block lg:inline">Talk Loans?
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-700 max-w-md leading-relaxed">
              Connect with our loan experts. Get personalized solutions within <span className="font-bold text-yellow-600">24 hours</span>.
            </p>
            
            {/* Quick Contact Numbers */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="tel:+918287830373" className="group flex items-center gap-3 px-4 py-2.5 bg-linear-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm md:text-base">
                <Phone size={20} className="group-hover:scale-110 transition-all duration-300 ease-out" />
                +91-82878 30373
              </a>
              <a href="https://wa.me/918114466003" className="group flex items-center gap-3 px-4 py-2.5 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-sm md:text-base">
                <MessageCircle size={20} className="group-hover:scale-110 transition-all duration-300 ease-out" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT - Contact Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md rounded-2xl bg-linear-to-br from-yellow-200 to-yellow-50/90 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-yellow-100/80 overflow-hidden h-[290px] lg:h-[380px] ">
              {/* Inner linear */}
              <div className="absolute inset-0 bg-linear-to-t from-yellow-100/60 via-transparent to-white/40 rounded-2xl" />
              
              {/* Contact Illustration */}
              <div className="relative z-10 flex items-center justify-center h-60 p-6 lg:pt-22">
                <img
                  src="public/yellow-model-career-kit-arrangement.jpg"
                  alt="Contact our loan experts at FIRSTLENDER"
                  className="w-full h-60 lg:h-70 object-contain mx-auto drop-shadow-lg"
                />
              </div>

              {/* Mini Stats at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 text-center text-xs z-10 text-black px-5">
                    {miniStats.map(({ value, label, size }, index) => (
                        <div 
                        key={index}
                        className="bg-yellow-50/90 backdrop-blur-sm border border-yellow-100 py-2 px-2 rounded-md"
                        >
                        <p className={`font-bold ${size}`}>
                            {value}
                        </p>
                        <p className="text-gray-600">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;