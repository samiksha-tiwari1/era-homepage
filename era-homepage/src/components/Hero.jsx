import React from "react";

/**
 * Hero section with headline, tagline, and CTAs.
 */
export default function Hero({ onCTAClick }) {
  return (
    <section className="pt-12 pb-16" aria-label="Hero section">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="font-heading text-5xl leading-tight mb-4">
            Curate unforgettable moments — effortlessly.
          </h1>
          <p className="text-textSecondary mb-8 max-w-xl">
            ERA brings together India’s most premium event vendors on a single platform.{" "}
            From intimate gatherings to grand weddings, discover curated partners for every occasion.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onCTAClick}
              className="inline-flex items-center gap-3 bg-accent text-primaryBg px-6 py-3 rounded-2xl font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
            >
              Book Your Event
            </button>

            <a
              href="#vendors"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-border text-textPrimary hover:bg-white/5"
            >
              Browse Vendors
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="rounded-xl overflow-hidden hidden lg:block">
          <img
            src="https://via.placeholder.com/900x600?text=ERA+Hero"
            alt="Elegant event setup representing ERA's premium event services"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
