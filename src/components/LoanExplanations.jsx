import { Link } from "react-router";

const loanData = [
  {
    id: 1,
    title: "Professional Loan",
    titleColor: "#003d7a",
    underlineColor: "#17a2b8",
    description:
      "A professional loan is a type of funding meant for professionals, such as accountants and attorneys. It also offers special perks such as career development opportunities, networking, and accessing exclusive resources. However traditional sources to obtain loans are complex and inconvenient which is why you must check out an online lending platform like FIRSTLender which values customer comfort and convenience. Apply today and receive personalized assistance from us.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    imagePosition: "right",
    bgColor: "#f9fafb",
  },
  {
    id: 2,
    title: "Personal Loan",
    titleColor: "#c41e3a",
    underlineColor: "#ef4444",
    description:
      "Whether it's for debt repayment or big life ambitions, a personal loan can be an excellent financial instrument. It offers a range of benefits such as lower interest rates and flexibility. FIRSTLender values accessibility and convenience, which is why we provide equal opportunities for all applicants who need financial assistance. We offer a fast loan sanctioning process that is quicker than the traditional sources. Trust us to assist you in achieving your financial goals.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    imagePosition: "left",
    bgColor: "#fff",
  },
  {
    id: 3,
    title: "Business Loan",
    titleColor: "#003d7a",
    underlineColor: "#f8c740",
    description:
      "Business loan enables you to expand your business and network. It provides financial stability in your business. However, obtaining a business loan can be an overwhelming process but FIRSTLender made it easy for our potential customers. With our experience, we simplified the application process and made it more flexible. With over 10,000 Cr+ disbursed loans, we take pride in our satisfied happy customers. Apply today and take your business to the next level.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
    imagePosition: "right",
    bgColor: "#fffef9",
  },
  {
    id: 4,
    title: "Secure Loan",
    titleColor: "#059669",
    underlineColor: "#10b981",
    description:
      "With a secured loan, the borrower is eligible for a low-interest rate since the lender bears less risk by having property, such as a home or car, pledged as security for the loan amount. Choosing a reliable lender to obtain a loan is therefore crucial. FIRSTLender is a reputable choice, with over 10 K + happy customers securing a track record of satisfying clients and meeting their needs.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    imagePosition: "left",
    bgColor: "#fff",
  },
];

function LoanExplanations() {
  return (
    <section style={{ marginTop: "80px", marginBottom: "80px" }}>
      {loanData.map((loan) => (
        <div
          key={loan.id}
          style={{
            background: loan.bgColor,
            padding: "80px 40px",
          }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: loan.imagePosition === "right" ? "1fr 1fr" : "1fr 1fr",
                gap: "60px",
                alignItems: "center",
              }}
            >
              {/* Content Section */}
              <div style={{ order: loan.imagePosition === "right" ? 1 : 2 }}>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: loan.titleColor,
                    marginBottom: "8px",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  {loan.title}
                  <div
                    style={{
                      width: "50%",
                      height: "4px",
                      background: loan.underlineColor,
                      position: "absolute",
                      bottom: "-8px",
                      left: 0,
                    }}
                  />
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#333",
                    lineHeight: 1.8,
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                >
                  {loan.description}
                </p>

                {/* Yellow Gradient Button */}
                <Link
                  to="/apply"
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg, #f8c740 0%, #e6ad01 100%)",
                    color: "#050505",
                    padding: "12px 40px",
                    borderRadius: "50px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    border: "none",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 6px 16px rgba(248, 199, 64, 0.4), 0 3px 8px rgba(0, 0, 0, 0.15)",
                    transform: "translateY(0)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #ffd966 0%, #f8c740 100%)";
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 24px rgba(248, 199, 64, 0.5), 0 6px 14px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #f8c740 0%, #e6ad01 100%)";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(248, 199, 64, 0.4), 0 3px 8px rgba(0, 0, 0, 0.15)";
                  }}
                >
                  Apply Now
                </Link>
              </div>

              {/* Image Section */}
              <div style={{ order: loan.imagePosition === "right" ? 2 : 1 }}>
                <img
                  src={loan.image}
                  alt={loan.title}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 968px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="order"] {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default LoanExplanations;