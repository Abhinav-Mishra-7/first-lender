import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/loans",
    label: "Loans",
    dropdown: true,
    subItems: [
      {
        label: "Personal Loan",
        href: "/loans/personal",
        hasSubmenu: true,
        submenuItems: [
          { href: "/loans/personal/instant", label: "Instant Personal Loan" },
          { href: "/loans/personal/salary", label: "Salary Based Loan" },
          { href: "/loans/personal/no-cibil", label: "No CIBIL Required" },
        ],
      },
      {
        label: "Business Loan",
        href: "/loans/business",
        hasSubmenu: true,
        submenuItems: [
          { href: "/loans/business/msme", label: "MSME Loan" },
          { href: "/loans/business/working-capital", label: "Working Capital" },
          { href: "/loans/business/machinery", label: "Machinery Loan" },
        ],
      },
      {
        label: "Professional Loan",
        href: "/loans/professional",
        hasSubmenu: true,
        submenuItems: [
          { href: "/loans/professional/doctor", label: "Doctor Loan" },
          { href: "/loans/professional/ca", label: "CA Loan" },
          { href: "/loans/professional/practice", label: "Practice Expansion" },
        ],
      },
      { label: "Home Loan", href: "/loans/home", hasSubmenu: false },
      { label: "Loan Against Property", href: "/loans/property", hasSubmenu: false },
    ],
  },
  { href: "/sip", label: "SIP" },
  { href: "/bonds", label: "Bonds" },
  {
    href: "/insurance",
    label: "Insurance",
    dropdown: true,
    subItems: [
      { href: "/insurance/health", label: "Health Insurance", hasSubmenu: false },
      { href: "/insurance/life", label: "Life Insurance", hasSubmenu: false },
      { href: "/insurance/vehicle", label: "Vehicle Insurance", hasSubmenu: false },
      { href: "/insurance/travel", label: "Travel Insurance", hasSubmenu: false },
    ],
  },
  {
    href: "/cards",
    label: "Cards",
    dropdown: true,
    subItems: [
      { href: "/cards/credit", label: "Credit Card", hasSubmenu: false },
      { href: "/cards/debit", label: "Debit Card", hasSubmenu: false },
    ],
  },
  {
    href: "/resources",
    label: "Resources",
    dropdown: true,
    subItems: [
      { href: "/resources/gallery", label: "Gallery", hasSubmenu: false },
      { href: "/resources/blogs", label: "Blogs", hasSubmenu: false },
      { href: "/resources/news", label: "News", hasSubmenu: false },
      { href: "/resources/emi-calculator", label: "EMI Calculator", hasSubmenu: false },
      { href: "/resources/calculators", label: "Calculators", hasSubmenu: false },
    ],
  },
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

  const handleDropdownClick = (label, event) => {
    event.preventDefault();
    event.stopPropagation();
    if (activeDropdown === label) {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    } else {
      setActiveDropdown(label);
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = (itemLabel, event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveSubmenu(activeSubmenu === itemLabel ? null : itemLabel);
  };

  const handleMobileDropdownToggle = (label) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
    setMobileActiveSubmenu(null);
  };

  const handleMobileSubmenuToggle = (label) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === label ? null : label);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "16px clamp(16px, 3vw, 48px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          padding: "16px 32px",
          background: "var(--color-white)",
          border: "1px solid var(--color-border-light)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-md)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Brand */}
        <Link
          to="/"
          onClick={closeAllDropdowns}
          style={{
            fontWeight: 800,
            color: "var(--color-black)",
            fontSize: "1.25rem",
            whiteSpace: "nowrap",
          }}
        >
          FIRST<span style={{ color: "var(--color-yellow-strong)" }}>Lender</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "none",
            gap: "24px",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <div key={link.href} style={{ position: "relative" }}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={(e) => handleDropdownClick(link.label, e)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--color-black)",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-yellow-strong)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-black)")}
                  >
                    {link.label}
                    <ChevronDown size={14} className={activeDropdown === link.label ? "rotate-180" : ""} style={{ transition: "transform 0.25s" }} />
                  </button>
                  {activeDropdown === link.label && (
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 16px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        minWidth: "240px",
                        background: "var(--color-white)",
                        border: "1px solid var(--color-border-light)",
                        borderRadius: "var(--radius-md)",
                        boxShadow: "var(--shadow-xl)",
                        padding: "8px",
                        zIndex: 2000,
                      }}
                    >
                      {link.subItems.map((subItem) => (
                        <div key={subItem.label} style={{ position: "relative" }}>
                          {subItem.hasSubmenu ? (
                            <>
                              <button
                                onClick={(e) => handleSubmenuClick(subItem.label, e)}
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  padding: "12px 16px",
                                  color: "var(--color-black)",
                                  fontWeight: 600,
                                  fontSize: "0.9rem",
                                  borderRadius: "var(--radius-sm)",
                                  background: "transparent",
                                  border: "none",
                                  cursor: "pointer",
                                  textAlign: "left",
                                  transition: "all 0.15s",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = "var(--color-yellow)";
                                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(247, 200, 67, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = "transparent";
                                  e.currentTarget.style.boxShadow = "none";
                                }}
                              >
                                <span>{subItem.label}</span>
                                <ChevronRight size={16} />
                              </button>
                              {activeSubmenu === subItem.label && (
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "calc(100% + 8px)",
                                    top: 0,
                                    minWidth: "220px",
                                    background: "var(--color-white)",
                                    border: "1px solid var(--color-border-light)",
                                    borderRadius: "var(--radius-md)",
                                    boxShadow: "var(--shadow-xl)",
                                    padding: "8px",
                                    zIndex: 2001,
                                  }}
                                >
                                  {subItem.submenuItems.map((submenuItem) => (
                                    <Link
                                      key={submenuItem.href}
                                      to={submenuItem.href}
                                      onClick={closeAllDropdowns}
                                      style={{
                                        display: "block",
                                        padding: "12px 16px",
                                        color: "var(--color-black)",
                                        fontWeight: 600,
                                        fontSize: "0.85rem",
                                        borderRadius: "var(--radius-sm)",
                                        transition: "all 0.15s",
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "var(--color-yellow)";
                                        e.currentTarget.style.paddingLeft = "20px";
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.paddingLeft = "16px";
                                      }}
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
                              style={{
                                display: "block",
                                padding: "12px 16px",
                                color: "var(--color-black)",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                borderRadius: "var(--radius-sm)",
                                transition: "all 0.15s",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "var(--color-yellow)";
                                e.currentTarget.style.transform = "translateX(2px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.transform = "translateX(0)";
                              }}
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
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--color-black)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-yellow-strong)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-black)")}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div style={{ display: "none", alignItems: "center", gap: "12px" }} className="desktop-actions">
          <Link
            to="/partner"
            style={{
              padding: "0.65em 1.3em",
              fontWeight: 600,
              borderRadius: "var(--radius-pill)",
              background: "transparent",
              color: "var(--color-black)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-yellow-strong)";
              e.currentTarget.style.background = "rgba(247, 200, 67, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-black)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Become our partner
          </Link>
          <Link
            to="/pay"
            style={{
              padding: "0.65em 1.3em",
              fontWeight: 600,
              borderRadius: "var(--radius-pill)",
              background: "var(--gradient-yellow)",
              color: "var(--color-black)",
              boxShadow: "var(--shadow-md)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "var(--shadow-glow-yellow)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "var(--shadow-md)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Pay bill
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border-light)",
            background: "transparent",
            color: "var(--color-black)",
            cursor: "pointer",
          }}
          className="mobile-toggle"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            left: "clamp(16px, 3vw, 48px)",
            right: "clamp(16px, 3vw, 48px)",
            background: "var(--color-white)",
            border: "1px solid var(--color-border-light)",
            borderRadius: "var(--radius-lg)",
            padding: "20px",
            boxShadow: "var(--shadow-xl)",
            zIndex: 999,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {navLinks.map((link) => (
              <div key={link.href} style={{ display: "flex", flexDirection: "column" }}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => handleMobileDropdownToggle(link.label)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 16px",
                        color: "var(--color-black)",
                        fontWeight: 600,
                        borderRadius: "var(--radius-md)",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        fontSize: "1rem",
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={14} className={mobileActiveDropdown === link.label ? "rotate-180" : ""} style={{ transition: "transform 0.3s" }} />
                    </button>
                    {mobileActiveDropdown === link.label && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingLeft: "16px", marginTop: "8px" }}>
                        {link.subItems.map((subItem) => (
                          <div key={subItem.label} style={{ display: "flex", flexDirection: "column" }}>
                            {subItem.hasSubmenu ? (
                              <>
                                <button
                                  onClick={() => handleMobileSubmenuToggle(subItem.label)}
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "10px 16px",
                                    color: "var(--color-black)",
                                    fontWeight: 600,
                                    fontSize: "0.9rem",
                                    borderRadius: "var(--radius-sm)",
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    borderLeft: "2px solid transparent",
                                  }}
                                >
                                  <span>{subItem.label}</span>
                                  <ChevronRight size={14} className={mobileActiveSubmenu === subItem.label ? "rotate-90" : ""} style={{ transition: "transform 0.3s" }} />
                                </button>
                                {mobileActiveSubmenu === subItem.label && (
                                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingLeft: "20px", marginTop: "8px" }}>
                                    {subItem.submenuItems.map((submenuItem) => (
                                      <Link
                                        key={submenuItem.href}
                                        to={submenuItem.href}
                                        onClick={closeAllDropdowns}
                                        style={{
                                          display: "block",
                                          padding: "10px 16px",
                                          color: "var(--color-black)",
                                          fontWeight: 600,
                                          fontSize: "0.85rem",
                                          borderRadius: "var(--radius-sm)",
                                          borderLeft: "2px solid transparent",
                                        }}
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
                                style={{
                                  display: "block",
                                  padding: "10px 16px",
                                  color: "var(--color-black)",
                                  fontWeight: 600,
                                  fontSize: "0.9rem",
                                  borderRadius: "var(--radius-sm)",
                                  borderLeft: "2px solid transparent",
                                }}
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
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      color: "var(--color-black)",
                      fontWeight: 600,
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div style={{ height: "1px", background: "var(--color-border-light)", margin: "16px 0" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Link
              to="/partner"
              onClick={closeAllDropdowns}
              style={{
                padding: "0.65em 1.3em",
                fontWeight: 600,
                borderRadius: "var(--radius-pill)",
                background: "transparent",
                color: "var(--color-black)",
                border: "1px solid var(--color-border-light)",
                textAlign: "center",
              }}
            >
              Become our partner
            </Link>
            <Link
              to="/pay"
              onClick={closeAllDropdowns}
              style={{
                padding: "0.65em 1.3em",
                fontWeight: 600,
                borderRadius: "var(--radius-pill)",
                background: "var(--gradient-yellow)",
                color: "var(--color-black)",
                boxShadow: "var(--shadow-md)",
                textAlign: "center",
              }}
            >
              Pay bill
            </Link>
          </div>
        </div>
      )}

      {/* Media Query Styles */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav, .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
