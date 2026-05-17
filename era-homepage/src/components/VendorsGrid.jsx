import React from "react";
import vendors from "../data/vendors";
import VendorCard from "./VendorCard";

/**
 * Displays all vendors in a grid.
 * Pulls data from src/data/vendors.js
 */
export default function VendorsGrid({ onBook }) {
  return (
    <section
      id="vendors"
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      {vendors.map((v) => (
        <VendorCard key={v.id} vendor={v} onBook={() => onBook(v)} />
      ))}
    </section>
  );
}