"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProblemSolution() {
  return (
    <section className="py-24" style={{ background: "white" }}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p
            className="uppercase tracking-widest mb-4"
            style={{
              fontSize: "0.6875rem",
              fontWeight: 700,
              color: "var(--text-muted)",
            }}
          >
            O desafio
          </p>

          <h2
            className="mb-6 leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
              fontWeight: 800,
              color: "var(--text)",
            }}
          >
            Apps de idioma foram feitos para adultos.{" "}
            <span style={{ color: "var(--primary)" }}>
              Seu filho merece um de verdade.
            </span>
          </h2>

          <p
            className="mb-2 leading-relaxed"
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
            }}
          >
            A maioria dos apps ensina inglês com texto, listas e repetição.
            Para adultos, funciona. Para uma criança de 7 anos, não.
          </p>
          <p
            className="mb-10 leading-relaxed"
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
            }}
          >
            O Linguu foi construído do zero para crianças: aprendizado por voz,
            tutores com personalidade e missões que parecem um jogo — não uma
            aula.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div
            className="rounded-2xl p-5"
            style={{
              background: "var(--error-light)",
              border: "1px solid #fca5a5",
            }}
          >
            <p
              className="mb-2"
              style={{
                fontWeight: 700,
                fontSize: "0.9375rem",
                color: "var(--error-dark)",
              }}
            >
              ❌ Apps adultos
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#7f1d1d",
                lineHeight: 1.6,
              }}
            >
              Textos longos, exercícios repetitivos, sem engajamento — e a
              criança abandona em dias.
            </p>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: "var(--success-light)",
              border: "1px solid #6ee7b7",
            }}
          >
            <p
              className="mb-2"
              style={{
                fontWeight: 700,
                fontSize: "0.9375rem",
                color: "var(--success-dark)",
              }}
            >
              ✅ Linguu
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#064e3b",
                lineHeight: 1.6,
              }}
            >
              Fala com o tutor, completa missões, aprende sem perceber — e pede
              pra jogar de novo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
