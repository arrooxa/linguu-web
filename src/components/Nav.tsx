"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-shadow duration-200"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.92)"
          : "rgba(255,249,196,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span
          className="text-xl select-none"
          style={{ color: "var(--primary)", fontWeight: 900 }}
        >
          Linguu
        </span>

        <a href="#hero">
          <button
            className="text-white text-sm transition-all duration-150 active:translate-y-[3px]"
            style={{
              background: "var(--primary)",
              fontWeight: 900,
              borderRadius: "var(--radius-btn)",
              padding: "9px 22px",
              boxShadow: "0 4px 0 var(--primary-dark)",
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(4px)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 4px 0 var(--primary-dark)";
              (e.currentTarget as HTMLButtonElement).style.transform = "";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 4px 0 var(--primary-dark)";
              (e.currentTarget as HTMLButtonElement).style.transform = "";
            }}
          >
            Experimentar grátis
          </button>
        </a>
      </div>
    </nav>
  );
}
