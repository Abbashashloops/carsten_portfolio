const Footer: React.FC = () => (
  <footer className="border-t border-ink/10 py-8 text-xs bg-white">
    <div className="container-section flex items-center justify-between">
      <div className="flex gap-6 text-ink/60">
        <a href="#" className="hover:text-ink transition">
          Imprint
        </a>
        <span className="opacity-30">|</span>
        <a href="#" className="hover:text-ink transition">
          Privacy policy
        </a>
      </div>
      <div className="flex gap-4">
        <a
          href="#"
          className="w-8 h-8 bg-ink rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
        >
          IG
        </a>
        <a
          href="#"
          className="w-8 h-8 bg-ink rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
        >
          LN
        </a>
        <a
          href="#"
          className="w-8 h-8 bg-ink rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
        >
          YT
        </a>
        <a
          href="#"
          className="w-8 h-8 bg-ink rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
        >
          SP
        </a>
        <a
          href="#"
          className="w-8 h-8 bg-ink rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
        >
          AP
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
