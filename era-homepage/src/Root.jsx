import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Shared UI
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import App from "./App";
import Vendors from "./pages/Vendors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";        //  Add this
import Privacy from "./pages/Privacy";    //  Add this
import Refund from "./pages/Refund";      // Optional refund page

export default function Root() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);

  function openBooking(vendor = null) {
    setSelectedVendor(vendor);
    setIsBookingOpen(true);
  }

  function closeBooking() {
    setSelectedVendor(null);
    setIsBookingOpen(false);
  }

  return (
    <>
      <Nav onOpenBooking={() => openBooking(null)} />

      <Routes>
        <Route path="/" element={<App onOpenBooking={openBooking} />} />
        <Route path="/vendors" element={<Vendors onOpenBooking={openBooking} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />       {/* ✅ Terms page */}
        <Route path="/privacy" element={<Privacy />} />   {/* ✅ Privacy page */}
        <Route path="/refund" element={<Refund />} />     {/* ✅ Refund page */}
      </Routes>

      <Footer />

      <BookingModal
        open={isBookingOpen}
        onClose={closeBooking}
        preselectedVendor={selectedVendor}
      />

      {/* Floating Buttons */}
      <WhatsAppButton
        phone="917518140717"
        message="Hi! I want to inquire about your services."
      />
    </>
  );
}