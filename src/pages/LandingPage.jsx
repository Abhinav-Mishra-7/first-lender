import { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import LoanExplanations from "../components/LoanExplanations";
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
  // {
  //   title: "Secure Loan",
  //   description: "With a secured loan, the borrower is eligible for a low-interest rate since the lender bears less risk by having property pledged as security.",
  //   buttonText: "Apply Now",
  //   image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80",
  // },
  // {
  //   title: "Apply for Personal Loan!",
  //   description: "A desirable personal loan at such a low interest rate is just a few clicks away. Don't miss out on this incredible opportunity.",
  //   buttonText: "Apply Now",
  //   image: "public/generated-image%20(1).png",
  // },
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
      <section className=" bg-linear-to-r from-[#f0db93] via-[#FEFCE8] to-yellow-100 px-10 py-20  md:mt-23 overflow-hidden w-full"
      // style={{
      //   backgroundImage: `url(${heroSlides[activeSlide].image})`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat'
      // }}
      >

        <div className=" mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="h-42">
                <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4 relative inline-block pb-6 ">
                  {heroSlides[activeSlide].title}
                  <div className="absolute bottom-0 left-0 h-1 w-3/5 bg-linear-to-r from-yellow-400 to-yellow-600" />
                </h1>
                <p className="text-sm md:text-md lg:text-base text-gray-700 leading-relaxed mt-5">
                  {heroSlides[activeSlide].description}
                </p>
              </div>

              <CTAButton to="/apply" variant="primary" size="md">Apply Now</CTAButton>
            </div>

            {/* Right Image */}
            <div className="order-first md:order-last">
              <img
                src={heroSlides[activeSlide].image}
                alt="Hero"
                className="w-full h-35 md:h-40 lg:h-50 object-cover mix-blend-screen"
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
                  <Phone size={18} /> +91-7291919151
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base">
                  <MessageCircle size={18} /> +91-7291919151
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


// import { useEffect, useState } from "react";
// import Navbar from "../components/shared/Navbar";
// import LoanExplanations from "../components/LoanExplanations";
// import {
//   Phone,
//   Mail,
//   MessageCircle,
//   Facebook,
//   Instagram,
//   Twitter,
//   Linkedin,
//   Youtube,
//   Star,
//   Users,
//   Building,
//   Briefcase,
//   Wallet,
//   CheckCircle,
//   UserCheck,
//   Clock,
//   Database,
//   FileText,
//   Monitor,
//   TrendingDown,
// } from "lucide-react";
// import { Link } from "react-router";

// const heroSlides = [
//   {
//     title: "Looking for Business Loan?",
//     description:
//       "What are you waiting for? Grow your business to the next level by applying for a business loan on FIRSTLender.",
//     buttonText: "Apply Now",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Secure Loan",
//     description:
//       "With a secured loan, the borrower is eligible for a low-interest rate since the lender bears less risk by having property pledged as security.",
//     buttonText: "Apply Now",
//     image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Apply for Personal Loan!",
//     description:
//       "A desirable personal loan at such a low interest rate is just a few clicks away. Don't miss out on this incredible opportunity.",
//     buttonText: "Apply Now",
//     image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const stats = [
//   { label: "Trusted by our customers", value: "4.5/5", icon: <Star size={20} /> },
//   { label: "Happy Customers", value: "10K+", icon: <Users size={20} /> },
//   { label: "Loan Disbursed", value: "10000 CR+", icon: <Wallet size={20} /> },
//   { label: "Banks & NBFCs", value: "90+", icon: <Building size={20} /> },
//   { label: "Branches/Franchises", value: "155", icon: <Briefcase size={20} /> },
// ];

// const loanTypes = [
//   {
//     title: "Business Loan",
//     image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Personal Loan",
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Professional Loan",
//     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Secure Loan",
//     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
//   },
// ];

// const whyChoose = [
//   {
//     title: "Personalized Personal Loan",
//     icon: <UserCheck size={32} color="#f8c740" />,
//     bgColor: "#f0f9ff",
//   },
//   {
//     title: "One-day Approval and Disbursal",
//     icon: <Clock size={32} color="#f8c740" />,
//     bgColor: "#fff7ed",
//   },
//   {
//     title: "Secured Database",
//     icon: <Database size={32} color="#f8c740" />,
//     bgColor: "#f0fdfa",
//   },
//   {
//     title: "Minimal Documents",
//     icon: <FileText size={32} color="#f8c740" />,
//     bgColor: "#fef2f2",
//   },
//   {
//     title: "User-Friendly Experience",
//     icon: <Monitor size={32} color="#f8c740" />,
//     bgColor: "#faf5ff",
//   },
//   {
//     title: "Lowest Interest Rate",
//     icon: <TrendingDown size={32} color="#f8c740" />,
//     bgColor: "#fff1f2",
//   },
// ];

// const testimonials = [
//   {
//     name: "Ajay R",
//     rating: 5,
//     text: "Excellent service from all team members. FIRSTLender is my first choice for financial needs.",
//   },
//   {
//     name: "Raunak Batra",
//     rating: 5,
//     text: "I was in need of INR 2 lakh. I took a Personal loan from FIRSTLender website.",
//   },
//   {
//     name: "Vijay Kumar",
//     rating: 5,
//     text: "I wanted quick fund disbursal and applied for a personal loan from FIRSTLender.",
//   },
//   {
//     name: "Monika",
//     rating: 4.3,
//     text: "I took FIRSTLender Business loan and my decision was perfectly alright for my business.",
//   },
//   {
//     name: "Priya Sharma",
//     rating: 4.7,
//     text: "Fast approval and transparent process. Highly recommend FIRSTLender for any loan needs.",
//   },
//   {
//     name: "Amit Patel",
//     rating: 4.5,
//     text: "Best interest rates in the market. The team was very professional throughout.",
//   },
// ];

// function LandingPage() {
//   const [activeSlide, setActiveSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div style={{ background: "#fff", minHeight: "100vh" }}>
//       <Navbar />

//       {/* Hero Slider - FIXED: No black gap on mobile */}
//       <section 
//         className="hero-section"
//         style={{ 
//           background: "#f5f5f5", 
//           padding: "40px 20px 60px", 
//           position: "relative", 
//           overflow: "hidden" 
//         }}
//       >
//         <svg
//           style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100px" }}
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#f8c740"
//             fillOpacity="0.2"
//             d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           />
//         </svg>

//         <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
//           <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "center" }}>
//             <div>
//               <h1
//                 style={{
//                   fontSize: "2.5rem",
//                   fontWeight: 700,
//                   color: "#050505",
//                   marginBottom: "16px",
//                   lineHeight: 1.3,
//                   position: "relative",
//                   display: "inline-block",
//                 }}
//               >
//                 {heroSlides[activeSlide].title}
//                 <div
//                   style={{
//                     width: "60%",
//                     height: "4px",
//                     background: "linear-gradient(to right, #f8c740, #e6ad01)",
//                     position: "absolute",
//                     bottom: "-8px",
//                     left: 0,
//                   }}
//                 />
//               </h1>
//               <p style={{ fontSize: "1rem", color: "#333", marginBottom: "24px", marginTop: "24px", lineHeight: 1.6 }}>
//                 {heroSlides[activeSlide].description}
//               </p>

//               <Link
//                 to="/apply"
//                 style={{
//                   display: "inline-block",
//                   background: "linear-gradient(135deg, #f8c740 0%, #e6ad01 100%)",
//                   color: "#050505",
//                   padding: "14px 40px",
//                   borderRadius: "50px",
//                   fontWeight: 700,
//                   fontSize: "1rem",
//                   border: "none",
//                   transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//                   boxShadow: "0 8px 20px rgba(248, 199, 64, 0.4), 0 4px 10px rgba(0, 0, 0, 0.15)",
//                   transform: "translateY(0)",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.5px",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "linear-gradient(135deg, #ffd966 0%, #f8c740 100%)";
//                   e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
//                   e.currentTarget.style.boxShadow = "0 12px 28px rgba(248, 199, 64, 0.5), 0 8px 16px rgba(0, 0, 0, 0.2)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "linear-gradient(135deg, #f8c740 0%, #e6ad01 100%)";
//                   e.currentTarget.style.transform = "translateY(0) scale(1)";
//                   e.currentTarget.style.boxShadow = "0 8px 20px rgba(248, 199, 64, 0.4), 0 4px 10px rgba(0, 0, 0, 0.15)";
//                 }}
//               >
//                 {heroSlides[activeSlide].buttonText}
//               </Link>
//             </div>
//             <div className="hero-image">
//               <img
//                 src={heroSlides[activeSlide].image}
//                 alt="Hero"
//                 style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "20px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}
//               />
//             </div>
//           </div>

//           <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "30px" }}>
//             {heroSlides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveSlide(index)}
//                 style={{
//                   width: "12px",
//                   height: "12px",
//                   borderRadius: "50%",
//                   background: index === activeSlide ? "#f8c740" : "#ccc",
//                   border: "none",
//                   cursor: "pointer",
//                   transition: "all 0.3s",
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Bar - FIXED: Smaller and responsive on mobile */}
//       <section className="stats-section" style={{ padding: "0 20px", marginTop: "80px", marginBottom: "80px" }}>
//         <div
//           className="stats-container"
//           style={{
//             maxWidth: "1400px",
//             margin: "0 auto",
//             background: "#fff",
//             border: "3px solid #f8c740",
//             borderRadius: "15px",
//             padding: "30px 20px",
//             boxShadow: "0 8px 20px rgba(248, 199, 64, 0.2)",
//           }}
//         >
//           <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "auto repeat(5, 1fr)", gap: "30px", alignItems: "center" }}>
//             <div className="stats-icon-section" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//               <div
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   background: "#f8c740",
//                   borderRadius: "10px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxShadow: "0 4px 10px rgba(248, 199, 64, 0.3)",
//                 }}
//               >
//                 <CheckCircle size={28} color="#050505" />
//               </div>
//               <div>
//                 <p style={{ fontSize: "0.85rem", margin: 0, color: "#666" }}>Trusted by</p>
//                 <p style={{ fontSize: "0.85rem", margin: 0, fontWeight: 600, color: "#050505" }}>our customers</p>
//               </div>
//             </div>
//             {stats.map((stat, index) => (
//               <div key={index} className="stat-item" style={{ textAlign: "center" }}>
//                 <p className="stat-value" style={{ fontSize: "1.8rem", fontWeight: 700, color: "#050505", margin: 0, marginBottom: "5px" }}>
//                   {stat.value}
//                 </p>
//                 <p className="stat-label" style={{ fontSize: "0.85rem", color: "#666", margin: 0, fontStyle: "italic" }}>{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trending Loans */}
//       <section style={{ padding: "0 20px", marginBottom: "80px" }}>
//         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: 700,
//               color: "#050505",
//               marginBottom: "50px",
//               textAlign: "left",
//             }}
//           >
//             Trending Loans & Offers
//           </h2>
//           <div className="loans-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "25px" }}>
//             {loanTypes.map((loan, index) => (
//               <div
//                 key={index}
//                 style={{
//                   background: "#fff",
//                   borderRadius: "15px",
//                   padding: "25px",
//                   border: "2px solid #f8c740",
//                   textAlign: "center",
//                   transition: "all 0.3s",
//                   boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-5px)";
//                   e.currentTarget.style.boxShadow = "0 8px 20px rgba(248, 199, 64, 0.25)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
//                 }}
//               >
//                 <img
//                   src={loan.image}
//                   alt={loan.title}
//                   style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "10px", marginBottom: "15px" }}
//                 />
//                 <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#050505", marginBottom: "15px" }}>
//                   {loan.title}
//                 </h3>

//                 <button
//                   style={{
//                     background: "linear-gradient(135deg, #f8c740 0%, #e6ad01 100%)",
//                     color: "#050505",
//                     border: "none",
//                     padding: "10px 30px",
//                     borderRadius: "30px",
//                     fontWeight: 600,
//                     cursor: "pointer",
//                     transition: "all 0.3s",
//                     boxShadow: "0 4px 10px rgba(248, 199, 64, 0.3)",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = "translateY(-2px)";
//                     e.currentTarget.style.boxShadow = "0 6px 15px rgba(248, 199, 64, 0.5)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "translateY(0)";
//                     e.currentTarget.style.boxShadow = "0 4px 10px rgba(248, 199, 64, 0.3)";
//                   }}
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Loan Explanations - RESPONSIVE FIXED */}
//       <LoanExplanations />

//       {/* Why Choose FIRSTLender */}
//       <section style={{ padding: "80px 20px", background: "#fafafa" }}>
//         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: 700,
//               textAlign: "center",
//               marginBottom: "10px",
//               color: "#050505",
//             }}
//           >
//             Why Choose <span style={{ color: "#f8c740" }}>FIRSTLender</span>
//           </h2>
//           <div className="why-choose-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", marginTop: "60px" }}>
//             {whyChoose.map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   position: "relative",
//                   background: "#fff",
//                   borderRadius: "0",
//                   padding: "30px 25px",
//                   clipPath: "polygon(25px 0, 100% 0, 100% calc(100% - 25px), calc(100% - 25px) 100%, 0 100%, 0 25px)",
//                   border: "3px solid #e0e7ff",
//                   boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
//                   transition: "all 0.3s ease",
//                   overflow: "hidden",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-8px)";
//                   e.currentTarget.style.boxShadow = "0 12px 30px rgba(248, 199, 64, 0.3)";
//                   e.currentTarget.style.borderColor = "#f8c740";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.08)";
//                   e.currentTarget.style.borderColor = "#e0e7ff";
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "30px",
//                     height: "30px",
//                     background: "#e0e7ff",
//                   }}
//                 />

//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: 0,
//                     right: 0,
//                     width: "30px",
//                     height: "30px",
//                     background: "#e0e7ff",
//                   }}
//                 />

//                 <div style={{ display: "flex", alignItems: "center", gap: "20px", position: "relative", zIndex: 1 }}>
//                   <div
//                     style={{
//                       width: "70px",
//                       height: "70px",
//                       background: item.bgColor,
//                       borderRadius: "12px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0,
//                       boxShadow: "0 4px 12px rgba(248, 199, 64, 0.15)",
//                     }}
//                   >
//                     {item.icon}
//                   </div>
//                   <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#050505", margin: 0, lineHeight: 1.4 }}>
//                     {item.title}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials - FASTER ANIMATION (10s) */}
//       <section style={{ padding: "80px 20px", background: "#fff", overflow: "hidden" }}>
//         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
//           <h2
//             style={{
//               fontSize: "2.5rem",
//               fontWeight: 700,
//               color: "#050505",
//               textAlign: "center",
//               marginBottom: "50px",
//             }}
//           >
//             Testimonials
//           </h2>
//           <div style={{ position: "relative", overflow: "hidden" }}>
//             <div
//               className="testimonials-scroll"
//               style={{
//                 display: "flex",
//                 gap: "25px",
//                 animation: "scroll 0.2s linear infinite",
//               }}
//             >
//               {[...testimonials, ...testimonials].map((testimonial, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     minWidth: "320px",
//                     background: "#fff",
//                     border: "2px solid #f8c740",
//                     borderRadius: "15px",
//                     padding: "25px",
//                     boxShadow: "0 4px 12px rgba(248, 199, 64, 0.2)",
//                   }}
//                 >
//                   <div style={{ color: "#f8c740", fontSize: "1.3rem", marginBottom: "15px" }}>
//                     {"★".repeat(testimonial.rating)}
//                   </div>
//                   <p style={{ fontSize: "0.75rem", color: "#666", marginBottom: "15px" }}>
//                     (Rating: {testimonial.rating})
//                   </p>
//                   <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.6, marginBottom: "20px" }}>
//                     " {testimonial.text} "
//                   </p>
//                   <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                     <div
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         background: "#050505",
//                         borderRadius: "50%",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         color: "#fff",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {testimonial.name[0]}
//                     </div>
//                     <p style={{ fontWeight: 600, color: "#050505", margin: 0 }}>{testimonial.name}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>



//       {/* Footer */}
//       <footer style={{ background: "#050505", color: "#fff", padding: "50px 20px 30px", marginTop: "80px" }}>
//         <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
//           <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "60px", marginBottom: "40px" }}>
//             <div>
//               <h3 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
//                 FIRST<span style={{ color: "#f8c740" }}>Lender</span>
//               </h3>
//               <p style={{ fontSize: "0.8rem", color: "#f8c740", marginBottom: "25px" }}>Bharose Ka Dusra Naam</p>
//               <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//                 <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                   <Phone size={18} /> +91-7291919151
//                 </span>
//                 <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                   <MessageCircle size={18} /> +91-7291919151
//                 </span>
//                 <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                   <Mail size={18} /> info@firstlender.com
//                 </span>
//               </div>
//               <div style={{ marginTop: "25px" }}>
//                 <p style={{ fontWeight: 600, marginBottom: "15px" }}>Follow Us On:</p>
//                 <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
//                   {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
//                     <div
//                       key={i}
//                       style={{
//                         width: "40px",
//                         height: "40px",
//                         background: "#f8c740",
//                         borderRadius: "5px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         cursor: "pointer",
//                         color: "#050505",
//                         transition: "all 0.3s",
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.background = "#fff";
//                         e.currentTarget.style.transform = "translateY(-3px)";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.background = "#f8c740";
//                         e.currentTarget.style.transform = "translateY(0)";
//                       }}
//                     >
//                       <Icon size={20} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h4 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Contact Information</h4>
//               <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "20px" }}>
//                 FIRSTLender Fincorp Limited,
//                 <br />
//                 Second Floor, 17A/45, WEA, Karol Bagh,
//                 <br />
//                 New Delhi, Delhi 110005.
//               </p>
//               <p style={{ fontSize: "0.9rem", color: "#f8c740" }}>ISO 9001:2015 & 27001:2013 Certified</p>
//             </div>
//           </div>
//           <div
//             style={{
//               borderTop: "1px solid rgba(248, 199, 64, 0.3)",
//               paddingTop: "25px",
//               display: "flex",
//               justifyContent: "space-between",
//               flexWrap: "wrap",
//               gap: "15px",
//             }}
//           >
//             <div className="footer-links" style={{ display: "flex", gap: "25px", fontSize: "0.85rem", flexWrap: "wrap" }}>
//               {[
//                 "About Us",
//                 "Our Team",
//                 "Careers",
//                 "Privacy Policy",
//                 "Terms & Conditions",
//                 "Partner Login",
//                 "Contact Us",
//                 "Investor Relations",
//               ].map((link) => (
//                 <Link
//                   key={link}
//                   to="/"
//                   style={{ color: "#fff", opacity: 0.9, transition: "all 0.3s" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#f8c740")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
//                 >
//                   {link}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <p style={{ textAlign: "center", marginTop: "25px", fontSize: "0.85rem", opacity: 0.8 }}>
//             © COPYRIGHT 2025 | ALL RIGHTS RESERVED | FIRSTLENDER FINCORP LTD.
//           </p>
//         </div>
//       </footer>

//       {/* Responsive Styles */}
//       <style>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         /* Ensure fast animation on all devices */
//         .testimonials-scroll {
//           animation: scroll 5s linear infinite !important;
//         }

//         /* Hero Section Responsive */
//         @media (max-width: 968px) {
//           .hero-section {
//             padding: 30px 20px 50px !important;
//           }
//           .hero-grid {
//             grid-template-columns: 1fr !important;
//             gap: 30px !important;
//           }
//           .hero-image {
//             order: -1;
//           }
//           .hero-grid h1 {
//             font-size: 1.8rem !important;
//           }
//           .hero-grid p {
//             font-size: 0.9rem !important;
//           }
//         }

//         /* Stats Section - Smaller on Mobile */
//         @media (max-width: 968px) {
//           .stats-section {
//             margin-top: 40px !important;
//             margin-bottom: 40px !important;
//           }
//           .stats-container {
//             padding: 20px 15px !important;
//           }
//           .stats-grid {
//             grid-template-columns: 1fr !important;
//             gap: 20px !important;
//           }
//           .stats-icon-section {
//             justify-content: center !important;
//           }
//           .stat-item {
//             text-align: center !important;
//           }
//           .stat-value {
//             font-size: 1.4rem !important;
//           }
//           .stat-label {
//             font-size: 0.75rem !important;
//           }
//         }

//         /* Loans Grid Responsive */
//         @media (max-width: 968px) {
//           .loans-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }

//         @media (min-width: 969px) and (max-width: 1200px) {
//           .loans-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }

//         /* Why Choose Responsive */
//         @media (max-width: 968px) {
//           .why-choose-grid {
//             grid-template-columns: 1fr !important;
//             gap: 20px !important;
//           }
//         }

//         /* Footer Responsive */
//         @media (max-width: 968px) {
//           .footer-grid {
//             grid-template-columns: 1fr !important;
//             gap: 30px !important;
//           }
//           .footer-links {
//             flex-direction: column !important;
//             gap: 12px !important;
//           }
//         }
//       `}</style>

//     </div>
//   );
// }

// export default LandingPage;