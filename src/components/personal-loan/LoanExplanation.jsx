import img1 from "../../../public/12085315_20944141 (1).jpg"

function LoanExplanation() {
  return (
        <div class="w-full bg-slate-50 py-10 px-3">
            <div
            class="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
                grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
            >
            <div>
            <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 pb-4">
                What is a Personal Loan?
            </h2>

            <p class="text-slate-600 leading-relaxed mb-4 text-sm">
                A personal loan is an unsecured loan that a person borrows from banks or
                NBFCs (Non-banking financial companies) to fulfill immediate and personal
                needs. An unsecured loan does not need any collateral. It is also called
                a signature loan and can be applied by just using a person's financial
                details and creditworthiness.
            </p>

            <p class="text-slate-600 leading-relaxed text-sm">
                FIRSTLENDER helps you to get an urgent personal loan in India in a minimal
                time, reducing the path between you and your dreams. We are assisting the
                needful in getting a personal loan online and offline with the lowest
                interest rate as per your requirement.
            </p>

            {/* <button
                class="mt-6 inline-flex items-center justify-center rounded-lg
                    bg-indigo-500 hover:bg-indigo-600 text-white
                    px-6 py-3 font-semibold transition"
            >
                APPLY NOW
            </button> */}
            </div>


            <div class="flex justify-center">
                <img
                    src={img1}
                    alt="Personal Loan"
                    class="w-full max-w-md rounded-xl object-cover"
                />
            </div>
            </div>
        </div>
  )
}

export default LoanExplanation;