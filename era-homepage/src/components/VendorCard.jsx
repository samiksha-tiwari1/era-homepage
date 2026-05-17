import React from "react";

export default function VendorCard({ vendor, onBook, onView }) {
  return (
    <article className="bg-gradient-to-b from-black/40 to-black/20 rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow transform hover:scale-105 focus-within:ring-2 focus-within:ring-accent/30">
      
      {/* Image + Category */}
      <div className="relative">
        <img
          src={vendor.image}   // ✅ FIXED HERE
          alt={vendor.name}
          className="w-full h-44 object-cover"
        />
        <div className="absolute top-3 left-3 bg-black/60 px-3 py-1 rounded text-textSecondary text-sm">
          {vendor.category}
        </div>
      </div>

      {/* Details */}
      <div className="p-4 flex justify-between items-start">
        <div>
          <h3 className="font-heading text-lg">{vendor.name}</h3>
          <div className="text-textSecondary text-sm mt-1">{vendor.price}</div>
        </div>

        {/* Rating + Buttons */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.9 6.3L21 9.3l-5 3.9L17 21l-5-3.1L7 21l1-7.8-5-3.9 6.1-1L12 2z"
                fill="#F5C518"
              />
            </svg>
            <span className="text-sm">{vendor.rating}</span>
          </div>

          <div className="flex gap-2 mt-2">
            <button
              onClick={onView}
              className="text-sm px-3 py-1 rounded-md border border-border hover:bg-white/5"
            >
              View
            </button>
            <button
              onClick={onBook}
              className="text-sm px-3 py-1 rounded-md bg-accent text-primaryBg hover:bg-accent/90"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}