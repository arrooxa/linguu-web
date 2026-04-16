"use client";

import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";
import StoreButtons from "./StoreButtons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--bg-top) 0%, var(--bg-mid) 55%, var(--bg-bot) 100%)",
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <FloatingShapes />

      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest mb-5"
              style={{
                background: "rgba(249,115,22,0.12)",
                border: "1px solid rgba(249,115,22,0.35)",
                color: "var(--primary-dark)",
                borderRadius: "var(--radius-pill)",
                padding: "5px 14px",
              }}
            >
              Inglês para crianças de 6 a 8 anos
            </div>

            {/* Headline */}
            <h1
              className="mb-4 leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 900,
                color: "var(--text)",
              }}
            >
              O inglês que seu filho vai{" "}
              <span style={{ color: "var(--primary)" }}>
                pedir pra repetir.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontSize: "1.0625rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
              }}
            >
              Missões de voz com tutores animados, sem anúncios e sem tédio.
              Para crianças de 6 a 8 anos.
            </p>

            {/* Store buttons */}
            <StoreButtons />

            {/* Microcopy */}
            <p
              className="mt-4"
              style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
            >
              Primeira missão grátis · R$49/mês depois · Cancele quando quiser
            </p>
          </motion.div>

          {/* Phone mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <div
              className="flex flex-col items-center justify-center gap-3"
              style={{
                width: 160,
                height: 280,
                background: "white",
                borderRadius: 28,
                border: "3px solid var(--border)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)",
                padding: 16,
              }}
            >
              {/* Status bar */}
              <div
                className="w-full flex justify-between items-center"
                style={{ fontSize: 9, color: "var(--text-muted)" }}
              >
                <span>9:41</span>
                <span>●●●</span>
              </div>

              {/* Avatar placeholder */}
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 64,
                  height: 64,
                  background: "var(--primary-light)",
                  fontSize: 32,
                }}
              >
                🦁
              </div>

              {/* Tutor bubble */}
              <div
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "6px 10px",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--text)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                Say: <span style={{ color: "var(--primary)" }}>lion</span> 🎯
              </div>

              {/* Record button */}
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 44,
                  height: 44,
                  background: "var(--error)",
                  boxShadow: "0 4px 0 var(--error-dark)",
                  fontSize: 18,
                }}
              >
                🎙
              </div>

              {/* Progress dots */}
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: i === 0 ? 10 : 8,
                      height: i === 0 ? 10 : 8,
                      background:
                        i === 0 ? "var(--primary)" : "var(--border)",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
