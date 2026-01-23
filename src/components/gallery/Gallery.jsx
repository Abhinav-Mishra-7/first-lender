// components/Gallery.jsx - COMPLETE CODE with Working Modal
import GalleryHero from "./GalleryHero";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { useState } from "react";

// import images 
import img1 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.25 PM.jpeg"
import img2 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.19 PM.jpeg"
import img3 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.20 PM (1).jpeg"
import img4 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.20 PM (2).jpeg"
import img5 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.20 PM.jpeg"
import img6 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.19 PM.jpeg"
import img7 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.21 PM (2).jpeg"
import img8 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.21 PM.jpeg"
import img9 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.22 PM (1).jpeg"
import img10 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.22 PM.jpeg"
import img11 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.24 PM (1).jpeg"
import img12 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.23 PM (1).jpeg"
import img13 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.23 PM (2).jpeg"
import img14 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.23 PM (3).jpeg"
import img15 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.23 PM.jpeg"
import img16 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.24 PM.jpeg"
import img17 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.25 PM (2).jpeg"
import img18 from "../../../public/office-gallery/WhatsApp Image 2026-01-06 at 1.43.25 PM (1).jpeg"




const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openImageModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };
  
    // Sample gallery images (add your company photos to public/resources/gallery/)
    const galleryImages = [
        { src: img1, alt: "Modern office workspace"},
        { src: img2, alt: "Team brainstorming session"},
        { src: img3, alt: "Festival celebration"},
        { src: img4, alt: "Team receiving awards"},
        { src: img5, alt: "Employee training session"},
        { src: img6, alt: "Product launch event"},
        { src: img7, alt: "Product launch event"},
        { src: img8, alt: "Product launch event"},
        { src: img9, alt: "Product launch event"},
        { src: img10, alt: "Product launch event"},
        { src: img11, alt: "Product launch event"},
        { src: img12, alt: "Product launch event"},
        { src: img13, alt: "Product launch event"},
        { src: img14, alt: "Product launch event"},
        { src: img15, alt: "Product launch event"},
        { src: img16, alt: "Product launch event"},
        { src: img17, alt: "Product launch event"},
        { src: img18, alt: "Product launch event"},
    ];

    return (
        <div className="min-h-screen bg-linear-to-b from-yellow-50/50 to-white">
            <Navbar/>

            <GalleryHero />
      
            {/* Gallery Grid */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 mb-15">
                <h1 className="text-black text-center py-5 text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-shadow-lg pb-10">
                    Glimpse of the Life at <span className="text-yellow-400">FIRSTLENDER</span>
                </h1>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 shadow-xl p-3 rounded-lg">
                {galleryImages.map((image, index) => (
                    <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-linear-to-br from-white/90 to-yellow-50/50 cursor-pointer"
                    onClick={() => openImageModal(image)}
                    >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-50 md:h-45 lg:h-50 object-cover group-hover:scale-101 transition-transform duration-700"
                    />
                  
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                    {/* Hover Content */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-white font-bold text-sm md:text-base mb-1 drop-shadow-lg">
                        {image.alt}
                        </h3>
                        <button 
                    className="bg-white/95 hover:bg-white backdrop-blur-sm px-4 py-1.5 rounded-lg text-black font-semibold text-xs shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent image click
                        openImageModal(image);
                    }}
                >
                    View Full →
                </button>
                    </div>
                    </div>
                ))}
                </div>

            </section>

            {/* FULLSCREEN MODAL - Added Here */}
            {isModalOpen && (
                <div 
                className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                onClick={closeModal}
                >
                <div className="relative rounded-2xl max-w-2xl w-full max-h-[90vh] mx-auto animate-fadeIn bg-white">

                    {/* Main Image */}
                    <img
                    src={selectedImage?.src}
                    alt={selectedImage?.alt}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-2xl mx-auto block"
                    />

                    {/* Image Info Bar */}
                    <div className="absolute bottom-5 right-10 flex gap-3 pt-1 sm:pt-0 text-black">
                        <button 
                            onClick={closeModal}
                            className="px-6 py-2 bg-gray-900 hover:bg-black text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm cursor-pointer hover:-translate-0.5"
                        >
                            Close
                        </button>
                        <a 
                            href={selectedImage?.src}
                            download={selectedImage?.alt}
                            className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm cursor-pointer hover:-translate-0.5"
                        >
                            Download
                        </a>
                    </div>
                    
                </div>
                </div>
            )}

            <Footer/>
        </div>
    );
};

// Add this CSS to your global styles or component
const styles = `
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
}
`;

// Inject CSS (add to your index.html or use styled-components)
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default Gallery;
