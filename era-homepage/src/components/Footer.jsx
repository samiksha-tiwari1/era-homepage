// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primaryBg border-t border-border text-textSecondary">
      {/* ------------------- Main Grid: Brand | Contact | Legal ------------------- */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        {/* ------------------- Brand Section ------------------- */}
        <div>
          <div className="font-heading text-xl text-accent mb-2">ERA</div>
          <div className="text-sm">
            Elevating celebrations through exceptional service, curated vendors,
            and unforgettable experiences. Where luxury meets perfection.
          </div>
        </div>

        {/* ------------------- Contact Section ------------------- */}
        <address className="not-italic text-sm">
          <div className="font-semibold text-textPrimary mb-2">Contact</div>
          <div>
            Email:{" "}
            <a href="mailto:bookwithera@gmail.com" className="hover:text-accent">
              bookwithera@gmail.com
            </a>
          </div>
          <div>
            Phone:{" "}
            <a href="tel:+917518140717" className="hover:text-accent">
              +91 75181 40717
            </a>
          </div>
          <div className="flex items-center space-x-3 mt-2">
            <span className="font-semibold text-textPrimary">Follow us:</span>
            <a
              href="https://www.instagram.com/bookwithera"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/bookwithera"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-accent"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/bookwithera"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-accent"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </address>

        {/* ------------------- Legal Section ------------------- */}
        <div className="text-sm">
          <div className="font-semibold text-textPrimary mb-2">Legal</div>
          <div className="flex flex-col space-y-1">
            <Link to="/terms" className="hover:text-accent">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/refund" className="hover:text-accent">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------- Stats Section ------------------- */}
      <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-textSecondary space-y-1">
        <div>50+ Events Created</div>
        <div className="text-yellow-400" aria-label="Five star rating">
          ★ ★ ★ ★ ★
        </div>
        <div>4.9/5 Rating</div>
      </div>

      {/* ------------------- Bottom Note ------------------- */}
      <div className="text-center text-textSecondary text-xs py-4 border-t border-border">
        © 2025 ERA Premium Events. All rights reserved.
      </div>
    </footer>
  );
}