import rightImage from "../../assets/flat-lay-earning-money-concept.jpg"

const WhatIsEmi = () => {
  return (
    <section className="relative  mb-20 px-3 h-full w-full">

      <div className="relative max-w-6xl mx-auto w-full px-6 lg:px-10 py-16 md:py-12 lg:py-10 mt-5 bg-linear-to-r from-[#f8df8e] via-[#fefce0] to-yellow-100 rounded-xl shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">         
          {/* LEFT CONTENT */}
          <div className="space-y-6 md:space-y-7 lg:space-y-9">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-black text-[11px] md:text-xs font-semibold tracking-[0.1rem] text-white shadow-lg">
              WHAT IS <span className="text-yellow-500">EMI</span>?
            </p>

            <h1 className="text-2xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-black leading-tight py-1.5">
              What is Monthly<span className="text-yellow-500 ml-1"> EMI Calculator?</span>
            </h1>

            {/* <div className="text-md md:text-md lg:text-lg text-gray-700 max-w-xl leading-relaxed font-medium space-y-4">
              <p>An EMI calculator online is a simple tool that helps you plan your loan payments. EMI(Equated Monthly Installment) means the fixed amount you pay your lender every month.</p>
              
              <div className="space-y-3 pt-2">
                <span>How much loan amount you can pay to lender every month</span>

                <div className="flex gap-3 pl-4 relative before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full before:-translate-x-2.5">
                  <span>Loan Amount: Enter how much you want to borrow</span>
                </div>
                <div className="flex gap-3 pl-4 relative before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full before:-translate-x-2.5">
                  <span>Interest Rate: See your total interest to repay monthly</span>
                </div>
                <div className="flex gap-3 pl-4 relative before:absolute before:left-0 before:top-0 before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full before:-translate-x-2.5">
                  <span>Tenure: Manage your budget and repayment plan</span>
                </div>
              </div>
            </div> */}
            <div className="text-md md:text-md lg:text-base text-gray-800 max-w-xl leading-relaxed font-medium space-y-4">
            
            <p>An EMI calculator online is a simple tool that helps you plan your loan payments. EMI(Equated Monthly Installment) means the fixed amount you pay your lender every month.</p>
            
            <div className="pt-2">
                <p className="font-semibold text-gray-800 mb-4 text-sm md:text-base lg:text-lg">Here is how it works:</p>
                
                <ul className="space-y-3 pl-2.5 text-sm">
                <li className="flex items-start gap-3 pl-3 relative before:absolute before:left-0 before:top-0.5 before:w-2 before:h-2 before:bg-yellow-600 before:rounded-full before:-translate-x-2.5 before:mt-1">
                    <span>Loan Amount: Enter how much you want to borrow.</span>
                </li>
                <li className="flex items-start gap-3 pl-3 relative before:absolute before:left-0 before:top-0.5 before:w-2 before:h-2 before:bg-yellow-600 before:rounded-full before:-translate-x-2.5 before:mt-1">
                    <span>Interest Rate: Add the yearly interest rate.</span>
                </li>
                <li className="flex items-start gap-3 pl-3 relative before:absolute before:left-0 before:top-0.5 before:w-2 before:h-2 before:bg-yellow-600 before:rounded-full before:-translate-x-2.5 before:mt-1">
                    <span>Loan Period: Enter how long you will take to repay the loan.</span>
                </li>
                </ul>
                
                <p className="mt-6 border-t border-yellow-200/50 text-sm md:text-base font-medium">
                The loan repayment planner will instantly show your monthly payment, making it easier to manage your budget and repayments!
                </p>
            </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-3xl lg:max-w-lg rounded-3xl bg-linear-to-br from-yellow-200 to-yellow-50/90 shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-yellow-100/80 overflow-hidden h-63 md:h-110">
              
              {/* Soft inner linear */}
              <div className="absolute inset-0 bg-linear-to-t from-yellow-100/70 via-transparent to-white/60" />

              {/* Professional EMI Image */}
              <div className="relative p-6 md:p-8">
                <img
                  src={rightImage}
                  alt="Professional calculating EMI on laptop with loan documents"
                  className="w-full h-50 md:h-96 lg:h-93 object-cover rounded-2xl shadow-2xl mx-auto drop-shadow-lg"
                />
              </div>

              {/* Subtle shadow oval */}
              <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-40 md:w-56 rounded-full bg-black/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEmi;
