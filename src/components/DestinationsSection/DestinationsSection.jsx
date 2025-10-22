import React from "react";

const TopSelling = ({ language }) => {
  const text = {
    EN: {
      topSelling: "Top Selling",
      topDestinations: "Top Destinations",
      bookNow: "Book Now",
      viewDetails: "View Details",
      priceFrom: "Starting from",
      destinations: [
        { title: "Java – Borobudur – Prambanan", price: "Rp 2.500.000", img: "candi.jpg" },
        { title: "Sumatra – Danau Toba – Samosir", price: "Rp 3.000.000", img: "danauToba.webp" },
        { title: "Bali – Nusa Penida – Ubud", price: "Rp 3.500.000", img: "bali.png" },
      ],
    },
    ID: {
      topSelling: "Terlaris",
      topDestinations: "Destinasi Terbaik",
      bookNow: "Pesan Sekarang",
      viewDetails: "Lihat Detail",
      priceFrom: "Mulai dari",
      destinations: [
        { title: "Jawa – Borobudur – Prambanan", price: "Rp 2.500.000", img: "candi.jpg" },
        { title: "Sumatra – Danau Toba – Samosir", price: "Rp 3.000.000", img: "danauToba.webp" },
        { title: "Bali – Nusa Penida – Ubud", price: "Rp 3.500.000", img: "bali.png" },
      ],
    },
  };

  return (
    <section
      id="TopSelling"
      className="py-24 px-6 md:px-10 text-center bg-white"
    >
      <h2 className="text-sm text-orange-500 font-semibold uppercase tracking-widest mb-2 animate-fadeIn">
        {text[language].topSelling}
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-14 animate-slideUp">
        {text[language].topDestinations}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {text[language].destinations.map((dest, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl animate-zoomIn"
          >
            <div className="relative overflow-hidden">
              <img
                src={dest.img}
                alt={dest.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6 text-left">
              <h4 className="text-xl font-bold text-gray-800 mb-1">{dest.title}</h4>
              <p className="text-gray-500 text-sm mb-4">
                {text[language].priceFrom} {dest.price}
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm"
                >
                  {text[language].bookNow}
                </a>
                <a
                  href="#"
                  className="bg-white text-blue-500 border border-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-sm"
                >
                  {text[language].viewDetails}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-slideUp { animation: slideUp 1s ease-out forwards; }
        .animate-zoomIn { animation: zoomIn 1s ease-out forwards; }
        .animate-fadeInScale { animation: fadeIn 1.2s ease-in-out; }
      `}</style>
    </section>
  );
};

export default TopSelling;
