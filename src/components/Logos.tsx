import React from "react";

const Logos: React.FC = () => {
  const portfolioLogos = [
    "/images/spacex.png",
    "/images/qog.png",
    "/images/ares.png",
    "/images/carbon6.png",
    "/images/qtwo.png",
    "/images/saintsass.png",
  ];

  const mediaLogos = [
    "/images/businesspunk.png",
    "/images/businessinsider.png",
    "/images/ds.png",
    "/images/handelsblatt.png",
    "/images/gruenderszene.png",
    "/images/horizont.png",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        {/* Portfolio Section */}
        <h3 className="uppercase font-extrabold text-ink text-lg mb-8">
          AUSZUG PORTFOLIO
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
          {portfolioLogos.map((src, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm flex items-center justify-center p-4"
            >
              <img
                src={src}
                alt={`Portfolio Logo ${i + 1}`}
                className="max-h-12"
              />
            </div>
          ))}
        </div>

        {/* Media Section */}
        <h3 className="uppercase font-extrabold text-ink text-lg mb-8">
          BEKANNT AUS
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {mediaLogos.map((src, i) => (
            <div
              key={i}
              className="bg-black rounded-lg flex items-center justify-center p-4"
            >
              <img
                src={src}
                alt={`Media Logo ${i + 1}`}
                className="max-h-8 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
