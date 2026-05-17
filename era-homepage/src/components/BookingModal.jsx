// src/components/BookingModal.jsx
import React, { useState, useEffect } from "react";
import vendors from "../data/vendors";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingModal({ open, onClose, preselectedVendor }) {
  const [step, setStep] = useState(1);

  const initialFormData = {
    vendor: preselectedVendor?.name || "",
    eventType: "",
    guests: "",
    date: null,
    time: "",
    location: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "+91 ",
    budget: "",
    details: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      vendor: preselectedVendor?.name || "",
    }));
  }, [preselectedVendor]);

  if (!open) return null;

  // ------------------- Time Slots (30-min intervals) -------------------
  const timeSlots = Array.from({ length: 24 * 2 }, (_, i) => {
    const hours = Math.floor(i / 2);
    const minutes = i % 2 === 0 ? "00" : "30";
    return `${hours.toString().padStart(2, "0")}:${minutes}`;
  });

  const timeOptions = timeSlots.map((t) => ({ value: t, label: t }));

  // ------------------- Handle Field Change -------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let phoneValue = value.replace(/\s+/g, " ");
      if (!phoneValue.startsWith("+91")) {
        phoneValue = "+91 " + phoneValue.replace(/^\+?91\s?/, "");
      }
      if (phoneValue === "+91") phoneValue = "+91 ";
      setFormData((prev) => ({ ...prev, [name]: phoneValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ------------------- Step Validation -------------------
  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.eventType) newErrors.eventType = "Event type is required";
      if (!formData.guests || Number(formData.guests) <= 0)
        newErrors.guests = "Guests must be a positive number";
      if (!(formData.date instanceof Date) || isNaN(formData.date.getTime())) {
        newErrors.date = "Valid date required";
      }
      if (!formData.time) newErrors.time = "Time required";
      if (!formData.location) newErrors.location = "Location required";
    }
    if (step === 2) {
      if (!formData.firstName) newErrors.firstName = "First name required";
      if (!formData.lastName) newErrors.lastName = "Last name required";

      // Phone validation
      if (!formData.phone) {
        newErrors.phone = "Phone is required";
      } else {
        const normalizedPhone = formData.phone.replace(/\s+/g, "").trim();
        const phoneRegex = /^\+91[0-9]{10}$/;
        if (!phoneRegex.test(normalizedPhone)) {
          newErrors.phone =
            "Enter valid Indian phone number (e.g., +91 9876543210)";
        }
      }

      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    }
    if (step === 3) {
      if (!formData.budget) newErrors.budget = "Budget required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Booking submitted:", formData);
      handleClose();
    }
  };

  const handleClose = () => {
    setStep(1);
    setFormData(initialFormData);
    onClose();
  };

  // ------------------- UI -------------------
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    >
      <div className="bg-primaryBg text-textPrimary w-full max-w-2xl rounded-xl shadow-lg p-8 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close booking modal"
          className="absolute top-3 right-3 text-textSecondary hover:text-textPrimary"
        >
          ✕
        </button>

        {/* Title */}
        <h2 id="booking-modal-title" className="text-2xl font-heading mb-2">
          Book Your Event
        </h2>
        <p className="text-textSecondary mb-6">
          Let’s bring your vision to life. Fill in the details and we’ll create
          something extraordinary.
        </p>

        {/* Stepper */}
        <div className="flex justify-between mb-6">
          {["Event Details", "Contact Info", "Preferences"].map((label, i) => {
            const isCompleted = step > i + 1;
            const isActive = step === i + 1;
            return (
              <div key={i} className="flex-1 text-center">
                <div
                  className={`mx-auto w-8 h-8 flex items-center justify-center rounded-full ${
                    isActive
                      ? "bg-accent text-primaryBg"
                      : isCompleted
                      ? "bg-green-500 text-white"
                      : "bg-border text-textSecondary"
                  }`}
                >
                  {isCompleted ? "✓" : i + 1}
                </div>
                <p className="text-xs mt-2">{label}</p>
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ------------------- Step 1: Event Details ------------------- */}
          {step === 1 && (
            <div className="space-y-4">
              {/* Vendor (optional) */}
              <div>
                <label className="block text-sm text-textSecondary">
                  Select Vendor (optional)
                </label>
                <select
                  name="vendor"
                  value={formData.vendor}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent rounded px-3 py-2"
                  autoFocus
                >
                  <option value="">-- None --</option>
                  {vendors.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-sm text-textSecondary">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent rounded px-3 py-2"
                >
                  <option value="">Select event type</option>
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Bachelor’s Party</option>
                  <option>College Party</option>
                  <option>Birthday</option>
                  <option>Corporate</option>
                </select>
                {errors.eventType && (
                  <p className="text-red-500 text-xs">{errors.eventType}</p>
                )}
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm text-textSecondary">
                  Expected Guests *
                </label>
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent rounded px-3 py-2"
                  placeholder="Number of guests"
                  min="1"
                />
                {errors.guests && (
                  <p className="text-red-500 text-xs">{errors.guests}</p>
                )}
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Event Date */}
                <div>
                  <label className="block text-sm text-textSecondary">
                    Event Date *
                  </label>
                  <DatePicker
                    selected={
                      formData.date instanceof Date ? formData.date : null
                    }
                    onChange={(date) =>
                      setFormData((prev) => ({ ...prev, date }))
                    }
                    className="w-full border border-border bg-transparent rounded px-3 py-2"
                    placeholderText="Select event date"
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    isClearable
                    showPopperArrow={false}
                    autoComplete="off"
                    popperPlacement="bottom-start"
                    popperModifiers={[
                      {
                        name: "preventOverflow",
                        options: {
                          rootBoundary: "viewport",
                          tether: false,
                          altAxis: true,
                        },
                      },
                    ]}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs">{errors.date}</p>
                  )}
                </div>

                {/* Event Time */}
                <div>
                  <label className="block text-sm text-textSecondary">
                    Preferred Time *
                  </label>
                  <Select
                    options={timeOptions}
                    value={timeOptions.find((o) => o.value === formData.time)}
                    onChange={(selected) =>
                      setFormData((prev) => ({ ...prev, time: selected.value }))
                    }
                    placeholder="Select preferred time"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        backgroundColor: "#0D0D0D",
                        borderColor: "#1F1F1F",
                        borderRadius: "0.5rem",
                        minHeight: "2.5rem",
                        boxShadow: state.isFocused
                          ? `0 0 0 1px #D4AF37`
                          : "none",
                        "&:hover": {
                          borderColor: "#D4AF37",
                        },
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: "#FFFFFF",
                      }),
                      placeholder: (base) => ({
                        ...base,
                        color: "#B0B0B0",
                      }),
                      menu: (base) => ({
                        ...base,
                        backgroundColor: "#0D0D0D",
                        borderRadius: "0.5rem",
                        zIndex: 50,
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused
                          ? "#1F1F1F"
                          : "#0D0D0D",
                        color: "#FFFFFF",
                        cursor: "pointer",
                      }),
                      dropdownIndicator: (base) => ({
                        ...base,
                        color: "#D4AF37",
                        "&:hover": { color: "#D4AF37" },
                      }),
                      indicatorSeparator: (base) => ({
                        ...base,
                        backgroundColor: "#1F1F1F",
                      }),
                    }}
                  />
                  {errors.time && (
                    <p className="text-red-500 text-xs">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm text-textSecondary">
                  Event Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent rounded px-3 py-2"
                  placeholder="Enter venue or city"
                />
                {errors.location && (
                  <p className="text-red-500 text-xs">{errors.location}</p>
                )}
              </div>
            </div>
          )}

          {/* ------------------- Step 2: Contact Info ------------------- */}
          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-textSecondary">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent rounded px-3 py-2"
                  autoFocus
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-textSecondary">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent rounded px-3 py-2"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-textSecondary">
                  Email (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent rounded px-3 py-2"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-textSecondary">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent rounded px-3 py-2"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>
            </div>
          )}

          {/* ------------------- Step 3: Preferences ------------------- */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-textSecondary">
                  Budget Range *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent rounded px-3 py-2"
                  autoFocus
                >
                  <option value="">Select budget range</option>
                  <option>Less than ₹50,000</option>
                  <option>₹50,000 - ₹1,00,000</option>
                  <option>₹1,00,000 - ₹5,00,000</option>
                  <option>₹5,00,000+</option>
                </select>
                {errors.budget && (
                  <p className="text-red-500 text-xs">{errors.budget}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-textSecondary">
                  Additional Details
                </label>
                <textarea
                  name="details"
                  rows="4"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent rounded px-3 py-2"
                  placeholder="Tell us more about your vision..."
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-border rounded hover:bg-border/70"
              >
                Previous
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-accent text-primaryBg rounded hover:opacity-90"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-primaryBg rounded hover:opacity-90"
              >
                Submit Booking Request
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
