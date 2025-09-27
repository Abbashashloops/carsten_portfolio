import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-black/10 bg-white z-50">
      <div className="container-section flex items-center justify-between py-4 text-xs uppercase">
        {/* Logo */}
        <div className="font-black text-xl tracking-wider text-ink leading-tight">
          CARSTEN <br /> PUSCHMANN.
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium">
          <a href="#portfolio" className="hover:opacity-70 text-ink">
            Portfolio
          </a>
          <a href="#about" className="hover:opacity-70 text-ink">
            About
          </a>
          <a href="#contact" className="hover:opacity-70 text-ink">
            Contact
          </a>
          <div className="flex gap-2 text-ink">
            <span className="opacity-60">DE</span>
            <span className="opacity-30">|</span>
            <span className="font-semibold">EN</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
