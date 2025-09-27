import React from "react";

const Podcast: React.FC = () => (
  <section className="py-20 bg-[#e3f26b]" id="podcast">
    <div className="container-section grid md:grid-cols-2 gap-12 items-start">
      {/* Left Side - Text */}
      <div>
        <h2 className="font-display text-4xl md:text-5xl uppercase text-ink font-black leading-tight">
          IM "HOW TO HACK" PODCAST PORTRÄTIERE ICH JEDE WOCHE SPANNENDE
          GESCHICHTEN
        </h2>

        {/* underline */}
        <div className="w-24 h-[2px] bg-ink my-6"></div>

        <div className="space-y-6 text-sm md:text-base leading-7 text-ink">
          <p>
            <span className="font-semibold">
              Seit dem 01.10.2024 bin ich Head of Audio des Business Punk
              Podcast “How to Hack“.
            </span>
          </p>
          <p>
            Im Podcast “How to Hack” spreche ich mit zahlreichen spannenden
            GründerInnen und InvestorInnen über ihre Erfolgsgeschichten und
            biete spannende Einblicke behind the Scenes. Wer Inspiration und
            Impulse für Innovationen, Digitalisierung und den neuesten Trends
            von morgen braucht, ist bei mir und “How to Hack” genau richtig.
          </p>
          <p>
            Nach dem großen Erfolg von “How to Hack” wird die Podcast Family des
            Business Punk ab April um zwei weitere Formate erweitert. “How to
            Invest” und “How to Marketing” behandeln spezifischere Themenfelder
            und gehen ans Eingemachte. Auch bei den neuen Formaten bin ich als
            Head of Audio dabei. Hosts sind Phillip Böndel und Sherin Maruhn.
          </p>
        </div>
      </div>

      {/* Right Side - Spotify Embed */}
      <div className="w-full">
        <iframe
          src="https://open.spotify.com/embed/show/your-podcast-id-here?utm_source=generator"
          width="100%"
          height="600"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Podcast;
