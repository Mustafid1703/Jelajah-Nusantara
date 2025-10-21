import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 shadow-sm bg-white">
      <div className="flex items-center gap-4">
        <img
          src="/pgn.png"
          alt="logo"
          className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Jelajahi<span className="text-orange-500">Yuk!</span>
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-orange-500 transition">Destinations</a>
        <a href="#" className="hover:text-orange-500 transition">Hotels</a>
        <a href="#" className="hover:text-orange-500 transition">Flights</a>
        <a href="#" className="hover:text-orange-500 transition">Bookings</a>
        <a href="#" className="hover:text-orange-500 transition">Login</a>
        <button className="bg-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-600 shadow-md transition">
          Sign up
        </button>
        <select className="border border-gray-300 rounded px-3 py-1.5 focus:outline-none hover:border-orange-400 transition">
          <option>EN</option>
          <option>ID</option>
        </select>
      </nav>
    </header>
  );
}

export default Header;
