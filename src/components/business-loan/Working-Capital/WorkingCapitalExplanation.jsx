import img1 from "../../../assets/4530235_19222.jpg" 

function WorkingCapitalExplanation() {
    function processText(para) {
        const words = para.split(" ");
        const result = [];
        
        for (let word of words) {
            if (word.toUpperCase() === "FIRSTLENDER") {
                result.push(
                    <span key={result.length} className="text-yellow-500 font-semibold">
                        {word} 
                    </span>
                );
            } else {
                result.push(<span key={result.length}>{word} </span>);
            }
        }
        
        return result; 
    }

    return (
        <div className="w-full bg-slate-50 py-10 px-3">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
                grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
            >
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
                        What is Working Capital Loan?
                    </h2>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                        {processText("A Working Capital Loan is a short-term financing option that MSMEs can use to meet their daily operational costs.")}
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                        {processText("Unlike long-term loans that fund assets like property or equipment, working capital loans are meant to cover essential business expenses that do not result in long-term assets.")}
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm font-semibold">
                        {processText("Working capital loan helps in –")}
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                        {processText("• Equip you to better leverage business opportunities.")}
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                        {processText("• Prepare your business to take up bulk orders.")}
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                        {processText("• Boosts cash flow, manages sales fluctuations, and acts as a cash cushion.")}
                    </p>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                        {processText("For MSMEs, working capital loans are crucial for maintaining liquidity and ensuring smooth operations, allowing businesses to focus on growth without the burden of immediate financial pressures.")}
                    </p>
                </div>

                <div className="flex justify-center">
                    <img
                        src={img1}
                        alt="Working Capital Loan"
                        className="w-full max-w-md rounded-xl object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkingCapitalExplanation;
