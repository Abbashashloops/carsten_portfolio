import React from "react";

const services = [
  {
    title: "INVESTMENT",
    icon: "🚀",
    description:
      "Ich unterstütze über verschiedene Investment-Vehikel Startups in der Pre-Seed und Seed Phase in allen Finanzierungsbelangen, von der Bereitstellung von Wagniskapital, der Identifizierung geeigneter Finanzierungen, Bereitstellung meines Netzwerks bis hin zur Vorbereitung von Finanzierungsrunden.",
  },
  {
    title: "VENTURE BUILDING",
    icon: "♟️",
    description:
      "Ich und mein Team aus rund 30 Experten unterschiedlicher Disziplinen unterstützen als strategischer Partner meine Portfolio-Startups und unterstützen beim effizienten Unternehmensaufbau. Mit langjähriger Erfahrung und nachweisbarer Erfolgsbilanz optimiere ich zusammen mit meinem Team bestehende Geschäftsmodelle für eine erfolgreiche Skalierung.",
  },
  {
    title: "ADVISORY",
    icon: "👤",
    description:
      "Ich stelle meinen Portfolio-Startups meine internen Experten an die Seite, die personell und fachlich mit ihrem Know How und Erfahrungen die einzelnen Fachbereiche auf- und ausbauen, um das bestmögliche Potential der Portfolio-Startups zu entfalten und die Voraussetzungen für eine erfolgreiche Etablierung am Markt zu schaffen.",
  },
];

const Services: React.FC = () => (
  <section className="py-20 bg-white" id="services">
    <div className="container-section">
      {/* Heading */}
      <h2 className="font-display text-4xl md:text-5xl uppercase text-ink mb-16 font-black">
        WHAT I DO
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 divide-x-2 divide-black">
        {services.map((service, idx) => (
          <div key={idx} className="px-8">
            {/* Icon */}
            <div className="text-4xl mb-6">{service.icon}</div>

            {/* Title */}
            <h3 className="font-display text-xl md:text-2xl uppercase font-black text-ink mb-4">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base leading-7 text-ink/80 mb-8">
              {service.description}
            </p>

            {/* Button */}
            <button className="inline-flex items-center gap-2 bg-[#f3ff4d] px-4 py-2 text-xs font-black uppercase tracking-wide border border-black hover:bg-black hover:text-[#f3ff4d] transition leading-none">
              MORE INFO <span className="text-base">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
