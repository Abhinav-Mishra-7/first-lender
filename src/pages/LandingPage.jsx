import { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import CTAButton from "../components/shared/Button";
import {
  Star,
  Users,
  Building,
  Wallet,
  CheckCircle,
  UserCheck,
  Clock,
  Database,
  FileText,
  Monitor,
  TrendingDown,
} from "lucide-react";
import LoanTabs from "../components/LoanTabs";
import Footer from "../components/shared/Footer";
import HeroSlider from "./LandingPageHero";
import PartnersSection from "../components/Banks";

// image import
import img1 from "../../public/23991565_6859168.jpg"
import img2 from "../../public/10783162_19198812.jpg"
import img3 from "../../public/423537009_f5ab20dc-dfca-4282-9802-08e9c81bd845.jpg"
import img4 from "../../public/20827214_6366975.jpg"



const heroSlides = [
  {
    title: "Looking for Business Loan?",
    description: "Fuel your business growth with instant business loans.Low interest rates, fast approval, and simple paperwork.Your trusted financial partner at every step.",
    buttonText: "Apply Now",
    image: "public/firstlender1.png",
  },
  {
    title: "Secured Loan",
    description: "With a secured loan, the borrower is eligible for a low-interest rate since the lender bears less risk by having property pledged as security.",
    buttonText: "Apply Now",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Apply for Personal Loan!",
    description: "A desirable personal loan at such a low interest rate is just a few clicks away. Don't miss out on this incredible opportunity.",
    buttonText: "Apply Now",
    image: "public/generated-image%20(1).png",
  },
];

const stats = [
  { label: "Trusted by our customers", value: "4.5/5", icon: <Star size={20} /> },
  { label: "Happy Customers", value: "5K+", icon: <Users size={20} /> },
  { label: "Loan Disbursed", value: "100 CR+", icon: <Wallet size={20} /> },
  { label: "Banks & NBFCs", value: "50+", icon: <Building size={20} /> },
];

const loanTypes = [
  { 
    title: "Business Loan", 
    image: img1,
    shadow: "0 15px 20px rgba(59, 130, 246, 0.3), 0 0px 80px rgba(59, 130, 246, 0.2)" ,
  },
  { 
    title: "Personal Loan", 
    image: img2 , 
    shadow: "0 15px 20px rgba(59, 130, 246, 0.3), 0 0px 80px rgba(59, 130, 246, 0.2)" ,
  },
  { 
    title: "Professional Loan", 
    image: img3,
    shadow: "0 15px 20px rgba(59, 130, 246, 0.3), 0 0px 80px rgba(59, 130, 246, 0.2)" ,
  },
  { 
    title: "Secured Loan", 
    image: img4,
    shadow: "0 15px 20px rgba(59, 130, 246, 0.3), 0 0px 80px rgba(59, 130, 246, 0.2)" ,
  }
];


const whyChoose = [
  {
    title: "Personalized Personal Loan",
    icon: <UserCheck size={32} color="#f8c740" />,
    bgColor: "bg-blue-50",
  },
  {
    title: "One-day Approval and Disbursal",
    icon: <Clock size={32} color="#f8c740" />,
    bgColor: "bg-orange-50",
  },
  {
    title: "Secured Database",
    icon: <Database size={32} color="#f8c740" />,
    bgColor: "bg-teal-50",
  },
  {
    title: "Minimal Documents",
    icon: <FileText size={32} color="#f8c740" />,
    bgColor: "bg-red-50",
  },
  {
    title: "User-Friendly Experience",
    icon: <Monitor size={32} color="#f8c740" />,
    bgColor: "bg-purple-50",
  },
  {
    title: "Lowest Interest Rate",
    icon: <TrendingDown size={32} color="#f8c740" />,
    bgColor: "bg-pink-50",
  },
];

const testimonials = [
  {
    name: "Ajay R",
    rating: 5,
    text: "Excellent service from all team members. FIRSTLender is my first choice for financial needs.",
  },
  {
    name: "Raunak Batra",
    rating: 5,
    text: "I was in need of INR 2 lakh. I took a Personal loan from FIRSTLender website.",
  },
  {
    name: "Vijay Kumar",
    rating: 5,
    text: "I wanted quick fund disbursal and applied for a personal loan from FIRSTLender.",
  },
  {
    name: "Monika",
    rating: 4.3,
    text: "I took FIRSTLender Business loan and my decision was perfectly alright for my business.",
  },
  {
    name: "Priya Sharma",
    rating: 4.7,
    text: "Fast approval and transparent process. Highly recommend FIRSTLender for any loan needs.",
  },
  {
    name: "Amit Patel",
    rating: 4.5,
    text: "Best interest rates in the market. The team was very professional throughout.",
  },
];

function LandingPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white">
      <Navbar/>

      <HeroSlider/>
      
      {/* Loan Tabs */}
      <div className="relative -mt-16 md:-mt-19 z-20 px-8">
        <LoanTabs />
      </div>

      {/* Stats Bar */}
      <section className="px-4 sm:px-5">
        <div className="max-w-5xl mx-auto bg-white border-3 sm:border-4 border-yellow-400 rounded-2xl sm:rounded-3xl p-4 sm:p-2 md:p-3 shadow-lg shadow-yellow-200/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-4 md:gap-5 lg:gap-6 wrap-normal">
            {/* First Stat Item - Special */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2 flex items-center sm:items-start gap-2 sm:gap-4 pb-6 sm:pb-0 sm:border-r-2 border-yellow-400">
              <div className="w-14 h-14 sm:w-12 sm:h-12 shrink-0 bg-yellow-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle size={26} className="text-black sm:w-8 sm:h-8" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Trusted by
                </p>
                <p className="text-sm sm:text-base font-bold text-black">
                  our customers
                </p>
              </div>
            </div>

            {/* Stat Items */}
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center py-3 sm:py-4 md:py-2 px-2">
                <p className="text-lg sm:text-md lg:text-xl font-bold text-black leading-tight text-center">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-xs text-gray-600 leading-snug text-center mt-2 sm:mt-3 h-6 sm:h-8 flex items-center justify-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Loans */}
      <section className="max-w-7xl mx-auto px-6 lg:px-5 shadow-sm py-5 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 shadow-sm py-15 rounded-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-black mb-12 pb-3 text-shadow-lg">
            Trending Loans & Offers
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-7">
            {loanTypes.map((loan, index) => (
              <div
                key={index}
                className="w-66 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <img
                  src={loan.image}
                  alt={loan.title}
                  className="w-full h-60 object-cover rounded-xl"
                   style={{ boxShadow: `${loan.shadow}`}}
                />
               
                <h3 className="text-lg font-bold text-black pt-2">{loan.title}</h3>
                <CTAButton to="/apply" variant="ternary" size="xs">Apply Now</CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <PartnersSection/>

      {/* Why Choose FIRSTLender */}
      <section className="px-5 py-10 md:py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-black text-shadow-lg">
            Why Choose <span className="text-yellow-400">FIRSTLENDER</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-6 md:p-8 border border-yellow-400 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-lg rounded-2xl"
              >
                {/* Top Left Corner */}
                {/* <div className="absolute top-0 left-0 w-6 h-6 bg-blue-100" /> */}
                {/* Bottom Right Corner */}
                {/* <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-100" /> */}

                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 ${item.bgColor} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                    {item.icon}
                  </div>
                  <p className="font-semibold text-black text-sm md:text-base leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-15 md:py-10 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl pb-4 font-bold text-black text-center mb-10 text-shadow-lg">
            What they say <span className="text-yellow-400">about us</span>
          </h2>
          <p className="text-black/70 text-center pb-12">FEEDBACKS FROM OUR GREATEST CLIENTS</p>
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-72 md:min-w-80 bg-white border-2 border-yellow-400 rounded-2xl p-6 shadow-lg"
                >
                  <div className="text-yellow-400 text-2xl mb-3">
                    {"★".repeat(Math.floor(testimonial.rating))}
                  </div>
                  <p className="text-xs text-gray-600 mb-3">
                    (Rating: {testimonial.rating})
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">
                    " {testimonial.text} "
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name[0]}
                    </div>
                    <p className="font-semibold text-black text-sm">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <Footer></Footer>

      {/* Tailwind CSS Animations */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;

