import React from "react";

const NewsCard: React.FC = () => (
  <div className="bg-[#e3f26b] border border-black/10 p-4 rounded-sm shadow-sm">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-10 h-10 bg-black rounded-full flex-shrink-0"></div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-ink">
            Carsten Puschmann
          </span>
          <span className="text-xs text-ink/60">vor 2 Tagen</span>
        </div>
        <p className="text-sm text-ink/80 leading-5">
          Moonshots? Klar! Aber nur, wenn jeder Antrag dreifach gestempelt
          ist...
        </p>
        <a href="#" className="text-xs text-brand hover:underline">
          Mehr lesen
        </a>
      </div>
    </div>
    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
      alt="News"
      className="w-full h-32 object-cover rounded-sm mb-3"
    />

    <div className="flex items-center justify-between text-xs text-ink/60">
      <div className="flex items-center gap-4">
        <span>❤️ 42</span>
        <span>💬 8</span>
      </div>
      <a href="#" className="hover:underline">
        Teilen
      </a>
    </div>
  </div>
);

export default NewsCard;
