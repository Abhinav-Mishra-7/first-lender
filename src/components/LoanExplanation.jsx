

function LoanExplanation({heading , p1 , p2 , p3 , p4 , p5 , image}) {

    function processText(para) {
        const words = para.split(" ");
        const result = [];
        
        for (let word of words) {
            if (word.toUpperCase() === "FIRSTLENDER") {
                result.push(
                    <span key={result.length} className="text-yellow-500 font-semibold">
                {word} </span>
            );
            } else {
                result.push(<span key={result.length}>{word} </span>);
            }
        }
        
        return result; 
    }






    return (
            <div class="w-full bg-slate-50 py-10 px-3">
                <div
                class="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
                    grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
                >
                <div>
                <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
                    {heading}
                </h2>

                {p1 && <p class="text-slate-600 leading-relaxed mb-4 text-sm">
                    {processText(p1)}
                </p>}

                {p2 && <p class="text-slate-600 leading-relaxed mb-4 text-sm">
                    {processText(p2)}
                </p>}

                {p3 && <p class="text-slate-600 leading-relaxed mb-4 text-sm">
                    {processText(p3)}
                </p>}

                {p4 && <p class="text-slate-600 leading-relaxed mb-4 text-sm">
                    {processText(p4)}
                </p>}

                {p5 && <p class="text-slate-600 leading-relaxed mb-4 text-sm">
                    {processText(p5)}
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