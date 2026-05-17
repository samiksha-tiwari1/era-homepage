// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async"; //  import Helmet

export default function About() {
  return (
    <>
      {/* ===== Page-specific SEO + OG + Twitter ===== */}
      <Helmet>
        <title>About ERA – Premium Events</title>
        <meta
          name="description"
          content="Discover ERA's story: redefining luxury event management with curated vendors, seamless booking, and unforgettable experiences."
        />

        {/* Open Graph */}
        <meta property="og:title" content="About ERA – Premium Events" />
        <meta
          property="og:description"
          content="Discover ERA's story: redefining luxury event management with curated vendors, seamless booking, and unforgettable experiences."
        />
        <meta property="og:image" content="https://yourdomain.com/images/og-about.png" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About ERA – Premium Events" />
        <meta
          name="twitter:description"
          content="Discover ERA's story: redefining luxury event management with curated vendors, seamless booking, and unforgettable experiences."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/og-about.png" />
      </Helmet>

      <div className="bg-primaryBg text-textPrimary">
        {/* ===== Section 1: Intro / Hero ===== */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center relative overflow-hidden">
          <motion.h1
            className="text-4xl md:text-6xl font-playfair text-accent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-textPrimary">ERA</span>
          </motion.h1>
          <motion.p
            className="text-textSecondary max-w-2xl mx-auto leading-relaxed mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ERA is your luxury destination for unforgettable events — blending
            elegance, convenience, and timeless experiences. We bring together
            curated spaces, trusted vendors, and personalized service to ensure
            every celebration reflects your story.
          </motion.p>
          <motion.button
            className="mt-8 px-8 py-3 bg-gradient-to-r from-accent to-yellow-400 text-black rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Book Your Event
          </motion.button>
        </section>

        {/* ===== Section 2: Our Story ===== */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20 items-center">
          <img
            src="/images/about1.jpg"
            alt="Our Story"
            className="rounded-2xl shadow-lg object-cover"
            loading="lazy"
          />
          <div className="space-y-6">
            <p className="uppercase tracking-widest text-sm text-accent">Our Journey</p>
            <h2 className="text-3xl font-playfair text-accent">Our Story</h2>
            <p className="text-textSecondary leading-relaxed">
              ERA was founded with a vision to redefine event planning in India.
              We believe that milestones deserve more than ordinary — they deserve
              to be celebrated with grace, style, and ease.
            </p>
            <p className="text-textSecondary leading-relaxed">
              What began as a passion for crafting memorable moments has evolved
              into a platform that connects discerning clients with the finest
              vendors and venues. With ERA, you don’t just plan an event — you
              create a legacy.
            </p>
          </div>
        </section>

        {/* ===== Section 3: Crafting Luxury ===== */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <p className="uppercase tracking-widest text-sm text-accent">Our Promise</p>
            <h2 className="text-3xl font-playfair text-accent">Crafting Luxury</h2>
            <p className="text-textSecondary leading-relaxed">
              At ERA, luxury isn’t just about appearances — it’s about thoughtful
              details, seamless execution, and experiences that linger long after
              the lights fade.
            </p>
            <ul className="space-y-2">
              {[
                "Curated network of trusted partners",
                "Personalized event experiences",
                "A promise of flawless execution",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-textSecondary">
                  <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/about2.jpg"
            alt="Crafting Luxury"
            className="rounded-2xl shadow-lg object-cover order-1 md:order-2"
            loading="lazy"
          />
        </section>

        {/* ===== Section 4: Final CTA ===== */}
        <section className="relative bg-altMobileBg text-black overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-20 items-center relative z-10">
            <img
              src="/images/about3.jpg"
              alt="Celebrate with ERA"
              className="rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
            <div className="space-y-6">
              <h2 className="text-3xl font-playfair text-accent">Celebrate with ERA</h2>
              <p className="text-gray-700 leading-relaxed">
                Every milestone deserves to be celebrated with meaning. With ERA,
                your events are not just organized — they are elevated into
                timeless experiences. Let us help you create moments that will be
                remembered, cherished, and spoken of for years to come.
              </p>
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-accent to-yellow-400 text-black rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                Book Your Event
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}