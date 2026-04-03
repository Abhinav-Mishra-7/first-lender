// ContactUs.jsx - AboutUs Style Layout (Yellow/White Theme)
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, ShieldCheck, Users,TrendingUp,Star} from "lucide-react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import img1 from "../../assets/close-up-shot-curly-beautiful-african-american-woman-makes-phone-gesture-says-call-me-back-wears-round-glasses-casual-t-shirt-poses-against-yellow-wall-communication-sign.jpg"

const contactStats = [
  { icon: Users, value: "10K+", label: "Happy Customers", color: "text-blue-500" },
  { icon: Clock, value: "24 Hrs", label: "Response Time", color: "text-yellow-500" },
  { icon: ShieldCheck, value: "100%", label: "Data Secure", color: "text-green-500" },
  { icon: TrendingUp, value: "50+", label: "Partners", color: "text-purple-500" }
];

const contactOptions = [
  {
    title: "Instant Call",
    desc: "Talk to loan experts immediately",
    icon: Phone,
    color: "from-yellow-400 to-orange-400",
    details: "+91-82878 30373",
    link: "tel:+918287830373"
  },
  {
    title: "WhatsApp Chat", 
    desc: "Quick response on WhatsApp",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-400",
    details: "+91-81144 66003", 
    link: "https://wa.me/918114466003"
  },
  {
    title: "Email Support",
    desc: "Detailed queries & support",
    icon: Mail,
    color: "from-blue-400 to-cyan-400",
    details: "lenders@firstlender.in",
    link: "mailto:lenders@firstlender.in"
  },
  {
    title: "Visit Office",
    desc: "Meet our loan specialists",
    icon: MapPin,
    color: "from-purple-400 to-pink-400", 
    details: "Ghaziabad, UP",
    link: "https://maps.google.com"
  }
];

const ContactUs = () => {
  return (
    <section className="pt-20 bg-linear-to-b from-gray-100 to-white">
      <Navbar />
      <ContactHero />

      <div className="max-w-7xl mx-auto px-3 lg:px-5 mt-10">  

        {/* Contact Methods */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 shadow-xl p-5 rounded-2xl lg:py-10 mb-24">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 pb-4 text-shadow-md">
              Connect With Our <span className="text-yellow-500">Experts</span>
            </h3>

            <div className="space-y-5">
              {contactOptions.map(({ title, desc, icon: Icon, color, details, link, onClick }, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-3 rounded-2xl 
                    hover:bg-linear-to-r hover:from-yellow-50 hover:to-orange-50 
                    shadow-md hover:shadow-xl 
                    transition-all duration-500 ease-out hover:-translate-x-2"
                  >
                  <div
                    className={`w-12 h-12 shrink-0 bg-linear-to-br ${color} 
                      rounded-xl flex items-center justify-center shadow-lg 
                      group-hover:scale-110 transition-all duration-500 ease-out`}
                  >
                    <Icon size={24} className="text-white drop-shadow-md" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-800 mb-1 inline">{title}</h4>
                    <span className="text-black font-bold ml-2">-</span>
                    <p className="text-sm font-semibold text-gray-900 inline ml-2">{details}</p>
                    <p className="text-gray-500 text-sm font-medium mb-2">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative h-96 lg:h-[430px]">
            <img 
              src={img1}
              className="w-full h-full object-cover rounded-3xl shadow-2xl 
              border-4 border-white/50 will-change-transform"
            />
          </div>
        </div>

        {/* Google Maps Section - Perfect for Plot No. 479, Sector-4, Vaishali, Ghaziabad */}
        <div className="gap-8 w-full mx-auto mt-12 mb-20">
          {/* Google Maps Embed */}
          <div className="relative h-80 md:h-96 lg:h-102 rounded-3xl shadow-2xl border-4 border-white/50 overflow-hidden order-1 md:order-2 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.614594917614!2d77.340614615193!3d28.65239498241879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcd6f5c5b5b7%3A0x8f8e8e8e8e8e8e8e!2sPlot%20No.%20479%2C%20Sector-4%2C%20Vaishali%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201010!5e0!3m2!1sen!2sin!4v1737200000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="FIRSTLENDER Office Location - Plot No. 479, Sector-4, Vaishali, Ghaziabad"
            />
            
            {/* Map Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent pointer-events-none rounded-3xl" />
          </div>
        </div>


        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-start bg-yellow-100/80 shadow-xl p-5 lg:py-10 pb-8 rounded-2xl">
          {/* LEFT - Extended Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-yellow-300 to-yellow-400 border border-yellow-200 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 ease-out">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="font-semibold text-black text-lg">24/7 Support Available</span>
            </div>
            
            {/* Main Heading */}
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight text-shadow-md">
                Send Your <span className="text-yellow-500 px-3 py-2 rounded-full text-xl md:text-2xl lg:text-3xl">Enquiry Now</span>
              </h3>
              <p className="text-sm text-yellow-700 font-semibold tracking-wide uppercase mt-1">Free Consultation • No Obligation</p>
            </div>
            
            {/* Extended Description */}
            <div className="space-y-4 text-lg text-gray-600 max-w-lg leading-relaxed font-medium">
              <p>Fill out the form below and our certified loan specialists will:</p>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-violet-500 mt-1 shrink-0" />
                  <span>Review your requirements instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-blue-500 mt-1 shrink-0" />
                  <span>Call you back within <strong>24 hours</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp size={20} className="text-yellow-500 mt-1 shrink-0" />
                  <span>Match best loan offers from 50+ partners</span>
                </li>
              </ul>
            </div>
            
            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6 pr-7">
              <div className="p-6 rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border-l-4 border-green-400 shadow-lg hover:scale-105 transition-all duration-300 ease-out">
                <ShieldCheck size={28} className="text-green-500 mb-3" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">100% Secure</h4>
                <p className="text-gray-600 text-sm">Bank-grade encryption. Your data is safe.</p>
              </div>
              <div className="p-6 rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-400 shadow-lg hover:scale-105 transition-all duration-300 ease-out">
                <Clock size={28} className="text-blue-500 mb-3" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h4>
                <p className="text-gray-600 text-sm">Response guaranteed within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <ContactForm />
        </div>

      </div>

      <Footer />
    </section>
  );
};

export default ContactUs;
