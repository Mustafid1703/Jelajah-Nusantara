import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const text = {
    EN: {
      logo: "Let's Explore",
      destinations: "Destinations",
      hotels: "Hotels",
      flights: "Flights",
      bookings: "Bookings",
      login: "Login",
      signup: "Sign up",
      welcome: "Welcome",
      profile: "Profile",
      logout: "Logout"
    },
    ID: {
      logo: "JelajahYuk!",
      destinations: "Destinasi",
      hotels: "Hotel",
      flights: "Penerbangan",
      bookings: "Pemesanan",
      login: "Masuk",
      signup: "Daftar",
      welcome: "Selamat Datang",
      profile: "Profil",
      logout: "Keluar"
    }
  };

  // Ambil user dari localStorage
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedUser) setUser(loggedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          {text[language].logo}
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <a href="#" className="hover:text-orange-500">{text[language].destinations}</a>
          <a href="#" className="hover:text-orange-500">{text[language].hotels}</a>
          <a href="#" className="hover:text-orange-500">{text[language].flights}</a>
          <a href="#" className="hover:text-orange-500">{text[language].bookings}</a>

          {user ? (
            <>
              <Link to="/profile" className="hover:text-orange-500 font-semibold">
                {text[language].profile}: {user.username}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                {text[language].logout}
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-orange-500">{text[language].login}</Link>
              <Link
                to="/signup"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
              >
                {text[language].signup}
              </Link>
            </>
          )}

          <button
            onClick={() => setLanguage(language === "EN" ? "ID" : "EN")}
            className="border px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            {language}
          </button>
        </nav>

        <button
          className="md:hidden text-gray-700 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col bg-white px-6 pb-4 gap-4 text-gray-700 font-medium shadow-lg">
          <a href="#" className="hover:text-orange-500">{text[language].destinations}</a>
          <a href="#" className="hover:text-orange-500">{text[language].hotels}</a>
          <a href="#" className="hover:text-orange-500">{text[language].flights}</a>
          <a href="#" className="hover:text-orange-500">{text[language].bookings}</a>

          {user ? (
            <>
              <Link to="/profile" className="hover:text-orange-500 font-semibold">
                {text[language].profile}: {user.username}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                {text[language].logout}
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-orange-500">{text[language].login}</Link>
              <Link
                to="/signup"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
              >
                {text[language].signup}
              </Link>
            </>
          )}

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
