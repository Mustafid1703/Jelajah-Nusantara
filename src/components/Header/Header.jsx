import React from "react";

const texts = {
  EN: ["Destinations", "Hotels", "Flights", "Bookings", "Login", "Sign up"],
  ID: ["Destinasi", "Hotel", "Penerbangan", "Booking", "Masuk", "Daftar"],
};

function Header({ language, setLanguage }) {
  return (
    <header className="flex justify-between items-center px-10 py-6 shadow-sm bg-white">
      <div className="flex items-center gap-4">
        <img
          src="pgn.png"
          alt="logo"
          className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Jelajahi<span className="text-orange-500">Yuk!</span>
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        {texts[language].slice(0, 4).map((item, i) => (
          <a key={i} href="#" className="hover:text-orange-500 transition">{item}</a>
        ))}
        <a href="#" className="hover:text-orange-500 transition">{texts[language][4]}</a>
        <button className="bg-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-600 shadow-md transition">
          {texts[language][5]}
        </button>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1.5 focus:outline-none hover:border-orange-400 transition"
        >
          <option value="EN">EN</option>
          <option value="ID">ID</option>
        </select>
      </nav>
    </header>
  );
}

export default Header;
