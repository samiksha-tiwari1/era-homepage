import React from "react";

/**
 * 3-step process explaining how ERA works.
 */
export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Discover",
      desc: "Browse curated vendors for every event type."
    },
    {
      id: 2,
      title: "Connect",
      desc: "Message or book through our seamless booking flow."
    },
    {
      id: 3,
      title: "Celebrate",
      desc: "Enjoy your event with trusted professionals."
    }
  ];

  return (
    <div id="how" className="text-center">
      <h2 className="font-heading text-2xl mb-6">How ERA Works</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.id}
            className="p-6 rounded-xl border border-border bg-black/10"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-accent text-primaryBg font-semibold">
              {s.id}
            </div>
            <h3 className="font-heading text-lg mb-2">{s.title}</h3>
            <p className="text-textSecondary text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 