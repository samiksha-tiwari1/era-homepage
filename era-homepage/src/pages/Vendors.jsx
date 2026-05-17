// src/pages/Vendors.jsx
import React, { useState, useMemo } from "react";
import vendors from "../data/vendors";
import VendorCard from "../components/VendorCard";
import { Helmet } from "react-helmet-async"; // ✅ import Helmet

/**
 * Vendors Page
 * - Search vendors by name
 * - Filter by category
 * - Responsive grid with hover effects
 */
export default function Vendors({ onOpenBooking }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Vendors");

  const categories = ["All Vendors", ...new Set(vendors.map((v) => v.category))];

  const filteredVendors = useMemo(() => {
    return vendors.filter((v) => {
      const matchesCategory = category === "All Vendors" || v.category === category;
      const matchesSearch = v.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      {/* ===== Page-specific SEO + OG + Twitter ===== */}
      <Helmet>
        <title>ERA Vendors – Curated Event Professionals</title>
        <meta
          name="description"
          content="Explore ERA's curated vendors: photographers, decorators, caterers, and more to make your luxury event unforgettable."
        />

        {/* Open Graph */}
        <meta property="og:title" content="ERA Vendors – Curated Event Professionals" />
        <meta
          property="og:description"
          content="Explore ERA's curated vendors: photographers, decorators, caterers, and more to make your luxury event unforgettable."
        />
        <meta property="og:image" content="https://yourdomain.com/images/og-vendors.png" />
        <meta property="og:url" content="https://yourdomain.com/vendors" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ERA Vendors – Curated Event Professionals" />
        <meta
          name="twitter:description"
          content="Explore ERA's curated vendors: photographers, decorators, caterers, and more to make your luxury event unforgettable."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/og-vendors.png" />
      </Helmet>

      <div className="min-h-screen bg-primaryBg text-textPrimary">
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
          {/* Heading */}
          <header className="text-center md:text-left">
            <h1 className="font-heading text-4xl mb-2">Explore Our Vendors</h1>
            <p className="text-textSecondary">
              Discover curated professionals for your perfect event.
            </p>
          </header>

          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search vendors..."
              aria-label="Search vendors"
              className="flex-1 bg-transparent border border-border rounded px-4 py-3 text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/30"
            />

            {/* Categories */}
            <div className="flex gap-3 overflow-x-auto py-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={`px-4 py-1 rounded-full text-sm transition-transform duration-200 ${
                    category === c
                      ? "bg-accent text-primaryBg font-semibold"
                      : "bg-border text-textSecondary hover:text-textPrimary hover:scale-105"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Vendor grid */}
          <section>
            <p className="text-sm text-textSecondary mb-4">
              Showing {filteredVendors.length} vendors
            </p>

            {filteredVendors.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredVendors.map((vendor) => (
                  <VendorCard
                    key={vendor.id}
                    vendor={vendor}
                    onBook={() => onOpenBooking(vendor)}
                    onView={() => alert(`Viewing info for ${vendor.name}`)} // replace with modal/page later
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-textSecondary space-y-2">
                <p>No vendors found.</p>
                <p>Try searching for a different name or category.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}