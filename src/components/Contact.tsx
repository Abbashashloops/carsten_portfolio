import React from "react";
import { useForm } from "@formspree/react";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mwprbeak");

  if (state.succeeded) {
    return (
      <section
        className="py-20"
        style={{ background: "var(--brand-yellow)" }}
        id="contact"
      >
        <div className="container-section text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase text-ink mb-6">
            Thank you!
          </h2>
          <p className="text-ink/80">
            Your message has been sent. We'll get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-20"
      style={{ background: "var(--brand-yellow)" }}
      id="contact"
    >
      <div className="container-section">
        <h2 className="font-display text-4xl md:text-5xl uppercase text-ink mb-16">
          WHAT'S ON YOUR MIND?
        </h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-12">
          <textarea
            className="w-full h-64 border border-ink/20 p-6 bg-white text-ink placeholder-ink/60 resize-none"
            placeholder="Your message"
            name="message"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60"
              placeholder="First name"
              name="firstName"
              required
            />
            <input
              className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60"
              placeholder="Last name"
              name="lastName"
              required
            />
            <input
              className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60"
              placeholder="Company"
              name="company"
            />
            <input
              className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60"
              placeholder="Position"
              name="position"
            />
            <input
              type="email"
              className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60"
              placeholder="Email"
              name="email"
              required
            />

            <input
              className="border border-ink/20 p-4 bg-white text-ink placeholder-ink/60"
              placeholder="Phone"
              name="phone"
            />
            <label className="col-span-2 flex items-center gap-1 text-sm text-ink">
              <input
                type="checkbox"
                className="w-4 h-4 border border-ink/20"
                name="privacyConsent"
                required
              />
              I have read the
              <a href="#" className="underline hover:no-underline">
                privacy policy
              </a>
              and consent to the use of my data.
            </label>
            <button
              type="submit"
              className="btn-primary w-max mt-4"
              disabled={state.submitting}
            >
              {state.submitting ? "SENDING..." : "GET IN TOUCH →"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
