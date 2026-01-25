import HeroSection from "./PersonalLoanCard";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

import React from 'react'

function LoanComponent() {
  return (
    <div className="w-full">
        <Navbar/>
        <HeroSection/>

        <div class="w-full bg-slate-50 py-10 px-4">
  <div
    class="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10
           grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center"
  >

    <div>
      <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
        What is a Personal Loan?
      </h2>

      <p class="text-slate-600 leading-relaxed mb-4">
        A personal loan is an unsecured loan that a person borrows from banks or
        NBFCs (Non-banking financial companies) to fulfill immediate and personal
        needs. An unsecured loan does not need any collateral. It is also called
        a signature loan and can be applied by just using a person's financial
        details and creditworthiness.
      </p>

      <p class="text-slate-600 leading-relaxed">
        My Mudra helps you to get an urgent personal loan in India in a minimal
        time, reducing the path between you and your dreams. We are assisting the
        needful in getting a personal loan online and offline with the lowest
        interest rate as per your requirement.
      </p>

      <button
        class="mt-6 inline-flex items-center justify-center rounded-lg
               bg-indigo-500 hover:bg-indigo-600 text-white
               px-6 py-3 font-semibold transition"
      >
        APPLY NOW
      </button>
    </div>


    <div class="flex justify-center">
      <img
        src="/your-image-path.png"
        alt="Personal Loan"
        class="w-full max-w-md rounded-xl object-cover"
      />
    </div>
  </div>
</div>


        <Footer/>
    </div>
  )
}

export default LoanComponent;