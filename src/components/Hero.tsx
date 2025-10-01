import React from "react";
import SplitButton from "./SplitButton";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white">
      <div className="h-[70vh] md:h-[80vh] bg-black bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container-section h-full flex flex-col justify-center relative z-10">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-yellow-200 mb-6 font-medium">
            Connecting Capital & Innovation
          </p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-[0.85] text-white font-black tracking-tight space-y-6">
            <span className="block">CARSTEN</span>
            <span className="block">PUSCHMANN.</span>
          </h1>
        </div>
      </div>

      <div className="container-section grid md:grid-cols-2 gap-16 py-20 bg-white">
        <div className="relative">
          <div className="absolute -left-6 -top-4 text-8xl md:text-9xl font-display text-brand leading-none">
            "
          </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase leading-tight text-ink font-black tracking-tight">
              LET'S BRING TOGETHER WHAT BELONGS TOGETHER.
            </h2>
          <div className="ml-12 md:ml-16">
            <p className="mt-8 text-sm md:text-base leading-7 text-ink/80 max-w-lg">
              For a strong economic centre, Germany needs to focus on innovative
              solutions and technologies. Start-ups and innovation investments
              have become the most important asset class and form the backbone
              of our future economy. However, family offices in particular are
              still far from having arrived in the 'start-up' asset class.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-sm md:text-base leading-7 text-ink/80 max-w-lg">
            I am a Bridgemaker between family offices and innovative startups.
            Through my international network, I have access to the most
            promising startups in the DACH region as well as to high-class tech
            startups in the USA.
          </p>
          <p className="text-sm md:text-base leading-7 text-ink/80 max-w-lg">
            As the founder of Scale Now Ventures and two private business
            investment clubs, I provide family offices and investors with
            numerous high-potential investment opportunities.
          </p>
          <div className="flex justify-end pt-4">
            <SplitButton
              label="LEARN MORE"
              bgColor="bg-[#f3ff4d]"
              hoverBgColor="hover:bg-black"
              textColor="text-black"
              hoverTextColor="hover:text-[#f3ff4d]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
