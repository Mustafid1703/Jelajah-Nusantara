import React from "react";

const Hotels = ({ language }) => {
  // Teks yang berubah bahasa
  const text = {
    EN: {
      subtitle: "Recommended",
      title: "Best Hotels for Your Stay",
      bookNow: "Book Now",
    },
    ID: {
      subtitle: "Rekomendasi",
      title: "Hotel Terbaik untuk Menginap",
      bookNow: "Pesan Sekarang",
    },
  };

  return (
    <section className="py-20 px-10 bg-gray-50 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 overlay-gradient opacity-70"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-sm text-orange-500 font-semibold uppercase mb-2 animate-fadeInScale">
          {text[language].subtitle} {/* 🔹 Diubah */}
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 animate-fadeInScale">
          {text[language].title} {/* 🔹 Diubah */}
        </h3>

        {/* Buttons */}
        <div className="flex justify-between items-center mb-6">
          <button
            id="prevBtn"
            className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
            onClick={() => {
              document
                .getElementById("hotelScroll")
                .scrollBy({ left: -350, behavior: "smooth" });
            }}
          >
            ◀
          </button>

          <button
            id="nextBtn"
            className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
            onClick={() => {
              const scroll = document.getElementById("hotelScroll");
              scroll.scrollBy({ left: 350, behavior: "smooth" });

              setTimeout(() => {
                if (
                  scroll.scrollLeft + scroll.clientWidth >=
                  scroll.scrollWidth - 5
                ) {
                  scroll.scrollTo({ left: 0, behavior: "smooth" });
                }
              }, 400);
            }}
          >
            ▶
          </button>
        </div>

         {/* Scroll Container */}
        <div
          id="hotelScroll"
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >
          {/* Card 1 */}
          <div className="min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <img
              src="/assets/images/bali's.jpg"
              alt="Bali Resort"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-left">
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Bali Paradise Resort
              </h4>
              <p className="text-gray-500 text-sm mb-3">🌴 Nusa Dua, Bali</p>
              <p className="text-orange-500 font-semibold mb-4">
                Rp 1.200.000 / malam
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition shadow-md">
                  Book Now
                </button>
                <span className="text-yellow-500">⭐ 4.8</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <img
              src="/assets/images/Gili Trawangan, Lombok.jpg"
              alt="Lombok Villa"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-left">
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Gili Sunset Villa
              </h4>
              <p className="text-gray-500 text-sm mb-3">
                🏖️ Gili Trawangan, Lombok
              </p>
              <p className="text-orange-500 font-semibold mb-4">
                Rp 950.000 / malam
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition shadow-md">
                  Book Now
                </button>
                <span className="text-yellow-500">⭐ 4.6</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <img
              src="/assets/images/Jakarta-Skyline.jpg"
              alt="Jakarta Hotel"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-left">
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Jakarta Skyline Hotel
              </h4>
              <p className="text-gray-500 text-sm mb-3">🏙️ Sudirman, Jakarta</p>
              <p className="text-orange-500 font-semibold mb-4">
                Rp 1.500.000 / malam
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition shadow-md">
                  Book Now
                </button>
                <span className="text-yellow-500">⭐ 4.9</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <img
              src="/assets/images/Bandung-Sky.jpg"
              alt="Bandung Villa"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-left">
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Bandung Sky Villa
              </h4>
              <p className="text-gray-500 text-sm mb-3">🏞️ Lembang, Bandung</p>
              <p className="text-orange-500 font-semibold mb-4">
                Rp 870.000 / malam
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition shadow-md">
                  Book Now
                </button>
                <span className="text-yellow-500">⭐ 4.7</span>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <img
              src="/assets/images/royal-Ambarrukmo.jpg"
              alt="Yogyakarta Hotel"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-left">
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Yogyakarta Royal Stay
              </h4>
              <p className="text-gray-500 text-sm mb-3">
                🏯 Malioboro, Yogyakarta
              </p>
              <p className="text-orange-500 font-semibold mb-4">
                Rp 780.000 / malam
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition shadow-md">
                  Book Now
                </button>
                <span className="text-yellow-500">⭐ 4.5</span>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <img
              src="/assets/images/hotel-bromo.jpg"
              alt="Bromo Resort"
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 text-left">
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Bromo View Lodge
              </h4>
              <p className="text-gray-500 text-sm mb-3">
                ⛰️ Probolinggo, East Java
              </p>
              <p className="text-orange-500 font-semibold mb-4">
                Rp 1.050.000 / malam
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition shadow-md">
                  Book Now
                </button>
                <span className="text-yellow-500">⭐ 4.7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Inline untuk sembunyikan scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Hotels;
