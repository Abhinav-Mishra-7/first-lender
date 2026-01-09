import { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import CTAButton from "../components/shared/Button";
import {
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Star,
  Users,
  Building,
  Briefcase,
  Wallet,
  CheckCircle,
  UserCheck,
  Clock,
  Database,
  FileText,
  Monitor,
  TrendingDown,
} from "lucide-react";
import { Link } from "react-router";
import LoanTabs from "../components/LoanTabs";


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
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Personal Loan",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Professional Loan",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Secure Loan",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
  },
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

      {/* Hero Slider */}
      <section className=" bg-linear-to-r from-[#f0db93] via-[#FEFCE8] to-yellow-100 px-10 py-20 mt-10 md:mt-23 lg:mt-15 overflow-hidden w-full"
      >
        <div className=" mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col md:gap-3 lg:gap-5 gap-2">
              <div className="h-42">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4 relative inline-block pb-6 ">
                  {heroSlides[activeSlide].title}
                  <div className="absolute bottom-0 left-0 h-1 w-3/5 bg-linear-to-r from-yellow-400 to-yellow-600" />
                </h1>
                <p className="text-sm md:text-md lg:text-base text-gray-700 leading-relaxed mt-5">
                  {heroSlides[activeSlide].description}
                </p>
              </div>

              <CTAButton to="/apply" variant="primary" size="sm">Apply Now</CTAButton>
            </div>

            {/* Right Image */}
            <div className="order-first md:order-last">
              <img
                src={heroSlides[activeSlide].image}
                alt="Hero"
                className="w-full h-40 md:h-45 lg:h-50 object-cover"
              />
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-3 justify-center mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSlide ? "bg-yellow-400" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="relative -mt-16 md:-mt-20 z-20 px-8">
        <LoanTabs />
      </div>

      {/* Stats Bar */}
      <section className="px-4 sm:px-5 my-10 md:my-20">
        <div className="max-w-5xl mx-auto bg-white border-3 sm:border-4 border-yellow-400 rounded-2xl sm:rounded-3xl p-4 sm:p-2 md:p-3 shadow-lg shadow-yellow-200/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-4 md:gap-5 lg:gap-6">
            {/* First Stat Item - Special */}
            <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 flex items-center sm:items-start gap-2 sm:gap-4 pb-6 sm:pb-0 sm:border-r-2 border-yellow-400">
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
      <section className="px-5 mb-20 md:mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-12 pb-2.5">
            Trending Loans & Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanTypes.map((loan, index) => (
              <div
                key={index}
                className="bg-white border-0 border-yellow-400 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-400/50 shadow-yellow-600/50 shadow-lg"
              >
                <img
                  src={loan.image}
                  alt={loan.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-bold text-black mb-4">{loan.title}</h3>
                <CTAButton to="/apply" variant="ternary" size="xs">Apply Now</CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Explanations */}      
      {/* <LoanExplanations />
       */}
      

      {/* Why Choose FIRSTLender */}
      <section className="px-5 py-10 md:py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-black text-shadow-lg">
            Why Choose FIRST<span className="text-yellow-400">LENDER</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-6 md:p-8 border-2 border-yellow-400 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-lg rounded-2xl"
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

      {/* Footer */}
      <footer className="bg-black text-white px-5 py-16 md:py-20 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-8">
            {/* Left Section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                FIRST<span className="text-yellow-400">Lender</span>
              </h3>
              <p className="text-sm text-yellow-400 mb-6">Bharose Ka Dusra Naam</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm md:text-base">
                  <Phone size={18} /> +91-82878 30373
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base">
                  <MessageCircle size={18} /> +91-81144 66003
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base">
                  <Mail size={18} /> info@firstlender.com
                </div>
              </div>
              <div>
                <p className="font-semibold mb-4">Follow Us On:</p>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center text-black cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-1"
                    >
                      <Icon size={20} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <h4 className="text-xl md:text-2xl font-semibold mb-4">Contact Information</h4>
              <p className="text-sm md:text-base leading-relaxed mb-4">
                FIRSTLender Fincorp Limited,
                <br />
                Second Floor, 17A/45, WEA, Karol Bagh,
                <br />
                New Delhi, Delhi 110005.
              </p>
              <p className="text-sm text-yellow-400">ISO 9001:2015 & 27001:2013 Certified</p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t border-yellow-400/30 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-xs md:text-sm">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "Privacy Policy",
                "Terms & Conditions",
                "Partner Login",
                "Contact Us",
                "Investor Relations",
              ].map((link) => (
                <Link
                  key={link}
                  to="/"
                  className="text-white opacity-90 transition-all duration-300 hover:text-yellow-400"
                >
                  {link}
                </Link>
              ))}
            </div>
            <p className="text-center text-xs md:text-sm opacity-70">
              © COPYRIGHT 2025 | ALL RIGHTS RESERVED | FIRSTLENDER FINCORP LTD.
            </p>
          </div>
        </div>
      </footer>

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