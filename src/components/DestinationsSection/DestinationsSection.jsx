const DestinationCard = ({ city, country, price, imageSrc }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 transition">
    {/* Ganti imageSrc dengan path yang benar */}
    <img src={imageSrc} alt={city} className="w-full h-60 object-cover" />
    <div className="p-6 text-left">
      <h4 className="font-semibold text-lg mb-2">{city}, {country}</h4>
      <p className="text-orange-500 font-semibold">{price}</p>
    </div>
  </div>
);

const Destinations = () => {
  const destinations = [
    { city: 'Rome', country: 'Italy', price: '$5,42k', image: 'rome ITLY.jpg' },
    { city: 'London', country: 'UK', price: '$4,20k', image: 'london uk.jpg' },
    { city: 'Full Europe', country: '', price: '$15k', image: 'Europe.jpg' },
  ];

  return (
    <section className="py-20 px-10 bg-gray-50 text-center">
      <h2 className="text-sm text-orange-500 font-semibold uppercase mb-2">Top Selling</h2>
      <h3 className="text-3xl font-bold text-gray-800 mb-12">Top Destinations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {destinations.map((dest, index) => (
          <DestinationCard
            key={index}
            city={dest.city}
            country={dest.country}
            price={dest.price}
            imageSrc={dest.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;