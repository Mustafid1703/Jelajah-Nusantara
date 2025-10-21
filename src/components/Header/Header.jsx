import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 sm:px-10 py-4">
        <div className="flex items-center gap-4">

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
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 shadow transition">
            Sign up
          </button>
          <select className="border px-2 py-1 rounded">
            <option>EN</option>
            <option>ID</option>
          </select>
        </nav>

        {/* ✅ Tombol Hamburger diperbagus */}
        <button
          className="md:hidden text-gray-700 text-3xl px-3 py-2 rounded-lg hover:bg-gray-100 active:scale-95 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col bg-white px-6 pb-4 gap-4 text-gray-700 font-medium shadow-lg">
          <a href="#" className="hover:text-orange-500">Destinations</a>
          <a href="#" className="hover:text-orange-500">Hotels</a>
          <a href="#" className="hover:text-orange-500">Flights</a>
          <a href="#" className="hover:text-orange-500">Bookings</a>
          <a href="#" className="hover:text-orange-500">Login</a>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
            Sign up
          </button>
          <select className="border px-2 py-1 rounded w-20">
            <option>EN</option>
            <option>ID</option>
          </select>
        </nav>
      )}
    </header>
  );
}

export default Header;
