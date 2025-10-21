import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN"); // default English

  // Teks untuk dua bahasa
  const text = {
    EN: {
      destinations: "Destinations",
      hotels: "Hotels",
      flights: "Flights",
      bookings: "Bookings",
      login: "Login",
      signup: "Sign up",
    },
    ID: {
      destinations: "Destinasi",
      hotels: "Hotel",
      flights: "Penerbangan",
      bookings: "Pemesanan",
      login: "Masuk",
      signup: "Daftar",
    },
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">JelajahYuk!</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <a href="#" className="hover:text-orange-500">{text[language].destinations}</a>
          <a href="#" className="hover:text-orange-500">{text[language].hotels}</a>
          <a href="#" className="hover:text-orange-500">{text[language].flights}</a>
          <a href="#" className="hover:text-orange-500">{text[language].bookings}</a>
          <a href="#" className="hover:text-orange-500">{text[language].login}</a>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
            {text[language].signup}
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "EN" ? "ID" : "EN")}
            className="border px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            {language}
          </button>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col bg-white px-6 pb-4 gap-4 text-gray-700 font-medium shadow-lg animate-slideDown">
          <a href="#" className="hover:text-orange-500">{text[language].destinations}</a>
          <a href="#" className="hover:text-orange-500">{text[language].hotels}</a>
          <a href="#" className="hover:text-orange-500">{text[language].flights}</a>
          <a href="#" className="hover:text-orange-500">{text[language].bookings}</a>
          <a href="#" className="hover:text-orange-500">{text[language].login}</a>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
            {text[language].signup}
          </button>

          {/* Language Toggle for Mobile */}
          <button
            onClick={() => setLanguage(language === "EN" ? "ID" : "EN")}
            className="border px-3 py-1 rounded w-20 hover:bg-gray-100 transition"
          >
            {language}
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
