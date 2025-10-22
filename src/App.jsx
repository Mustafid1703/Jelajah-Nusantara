import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Herosection/Herosection";
import Services from "./components/ServicesSection/ServicesSection";
import Destinations from "./components/DestinationsSection/DestinationsSection";
import PopularToursSection from "./components/PopularToursSection/PopularToursSection";
import Hotels from "./components/Hotels/Hotels";  
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";

function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="font-sans bg-white">
      <Header language={language} setLanguage={setLanguage} />

      <Routes>
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

        <Route path="/login" element={<Login language={language} />} />
        <Route path="/signup" element={<Signup language={language} />} />
        <Route path="/profile" element={<Profile language={language} />} />
      </Routes>
    </div>
  );
}

export default App;
