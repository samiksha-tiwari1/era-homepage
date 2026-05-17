// src/pages/Contact.jsx
import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO support
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  ChevronDown,
} from "lucide-react";

export default function Contact() {
  const faq = [
    {
      q: "How do I book an event?",
      a: "You can book directly through our 'Book Event' button or by filling out the contact form above.",
    },
    {
      q: "Do you provide vendors in all cities?",
      a: "Currently, we operate in select regions. We’re expanding soon, so follow @bookwithera for updates.",
    },
    {
      q: "How soon will I get a response?",
      a: "Our team usually responds within 24 hours to all inquiries.",
    },
    {
      q: "What types of events do you manage?",
      a: "From birthdays and engagements to weddings and corporate events — we customize everything based on your needs.",
    },
  ];

  return (
    <>
      {/* ===== Page-specific SEO + OG + Twitter ===== */}
      <Helmet>
        <title>Contact ERA – Premium Events</title>
        <meta
          name="description"
          content="Get in touch with ERA for luxury event management. Contact us for bookings, inquiries, or collaborations."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Contact ERA – Premium Events" />
        <meta
          property="og:description"
          content="Get in touch with ERA for luxury event management. Contact us for bookings, inquiries, or collaborations."
        />
        <meta property="og:image" content="https://yourdomain.com/images/og-contact.png" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact ERA – Premium Events" />
        <meta
          name="twitter:description"
          content="Get in touch with ERA for luxury event management. Contact us for bookings, inquiries, or collaborations."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/og-contact.png" />
      </Helmet>

      <main className="bg-primaryBg text-textPrimary min-h-screen">
        {/* Header */}
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Contact ERA</h1>
          <p className="text-textSecondary max-w-xl mx-auto">
            Ready to create something extraordinary? Let’s start planning your
            dream event today.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto px-6 py-12">
          {/* Phone */}
          <div className="bg-border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition-transform">
            <Phone className="text-accent w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold">Phone</h3>
            <p className="text-accent mt-1">+91 75181 40717</p>
            <p className="text-sm text-textSecondary">
              Drop us a call or WhatsApp for quick replies
            </p>
          </div>

          {/* WhatsApp */}
          <div className="bg-border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition-transform">
            <MessageCircle className="text-accent w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-accent mt-1">+91 75181 40717</p>
            <p className="text-sm text-textSecondary">Quick responses guaranteed</p>
          </div>

          {/* Email */}
          <div className="bg-border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition-transform">
            <Mail className="text-accent w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold">Email</h3>
            <p className="text-accent mt-1">hello@era-events.com</p>
            <p className="text-sm text-textSecondary">We reply within 24 hours</p>
          </div>

          {/* Location */}
          <div className="bg-border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition-transform">
            <MapPin className="text-accent w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold">Location</h3>
            <p className="text-accent mt-1">Currently in Gorakhpur, India</p>
            <p className="text-sm text-textSecondary">Expanding soon</p>
          </div>

          {/* Instagram */}
          <div className="bg-border rounded-xl p-6 text-center hover:scale-105 hover:shadow-lg transition-transform">
            <Instagram className="text-accent w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold">Instagram</h3>
            <p className="text-accent mt-1">@bookwithera</p>
            <p className="text-sm text-textSecondary">Follow us for updates</p>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-accent/10 py-12">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-accent">50+</h3>
              <p className="text-textSecondary">Events Organized</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent">200+</h3>
              <p className="text-textSecondary">Vendors Onboarded</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent">100%</h3>
              <p className="text-textSecondary">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent">24 hrs</h3>
              <p className="text-textSecondary">Response Time</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-center mb-4">Send Us a Message</h2>
          <p className="text-center text-textSecondary mb-8">
            Tell us about your event vision and we’ll help bring it to life.
          </p>

          <form className="bg-border rounded-xl p-6 grid gap-6">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="px-4 py-2 rounded bg-primaryBg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/40"
                required
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="px-4 py-2 rounded bg-primaryBg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/40"
                required
              />
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number *"
                pattern="[0-9]{10}"
                className="px-4 py-2 rounded bg-primaryBg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/40"
                required
              />
              <select className="px-4 py-2 rounded bg-primaryBg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/40">
                <option>Select a subject</option>
                <option>General Inquiry</option>
                <option>Booking Assistance</option>
                <option>Partnerships</option>
              </select>
            </div>

            {/* Budget Range */}
            <select className="px-4 py-2 rounded bg-primaryBg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/40">
              <option>Estimated Budget Range</option>
              <option>Less than ₹50k</option>
              <option>₹50k – ₹2L</option>
              <option>₹2L – ₹5L</option>
              <option>₹5L+</option>
            </select>

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Tell us about your event vision, requirements, or any questions you have..."
              className="px-4 py-2 rounded bg-primaryBg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/40"
              required
            />

            {/* Button */}
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-accent text-primaryBg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
          <p className="text-center text-sm text-textSecondary mt-4">
            ✅ Our team responds within 24 hours (often much faster!)
          </p>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <details
                key={index}
                className="bg-border rounded-xl p-4 cursor-pointer hover:shadow-lg transition"
              >
                <summary className="flex justify-between items-center font-semibold">
                  {item.q}
                  <ChevronDown className="w-5 h-5 ml-2" />
                </summary>
                <p className="mt-2 text-textSecondary">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}