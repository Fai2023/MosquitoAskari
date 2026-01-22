import React from "react";

export default function Banner() {
  return (
    <section className="banner relative overflow-hidden">
      {/* Banner image / content should be here */}
      <div className="banner-content relative">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">Your headline</h1>
        <p className="mt-3 text-white/90 max-w-xl">Short supporting text.</p>

        {/* Prominent Learn More CTA */}
        <a
          href="/products"
          className="learn-more inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-3 rounded-xl shadow-2xl uppercase tracking-wider z-50"
          aria-label="Learn more about our mosquito traps"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}