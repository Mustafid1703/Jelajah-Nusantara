// App.jsx
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Herosection/Herosection";
import Services from "./components/ServicesSection/ServicesSection";
import Destinations from "./components/DestinationsSection/DestinationsSection";
import PopularToursSection from "./components/PopularToursSection/PopularToursSection";
import Hotels from "./components/Hotels/Hotels";  
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="font-sans bg-white">
      {/* Header selalu muncul */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Routes */}
      <Routes>
        {/* Halaman utama */}
        <Route
          path="/"
          element={
            <>
              <Hero language={language} />
              <Services language={language} />
              <Destinations language={language} />
              <PopularToursSection language={language} />
              <Hotels language={language} />
            </>
          }
        />

        {/* Halaman login */}
        <Route path="/login" element={<Login language={language} />} />

        {/* Halaman signup */}
        <Route path="/signup" element={<Signup language={language} />} />
      </Routes>
    </div>
  );
}

export default App;
