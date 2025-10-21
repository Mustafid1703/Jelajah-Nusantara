import React from "react";
import rome from '../../assets/images/rome ITLY.jpg';
import london from '../../assets/images/london uk.jpg';
import Europe from '../../assets/images/Europe.jpg';

const destinationsText = {
  EN: {
    title: "Top Destinations",
    subtitle: "Top Selling",
    places: [
      { name: "Rome, Italy", price: "$5,42k", img: rome },
      { name: "London, UK", price: "$4,20k", img: london },
      { name: "Full Europe", price: "$15k", img: Europe },
    ],
  },
  ID: {
    title: "Destinasi Teratas",
    subtitle: "Terlaris",
    places: [
      { name: "Roma, Italia", price: "Rp 5,42k", img: rome },
      { name: "London, UK", price: "Rp 4,20k", img: london },
      { name: "Seluruh Eropa", price: "Rp 15k", img: Europe },
    ],
  },
};

function Destinations({ language }) {
  const t = destinationsText[language];
  return (
    <section className="py-20 px-10 bg-gray-50 text-center">
      <h2 className="text-sm text-orange-500 font-semibold uppercase mb-2">{t.subtitle}</h2>
      <h3 className="text-3xl font-bold text-gray-800 mb-12">{t.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {t.places.map((place, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 transition"
          >
            <img
              src={place.img}
              alt={place.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h4 className="font-semibold text-lg mb-2">{place.name}</h4>
              <p className="text-orange-500 font-semibold">{place.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
