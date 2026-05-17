import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./components/Hero";
import VendorsGrid from "./components/VendorsGrid";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

/**
 * Error Boundary = catches runtime errors in child components.
 */
class Boundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-primaryBg text-textPrimary">
          <p className="text-lg font-semibold">
            ⚠️ Something went wrong. Please refresh the page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * App = main layout of the homepage.
 */
export default function App({ onOpenBooking }) {
  return (
    <div className="min-h-screen bg-primaryBg text-textPrimary">

      {/* ===== SEO / OG / Twitter ===== */}
      <Helmet>
        <title>ERA – Luxury Event Management & Curated Vendors</title>
        <meta
          name="description"
          content="Experience premium event planning with ERA – curated venues, trusted vendors, and unforgettable celebrations crafted just for you."
        />

        {/* Open Graph */}
        <meta property="og:title" content="ERA – Luxury Event Management & Curated Vendors" />
        <meta
          property="og:description"
          content="Experience premium event planning with ERA – curated venues, trusted vendors, and unforgettable celebrations crafted just for you."
        />
        <meta property="og:image" content="/Assets/decoration.jpg" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ERA – Luxury Event Management & Curated Vendors" />
        <meta
          name="twitter:description"
          content="Experience premium event planning with ERA – curated venues, trusted vendors, and unforgettable celebrations crafted just for you."
        />
        <meta name="twitter:image" content="/Assets/decoration.jpg" />
      </Helmet>

      <Boundary>
        <main>

          {/* HERO */}
          <Hero onCTAClick={() => onOpenBooking(null)} />

          {/* VENDORS */}
          <section id="vendors" className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="font-heading text-3xl mb-6">Featured Vendors</h2>
            <VendorsGrid onBook={onOpenBooking} />
          </section>

          {/* HOW IT WORKS */}
          <section id="how" className="bg-black/20">
            <div className="max-w-4xl mx-auto px-6 py-12">
              <HowItWorks />
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials" className="max-w-5xl mx-auto px-6 py-12">
            <Testimonials />
          </section>

        </main>
      </Boundary>
    </div>
  );
}