// src/pages/Refund.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Refund() {
  return (
    <>
      {/* ===== Page-specific SEO + Social Preview ===== */}
      <Helmet>
        <title>Refund & Cancellation Policy – ERA Events</title>
        <meta
          name="description"
          content="Read ERA's Refund & Cancellation Policy. Learn the terms for cancelling bookings and requesting refunds for your events."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Refund & Cancellation Policy – ERA Events" />
        <meta
          property="og:description"
          content="Read ERA's Refund & Cancellation Policy. Learn the terms for cancelling bookings and requesting refunds for your events."
        />
        <meta property="og:image" content="https://yourdomain.com/images/og-refund.png" />
        <meta property="og:url" content="https://yourdomain.com/refund" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refund & Cancellation Policy – ERA Events" />
        <meta
          name="twitter:description"
          content="Read ERA's Refund & Cancellation Policy. Learn the terms for cancelling bookings and requesting refunds for your events."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/og-refund.png" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Refund & Cancellation Policy
        </h1>

        <p className="mb-6 text-gray-300">
          At ERA, we understand that plans may change. This Refund & Cancellation
          Policy outlines the terms for cancelling bookings and requesting refunds.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">Cancellations</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            Cancellations made <span className="font-semibold text-white">14 days</span> 
            before the event are eligible for a full refund.
          </li>
          <li>
            Cancellations made within <span className="font-semibold text-white">7–14 days</span> 
            of the event will receive a 50% refund.
          </li>
          <li>
            Cancellations made within <span className="font-semibold text-red-500">7 days</span> 
            of the event are <span className="font-bold text-red-500">non-refundable</span>.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">Refund Process</h2>
        <p className="text-gray-300">
          Approved refunds will be processed within{" "}
          <span className="font-semibold text-white">7–10 business days</span> to
          your original payment method. You will receive a confirmation email once
          the refund has been initiated.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">Non-Refundable Services</h2>
        <p className="text-gray-300">
          Certain services, such as customized décor, catering orders, or vendor
          advance payments, may be non-refundable. Such cases will be clearly
          communicated during booking.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-white">Contact Us</h2>
        <p className="text-gray-300">
          For cancellation or refund queries, contact us at:
        </p>
        <p className="mt-2">
          <span className="block">📧 bookwithera@gmail.com</span>
          <span className="block">📞 +91 75181 40717</span>
        </p>
      </div>
    </>
  );
}