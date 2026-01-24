import CTAButton from "../shared/Button"
import rightImage from "../../../public/group-five-professionals.avif"

const AboutHero = () => {
    return (
      <section className="relative overflow-hidden bg-linear-to-r from-[#f8df8e] via-[#fdfada] to-yellow-100"> 
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-12 lg:py-12 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6 md:space-y-7 lg:space-y-11">
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-black text-[11px] md:text-xs font-semibold tracking-[0.1rem]  text-white shadow-lg">
                Welcome To
                 <span className="text-yellow-400"> FIRSTLENDER</span>
              </p>
  
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-tight text-shadow-md">
                About <span className="text-yellow-500 ml-1"> FIRSTLENDER</span>
              </h1>
  
              <p className="text-md md:text-md lg:text-lg text-gray-700 max-w-xl leading-relaxed font-medium">
                Trusted over <span className="font-bold text-yellow-600">6 years</span> in
                business and personal lending, helping thousands of customers unlock fast and
                transparent finance.
              </p>
  
              <p className="text-sm md:text-md lg:text-base text-gray-600 max-w-xl">
                From small business owners to salaried professionals, FIRSTLENDER simplifies
                loan journeys with instant eligibility checks, minimal paperwork and
                tailor‑made offers from top banks & NBFCs.
              </p>

              <CTAButton variant = "primary" size="sm"> Learn More </CTAButton>
            </div>
  
            {/* RIGHT ILLUSTRATION AREA */}
            <div className="relative">
              {/* card background like screenshot */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-lg rounded-3xl bg-linear-to-br from-yellow-200 to-yellow-50/90 shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-yellow-100/80 overflow-hidden">
                {/* soft inner gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-yellow-100/70 via-transparent to-white/60" />
  
                {/* main illustration */}
                <div className="relative p-5 md:p-5 lg:p-8">
                  <img
                    src={rightImage}
                    // src="public/group-five-professionals.avif"
                    alt="FIRSTLENDER team helping customers with loans"
                    className="w-full h-52 md:h-50 lg:h-60 object-contain mx-auto drop-shadow-md"
                  />
  
                  {/* mini stats strip at bottom */}
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center text-[11px] md:text-xs">
                    <div className="rounded-2xl bg-yellow-50 border border-yellow-100 py-3">
                      <p className="text-sm md:text-base lg:text-lg font-bold text-gray-900">20+</p>
                      <p className="text-gray-500">Years Experience</p>
                    </div>
                    <div className="rounded-2xl bg-yellow-50 border border-yellow-100 py-3">
                      <p className="text-sm md:text-base lg:text-lg font-bold text-gray-900">50+</p>
                      <p className="text-gray-500">Banks & NBFCs</p>
                    </div>
                    <div className="rounded-2xl bg-yellow-50 border border-yellow-100 py-3">
                      <p className="text-sm md:text-base lg:text-lg font-bold text-gray-900">5K+</p>
                      <p className="text-gray-500">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* subtle shadow oval under card */}
              <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-40 md:w-56 rounded-full bg-black/10 blur-xl" />
            </div>
          </div>
        </div>
      </section>
    );
};
  
export default AboutHero;  