import React from "react";

const text = {
  EN: {
    title: "Popular Tour Formats",
    description: "Choose tours according to your preference or create your own unique route!",
    cards: [
      { name: "Bali – Nusa Penida – Ubud", price: "From Rp 3.500.000", img: "bali.webp" },
      { name: "Lombok – Gili Trawangan – Pink Beach", price: "From Rp 3.800.000", img: "lombok.png" },
      { name: "Raja Ampat – Wayag – Piaynemo", price: "From Rp 7.500.000", img: "raja ampat.jpg" },
      { name: "Yogyakarta – Borobudur – Malioboro", price: "From Rp 2.500.000", img: "borobudur.jpg" },
      { name: "Bandung – Lembang – Kawah Putih", price: "From Rp 1.800.000", img: "kawah putih.webp" },
      { name: "Labuan Bajo – Pulau Komodo – Padar", price: "From Rp 6.200.000", img: "labuan bajo.jpg" },
    ],
  },
  ID: {
    title: "Format Tur Populer",
    description: "Pilih tur sesuai selera atau buat rute unikmu sendiri!",
    cards: [
      { name: "Bali – Nusa Penida – Ubud", price: "Mulai dari Rp 3.500.000", img: "bali.webp" },
      { name: "Lombok – Gili Trawangan – Pink Beach", price: "Mulai dari Rp 3.800.000", img: "lombok.png" },
      { name: "Raja Ampat – Wayag – Piaynemo", price: "Mulai dari Rp 7.500.000", img: "raja ampat.jpg" },
      { name: "Yogyakarta – Borobudur – Malioboro", price: "Mulai dari Rp 2.500.000", img: "borobudur.jpg" },
      { name: "Bandung – Lembang – Kawah Putih", price: "Mulai dari Rp 1.800.000", img: "kawah putih.webp" },
      { name: "Labuan Bajo – Pulau Komodo – Padar", price: "Mulai dari Rp 6.200.000", img: "labuan bajo.jpg" },
    ],
  },
};

function Tours({ language }) {
  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">{text[language].title}</h2>
        <p className="text-gray-500 mb-12">{text[language].description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {text[language].cards.map((card, i) => (
            <div key={i} className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img src={card.img} alt={card.name} className="w-full h-56 object-cover" />
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{card.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{card.price}</p>
                <div className="flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition">
                    {language === "EN" ? "Book Now" : "Pesan Sekarang"}
                  </button>
                  <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
                    {language === "EN" ? "View Details" : "Lihat Detail"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tours;
