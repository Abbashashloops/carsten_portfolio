import React from "react";

const Contact: React.FC = () => (
  <section className="py-20" style={{ background: "var(--brand-yellow)" }} id="contact">
    <div className="container-section">
      <h2 className="font-display text-4xl md:text-5xl uppercase text-ink mb-16">WHAT'S ON YOUR MIND?</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <textarea 
          className="w-full h-64 border border-ink/20 p-6 bg-white text-ink placeholder-ink/60 resize-none" 
          placeholder="Your message" 
        />
        <div className="grid grid-cols-2 gap-4">
          <input className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60" placeholder="First name" />
          <input className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60" placeholder="Last name" />
          <input className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60" placeholder="Company" />
          <input className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60" placeholder="Position" />
          <input className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60" placeholder="Email" />
          <input className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60" placeholder="Phone" />
          <label className="col-span-2 flex items-center gap-3 text-sm text-ink">
            <input type="checkbox" className="w-4 h-4 border border-ink/20"/> 
            I have read the <a href="#" className="underline hover:no-underline">privacy policy</a> and consent to the use of my data.
          </label>
          <button className="btn-primary w-max mt-4">GET IN TOUCH →</button>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
