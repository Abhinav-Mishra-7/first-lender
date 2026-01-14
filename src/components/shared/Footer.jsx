import { Phone,Mail,MessageCircle,Facebook,Instagram,Linkedin,Youtube} from "lucide-react";
  
  
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/people/First-Lender/100089071679/?mibextid=ZbWKwL",
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/firstlender3857/",
      label: "Instagram"
    },
    {
      icon: Linkedin,
      href: "https://in.linkedin.com/company/first-lender",
      label: "LinkedIn"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@firstlender",
      label: "YouTube"
    },
    {
      icon: Phone,
      href: "https://wa.me/911131231853?text=Hello%20FirstLender",
      label: "WhatsApp"
    }
  ];
  
  const Footer = () => {
    return (
      <footer className="bg-linear-to-t from-black to-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 mb-12 lg:mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-linear-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                  FIRST<span className="text-yellow-400">LENDER</span>
                </h2>
                {/* <p className="text-yellow-400 text-sm font-medium">Bharose Ka Dusra Naam</p> */}
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-yellow-400" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href="tel:+918287830373" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium block">
                      +91-82878 30373
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle size={20} className="mt-1 shrink-0 text-yellow-400" />
                  <div>
                    <p className="text-sm font-medium">WhatsApp</p>
                    <a href="https://wa.me/918114466003" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium block">
                      +91-81144 66003
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="mt-1 shrink-0 text-yellow-400" />
                  <a href="mailto:info@firstlender.com" className="text-white mt-1 hover:text-yellow-400 transition-colors text-sm font-medium block">
                    info@firstlender.com
                  </a>
                </div>
              </div>
  
              {/* Social Links */}
              <div className="pt-6">
                <p className="font-semibold mb-4 text-lg">Follow Us On:</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group relative h-9 w-9 md:w-11 md:h-11 lg:w-13 lg:h-13 bg-yellow-400/10 hover:bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-lg md:rounded-xl lg:rounded-2xl p-1.5 md:p-2 lg:p-3 flex items-center justify-center transition-all duration-4000 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/25"
                    >
                      <Icon size={24} className="text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
  
            {/* Contact Address */}
            <div className="lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-yellow-400">
                Get In Touch
              </h3>
              <div className="bg-black/20 backdrop-blur-sm mt-3">
                <p className="text-lg md:text-xl leading-relaxed mb-2">
                  FIRST<span className="text-yellow-400">LENDER</span> Fincorp Limited
                </p>
                <address className="text-sm md:text-base not-italic space-y-1 text-gray-300">
                  <span>Plot Number - 479, Sector - 4,</span>
                  <span> Vaishali</span>
                  <span className="block font-semibold text-white pt-2">
                    Ghaziabad - 201010, Delhi
                  </span>
                </address>
              </div>
            </div>
          </div>
  
          {/* Bottom Links */}
          <div className="border-t border-yellow-400/30 pt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {[
                "About Us", "Our Team", "Careers", 
                "Privacy Policy", "Terms & Conditions", 
                "Partner Login", "Contact Us", "Investor Relations"
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm lg:text-base text-gray-300 hover:text-yellow-400 font-medium transition-all duration-300 hover:underline underline-offset-4 group"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="text-center pt-8 border-t border-yellow-400/20">
              <p className="text-xs md:text-sm text-gray-400">
                © COPYRIGHT 2026 | ALL RIGHTS RESERVED | 
                <span className="font-bold text-yellow-400 ml-2">FIRSTLENDER FINCORP LTD.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;  