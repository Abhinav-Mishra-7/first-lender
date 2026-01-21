// pages/EmiCalculator.jsx - COMPACT Viewport-Friendly Version
import { Calculator, DollarSign, Calendar, Percent, TrendingUp } from "lucide-react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { useState, useEffect } from "react";
import EmiHero from "./EmiHero";
import EmiCalculatorSection from "./EmiCalculatorSection";
import WhatIsEmi from "./WhatIsEmi";

const EmiCalculator = () => {
  const [formData, setFormData] = useState({
    loanAmount: 500000,
    interestRate: 12,
    tenure: 60
  });

  const [results, setResults] = useState({
    EMI: 0,
    totalAmount: 0,
    totalInterest: 0,
    principalPercent: 0
  });

  useEffect(() => {
    const P = parseFloat(formData.loanAmount);
    const R = parseFloat(formData.interestRate) / 12 / 100;
    const N = parseFloat(formData.tenure);
    
    const EMI = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
    const totalAmount = EMI * N;
    const totalInterest = totalAmount - P;
    const principalPercent = ((P / totalAmount) * 100).toFixed(0);
    
    setResults({
      EMI: Math.round(EMI),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principalPercent
    });
  }, [formData]);

  return (
    <section className="pt-20 bg-white min-h-screen">
      <Navbar />

      <EmiHero/>   

      <EmiCalculatorSection formData={formData} setFormData={setFormData} results={results}/>
      
      <WhatIsEmi/>

      <Footer />
    </section>
  );
};

export default EmiCalculator;
