function LoanComparisonTable() {
  return (
    <div className="w-full bg-white pb-10 px-3 text-black">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200
          p-6 md:p-8 transition-all duration-300">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-shadow-md">
            Compare Online Personal Loans from Our Top Lenders
          </h2>

          <p className="mt-4 text-slate-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Selecting the right personal loan is a matter of comparing interest
            rate, tenure, and charges. My Mudra makes it easy by connecting you
            with top banks and NBFCs for the best deals.
          </p>

          <p className="mt-3 text-slate-700 font-medium">
            Check the table below to compare and find the right fit for you:
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border border-slate-300 text-sm text-left">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-black px-4 py-3 font-semibold">
                  Top Banks
                </th>
                <th className="border border-black px-4 py-3 font-semibold">
                  Interest Rate
                </th>
                <th className="border border-black px-4 py-3 font-semibold">
                  Loan Amount
                </th>
                <th className="border border-black px-4 py-3 font-semibold">
                  Tenure
                </th>
                <th className="border border-black px-4 py-3 font-semibold">
                  Processing Fee
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-slate-50">
                <td className="border px-4 py-3">
                  HDFC Bank Personal Loan
                </td>
                <td className="border px-4 py-3">
                  9.99% to 24.00% per annum
                </td>
                <td className="border px-4 py-3">
                  Up to ₹40 lakh
                </td>
                <td className="border px-4 py-3">
                  1 year to 5 years
                </td>
                <td className="border px-4 py-3">
                  ₹6,500 + GST
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="border px-4 py-3">
                  Kotak Bank Personal Loan
                </td>
                <td className="border px-4 py-3">
                  9.97% to 16.99% per annum
                </td>
                <td className="border px-4 py-3">
                  Up to ₹10 lakh
                </td>
                <td className="border px-4 py-3">
                  Up to 6 years
                </td>
                <td className="border px-4 py-3">
                  Up to 3%
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="border px-4 py-3">
                  ICICI Bank Personal Loan
                </td>
                <td className="border px-4 py-3">
                  9.99% to 16.99% per annum
                </td>
                <td className="border px-4 py-3">
                  Up to ₹50 lakh
                </td>
                <td className="border px-4 py-3">
                  1 year to 6 years
                </td>
                <td className="border px-4 py-3">
                  Up to 3%
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="border px-4 py-3">
                  Axis Bank Personal Loan
                </td>
                <td className="border px-4 py-3">
                  10.55% to 21.80% per annum
                </td>
                <td className="border px-4 py-3">
                  Up to ₹40 lakh
                </td>
                <td className="border px-4 py-3">
                  Up to 7 years
                </td>
                <td className="border px-4 py-3">
                  Up to 2%
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="border px-4 py-3">
                  SBI Bank Personal Loan
                </td>
                <td className="border px-4 py-3">
                  10.30% to 15.30% per annum
                </td>
                <td className="border px-4 py-3">
                  Up to ₹50 lakh
                </td>
                <td className="border px-4 py-3">
                  1 year to 6 years
                </td>
                <td className="border px-4 py-3">
                  Up to 3%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LoanComparisonTable;