import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Herosection/Herosection";
import Services from "./components/ServicesSection/ServicesSection";
import Destinations from "./components/DestinationsSection/DestinationsSection";
import PopularToursSection from "./components/PopularToursSection/PopularToursSection";

function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="font-sans bg-white">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <Destinations language={language} />
      <PopularToursSection language={language} />
    </div>
  );
}

export default App;
