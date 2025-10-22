import React from "react";

// Import semua gambar dari folder src/assets/images
import bali from "../../assets/images/bali.webp";
import lombok from "../../assets/images/lombok.png";
import rajaAmpat from "../../assets/images/raja ampat.jpg";
import borobudur from "../../assets/images/borobudur.jpg";
import kawahPutih from "../../assets/images/kawah putih.webp";
import labuanBajo from "../../assets/images/labuan bajo.jpg";

const TourCard = ({ title, price, imageSrc, language }) => (
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
    <img src={imageSrc} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6 text-left">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">
        {language === "EN" ? "Starting from" : "Mulai dari"} {price}
      </p>
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
);

const PopularTours = ({ language }) => {
  const tours = [
    { title: "Bali – Nusa Penida – Ubud", price: "Rp 3.500.000", image: bali },
    { title: "Lombok – Gili Trawangan – Pink Beach", price: "Rp 3.800.000", image: lombok },
    { title: "Raja Ampat – Wayag – Piaynemo", price: "Rp 7.500.000", image: rajaAmpat },
    { title: "Yogyakarta – Borobudur – Malioboro", price: "Rp 2.500.000", image: borobudur },
    { title: "Bandung – Lembang – Kawah Putih", price: "Rp 1.800.000", image: kawahPutih },
    { title: "Labuan Bajo – Pulau Komodo – Padar", price: "Rp 6.200.000", image: labuanBajo },
  ];

  const text = {
    EN: {
      title: "Popular Tour Packages",
      subtitle: "Choose a tour you like or create your own unique route!",
    },
    ID: {
      title: "Format Tur Populer",
      subtitle: "Pilih tur sesuai selera atau buat rute unikmu sendiri!",
    },
  };

  const t = text[language];

  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 mb-12">{t.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour, index) => (
            <TourCard
              key={index}
              title={tour.title}
              price={tour.price}
              imageSrc={tour.image}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
