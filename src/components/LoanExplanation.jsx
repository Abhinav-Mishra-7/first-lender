

function LoanExplanation({heading , p1 , p2 , image}) {
  return (
        <div class="w-full bg-slate-50 py-10 px-3">
            <div
            class="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
                grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
            >
            <div>
            <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 pb-4">
                {heading}
            </h2>

            {p1 && <p class="text-slate-600 leading-relaxed mb-4 text-sm">
                {p1}
            </p>}

            {p2 && <p class="text-slate-600 leading-relaxed text-sm">
                {p2}
            </p>}
            </div>


            <div class="flex justify-center">
                <img
                    src={image}
                    alt="Personal Loan"
                    class="w-full max-w-md rounded-xl object-cover"
                />
            </div>
            </div>
        </div>
  )
}

export default LoanExplanation;