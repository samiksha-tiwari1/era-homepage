// src/pages/Privacy.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      {/* ===== Page-specific SEO + Social Preview ===== */}
      <Helmet>
        <title>Privacy Policy – ERA Events</title>
        <meta
          name="description"
          content="Learn how ERA collects, uses, and protects your personal information. Your privacy is our priority."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy – ERA Events" />
        <meta
          property="og:description"
          content="Learn how ERA collects, uses, and protects your personal information. Your privacy is our priority."
        />
        <meta property="og:image" content="https://yourdomain.com/images/og-privacy.png" />
        <meta property="og:url" content="https://yourdomain.com/privacy" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy – ERA Events" />
        <meta
          name="twitter:description"
          content="Learn how ERA collects, uses, and protects your personal information. Your privacy is our priority."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/og-privacy.png" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h1>

        <p className="mb-6 text-gray-300">
          ERA values your privacy. This Privacy Policy explains how we collect,
          use, and protect your personal information when you use our website and
          services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">
          Information We Collect
        </h2>
        <p className="text-gray-300">
          We may collect personal details such as your name, email, phone number,
          and event requirements when you make a booking or contact us. We also
          collect limited browsing data to improve user experience.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>To process bookings and provide requested services.</li>
          <li>To communicate updates, confirmations, and support.</li>
          <li>To improve our services and customer experience.</li>
          <li>To comply with legal obligations when necessary.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">
          Data Protection
        </h2>
        <p className="text-gray-300">
          We implement appropriate security measures to protect your personal
          data. However, no online system is 100% secure, and we cannot guarantee
          absolute safety.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">
          Sharing Information
        </h2>
        <p className="text-gray-300">
          We do not sell or rent your personal information. Limited details may be
          shared with vendors or third-party service providers strictly for the
          purpose of fulfilling your bookings.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">
          Your Rights
        </h2>
        <p className="text-gray-300">
          You may request access, correction, or deletion of your personal
          information by contacting us at{" "}
          <a
            href="mailto:bookwithera@gmail.com"
            className="text-accent hover:underline"
          >
            bookwithera@gmail.com
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">
          Updates to Policy
        </h2>
        <p className="text-gray-300">
          ERA may update this Privacy Policy as needed. Changes will be reflected
          on this page, and continued use of our services implies acceptance of
          the updated policy.
        </p>
      </div>
    </>
  );
}