import CTAButton from "../components/shared/Button";
import { CheckCircle } from "lucide-react";

const loanData = [
  {
    id: 1,
    title: "Professional Loans – FIRST LENDER",
    titleColor: "#003d7a",
    underlineColor: "#17a2b8",
    tagline: "Specialised Financing. Tailored Advice. Empowering Every Professional.",
    description:
      "Professionals like Doctors, Chartered Accountants, and Company Secretaries need smart financial support to grow their practice, upgrade infrastructure, and manage working capital. At FIRST LENDER, we provide specialised professional loan advisory to help you choose the right lender, best rates, and flexible repayment options — all with complete transparency.",
    items: [
      {
        title: "Doctors",
        description: "For clinic setup, medical equipment, renovation, expansion, working capital, or digital upgrades."
      },
      {
        title: "Chartered Accountants",
        description: "For office expansion, technology upgrades, hiring staff, working capital, or managing professional commitments."
      },
      {
        title: "Company Secretaries",
        description: "For setting up office space, software subscriptions, workload management, or professional growth."
      }
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    imagePosition: "right",
    bgColor: "#f9fafb",
  },
  {
    id: 2,
    title: "Personal Loans – FIRST LENDER",
    titleColor: "#c41e3a",
    underlineColor: "#ef4444",
    tagline: "Smart Advice. Fast Approval. Complete Peace of Mind.",
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
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    imagePosition: "left",
    bgColor: "#fff",
  },
  {
    id: 3,
    title: "Business Loans – FIRST LENDER",
    titleColor: "#003d7a",
    underlineColor: "#f8c740",
    tagline: "Smart Financing. Clear Guidance. Faster Growth.",
    description:
      "At FIRST LENDER, we don't just help you get funds — we help you choose the right funds. As your dedicated business loan advisor, we simplify the lending maze and connect you to financing that fits your goals, cash flow, and growth plans.",
    items: [
      {
        title: "Fast & Flexible Financing",
        description: "Access top banks and NBFCs without visiting multiple branches with streamlined documentation."
      },
      {
        title: "Tailored Solutions",
        description: "We compare interest rates, eligibility, terms, and processing times to deliver the ideal match."
      },
      {
        title: "Dedicated Support",
        description: "Faster approvals and hassle-free disbursement with our expert team guiding every step."
      }
    ],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
    imagePosition: "right",
    bgColor: "#fffef9",
  },
  {
    id: 4,
    title: "Home Loans – FIRST LENDER",
    titleColor: "#059669",
    underlineColor: "#10b981",
    tagline: "Expert Guidance. Better Rates. Your Dream Home Made Simple.",
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
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    imagePosition: "left",
    bgColor: "#fff",
  },
];

function LoanExplanations() {
  return (
    <section className="mt-20 md:mt-32 mb-10 md:mb-16">
      {loanData.map((loan) => (
        <div key={loan.id} style={{ backgroundColor: loan.bgColor }} className="px-5 py-15 md:py-20" >
          <div className="w-full max-w-[90vw] mx-auto">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
                loan.imagePosition === "right" ? "" : "md:grid-flow-dense"
              }`}
            >
              {/* Content Section */}
              <div
                className={`loan-content flex flex-col ${
                  loan.imagePosition === "right" ? "md:col-start-1" : "md:col-start-2"
                }`}
              >
                {/* Title with Underline */}
                <h2
                  style={{ color: loan.titleColor }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 relative inline-block pb-4 w-fit"
                >
                  {loan.title}
                  <div
                    style={{
                      backgroundColor: loan.underlineColor,
                    }}
                    className="absolute bottom-0 left-0 h-1 w-3/4 md:w-2/3"
                  />
                </h2>

                {/* Tagline */}
                <p className="text-sm md:text-md text-black font-bold mt-3 mb-5">
                  {loan.tagline}
                </p>

                {/* Main Description */}
                <p className="text-sm md:text-md text-gray-800 leading-8 mb-8 md:mb-10">
                  {loan.description}
                </p>

                {/* Items with Checkmarks */}
                <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
                  {loan.items.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      {/* Checkmark */}
                      <div className="shrink-0 mt-1">
                        <div
                          style={{ backgroundColor: loan.underlineColor }}
                          className="flex items-center justify-center h-5 w-5 rounded-full shadow-sm"
                        >
                          <CheckCircle size={16} className="text-white" />
                        </div>
                      </div>

                      {/* Item Content */}
                      <div>
                        <h4 className="text-sm md:text-base font-bold text-black mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <CTAButton to="/apply" variant="primary" size="md">
                  Apply Now
                </CTAButton>
              </div>

              {/* Image Section */}
              <div
                className={`loan-image ${
                  loan.imagePosition === "right" ? "md:col-start-2" : "md:col-start-1"
                }`}
              >
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl">
                  <img
                    src={loan.image}
                    alt={loan.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default LoanExplanations;


// import CTAButton from "../components/shared/Button";

// const loanData = [
//   {
//     id: 1,
//     title: "Professional Loans – FIRST LENDER",
//     titleColor: "#003d7a",
//     underlineColor: "#17a2b8",
//     extra: "Specialised Financing. Tailored Advice. Empowering Every Professional.",
//     description:
//       `Professionals like Doctors, Chartered Accountants, and Company Secretaries need smart financial support to grow their practice, upgrade infrastructure, and manage working capital. At FIRST LENDER, we provide specialised professional loan advisory to help you choose the right lender, best rates, and flexible repayment options — all with complete transparency.
//       ✔ Doctors (For clinic setup, medical equipment, renovation, expansion, working capital, or digital upgrades.)
//       ✔ Chartered Accountants (For office expansion, technology upgrades, hiring staff, working capital, or managing professional commitments.)
//       ✔ Company Secretaries (For setting up office space, software subscriptions, workload management, or professional growth.)
//       `,
//     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
//     imagePosition: "right",
//     bgColor: "#f9fafb",
//   },
//   {
//     id: 2,
//     title: "Personal Loans – FIRST LENDER",
//     titleColor: "#c41e3a",
//     underlineColor: "#ef4444",
//     extra: "Smart Advice. Fast Approval. Complete Peace of Mind.",
//     description:
//       `At FIRST LENDER, we don’t just help you apply for a Personal Loan — we guide you to the right one. As your trusted financial advisor, we compare top banks and NBFCs, explain every option clearly, and ensure you choose a loan that fits your needs, budget, and future plans.
//       Because we believe loans should empower you — not overwhelm you.
//       Our role as advisors is to give you clarity, choice, and confidence, so you always pick the loan that’s right for your life and goals. we make the entire process simple, stress-free, and tailored to your needs. Reach out to us today and let our experts guide you toward the right personal loan with confidence.
//       `,
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
//     imagePosition: "left",
//     bgColor: "#fff",
//   },
//   {
//     id: 3,
//     title: "Business Loans – FIRST LENDER",
//     titleColor: "#003d7a",
//     underlineColor: "#f8c740",
//     extra: "Smart Financing. Clear Guidance. Faster Growth.",
//     description:
//       `At FIRST LENDER, we don’t just help you get funds — we help you choose the right funds.
//       As your dedicated business loan advisor, we simplify the lending maze and connect you to financing that fits your goals, cash flow, and growth plans.
      
//       Every business deserves the opportunity to grow, expand, and operate smoothly. Our business loan solutions are designed to provide fast, flexible, and reliable financing — so you can focus on building your success while we handle the rest.
//       Access top banks and NBFCs without visiting multiple branches. We compare interest rates, eligibility, terms, and processing times to deliver the ideal match for your business.
//       With streamlined documentation and dedicated support, we ensure faster approvals and hassle-free disbursement. 
//       `,
//     image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
//     imagePosition: "right",
//     bgColor: "#fffef9",
//   },
//   {
//     id: 4,
//     title: "Home Loans – FIRST LENDER",
//     titleColor: "#059669",
//     underlineColor: "#10b981",
//     extra: "Expert Guidance. Better Rates. Your Dream Home Made Simple.",
//     description:
//       `Buying a home is one of life’s biggest decisions — and your loan should make it easier, not harder. At FIRST LENDER, we act as your trusted home loan advisor, helping you choose the right lender, the right interest rate, and the right EMI structure so you can move into your dream home with confidence.
//       We understand your income, credit profile, and property type to recommend only the most suitable loan options — ensuring maximum savings and minimal stress. Get personalized quotes from leading banks & housing finance companies without visiting multiple branches. Choose the best offer in one place.
//       Home loans involve detailed paperwork — we simplify it. Our advisors help you prepare documents, check eligibility, and coordinate with lenders for faster approval.
//       `,
//     image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
//     imagePosition: "left",
//     bgColor: "#fff",
//   },
// ];

// function LoanExplanations() {
//   return (
//     <section style={{ marginTop: "80px", marginBottom: "40px"}}>
//       {loanData.map((loan) => (
//         <div key={loan.id} style={{background: loan.bgColor,padding: "80px 20px", border: "2px solid black"}} >
//           <div style={{ maxWidth: "90vw", margin: "0 auto" }}>
//             <div
//               className="loan-explanation-grid"
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: loan.imagePosition === "right" ? "1fr 1fr" : "1fr 1fr",
//                 gap: "60px",
//                 alignItems: "center",
//               }}
//             >
//               {/* Content Section */}
//               <div 
//                 className="loan-content flex flex-col"
//                 style={{ order: loan.imagePosition === "right" ? 1 : 2 }}
//               >
//                 <h2
//                   style={{
//                     fontSize: "2rem",
//                     fontWeight: 700,
//                     color: loan.titleColor,
//                     marginBottom: "8px",
//                     position: "relative",
//                     display: "inline-block",
//                   }}
//                 >
//                   {loan.title}
//                   <div
//                     style={{
//                       width: "50%",
//                       height: "4px",
//                       background: loan.underlineColor,
//                       position: "absolute",
//                       bottom: "-8px",
//                       left: 0,
//                       marginBottom: "10px"
//                     }}
//                   />
//                 </h2>
//                 <p><strong className="!important text-black"> {loan.extra} </strong></p>
//                 <p
//                   style={{
//                     fontSize: "1rem",
//                     color: "#333",
//                     lineHeight: 1.8,
//                     marginTop: "20px",
//                     marginBottom: "30px",
//                   }}
//                 >
//                   {loan.description}
//                 </p>

//                 <CTAButton to="/apply" variant="primary" size="md">Apply Now</CTAButton>

//               </div>

//               {/* Image Section */}
//               <div 
//                 className="loan-image"
//                 style={{ order: loan.imagePosition === "right" ? 2 : 1 }}
//               >
//                 <img
//                   src={loan.image}
//                   alt={loan.title}
//                   style={{
//                     width: "100%",
//                     height: "400px",
//                     objectFit: "cover",
//                     borderRadius: "20px",
//                     boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Responsive Styles - FIXED */}
//       <style>{`
//         @media (max-width: 968px) {
//           .loan-explanation-grid {
//             grid-template-columns: 1fr !important;
//             gap: 30px !important;
//           }
//           .loan-content,
//           .loan-image {
//             order: 1 !important;
//           }
//           .loan-image {
//             order: 0 !important;
//           }
//           .loan-image img {
//             height: 250px !important;
//           }
//           .loan-content h2 {
//             font-size: 1.8rem !important;
//           }
//           .loan-content p {
//             font-size: 0.9rem !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default LoanExplanations;
