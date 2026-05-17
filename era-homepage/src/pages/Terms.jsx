// src/pages/Terms.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      {/* ===== Page-specific SEO + Social Preview ===== */}
      <Helmet>
        <title>Terms & Conditions – ERA Events</title>
        <meta
          name="description"
          content="Read ERA's Terms & Conditions for using our event booking platform. Your agreement ensures a seamless experience."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Terms & Conditions – ERA Events" />
        <meta
          property="og:description"
          content="Read ERA's Terms & Conditions for using our event booking platform. Your agreement ensures a seamless experience."
        />
        <meta property="og:image" content="https://yourdomain.com/images/og-terms.png" />
        <meta property="og:url" content="https://yourdomain.com/terms" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions – ERA Events" />
        <meta
          name="twitter:description"
          content="Read ERA's Terms & Conditions for using our event booking platform. Your agreement ensures a seamless experience."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/og-terms.png" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-white">Terms & Conditions</h1>

        <p className="mb-6 text-gray-300">
          Welcome to ERA. By using our website and services, you agree to the
          following terms and conditions. Please read them carefully before
          proceeding with any bookings or services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">Use of Services</h2>
        <p className="text-gray-300">
          Our platform connects customers with vendors for event management.
          Customers agree to use our services only for lawful purposes and in
          compliance with all applicable laws.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">Booking & Payments</h2>
        <p className="text-gray-300">
          All bookings must be confirmed with an advance payment. Payments made
          through our platform are subject to our{" "}
          <a href="/refund" className="text-accent hover:underline">
            Refund & Cancellation Policy
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">Vendor Responsibility</h2>
        <p className="text-gray-300">
          ERA acts as a platform to connect you with vendors. Each vendor is
          responsible for delivering their promised services. Any disputes must be
          resolved directly with the vendor unless otherwise stated.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">Limitation of Liability</h2>
        <p className="text-gray-300">
          While we aim to ensure a seamless experience, ERA is not liable for any
          damages, delays, or service failures caused by third-party vendors or
          unforeseen circumstances.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">Changes to Terms</h2>
        <p className="text-gray-300">
          ERA reserves the right to update or modify these terms at any time.
          Updates will be posted on this page, and continued use of our services
          implies acceptance of the revised terms.
        </p>
      </div>
    </>
  );
}