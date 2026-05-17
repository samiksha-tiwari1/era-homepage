// src/components/Testimonials.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Testimonials carousel
 * - Rotates testimonials one after another automatically
 * - Uses framer-motion for smooth slide-in/out animations
 */
export default function Testimonials() {
  // --------------------- Testimonial Items ---------------------
  const items = [
    { id: 1, quote: "A flawless experience — every vendor was top-tier.", by: "Rhea Kumar." },
    { id: 2, quote: "We booked our wedding in 2 weeks through ERA.", by: "Arjun Mehta" },
    { id: 3, quote: "The event was perfect, thanks to ERA's curated vendors.", by: "Sana Lakhani" },
    { id: 4, quote: "Highly recommended! Professional and seamless service.", by: "Karan Patel" },
    { id: 5, quote: "From start to finish, everything exceeded our expectations.", by: "Anita Singh" }
  ];

  // --------------------- State & Auto-Rotation ---------------------
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000); // rotate every 4 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  const currentItem = items[currentIndex];

  // --------------------- Motion Variants ---------------------
  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div id="testimonials" className="max-w-3xl mx-auto text-center py-12 px-6">
      {/* Heading */}
      <h2 className="font-heading text-2xl mb-8">What Clients Say</h2>

      {/* Animated testimonial */}
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={currentItem.id} // important for AnimatePresence
          className="p-6 rounded-xl border border-border bg-black/10"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
        >
          <p className="text-textSecondary text-lg">“{currentItem.quote}”</p>
          <footer className="mt-4 text-sm text-textSecondary">— {currentItem.by}</footer>
        </motion.blockquote>
      </AnimatePresence>
    </div>
  );
}