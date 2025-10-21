import React from "react";

const heroText = {
  EN: {
    subtitle: "Best destinations around the world",
    title: "Travel, enjoy, and live a new and vibrant life",
    description: "Explore amazing places around the world with us!",
    button: "Start Exploring Now",
  },
  ID: {
    subtitle: "Destinasi terbaik di seluruh dunia",
    title: "Bepergian, nikmati dan jalani hidup yang baru dan penuh kehidupan",
    description: "Mari jelajahi tempat-tempat menakjubkan di seluruh dunia bersama kami!",
    button: "Mulai Jelajah Sekarang",
  },
};

function Hero({ language }) {
  const t = heroText[language];
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="text-gray-900 max-w-xl md:w-1/2 space-y-6 animate-fadeInLeft">
          <p className="text-sm uppercase tracking-wide font-semibold text-orange-600">{t.subtitle}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">{t.title}</h1>
          <p className="text-gray-600 text-lg">{t.description}</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg">
            {t.button}
          </button>
        </div>
        <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="mdnc.png"
            alt="Traveler"
            className="relative z-10 w-[340px] md:w-[420px] lg:w-[480px] object-contain drop-shadow-lg transition-transform duration-500 ease-out hover:scale-110 hover:rotate-3 hover:shadow-2xl animate-floating"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
