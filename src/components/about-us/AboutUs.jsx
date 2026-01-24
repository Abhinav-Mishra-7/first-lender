import { Users, ShieldCheck, Award, Clock, TrendingUp, Building2,Star ,Briefcase} from "lucide-react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import AboutHero from "./AboutHero";
import img1 from "../../../public/loan-approved-application-form-concept.jpg"


const teamMembers = [
    {
      name: "Rahul Verma",
      role: "Founder & CEO",
      focus: "Business Strategy & Partnerships",
      bio: "Ex-banker with 12+ years in MSME lending, Rahul founded FIRSTLENDER to make credit accessible and transparent.",
      initials: "RV"
    },
    {
      name: "Priya Sharma",
      role: "Chief Risk Officer",
      focus: "Risk & Compliance",
      bio: "Leads our credit policy, underwriting and compliance to ensure responsible lending and protection for our customers.",
      initials: "PS"
    },
    {
      name: "Amit Mehta",
      role: "Head of Technology",
      focus: "Product & Engineering",
      bio: "Drives our digital loan journeys, real-time eligibility engine and paperless onboarding experience.",
      initials: "AM"
    },
    {
      name: "Neha Gupta",
      role: "Customer Success Lead",
      focus: "Customer Experience",
      bio: "Ensures every borrower gets fast support, clear communication and a human touch at every step.",
      initials: "NG"
    }
];
  
const anarray = [
{
  title: "Professionals",
  desc: "Doctors, CAs - instant funding",
  icon: Building2,
  color: "from-blue-400 to-cyan-400"
},
{
  title: "Manufacturers",
  desc: "Fuel growth without equity dilution",
  icon: Users,
  color: "from-purple-400 to-pink-400"
},
{
  title: "Traders & Retail",
  desc: "Working capital at lowest rates",
  icon: TrendingUp,
  color: "from-green-500 to-emerald-300"
},
{
  title: "Service Providers",
  desc: "Scale projects without upfront cash pressure",
  icon: Briefcase,
  color: "from-teal-300 to-sky-600"
}]

const statusArray = [
  { icon: Users, value: "5K+", label: "Happy Customers", color: "text-blue-500" },
  { icon: Award, value: "₹100 Cr+", label: "Loans Disbursed", color: "text-green-500" },
  { icon: Clock, value: "24 Hrs", label: "Fast Approval", color: "text-yellow-500" },
  { icon: ShieldCheck, value: "100%", label: "Secure Process", color: "text-purple-500" }
]
  
const AboutUs = () => {
    return (
      <section className="pt-20 bg-linear-to-b from-gray-100 to-white">
        <Navbar></Navbar>
        <AboutHero/>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">  
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-15">
            {statusArray.map(({ icon: Icon, value, label, color }, i) => (
              <div key={i} className="group text-center p-5 lg:p-8 rounded-3xl bg-linear-to-br from-yellow-400 to-yellow-50 backdrop-blur-sm border hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 hover:-translate-y-3 shadow-lg">
                <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-white to-yellow-50 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Icon size={32} className={`${color} drop-shadow-lg`}/>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-2xl lg:text-4xl font-bold bg-linear-to-r from-gray-900 to-black bg-clip-text text-transparent">
                    {value}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium tracking-wide">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Mission Vision */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-25 mb-24 items-center bg-yellow-100/80 shadow-xl p-5 lg:py-10 lg:pb-13 pb-8 rounded-2xl">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-yellow-300 to-yellow-400 border border-yellow-200 rounded-2xl backdrop-blur-sm shadow-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold text-black text-lg">Trusted Since 2021</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 pr-12 leading-tight text-shadow-md">
                Empowering <span className="text-yellow-500 md:px-0 px-3 lg:px-3 py-1 rounded-full text-xl md:text-2xl lg:text-3xl">Indian Dreams</span>
              </h3>
              
              <p className="text-sm md:text-md lg:text-base text-gray-600 leading-relaxed mb-8 max-w-xl mt-3">
                FIRSTLENDER bridges the gap between ambitious entrepreneurs and instant funding. 
                We simplify loans with cutting-edge technology and human touch.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4 p-6 md:p-6 rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-400 shadow-lg">
                  <Building2 size={28} className="text-blue-500" />
                  <h4 className="text-xl font-bold text-gray-900">Bank / NBFC Partnered</h4>
                  <p className="text-gray-600 text-sm">50+ financial institutions</p>
                </div>
                <div className="space-y-4 p-6 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border-l-4 border-green-400 shadow-lg">
                  <TrendingUp size={28} className="text-green-500" />
                  <h4 className="text-xl font-bold text-gray-900">Lightning Fast</h4>
                  <p className="text-gray-600 text-sm">Approval in 24 hours or less</p>
                </div>
              </div>
            </div>
  
            <div className="relative">
              <div className="relative z-10 bg-linear-to-br from-yellow-400 via-yellow-500 to-orange-400 p-12 lg:p-16 rounded-3xl shadow-xl">
                <div className="absolute inset-0 bg-white/20 rounded-3xl backdrop-blur-sm" />
                <div className="relative z-20 text-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 bg-linear-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50">
                    <Star size={48} className="text-yellow-600 animate-spin-slow" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
                    4.8<span className="text-3xl">/5</span>
                  </h3>
                  <p className="text-white/90 text-lg font-semibold drop-shadow-md">Customer Rating</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-2xl blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400/20 rounded-3xl blur-xl animate-pulse delay-1000" />
            </div>
          </div>
  
          {/* Team Trust */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 shadow-xl p-5 rounded-2xl lg:py-10">
            <div className="order-1 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 pb-4 text-shadow-md">
                Trusted by India's <span className="text-yellow-500">Best Businesses</span>
              </h3>
              <div className="space-y-5">
                {anarray.map(({ title, desc, icon: Icon, color }, i) => (
                  <div key={i} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-linear-to-r hover:from-yellow-50 hover:to-orange-50 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-x-2">
                    <div className={`w-12 h-12 shrink-0 bg-linear-to-br ${color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-100 transition-transform`}>
                      <Icon size={24} className="text-white drop-shadow-md"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">{title}</h4>
                      <p className="text-gray-500 text-sm font-medium">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-115">
              <img 
                src={img1}
                alt="Happy customers"
                className="w-full h-105 object-cover rounded-3xl shadow-2xl border-5 border-white/50"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
              <div className="absolute bottom-5 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl border border-yellow-200">
                <p className="text-gray-900 font-semibold text-sm">Real Stories. Real Results.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24 mb-20 md:mt-28">
        <div className="text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">
            Our Core Team
            </p>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            People behind <span className="text-yellow-500">FIRSTLENDER</span>
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            A specialised team from banking, risk and technology working together to build India’s most trusted loan platform.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
            <div
                key={member.name}
                className="group relative bg-white/80 backdrop-blur-sm border border-yellow-100 rounded-3xl p-6 md:p-7 flex flex-col h-full shadow-sm hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 hover:-translate-y-3"
            >
                {/* Accent badge */}
                <div className="absolute -top-3 left-5 px-3 py-1 rounded-full bg-yellow-400 text-[10px] md:text-xs font-semibold tracking-wide text-black shadow-md">
                {index === 0 ? "FOUNDER" : "LEAD"}
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-lg md:text-xl font-bold text-black shadow-lg">
                    {member.initials}
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-white" />
                </div>
                <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">
                    {member.name}
                    </h4>
                    <p className="text-xs md:text-sm font-medium text-yellow-600">
                    {member.role}
                    </p>
                </div>
                </div>

                {/* Focus pill */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 text-[10px] md:text-xs font-semibold text-yellow-700 mb-3">
                {member.focus}
                </div>

                {/* Bio */}
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed flex-1">
                {member.bio}
                </p>

                {/* CTA / contact hint */}
                <div className="mt-4 pt-3 border-t border-yellow-50 flex items-center justify-between text-[11px] md:text-xs text-gray-500">
                <span>Available for partner discussions</span>
                <span className="text-yellow-500 font-semibold group-hover:translate-x-1 transition-transform">
                    Connect →
                </span>
                </div>
            </div>
            ))}
        </div>
        </div>
        
        {/* Footer section */}
        <Footer></Footer>
  
        <style jsx>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
        `}</style>
      </section>
    );
  };
  
export default AboutUs;  