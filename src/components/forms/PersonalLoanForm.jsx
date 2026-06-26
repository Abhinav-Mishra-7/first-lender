import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Send, CreditCard, Sparkles, RefreshCw, Smartphone, Mail, DollarSign } from 'lucide-react';
import axiosClient from "../../../utils/axiosClient";


export default function PersonalLoanForm({ onSubmit, recipientEmail = 'info@gmail.com' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    monthlySalary: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.mobileNo.trim()) {
      newErrors.mobileNo = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNo.replace(/[-+()\s]/g, ''))) {
      newErrors.mobileNo = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.monthlySalary.trim()) {
      newErrors.monthlySalary = 'Monthly salary is required';
    } else if (isNaN(Number(formData.monthlySalary.replace(/,/g, '')))) {
      newErrors.monthlySalary = 'Please enter a valid amount';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSalaryChange = (e) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, '');
    const formatted = rawVal ? Number(rawVal).toLocaleString('en-IN') : '';
    setFormData((prev) => ({ ...prev, monthlySalary: formatted }));
    if (errors.monthlySalary) {
      setErrors((prev) => ({ ...prev, monthlySalary: undefined }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   setIsSubmitting(true);
  //   setSubmitStatus(null);

  //   try {
  //     if (onSubmit) {
  //       await onSubmit(formData);
  //     } else {
  //       await new Promise((resolve) => setTimeout(resolve, 1000));
  //     }
  //     setSubmitStatus({
  //       type: 'success',
  //       message: 'Your personal loan application details have been saved successfully!',
  //     });
  //   } catch (err) {
  //     setSubmitStatus({
  //       type: 'error',
  //       message: err.message || 'Something went wrong. Please try again.',
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axiosClient.post(
        "/send-email",
        formData
      );

      setSubmitStatus({
        type: "success",
        message:
          response.data.message ||
          "Your personal loan application has been submitted successfully!",
      });

    } catch (err) {
      setSubmitStatus({
        type: "error",
        message:
          err.response?.data?.message ||
          err.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      mobileNo: '',
      monthlySalary: '',
      message: '',
    });
    setErrors({});
    setSubmitStatus(null);
  };

  return (
    <div className="w-full bg-slate-50 py-10 px-3">
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="w-full max-w-6xl pt-3 pb-3 mx-auto bg-yellow-100 rounded-3xl sm:rounded-[2.5rem] shadow-lg border border-neutral-100/50 overflow-hidden hover:shadow-xl hover:shadow-blue-200 transition-all duration-400" 
      id="personal-loan-form-container"
    >

      <div className="flex pt-2 md:pl-9 lg:pl-9 pl-7">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-0 text-shadow-md">
          Fill The Form To Connect With <span className="text-yellow-500">FIRSTLENDER</span>
        </h2>
      </div>
      
      <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-4 sm:pt-4" id="personal-loan-body">
        <AnimatePresence mode="wait">
          {submitStatus?.type === 'success' ? (
            <motion.div 
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="text-center space-y-4 sm:space-y-5" 
              id="personal-success-message"
            >
              {/* <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-tr from-[#FFC700] to-[#FFE066] rounded-full text-white shadow-[0_10px_20px_rgba(255,199,0,0.25)]">
                <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2.5]" />
              </div> */}
              <div className="space-y-1 px-2">
                <h4 className="text-lg sm:text-xl font-extrabold text-neutral-900 uppercase">Application Submitted Successfully!</h4>
                <p className="text-neutral-500 text-[11px] sm:text-xs font-semibold max-w-sm sm:max-w-md mx-auto leading-relaxed">
                  Saved and dispatched via Gmail to <span className="text-neutral-800 underline decoration-[#FFC700] decoration-2 font-bold">{recipientEmail}</span>.
                </p>
              </div>

              <div className="bg-neutral-50/50 rounded-2xl p-4 sm:p-6 text-left border border-neutral-100/60 max-w-xl mx-auto space-y-2.5 sm:space-y-3.5 shadow-sm text-xs sm:text-sm">
                <div className="flex justify-between items-center py-2 border-b border-neutral-200/50">
                  <span className="text-neutral-500 text-[12px] font-extrabold uppercase tracking-wider">Full Name:</span>
                  <span className="text-neutral-800 font-extrabold uppercase text-right">{formData.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200/50">
                  <span className="text-neutral-500 text-[12px] font-extrabold uppercase tracking-wider">Email Address:</span>
                  <span className="text-neutral-800 font-semibold break-all text-right ml-4">{formData.email}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200/50">
                  <span className="text-neutral-500 text-[12px] font-extrabold uppercase tracking-wider">Mobile Number:</span>
                  <span className="text-neutral-800 font-semibold text-right">{formData.mobileNo}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200/50">
                  <span className="text-neutral-500 text-[12px] font-extrabold uppercase tracking-wider">Salary (INR):</span>
                  <span className="text-amber-600 font-extrabold text-sm sm:text-base text-right">₹{formData.monthlySalary}</span>
                </div>
                {formData.message && (
                  <div className="pt-2">
                    <span className="text-neutral-500 text-[12px] font-extrabold uppercase tracking-wider block mb-1">Message:</span>
                    <p className="text-neutral-600 italic text-xs bg-neutral-100/40 p-3 rounded-xl border-l-4 border-[#FFC700]">"{formData.message}"</p>
                  </div>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReset}
                className="inline-flex items-center space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-neutral-900 hover:bg-[#FFC700] text-white hover:text-neutral-950 font-extrabold uppercase text-[10px] sm:text-xs rounded-full transition-all duration-200 cursor-pointer shadow-md"
                id="personal-reset-btn"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Fill New Application</span>
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" id="personal-form-element" noValidate>
              {submitStatus?.type === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase rounded-xl tracking-tight" id="personal-form-error-alert">
                  {submitStatus.message}
                </div>
              )}

              {/* Grid layout for two fields in a row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Full Name */}
                <div className="space-y-1.5" id="personal-field-name">
                  <div className="relative">
                    <input
                      type="text"
                      id="p-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      className={`block w-full px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm rounded-xl sm:rounded-[1.2rem] bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-[0_10px_24px_rgba(0,0,0,0.035)] focus:shadow-[0_12px_28px_rgba(0,0,0,0.055)] border focus:border-amber-400
                        ${errors.name 
                          ? 'border-red-400 bg-red-50/10' 
                          : 'border-neutral-100/85'
                        }`}
                    />
                  </div>
                  {errors.name && <p className="text-[9px] sm:text-[10px] text-red-500 mt-1 pl-2 font-bold uppercase tracking-tight">{errors.name}</p>}
                </div>

                {/* Mobile No */}
                <div className="space-y-1.5" id="personal-field-mobile">
                  <div className="relative">
                    <input
                      type="tel"
                      id="p-mobile"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className={`block w-full px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm rounded-xl sm:rounded-[1.2rem] bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-[0_10px_24px_rgba(0,0,0,0.035)] focus:shadow-[0_12px_28px_rgba(0,0,0,0.055)] border focus:border-amber-400
                        ${errors.mobileNo 
                          ? 'border-red-400 bg-red-50/10' 
                          : 'border-neutral-100/85'
                        }`}
                    />
                  </div>
                  {errors.mobileNo && <p className="text-[9px] sm:text-[10px] text-red-500 mt-1 pl-2 font-bold uppercase tracking-tight">{errors.mobileNo}</p>}
                </div>
              </div>

              {/* Email (Optional) but in our scheme it is validated - let's make it look like mockup with "Email Address *" */}
              <div className="space-y-1.5" id="personal-field-email">
                <div className="relative">
                  <input
                    type="email"
                    id="p-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className={`block w-full px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm rounded-xl sm:rounded-[1.2rem] bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-[0_10px_24px_rgba(0,0,0,0.035)] focus:shadow-[0_12px_28px_rgba(0,0,0,0.055)] border focus:border-amber-400
                      ${errors.email 
                        ? 'border-red-400 bg-red-50/10' 
                        : 'border-neutral-100/85'
                      }`}
                  />
                </div>
                {errors.email && <p className="text-[9px] sm:text-[10px] text-red-500 mt-1 pl-2 font-bold uppercase tracking-tight">{errors.email}</p>}
              </div>

              {/* Grid layout for monthly salary and prefilled loan purpose */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Monthly Salary */}
                <div className="space-y-1.5" id="personal-field-salary">
                  <div className="relative">
                    <input
                      type="text"
                      id="p-salary"
                      name="monthlySalary"
                      value={formData.monthlySalary}
                      onChange={handleSalaryChange}
                      placeholder="Monthly Salary INR *"
                      className={`block w-full px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm rounded-xl sm:rounded-[1.2rem] bg-white text-neutral-800 placeholder-neutral-400 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-[0_10px_24px_rgba(0,0,0,0.035)] focus:shadow-[0_12px_28px_rgba(0,0,0,0.055)] border focus:border-amber-400
                        ${errors.monthlySalary 
                          ? 'border-red-400 bg-red-50/10' 
                          : 'border-neutral-100/85'
                        }`}
                    />
                  </div>
                  {errors.monthlySalary && <p className="text-[9px] sm:text-[10px] text-red-500 mt-1 pl-2 font-bold uppercase tracking-tight">{errors.monthlySalary}</p>}
                </div>
              </div>

              {/* Text Area description */}
              <div className="space-y-1.5" id="personal-field-message">
                <div className="relative">
                  <textarea
                    id="p-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements (Optional)"
                    rows={3}
                    className="block w-full px-4 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm rounded-xl sm:rounded-[1.2rem] bg-white text-neutral-800 placeholder-neutral-400 transition-all duration-300 shadow-lg hover:shadow-[0_10px_24px_rgba(0,0,0,0.035)] focus:shadow-[0_12px_28px_rgba(0,0,0,0.055)] border border-neutral-100/80 focus:border-amber-400 focus:outline-none resize-none font-medium"
                  />
                </div>
              </div>

              {/* Yellow gradient rounded premium button */}
              <div className="pt-2 flex justify-center" id="personal-submit-section">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group w-full max-w-sm flex items-center justify-center space-x-2.5 py-3.5 sm:py-4 px-6 sm:px-8 rounded-full bg-gradient-to-r from-[#FFC700] via-[#FFD633] to-[#FFE57F] text-neutral-900 font-extrabold uppercase text-[10px] sm:text-xs tracking-wider transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_12px_30px_rgba(255,199,0,0.35)] hover:shadow-[0_18px_40px_rgba(255,199,0,0.45)]"
                  id="personal-submit-btn"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <svg className="animate-spin h-4.5 w-4.5 text-neutral-900" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Processing...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 -rotate-12" />
                      <span>Get Free Consultation</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
    </div>
  );
}