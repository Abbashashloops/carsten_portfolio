import React from "react";
import NewsCard from "./NewsCard";

const LatestNews: React.FC = () => (
  <section className="py-20 bg-white" id="news">
    <div className="container-section">
      <h2 className="font-display text-4xl md:text-5xl uppercase text-ink mb-16">LATEST NEWS</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => <NewsCard key={i} />)}
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-ink rounded-full"></div>
          <div className="w-2 h-2 bg-ink/30 rounded-full"></div>
          <div className="w-2 h-2 bg-ink/30 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

export default LatestNews;
