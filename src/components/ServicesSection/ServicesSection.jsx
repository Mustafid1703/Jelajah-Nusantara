import React from "react";

const servicesText = {
  EN: {
    title: "We Offer Best Services",
    items: [
      { title: "Calculated Weather", desc: "Know the weather accurately before traveling." },
      { title: "Best Flights", desc: "Find the best flights at affordable prices." },
      { title: "Local Events", desc: "Enjoy unique local events at every destination." },
      { title: "Customization", desc: "Plan your trip according to your needs and preferences." },
    ],
  },
  ID: {
    title: "Kami Menyediakan Layanan Terbaik",
    items: [
      { title: "Cuaca Terukur", desc: "Mengetahui kondisi cuaca dengan akurat sebelum bepergian." },
      { title: "Penerbangan Terbaik", desc: "Temukan penerbangan terbaik dengan harga terjangkau." },
      { title: "Acara Lokal", desc: "Nikmati acara lokal unik di setiap destinasi." },
      { title: "Kustomisasi", desc: "Atur perjalanan sesuai kebutuhan dan preferensimu." },
    ],
  },
};

function Services({ language }) {
  const t = servicesText[language];
  return (
    <section className="py-20 px-10 text-center bg-gray-50">
      <h2 className="text-sm text-orange-500 font-semibold uppercase mb-2">Category</h2>
      <h3 className="text-3xl font-bold text-gray-800 mb-12">{t.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {t.items.map((item, i) => (
          <div key={i} className="p-6 bg-white shadow-md rounded-xl hover:-translate-y-2 transition">
            <div className="mx-auto mb-4 w-12 h-12 bg-orange-100 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M4.219 4.219l1.06 1.06M1.5 12H3m15.75 0a4.5 4.5 0 10-8.91-.75A3.75 3.75 0 0010.5 19.5h8.25a3.75 3.75 0 000-7.5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
