import img1 from "../../../assets/4530235_19222.jpg"

function CGTMSEBenefits({loanType = "CGTMSE"}) {
    return (
        <div className="w-full bg-slate-50 py-10 px-3">
        <div
            className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-7
            grid grid-cols-1 lg:grid-cols-[3.5fr_2fr] gap-10 items-center
            hover:shadow-xl hover:shadow-blue-200 transition-all duration-400"
        >
            {/* LEFT CONTENT - Simple Bullet Points */}
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 pb-4 text-shadow-md">
                    Benifits Of CGTMSE
                </h2>

                <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                    The eligibility criteria for {loanType} loans are minimal, with the
                    requirement to meet the following:
                </p>
            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc pl-5">
                <li><span className="font-medium text-slate-800">No Collateral Required:</span> You don't have to provide your property, land, gold, or any other valuable asset as collateral to avail a loan.</li>
                <li><span className="font-medium text-slate-800">Covers Multiple Industries:</span> The scheme covers manufacturing, trading, service, and more businesses.</li>
                <li><span className="font-medium text-slate-800">Large Loan Amount:</span> The scheme offers loans of up to ₹10 crore to help you grow, invest in equipment, or meet working capital needs.</li>
                <li><span className="font-medium text-slate-800">Special Support for Women and Weaker Sections:</span> Women entrepreneurs, SC/ST entrepreneurs, and businesses in backward regions can get higher coverage.</li>
            </ul>
            </div>

            {/* RIGHT IMAGE - No border, no shadow */}
            <div className="flex justify-center">
            <img
                src={img1}
                alt="CGTMSE Benefits"
                className="w-full max-w-md rounded-xl object-cover"
            />
            </div>
        </div>
        </div>
    );
}

export default CGTMSEBenefits;
