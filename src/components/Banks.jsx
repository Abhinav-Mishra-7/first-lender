import LT from "../assets/l&t.png"
import bajaj from "../assets/bajaj-finance6835.jpg"
import Aditya from "../assets/adityaBirlaGroupCom.png"
import godrej from "../assets/Godrej.webp"
import poonwalla from "../assets/poonawalla.webp"
import unity from "../assets/unity-bank-nj.png"
import Ugro from "../assets/logo-ugrocapital21-1681208402.jpg"
import piramal from "../assets/piramal.webp"
import IDFC from "../assets/idfc-first-credit-card-dm-1708492863.png"


const PartnersSection = () => {
  const banksNBFCs = [
    // Top row
    { name: 'L&T', src: LT },
    { name: 'Bajaj', src: bajaj },
    { name: 'Aditya Birla', src: Aditya},
    { name: 'Godrej', src: godrej },
    
    // Bottom row  
    { name: 'Poonawalla', src: poonwalla },
    { name: 'Unity Bank', src: unity },
    { name: 'Ugro Capital', src: Ugro },
    { name: 'Piramal', src: piramal },

    // Bottom last row
    { name: 'IDFC', src: IDFC },
  ];

  return (
    <section className="md:py-20 bg-white px-5 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-5 shadow-sm py-15 rounded-2xl">
        
        {/* Header - Exact match */}
        <div className="text-center mb-16 md:mb-20 max-w-6xl mx-auto text-shadow-sm">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 pb-5">
            FIRSTLENDER has a Strategic Association with
            {/* <br className="hidden md:block" /> */}
            <span className="block md:inline text-yellow-500">  Top Banks &amp; NBFCs</span>
          </h2>
          
          <div className="bg-linear-to-r from-[#ffc400]  to-yellow-200 text-gray-700 px-8 py-4 md:py-6 rounded-2xl shadow-xl mx-auto max-w-3xl">
            <p className="text-lg md:text-xl font-semibold text-center leading-relaxed">
              We are bridging the gap between you and top financial institutions
            </p>
          </div>
        </div>

        {/* Partners Grid - Exact 4x3 layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-5 lg:gap-5 max-w-6xl mx-auto px-3 md:px-10">
          {banksNBFCs.map(({ name, src }, index) => (
            <div 
              key={name}
              className="group relative bg-white border border-gray-100 rounded-2xl p-0 md:p-1 lg:p-2 shadow-xl hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center h-24 md:h-25 lg:h-25"
            >
              {/* Hover glow effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" /> */}
              
              {/* Logo container */}
              <div className="relative z-10 w-full h-16 md:h-20 lg:h-25 flex items-center justify-center">
                <img
                  src={src}
                  alt={`${name} Logo`}
                  width={250}
                  height={100}
                  className="max-h-12 md:max-h-16 lg:max-h-22 object-contain transition-all duration-500 rounded-2xl"
                  priority={index < 4}
                />
              </div>
              
              {/* Hover name label */}
              {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
                {name}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
