import Header from "./components/Header/Header";
import HeroSection from "./components/Herosection/Herosection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import DestinationsSection from "./components/DestinationsSection/DestinationsSection";
import PopularToursSection from "./components/PopularToursSection/PopularToursSection";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <PopularToursSection />
    </>
  );
}
