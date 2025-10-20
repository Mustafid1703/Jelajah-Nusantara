import React from "react";

import logo from "../assets/jalanYuk.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src="jalanYuk.png"
          alt="logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-orange-500">
          Destinations
        </a>
        <a href="#" className="hover:text-orange-500">
          Hotels
        </a>
        <a href="#" className="hover:text-orange-500">
          Flights
        </a>
        <a href="#" className="hover:text-orange-500">
          Bookings
        </a>
        <a href="#" className="hover:text-orange-500">
          Login
        </a>
        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
          Sign up
        </button>
        <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none">
          <option>EN</option>
          <option>ID</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
