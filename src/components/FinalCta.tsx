"use client";

import { motion } from "framer-motion";
import StoreButtons from "./StoreButtons";

export default function FinalCta() {
  return (
    <section
      className="py-24 text-center"
      style={{ background: "var(--dark, #1c1917)" }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2
            className="mb-4 leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              fontWeight: 900,
              color: "white",
            }}
          >
            Comece hoje.{" "}
            <span style={{ color: "var(--accent)" }}>
              A primeira missão é de graça. ✨
            </span>
          </h2>

          <p
            className="mb-8"
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "#9ca3af",
              lineHeight: 1.6,
            }}
          >
            Sem cartão de crédito para começar. R$49/mês depois, quando você
            vir a diferença.
          </p>

          <StoreButtons className="justify-center" />

          <p
            className="mt-5"
            style={{ fontSize: "0.75rem", color: "#6b7280" }}
          >
            Cancele quando quiser · Sem compromisso · iOS e Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}
