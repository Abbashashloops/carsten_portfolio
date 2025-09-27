import React from "react";

const ServiceCard: React.FC<{ title: string; icon: string; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="border-l border-r border-black/10 p-8 bg-white">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 border border-black/20 flex items-center justify-center">
        <span className="text-lg">{icon}</span>
      </div>
      <h3 className="font-extrabold uppercase text-ink text-sm tracking-wider">{title}</h3>
    </div>
    <p className="text-sm text-ink/80 leading-6 mb-6">{children}</p>
    <a className="btn-secondary" href="#">MORE INFO →</a>
  </div>
);

export default ServiceCard;
