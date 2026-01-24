// components/ContactForm.jsx
import { Send } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const newErrors = {};

    if (!form.fullName.value.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!form.phone.value.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (
      form.loanAmount.value === "Loan Amount Required"
    ) {
      newErrors.loanAmount = "Please select loan amount";
    }

    if (
      form.loanPurpose.value === "Loan Purpose"
    ) {
      newErrors.loanPurpose = "Please select loan purpose";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit logic here
      console.log("Form submitted successfully");
      form.reset();
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-8.5 bg-white/90 backdrop-blur-sm p-3 md:p-8 lg:p-8 pb-10 rounded-3xl 
      border border-yellow-100 shadow-2xl hover:shadow-3xl transition-all duration-300 text-gray-700"
    >
      {/* Name & Phone */}
        <div className="grid md:grid-cols-2 gap-5">
            <div className="relative p-3">
                <input
                name="fullName"
                type="text"
                placeholder="Full Name *"
                className="w-full p-4 rounded-2xl 
                bg-white/70 backdrop-blur-md 
                shadow-[0_8px_30px_rgba(0,0,0,0.07)]
                focus:shadow-[0_5px_10px_rgba(250,224,51,0.55)]
                focus:ring-0 outline-none
                transition-all duration-300
                text-sm placeholder-gray-400 font-medium"
                />
                {errors.fullName && (
                <p className="mt-2 ml-2 text-xs text-red-500">{errors.fullName}</p>
                )}
            </div>

            <div className="relative p-3">
                <input
                name="phone"
                type="tel"
                placeholder="Phone Number *"
                className="w-full p-4 rounded-2xl 
                bg-white/70 backdrop-blur-md 
                shadow-[0_8px_30px_rgba(0,0,0,0.07)]
                focus:shadow-[0_5px_10px_rgba(250,224,51,0.55)]
                focus:ring-0 outline-none
                transition-all duration-300
                text-sm placeholder-gray-400 font-medium"
                />
                {errors.phone && (
                <p className="mt-2 ml-2 text-xs text-red-500">{errors.phone}</p>
                )}
            </div>
        </div>


      {/* Email */}
      <div className="p-3">
        <input
        name="email"
        type="email"
        placeholder="Email (Optional)"
        className="w-full p-4 rounded-2xl bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.07)]
        focus:shadow-[0_5px_10px_rgba(250,224,51,0.55)] focus:ring-0 outline-none transition-all duration-300
        text-sm placeholder-gray-400 font-medium"
      />
      </div>


      {/* Loan Amount & Purpose */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="relative p-3">
            <select
            name="loanAmount"
            className="w-full p-4 rounded-2xl 
            bg-white/70 backdrop-blur-md 
            shadow-[0_8px_30px_rgba(0,0,0,0.07)]
            focus:shadow-[0_8px_10px_rgba(250,204,51,0.55)]
            focus:ring-0 outline-none
            transition-all duration-300
            text-base font-medium appearance-none text-gray-700 cursor-pointer"
            >
            <option>Loan Amount Required</option>
            <option>₹1L - ₹5L</option>
            <option>₹5L - ₹10L</option>
            <option>₹10L - ₹25L</option>
            <option>₹25L - ₹50L</option>
            <option>₹50L+</option>
            </select>
            {errors.loanAmount && (
            <p className="mt-2 ml-2 text-xs text-red-500">{errors.loanAmount}</p>
            )}
        </div>

        <div className="relative p-3">
            <select
            name="loanPurpose"
            className="w-full p-4 rounded-2xl 
            bg-white/70 backdrop-blur-md 
            shadow-[0_8px_30px_rgba(0,0,0,0.07)]
            focus:shadow-[0_5px_10px_rgba(250,204,51,0.55)]
            focus:ring-0 outline-none
            transition-all duration-300
            text-base font-medium appearance-none text-gray-700 cursor-pointer"
            >
            <option>Loan Purpose</option>
            <option>Working Capital</option>
            <option>Machinery Purchase</option>
            <option>Expansion</option>
            <option>Inventory</option>
            <option>Other</option>
            </select>
            {errors.loanPurpose && (
            <p className="mt-2 ml-2 text-xs text-red-500">{errors.loanPurpose}</p>
            )}
        </div>
    </div>


      {/* Message */}
      <div className="p-3">
        <textarea
        name="message"
        rows="3"
        placeholder="Tell us about your requirements (Optional)"
        className="w-full p-4 rounded-2xl 
        bg-white/70 backdrop-blur-md 
        shadow-[0_8px_30px_rgba(0,0,0,0.07)]
        focus:shadow-[0_8px_10px_rgba(250,204,21,0.55)]
        focus:ring-0 outline-none
        transition-all duration-300
        text-base resize-none placeholder-gray-400 font-medium"
        />
      </div>


      {/* Submit */}
      <div className="w-full flex justify-center">
        <button
            type="submit"
            className="w-80 bg-linear-to-r from-yellow-400 to-yellow-200/60 
            hover:from-yellow-500 hover:to-yellow-200/90 
            text-black font-bold py-4 px-5 rounded-2xl text-sm md:text-md lg:text-base 
            shadow-2xl hover:shadow-3xl hover:-translate-y-1 
            transition-transform duration-300 ease-out will-change-transform
            flex items-center justify-center gap-3 uppercase tracking-wide cursor-pointer"
        >
            <Send size={20} />
            Get Free Consultation
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
