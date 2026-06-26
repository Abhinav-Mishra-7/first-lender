import RahulSir from "../../assets/Founders/IMG_20260626_123233.jpg";
import LokeshSir from "../../assets/Founders/IMG_20260626_123253.jpg";

import { useState, useEffect } from "react";

const teamData = [
  {
    id: 1,
    name: "Rahul Singh",
    role: "Founder & Managing Director",
    credentials: "MBA (Finance) | 15+ Years of Experience",
    badge: "Founder",
    initials: "RS",
    // image: "/images/rahul-singh.jpg",
    image: RahulSir,
    appointment: "01 Jan, 2020",
    age: "38 Years",
    nationality: "Indian",
    expertise: ["Personal Loans","Business Loans","Home Loans","Vehicle Loans","Mortgage Loans","Structured Finance"],
    tagline: "Specializes in structuring and securing all types of loans through strong banking partnerships.",
    bio: [
      `As Founder & Managing Director, Rahul Singh specializes in structuring and securing all types of loans through strong banking partnerships. Known for his integrity, strategic insight, and client-focused approach, Rahul is committed to making financial solutions accessible, transparent, and result-driven.
      With over 15 years of extensive experience in the financial services industry, Rahul Singh is a seasoned finance professional specializing in comprehensive loan facilitation across all major banking sectors.`,
      
      `Rahul’s rich underwriting experience gained through various banks and NBFCs provides him with a deep understanding of what lenders look for while evaluating loan applications. Leveraging this expertise, he help clients structure and position their cases effectively, significantly improving the chances of faster approvals, smoother sanctions, and hassle-free disbursements.`,

      `Holding an MBA in Finance, Rahul brings deep industry insight, strategic financial expertise, and a strong understanding of banking frameworks. His career has been defined by a commitment to ethical practices, transparent advisory, and client-first service.`,

      `Under his leadership, the company has built trusted partnerships with leading banks, enabling individuals and businesses to access a wide range of loan solutions — including personal loans, business loans, home loans, vehicle loans, mortgage loans, and other structured financial products.
      Rahul believes that access to finance should be clear, efficient, and empowering. His approach combines professionalism with personalized guidance, ensuring every client receives tailored solutions aligned with their financial goals.`,
    ],
    quote: "My mission is to simplify the lending journey and help clients move forward with confidence and financial clarity.",
  },
  {
  id: 1,
  name: "Lokesh Khariwal",
  role: "Founder",
  credentials: "Chartered Accountant | 10+ Years of Experience",
  badge: "Founder",
  initials: "LK",
  // image: "/images/lokesh-khariwal.jpg",
  image: LokeshSir,
  appointment: "01 Jan, 20XX", // Update as needed
  age: "", // Update if required
  nationality: "Indian",
  expertise: [
    "Home Loans",
    "Business Loans",
    "Loan Against Property (LAP)",
    "MSME Finance",
    "Working Capital Finance",
    "Customized Financial Solutions"
  ],
  tagline:
    "Chartered Accountant and banking professional dedicated to delivering customized financial solutions with transparency and expertise.",
  bio: [
    `Mr. Lokesh Khariwal, Founder of FIRST LENDER, is a Chartered Accountant and an accomplished banking professional with over a decade of experience in the finance and banking industry. After gaining extensive exposure through three years of practice with a CA firm and eight years in the banking sector, he began his entrepreneurial journey by establishing FIRST LENDER.`,

    `With a strong understanding of credit, finance, and business strategy, Lokesh founded FIRST LENDER with the vision of providing seamless and customized financial solutions to individuals, professionals, and businesses across India. As the driving force behind the organization, he is committed to delivering practical, customer-centric financial services.`,

    `His combined experience in chartered accountancy and banking has given him in-depth knowledge of lending, credit assessment, and financial planning. This expertise enables him to guide clients toward the most suitable funding solutions while ensuring a transparent, efficient, and hassle-free borrowing experience.`,

    `Under his leadership, FIRST LENDER has grown into a trusted financial solutions partner, facilitating funding across Home Loans, Business Loans, Loan Against Property (LAP), MSME Finance, Working Capital Finance, and specialized lending solutions. His entrepreneurial mindset, commitment to operational excellence, and focus on long-term client relationships continue to drive the company's mission of empowering individuals and businesses with the right financial solutions at the right time.`,
  ],
  quote:
    "My vision is to make financial solutions simple, transparent, and accessible, empowering every individual and business to achieve sustainable growth with confidence.",
}
];

export default function TeamCards() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const count = teamData.length;
  const gridClass =
    count === 1
      ? "flex justify-center"
      : count === 2
      ? "flex justify-center gap-6 flex-wrap"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center";

  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-12 md:mb-16">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-yellow-700">
            Our Core Team
            </p>
            <h3 className="pt-4 text-3xl md:text-4xl font-bold text-gray-900">
            People behind <span className="text-yellow-500">FIRSTLENDER</span>
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            A specialised team from banking, risk and technology working together to build India’s most trusted loan platform.
            </p>
        </div>

      <div className={`max-w-5xl mx-auto ${gridClass}`}>
        {teamData.map((person) => (
          <MemberCard key={person.id} person={person} onClick={() => setSelected(person)} />
        ))}
      </div>

      {selected && <Modal person={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

/* ── Small card ── */
function MemberCard({ person, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer w-75 rounded-2xl border border-gray-100 bg-white overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
    >
      {/* <div className="h-1 bg-yellow-400 w-full" /> */}
      <div className="relative bg-gray-50 flex items-end justify-center overflow-hidden">
        {person.image ? (
          <img src={person.image} alt={person.name} className="w-full h-60 object-cover object-top" />
        ) : (
          <div className="w-40 h-40 rounded-full bg-gray-900 border-4 border-yellow-400 flex items-center justify-center mb-4">
            <span className="text-yellow-400 text-3xl font-extrabold">{person.initials}</span>
          </div>
        )}
      </div>
      <div className="px-5 py-3 text-center">
        <p className="font-extrabold text-gray-900 text-base leading-tight">{person.name}</p>
        <p className="text-yellow-600 text-xs font-semibold mt-1 leading-snug">{person.role}</p>
        {/* <p className="text-gray-400 text-[11px] mt-3 group-hover:text-yellow-500 transition-colors duration-200">
          View full profile →
        </p> */}
      </div>
    </div>
  );
}

/* ── Modal ── */
function Modal({ person, onClose }) {
  return (
    <div
      className="fixed inset-0 z-500 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      {/* max-w-4xl = wider card matching reference */}
      <div
        className="bg-white rounded-xl w-full max-w-5xl max-h-[80vh] overflow-y-auto scrollbar-hide relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-5 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center text-gray-500 hover:text-black font-bold text-sm shadow"
          aria-label="Close"
        >
          ✕
        </button>

        {/* ── HEADER: photo left, info right, yellow bar far right ── */}
        <div className="flex flex-col sm:flex-row relative min-h-[280px]">

          {/* LEFT — photo inside a rounded bordered box with light blue gradient bg */}
          <div className="sm:w-[40%] w-full shrink-0 p-6 flex items-center justify-center">
            <div
              className="w-full rounded-2xl overflow-hidden border border-blue-100"
              style={{ background: "linear-gradient(160deg, #dbeafe 0%, #bfdbfe 55%, #e0f2fe 100%)" }}
            >
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full object-cover object-top"
                  style={{ height: "260px" }}
                />
              ) : (
                <div className="flex items-center justify-center" style={{ height: "260px" }}>
                  <div className="w-28 h-28 rounded-full bg-gray-900 border-4 border-yellow-400 flex items-center justify-center">
                    <span className="text-yellow-400 text-2xl font-extrabold">{person.initials}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT — name, role, stats. Padding-right keeps clear of yellow bar */}
          <div className="flex-1 flex flex-col justify-center px-6 py-8 pr-10">
            {/* Name */}
            <h3 className="text-2xl sm:text-[2rem] font-extrabold text-gray-900 leading-tight tracking-tight">
              {person.name}
            </h3>

            {/* Role */}
            <p className="text-gray-500 text-sm sm:text-base mt-1 mb-3">
              {person.role}
            </p>

            <p className="text-gray-500 text-sm sm:text-base mb-6">
              {person.credentials}
            </p>

            {/* Stat row with pipe dividers — exactly like reference */}
            <div className="flex flex-wrap items-start gap-y-3">
              <StatItem
                icon={
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
                label="Date of appointment"
                value={person.appointment}
              />
              <div className="w-px bg-gray-200 self-stretch mx-5" />
              <StatItem
                icon={
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                label="Age"
                value={person.age}
              />
              <div className="w-px bg-gray-200 self-stretch mx-5" />
              <StatItem
                icon={
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                }
                label="Nationality"
                value={person.nationality}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mx-6" />

        {/* ── BODY ── */}
        <div className="p-6 sm:p-8 pt-5">
          {/* Expertise pills */}
          {/* <div className="flex flex-wrap gap-2 mb-5">
            {person.expertise.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div> */}

          {/* Section heading */}
          <h4 className="text-base font-extrabold text-gray-900 mb-3">Detailed Information</h4>

          {/* Tagline */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed border-l-4 border-yellow-400 pl-4 mb-4">
            {person.tagline}
          </p>

          {/* Bio */}
          <div className="space-y-3">
            {person.bio.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">{para}</p>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-6 bg-gray-900 rounded-xl p-5 sm:p-6 relative">
            <span className="text-yellow-400 text-5xl font-serif leading-none absolute top-2 left-5 select-none">"</span>
            <p className="text-white text-sm sm:text-base leading-relaxed italic pt-6 pl-2">{person.quote}</p>
            <p className="text-yellow-400 font-semibold text-xs mt-3 pl-2">— {person.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Stat item ── */
function StatItem({ icon, label, value }) {
  return (
    <div className="flex flex-col">
      <span className="flex items-center gap-1.5 text-blue-500 text-[10px] font-bold tracking-wide uppercase mb-1">
        {icon}
        {label}
      </span>
      <span className="text-gray-900 text-sm font-semibold">{value}</span>
    </div>
  );
}