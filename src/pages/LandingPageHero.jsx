import React, { useState, useEffect } from "react";
import CTAButton from "../components/shared/Button";
import heroSlide1 from "../../public/9650001_7563.jpg";
import heroSlide2 from "../../public/58596573_2306.i402.021.S.m004.c13.Credit score flat composition.jpg";
import heroSlide3 from "../../public/arranged-mortgage-approved-paper-desk.jpg";
import heroSlide4 from "../../public/23991565_6859168.jpg"
import heroSlide5 from "../../public/20289191_6247661.jpg"
import heroSlide6 from "../../public/12085315_20944141.jpg"

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: "Instant Personal Loans",
      subtitle: "Up to ₹20 Lakhs • No Collateral",
      description:
        "Get approved in minutes with minimal paperwork. Loans for salaried individuals and MSMEs from trusted lenders.",
      features: "✅ Instant Eligibility • ✅ Paperless • ✅ Fast Disbursal",
      image: heroSlide2,
      stats: ["₹20L+", "2 Min", "99%"]
    },
    {
      title: "MSME Business Loans",
      subtitle: "Collateral-Free up to ₹5 Cr",
      description:
        "Working capital and term loans backed by CGTMSE to help your business scale confidently.",
      features: "✅ CGTMSE • ✅ No Collateral • ✅ Flexible EMI",
      image: heroSlide1,
      stats: ["₹5Cr+", "CGTMSE", "50+"]
    },
    {
      title: "Credit Card Limit Boost",
      subtitle: "Higher Limits • Better Rewards",
      description:
        "Enhance your credit card limit instantly and convert spends into easy EMIs.",
      features: "✅ Instant Upgrade • ✅ 0% Fee • ✅ Rewards",
      image: heroSlide4,
      stats: ["99%", "24h", "0%"]
    },
    {
      title: "PID Financing", 
      subtitle: "Property Assessment • Infrastructure",
      description: "Fund business expansion through PID bonds. Property assessments repay infrastructure investments.",
      features: "✅ Tax-Linked Funding • ✅ No Personal Guarantee • ✅ Economic Development",
      image: heroSlide6, // Property/business district image
      stats: ["2:1 Ratio", "Tax-Based", "Infrastructure"]
    },
    {
      title: "Professional Loan", 
      subtitle: "Doctors • CAs • No Collateral",
      description: "Special loans for medical professionals & chartered accountants. Up to ₹1 Cr with minimal documentation.",
      features: "✅ High Loan Amount • ✅ Low Interest • ✅ No Collateral",
      image: heroSlide5, // Doctor/CA professional image
      stats: ["₹1Cr", "12% Rate", "No Security"]
    }


  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f8df8e] via-[#fdfada] to-yellow-100 
    py-7 md:py-8 lg:py-8 lg:mt-26 md:mt-24 mt-22 lg:h-123">

      <div className="relative max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-7 md:space-y-8.5 lg:space-y-8.5">
             <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-black text-[11px] md:text-xs font-semibold tracking-[0.1rem]  text-white shadow-lg">
                Welcome To
                 <span className="text-yellow-400"> FIRSTLENDER</span>
              </p>
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl 
                           font-extrabold tracking-tight 
                           text-black leading-tight transition-all duration-500">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-md md:text-lg font-bold text-yellow-600">
              {slide.subtitle}
            </p>

            {/* Description */}
            <p className="text-md md:text-lg text-gray-700 
                          max-w-xl leading-relaxed font-medium">
              {slide.description}
            </p>

            {/* Feature strip */}
            {/* <p className="text-sm text-gray-600 font-medium 
                          max-w-xl bg-white/70 
                          px-4 py-3 rounded-xl backdrop-blur-sm">
              {slide.features}
            </p> */}

            {/* CTA */}
            <CTAButton
              to="/apply"
              variant="primary"
              size="md"
              className="shadow-lg hover:scale-105 transition-all"
            >
              Apply Now
            </CTAButton>
          </div>

          {/* ================= RIGHT IMAGE CARD ================= */}
          <div className="relative">
            {/* card background like screenshot */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg rounded-3xl bg-linear-to-br from-yellow-200 to-yellow-50/90 shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-yellow-50/90 overflow-hidden">
            {/* soft inner gradient */}
            {<div className="absolute inset-0 bg-linear-to-t from-yellow-100/70 via-transparent to-white/60" />
            
            /* main illustration */}
            <div className="relative">
              <img
                src={slide.image}
                alt="FIRSTLENDER team helping customers with loans"
                className="w-full h-75 md:h-80 object-cover mx-auto drop-shadow-md"
              />
            
              {/* mini stats strip at bottom */}
              {/* <div className="mt-6 absolute z-100 bottom-5 left-15 grid grid-cols-3 gap-3 text-center text-[11px] md:text-xs">
                <div className="rounded-2xl bg-yellow-50 border border-yellow-100 py-3 px-3">
                  <p className="text-sm md:text-base font-bold text-gray-900 text-center">20+</p>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div className="rounded-2xl bg-yellow-50 border border-yellow-100 py-3">
                  <p className="text-sm md:text-base font-bold text-gray-900">50+</p>
                  <p className="text-gray-500">Banks & NBFCs</p>
                </div>
                <div className="rounded-2xl bg-yellow-50 border border-yellow-100 py-3">
                  <p className="text-sm md:text-base font-bold text-gray-900">5K+</p>
                  <p className="text-gray-500">Happy Clients</p>
                </div>
               </div> */}
            </div>
          </div>
            
          {/* subtle shadow oval under card */}
          <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-40 md:w-56     rounded-full bg-black/10 blur-xl" />
          </div>
        </div>

        {/* ================= SLIDER DOTS ================= */}
        <div className="flex justify-center gap-2 mt-6">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === activeSlide
                  ? "bg-yellow-500 scale-125"
                  : "bg-gray-300 hover:bg-yellow-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
