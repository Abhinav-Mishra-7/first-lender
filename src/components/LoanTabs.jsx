import { useState, useRef } from "react";
import CTAButton from "../components/shared/Button";
import { CheckCircle, Home, User, Bike, Briefcase, Building2, Car ,ShieldCheck , CreditCard} from "lucide-react";
import SvgIcon from './SvgIcon';

// Images import 
import personal from "../assets/account-assets-audit-bank-bookkeeping-finance-concept.jpg"
import car from "../assets/saving-money-car-trade-car-cash.jpg"
import professional from "../assets/latin-confident-professionals-suit-standing-against-isolated-background.jpg"
import bussiness from "../assets/modern-equipped-computer-lab (1).jpg"
import pid from "../assets/woman-planting-vegetables-smiling-farm-with-equipments.jpg"
import lap from "../assets/table-desk-with-credit-approved-request.jpg"
import home from "../assets/ideas-real-estate-moving-houses-renting-real-estate.jpg"
import ctgmse from "../assets/happy-carpenter-fist-bumping-with-inspector-while-greeting-coronavirus-pandemic.jpg"

const loanData = [
  {
    id: 1,
    title: "Personal Loan",
    titleColor: "#003d7a",
    tagline: "Smart Advice. Fast Approval. Complete Peace of Mind.",
    svgName: "personalLoan" ,
    description:
      "At FIRST LENDER, we don't just help you apply for a Personal Loan — we guide you to the right one. As your trusted financial advisor, we compare top banks and NBFCs, explain every option clearly, and ensure you choose a loan that fits your needs, budget, and future plans.",
    items: [
      {
        title: "Expert Comparison",
        description: "We compare top banks and NBFCs to find the best rates and terms for your financial situation."
      },
      {
        title: "Stress-Free Process",
        description: "We make the entire process simple, stress-free, and tailored to your needs."
      },
      {
        title: "Guided Support",
        description: "Our role as advisors is to give you clarity, choice, and confidence for every financial decision."
      }
    ],
    image: personal,
    imagePosition: "left",
    bgColor: "#fff",
  },
  {
    id: 8,
    title: "Home Loan",
    titleColor: "#003d7a",
    tagline: "Expert Guidance. Better Rates. Your Dream Home Made Simple.",
    svgName: "housingLoan" ,
    description:
      "Buying a home is one of life's biggest decisions — and your loan should make it easier, not harder. At FIRST LENDER, we act as your trusted home loan advisor, helping you choose the right lender, the right interest rate, and the right EMI structure.",
    items: [
      {
        title: "Personalized Recommendations",
        description: "We understand your income, credit profile, and property type to recommend only the most suitable options."
      },
      {
        title: "Best Rates Comparison",
        description: "Get personalized quotes from leading banks & housing finance companies without visiting multiple branches."
      },
      {
        title: "Simplified Documentation",
        description: "Our advisors help you prepare documents, check eligibility, and coordinate with lenders for faster approval."
      }
    ],
    image: home,
    imagePosition: "right",
    bgColor: "#fff",
  },
  {
    id: 3,
    title: "Professional Loan",
    titleColor: "#003d7a",
    tagline: "Quick Approval. Easy EMI. Your Ride, Your Choice.",
    svgName: "professionalLoan" ,
    description:
      "Get quick financing for your two-wheeler with flexible EMI options and minimal documentation. We help you find the best rates from leading lenders.",
    items: [
      {
        title: "Fast Processing",
        description: "Quick approval and disbursement within 24-48 hours."
      },
      {
        title: "Flexible EMI",
        description: "Choose EMI tenure that suits your budget and financial capacity."
      },
      {
        title: "Easy Documentation",
        description: "Minimal documents required with hassle-free verification process."
      }
    ],
    image: professional,
    imagePosition: "right",
    bgColor: "#fff",
  },
  {
    id: 4,
    title: "Business Loan",
    titleColor: "#003d7a",
    tagline: "Smart Financing. Clear Guidance. Faster Growth.",
    svgName : "businessLoan" ,
    description:
      "At FIRST LENDER, we don't just help you get funds — we help you choose the right funds. As your dedicated business loan advisor, we simplify the lending maze and connect you to financing that fits your goals.",
    items: [
      {
        title: "Fast & Flexible Financing",
        description: "Access top banks and NBFCs without visiting multiple branches."
      },
      {
        title: "Tailored Solutions",
        description: "We compare interest rates, eligibility, terms, and processing times."
      },
      {
        title: "Dedicated Support",
        description: "Faster approvals and hassle-free disbursement with expert guidance."
      }
    ],
    image: bussiness,
    imagePosition: "left",
    bgColor: "#fff",
  },
  {
    id: 2,
    title: "Used Car Loan",
    titleColor: "#003d7a",
    tagline: "Supporting Agricultural Growth and Rural Development.",
    svgName : "usedCarLoan" ,
    description:
      "Specialized financing for rural entrepreneurs and farmers to support agricultural productivity and rural development initiatives.",
    items: [
      {
        title: "Agriculture Focus",
        description: "Designed specifically for agricultural and rural business needs."
      },
      {
        title: "Flexible Terms",
        description: "Extended repayment periods suitable for seasonal agricultural cycles."
      },
      {
        title: "Government Support",
        description: "Access to government-backed schemes and subsidized rates."
      }
    ],
    image: car,
    imagePosition: "right",
    bgColor: "#fff",
  },
  {
    id: 5,
    title: "PID",
    titleColor: "#003d7a",
    tagline: "Empowering Farmers with Reliable Financial Support.",
    svgName : "PID" , 
    description:
      "Dedicated financing solutions for farmers to invest in equipment, seeds, irrigation, and other agricultural needs.",
    items: [
      {
        title: "Low Interest Rates",
        description: "Special rates designed for farming community."
      },
      {
        title: "Seasonal Flexibility",
        description: "Payment schedules aligned with harvest seasons."
      },
      {
        title: "Equipment Financing",
        description: "Direct support for purchasing farming equipment and machinery."
      }
    ],
    image: pid,
    imagePosition: "left",
    bgColor: "#fff",
  },
  {
    id: 7,
    title: "LAP",
    titleColor: "#003d7a",
    tagline: "Unlock Your Property Value. Quick Liquidity Solutions.",
    svgName : 'loanAgainstProperty' ,
    description:
      "Leverage your property as collateral to get instant liquidity for various financial needs with competitive interest rates.",
    items: [
      {
        title: "High Loan Amount",
        description: "Borrow up to 60-70% of your property value."
      },
      {
        title: "Quick Approval",
        description: "Fast processing with minimal documentation required."
      },
      {
        title: "Flexible Usage",
        description: "Use funds for any purpose - business, education, medical, etc."
      }
    ],
    image: lap,
    imagePosition: "right",
    bgColor: "#fff",
  },
  {
    id: 9,
    title: "CGTMSE",
    titleColor: "#003d7a",
    tagline: "Empowering Farmers with Reliable Financial Support.",
    svgName : "CGTMSE" , 
    description:
      "Dedicated financing solutions for farmers to invest in equipment, seeds, irrigation, and other agricultural needs.",
    items: [
      {
        title: "Low Interest Rates",
        description: "Special rates designed for farming community."
      },
      {
        title: "Seasonal Flexibility",
        description: "Payment schedules aligned with harvest seasons."
      },
      {
        title: "Equipment Financing",
        description: "Direct support for purchasing farming equipment and machinery."
      }
    ],
    image: ctgmse,
    imagePosition: "left",
    bgColor: "#fff",
  },
  {
    id: 6,
    title: "MSME",
    titleColor: "#003d7a",
    tagline: "Empowering Farmers with Reliable Financial Support.",
    svgName : "CGTMSE" , 
    description:
      "Dedicated financing solutions for farmers to invest in equipment, seeds, irrigation, and other agricultural needs.",
    items: [
      {
        title: "Low Interest Rates",
        description: "Special rates designed for farming community."
      },
      {
        title: "Seasonal Flexibility",
        description: "Payment schedules aligned with harvest seasons."
      },
      {
        title: "Equipment Financing",
        description: "Direct support for purchasing farming equipment and machinery."
      }
    ],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80",
    imagePosition: "left",
    bgColor: "#fff",
  },
  {
    id: 10,
    title: "CC LIMIT",
    titleColor: "#003d7a",
    tagline: "Empowering Farmers with Reliable Financial Support.",
    svgName : "CGTMSE" , 
    description:
      "Dedicated financing solutions for farmers to invest in equipment, seeds, irrigation, and other agricultural needs.",
    items: [
      {
        title: "Low Interest Rates",
        description: "Special rates designed for farming community."
      },
      {
        title: "Seasonal Flexibility",
        description: "Payment schedules aligned with harvest seasons."
      },
      {
        title: "Equipment Financing",
        description: "Direct support for purchasing farming equipment and machinery."
      }
    ],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80",
    imagePosition: "left",
    bgColor: "#fff",
  },
];

const tabConfig = [
  { id: 1, label: "Personal Loan", icon: User },
  { id: 2, label: "Used Car Loan", icon: Car },
  { id: 3, label: "Professional Loan ", icon: Bike },
  { id: 4, label: "Business Loan", icon: Briefcase },
  { id: 5, label: "PID", icon: CreditCard },
  { id: 6, label: "MSME", icon: CreditCard },
  { id: 7, label: "LAP", icon: Building2 },
  { id: 8, label: "Home Loan", icon: Home },
  { id: 9, label: "CGTMSE", icon: ShieldCheck },
  { id: 10, label: "CC LIMIT", icon: CreditCard },
];

function LoanTabs() {
  const [activeTab, setActiveTab] = useState(2); // Default to Personal Loan (id: 2)
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const activeLoan = loanData.find(loan => loan.id === activeTab) || loanData[1];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
      // Check scroll position after scroll
      setTimeout(handleScroll, 350);
    }
  };

  return (
    <section className="mb-20 shadow-xl">
      {/* TAB NAVIGATION - Horizontal Slider */}
      <div className=" w-full relative lg:mt-3.25 md:mt-4 mt-16" style={{ backgroundColor: activeLoan.bgColor }}>
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {tabConfig.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex flex-col items-center justify-between gap-2 px-4 md:px-1 py-5.5
                  transition-all duration-300 cursor-pointer relative
                  border-b-4 border-b-transparent whitespace-nowrap shrink-0
                  min-w-[140px] md:min-w-[150px] border-r border-r-gray-300
                  ${isActive 
                    ? 'bg-white border-b-yellow-400 -translate-y-2 shadow-lg' 
                    : 'bg-[#fff0be] hover:bg-yellow-100 hover:-translate-y-1 shadow-lg'
                  }
                `}
              >
                <Icon 
                  size={28} 
                  className={isActive ? 'text-yellow-500' : 'text-gray-600'} 
                />
                <span className={`text-xs md:text-sm font-semibold text-center transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-gray-700'
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* LOAN DETAILS SECTION */}
    <div style={{ backgroundColor: activeLoan.bgColor }} className="px-4 py-10 md:py-8 transition-colors duration-300">
    <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* Content Section - LEFT */}
        <div className="flex flex-col">           
            {/* Title with SVG Icon */}
            <div className="flex items-center gap-4 mb-4">
              <SvgIcon name={activeLoan.svgName} />
              <h3
                style={{ color: activeLoan.titleColor }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold relative pb-4 w-fit text-shadow-sm"
              >
                {activeLoan.title}
                <div className="absolute bottom-0 left-0 h-1.5 w-full shadow-md bg-linear-to-r from-yellow-500 to-yellow-600" />
              </h3>
            </div>

            <p className="text-sm md:text-md text-black font-bold mt-0 mb-5">
            {activeLoan.tagline}
            </p>

            <p className="text-sm md:text-md text-gray-700 leading-7 mb-6">
            {activeLoan.description}
            </p>

            <div className="space-y-4 mb-8">
            {activeLoan.items.map((item, index) => (
                <div key={index} className="flex gap-3">
                <div className="shrink-0 mt-0.5">
                    <div
                    className="flex items-center justify-center h-5 w-5 rounded-full bg-green-600"
                    >
                    <CheckCircle size={14} className="text-white" />
                    </div>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-[#003d7a] mb-0.5">
                    {item.title}
                    </h4>
                    <p className="text-xs md:text-xs font-semibold text-gray-600 leading-relaxed">
                    {item.description}
                    </p>
                </div>
                </div>
            ))}
            </div>

            <div className="flex gap-4">
            <CTAButton to="/apply" variant="primary" size="md">
                Apply Now
            </CTAButton>
            <button className="px-6 py-2 border-2 border-gray-400 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                Know More
            </button>
            </div>
        </div>

        {/* Image Section - RIGHT */}
        <div className="mt-14">
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
                src={activeLoan.image}
                alt={activeLoan.title}
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                loading="lazy"
            />
            {/* <video
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
              poster="/thumbnail.jpg"
            >
              <source src={video1} type="video/mp4" />
            </video> */}
            {/* <PersonalLoanAnimation/> */}
            </div>
        </div>

        </div>
    </div>
    </div>



      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  
          scrollbar-width: none; 
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; 
        }
      `}</style>
    </section>
  );
}

export default LoanTabs;