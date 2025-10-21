import React from "react";


const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 sm:px-10 py-4 sm:py-6 bg-white shadow-md rounded-b-xl"> 
      <div className="flex items-center gap-3">
        <img src="https://placehold.co/300x300/F97316/FFFFFF?text=JalanYuk+Logo"  alt="JalanYuk Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg"/>
      </div>

      <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-orange-500 transition duration-150">Destinations</a>
        <a href="#" className="hover:text-orange-500 transition duration-150">Hotels</a>
        <a href="#" className="hover:text-orange-500 transition duration-150">Flights</a>
        <a href="#" className="hover:text-orange-500 transition duration-150">Bookings</a>
        <a href="#" className="hover:text-orange-500 transition duration-150">Login </a>
        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition shadow-md"> Sign up</button>
        
        <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option>EN</option>
          <option>ID</option>
        </select>
      </nav>

      <button className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  );
};

export default Header;
