import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown, ChevronRight, Phone, Smartphone , Handshake } from "lucide-react";
import logo from "../../../public/first lender logo (1).png" ;

const navLinks = [
  {
    href: "/loans",
    label: "Loans",
    subItems: [
      {label: "Personal Loan",href: "/loans/personal" , 
        submenuItems: [
          { label: "Personal Loan", href: "/loans/personal/personal" },
          { label: "Marriage Loan", href: "/loans/personal/marriage" },
          { label: "Travel Loan", href: "/loans/personal/travel" },
          { label: "Personal Overdraft", href: "/loans/personal/personal-overdraft" },
          { label: "Advance Salary", href: "/loans/personal/advance-salary" },
          { label: "Medical Loan", href: "/loans/personal/medical" },
          { label: "Balance Transfer (Other Bank)", href: "/loans/personal/balance-transfer" },
        ],
      },
      // {label: "Used Car Loan",href: "/loans/used-car"},
      {label: "Professional Loan",href: "/loans/professional" , 
        submenuItems: [
          { label: "CA Loan", href: "/loans/professional/ca" },
          { label: "CS Loan", href: "/loans/professional/cs" },
          { label: "Doctor Loan", href: "/loans/professional/doctor" },
        ]
      },
      {label: "Business Loan", href: "/loans/business", 
        submenuItems: [
          { label: "Business Loan", href: "/loans/business/business" },
          { label: "Business Overdraft", href: "/loans/business/business-overdraft" },
          { label: "Working Capital", href: "/loans/business/working-capital" },
          { label: "Purchase Invoice Discounting (PID)", href: "/loans/business/pid" },
          { label: "CGTMSE", href: "/loans/business/cgtmse" },
        ]
      },
      {label: "Secured Loan", href: "/loans/secured" ,
        submenuItems: [
          { label: "Home Loan", href: "/loans/home" },
          { label: "Loan Against Property", href: "/loans/property" },
          { label: "Car Loan", href: "/loans/car" },
          { label: "Used Car Loan", href: "/loans/used-car" },
        ]
      },
      // {label: "PID", href: "/loans/pid"},
      // {label: "MSME", href: "/loans/msme"},
      // {label: "Loan Against Property", href: "/loans/property"},
      // {label: "Home Loan", href: "/loans/home"},
      // {label: "CGTMSE", href: "/loans/cgtmse"},
      // {label: "CC LIMIT", href: "/loans/cc-limit"},

    ],
  },
  { href: "/emi-calculator", 
    label: "Resources",
    subItems: [
      {
        label: "Gallery",
        href: "/resources/gallery",
      },
      {
        label: "EMI Calculator",
        href: "/resources/emi-calculator",
      },
    ]
   },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setIsMenuOpen(false);
    setMobileActiveDropdown(null);
    setMobileActiveSubmenu(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-100 pointer-events-none text-black">
      <header
        ref={navRef}
        className="w-full mx-auto bg-white/80 backdrop-blur-lg shadow-md transition-all duration-300 overflow-visible pointer-events-auto"
      >
        <div className="flex items-center justify-between px-6 md:px-7 lg:px-10 py-3 md:py-3 lg:py-4">
          {/* Brand */}
          <Link to="/" onClick={closeAllDropdowns} className="flex items-center gap-1 shrink-0 ">
            <img src={logo} alt="first-lender-logo" className="h-11 w-11" />
            <span className="text-xl md:text-2xl text-black">FIRST</span>
            <span className="text-xl md:text-2xl text-yellow-500">LENDER</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:justify-end items-center md:gap-4 lg:gap-15 ml-auto">
            {navLinks.map((link) => (
              <div key={link.href} className="relative font-medium">
                {link.subItems ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(activeDropdown === link.label ? null : link.label);
                        setActiveSubmenu(null);
                      }}
                      className="px-3 py-1 cursor-pointer text-sm md:text-md text-black transition-colors duration-200 flex items-center gap-2 border border-gray-300 rounded-lg hover:border-yellow-400"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-1/2 cursor-pointer transform -translate-x-1/2 mt-3 min-w-56 bg-white border border-gray-300 rounded-xl shadow-2xl p-2 z-50">
                        {link.subItems.map((subItem) => (
                          <div key={subItem.label} className="relative">
                            {subItem.submenuItems ? (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveSubmenu(
                                      activeSubmenu === subItem.label ? null : subItem.label
                                    );
                                  }}
                                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-black hover:bg-yellow-50 rounded-lg transition-colors duration-200 cursor-pointer"
                                >
                                  <span>{subItem.label}</span>
                                  <ChevronRight
                                    size={16}
                                    className={`transition-transform duration-300 ${
                                      activeSubmenu === subItem.label ? "rotate-90" : ""
                                    }`}
                                  />
                                </button>

                                {activeSubmenu === subItem.label && (
                                  <div className="absolute left-full -top-4 ml-2 min-w-56 bg-white border border-gray-300 rounded-xl shadow-2xl p-2 z-50">
                                    {subItem.submenuItems.map((submenuItem) => (
                                      <Link
                                        key={submenuItem.href}
                                        to={submenuItem.href}
                                        onClick={closeAllDropdowns}
                                        className="block px-4 py-2.5 text-sm text-black hover:bg-yellow-50 rounded-lg transition-colors duration-200"
                                      >
                                        {submenuItem.label}                                      
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={subItem.href}
                                onClick={closeAllDropdowns}
                                className="block px-4 py-2.5 text-sm text-black hover:bg-yellow-50 rounded-lg transition-colors duration-200"
                              >
                                {subItem.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={closeAllDropdowns}
                    className="px-4 py-2 text-sm md:text-md text-black hover:text-yellow-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="w-full bg-yellow-500 shadow-[0_4px_10px_rgba(0,0,0,0.15)] flex md:justify-end lg:justify-end justify-center md:px-4 lg:px-7 px-0 py-1 md:gap-6 gap-1.5 lg:gap-8 md:text-sm text-xs lg:text-md font-medium">          
            <a href="#" className="flex items-center gap-2">
              <Handshake className="h-4 w-4" />
              <span>Become Our Partner</span>
            </a>
            <a href="tel:+918287830373" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91-82878 30373</span>
            </a>
            <a href="tel:+918114466003" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span>+91-81144 66003</span>
            </a>
        </div>
        

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4 pt-2 flex flex-col gap-2 border-t border-gray-200">
            {navLinks.map((link) => (
              <div key={link.href} className="flex flex-col">
                {link.subItems ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileActiveDropdown(
                          mobileActiveDropdown === link.label ? null : link.label
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-black hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          mobileActiveDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileActiveDropdown === link.label && (
                      <div className="ml-4 mt-2 flex flex-col gap-1 pl-2 border-l border-gray-300">
                        {link.subItems.map((subItem) => (
                          <div key={subItem.label} className="flex flex-col">
                            {subItem.submenuItems ? (
                              <>
                                <button
                                  onClick={() =>
                                    setMobileActiveSubmenu(
                                      mobileActiveSubmenu === subItem.label ? null : subItem.label
                                    )
                                  }
                                  className="w-full flex items-center justify-between px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                  <span>{subItem.label}</span>
                                  <ChevronRight
                                    size={14}
                                    className={`transition-transform duration-300 ${
                                      mobileActiveSubmenu === subItem.label ? "rotate-90" : ""
                                    }`}
                                  />
                                </button>

                                {mobileActiveSubmenu === subItem.label && (
                                  <div className="ml-4 mt-1 flex flex-col gap-1 pl-2 border-l border-gray-300">
                                    {subItem.submenuItems.map((submenuItem) => (
                                      <Link
                                        key={submenuItem.href}
                                        to={submenuItem.href}
                                        onClick={closeAllDropdowns}
                                        className="px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-lg transition-colors"
                                      >
                                        {submenuItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={subItem.href}
                                onClick={closeAllDropdowns}
                                className="px-4 py-2 text-sm text-black hover:bg-gray-100 rounded-lg transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={closeAllDropdowns}
                    className="px-4 py-2.5 text-sm text-black hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}