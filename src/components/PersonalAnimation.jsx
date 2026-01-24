import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PersonalLoanAnimation = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(8);
  const [termYears, setTermYears] = useState(5);
  const monthlyPayment = (loanAmount * (interestRate / 1200)) / (1 - Math.pow(1 + (interestRate / 1200), -(termYears * 12))); // EMI formula approx

  const totalPayable = monthlyPayment * termYears * 12;
  const interestPaid = totalPayable - loanAmount;
  const progress = (loanAmount / totalPayable) * 100;

  return (
    <div className="loan-anim-container p-8 max-w-md mx-auto bg-linear-to-r from-blue-50 to-green-50 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Personal Loan Visualizer</h2>
      
      {/* Inputs with hover animations */}
      <div className="space-y-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label>Loan Amount: ₹{loanAmount.toLocaleString()}</label>
          <input
            type="range"
            min="10000"
            max="500000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label>Interest Rate: {interestRate}%</label>
          <input
            type="range"
            min="5"
            max="20"
            value={interestRate}
            onChange={(e) => setInterestRate(+e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label>Term: {termYears} years</label>
          <input
            type="range"
            min="1"
            max="10"
            value={termYears}
            onChange={(e) => setTermYears(+e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
        </motion.div>
      </div>

      {/* Animated Results */}
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div>Monthly EMI: ₹{monthlyPayment.toFixed(0).toLocaleString()}</div>
          <div>Total Payable: ₹{totalPayable.toFixed(0).toLocaleString()}</div>
          <div className="text-sm text-gray-600">Interest: ₹{interestPaid.toFixed(0).toLocaleString()}</div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar Animation - Principal growth */}
      <motion.div
        className="w-full bg-gray-200 rounded-full h-6 mt-8 relative overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div
          className="h-full bg-linear-to-r from-blue-500 to-green-500 absolute inset-0"
          style={{ originX: 0 }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
          {progress.toFixed(0)}% Principal
        </div>
      </motion.div>

      {/* Coin Drop Animation for Interest */}
      <AnimatePresence>
        {Array.from({ length: Math.floor(interestPaid / 1000) }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, scale: 0, opacity: 0 }}
            animate={{
              y: 150 + Math.random() * 50,
              scale: 1,
              opacity: [0, 1, 0],
              rotate: [0, 360]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: 1,
              ease: "easeOut"
            }}
            className="absolute w-6 h-6 bg-yellow-400 rounded-full shadow-lg top-4 left-[20%]"
            style={{ left: `${20 + i * 5}%` }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PersonalLoanAnimation;