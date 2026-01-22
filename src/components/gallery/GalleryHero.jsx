import galleryHeroImage from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.25 PM.jpeg";

const GalleryHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f8df8e] via-[#fdfada] to-yellow-100 mt-12 lg:mt-17 mb-12">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-12 lg:py-12 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT CONTENT - Same spacing/structure */}
          <div className="space-y-9 md:space-y-12 lg:space-y-16">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-black text-[11px] md:text-xs font-semibold tracking-[0.1rem] text-white shadow-lg">
              OUR MEMORIES
              <span className="text-yellow-400 ml-1"> FIRSTLENDER</span>
            </p>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black leading-tight">
              FIRSTLENDER <span className="text-yellow-500 ml-1">Gallery</span>
            </h1>

            <p className="text-md md:text-md lg:text-lg text-gray-700 max-w-xl leading-relaxed font-medium">
              Trusted moments captured over <span className="font-bold text-yellow-600">6+ years</span> - 
              reliving team celebrations, milestones, and the company culture that drives our success.
            </p>

            <p className="text-sm md:text-md lg:text-base text-gray-600 max-w-xl">
              From festive office gatherings to award ceremonies and behind-the-scenes team bonding - 
              every photo tells our growth story and commitment to excellence.
            </p>
          </div>

          {/* RIGHT IMAGE AREA - EXACT Same Card Style */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg rounded-3xl bg-gradient-to-br from-yellow-200 to-yellow-50/90 shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-yellow-100/80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/70 via-transparent to-white/60" />

              <div className="relative p-6 md:p-7">
                <img
                  src={galleryHeroImage}
                  alt="Company team moments captured in gallery"
                  className="w-full h-52 md:h-64 object-cover mx-auto drop-shadow-md"
                />

                {/* Mini Stats Strip - Gallery Edition */}
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-[11px] md:text-xs">
                  <div className="rounded-2xl bg-yellow-50 border border-yellow-100 py-3">
                    <p className="text-base md:text-base font-bold text-gray-900">500+</p>
                    <p className="text-gray-500">Photos</p>
                  </div>
                  <div className="rounded-2xl bg-yellow-50 border border-yellow-100 py-3">
                    <p className="text-base md:text-base font-bold text-gray-900">6+</p>
                    <p className="text-gray-500">Years</p>
                  </div>
                  <div className="rounded-2xl bg-yellow-50 border border-yellow-100 py-3">
                    <p className="text-base md:text-base font-bold text-gray-900">100+</p>
                    <p className="text-gray-500">Events</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle shadow oval */}
            <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-40 md:w-56 rounded-full bg-black/10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
