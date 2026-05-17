import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav({ onOpenBooking }) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // track input
  const navigate = useNavigate(); // for programmatic navigation

  // handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/vendors?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setOpen(false); // close mobile menu if open
    }
  };

  return (
    <header className="bg-primaryBg border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-accent font-heading text-xl">
          ERA
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-textSecondary items-center">
          <Link to="/" className="hover:text-textPrimary">
            Home
          </Link>
          <Link to="/vendors" className="hover:text-textPrimary">
            Vendors
          </Link>
          <Link to="/about" className="hover:text-textPrimary">
            About
          </Link>
          <Link to="/contact" className="hover:text-textPrimary">
            Contact
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="ml-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services..."
              className="px-3 py-1 rounded bg-border text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </form>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 rounded-md bg-accent text-primaryBg font-semibold hover:opacity-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
          >
            Book Event
          </button>

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden p-2 rounded hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="22" height="2" y="0" fill="#FFFFFF" />
              <rect width="22" height="2" y="6" fill="#FFFFFF" />
              <rect width="22" height="2" y="12" fill="#FFFFFF" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 text-textSecondary space-y-2">
          <Link className="block py-2" to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link className="block py-2" to="/vendors" onClick={() => setOpen(false)}>
            Vendors
          </Link>
          <Link className="block py-2" to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link className="block py-2" to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <button
            onClick={() => { onOpenBooking(); setOpen(false); }}
            className="block w-full text-left py-2 bg-accent text-primaryBg rounded-md font-semibold"
          >
            Book Event
          </button>

          {/* Mobile search bar */}
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services..."
              className="w-full px-3 py-1 rounded bg-border text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accent/30 mt-2"
            />
          </form>
        </div>
      )}
    </header>
  );
}