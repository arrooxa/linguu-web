"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "1",
    color: "var(--primary)",
    shadow: "var(--primary-dark)",
    title: "Baixe e crie o perfil",
    description:
      "Escolha o tutor favorito do seu filho. Cada personagem tem voz e personalidade próprias.",
  },
  {
    number: "2",
    color: "var(--secondary)",
    shadow: "var(--secondary-dark)",
    title: "Missão do dia",
    description:
      "O tutor fala em inglês. Seu filho responde em voz. A IA avalia, corrige e encoraja — como um professor particular no bolso.",
  },
  {
    number: "3",
    color: "var(--success)",
    shadow: "var(--success-dark)",
    title: "Veja a evolução",
    description:
      "Sequência diária, missões completadas. Inglês aprendido de verdade, sem que ele perceba.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

export default function HowItWorks() {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(160deg, var(--bg-top) 0%, var(--bg-mid) 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-center mb-14 leading-tight"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
            fontWeight: 800,
            color: "var(--text)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          3 passos.{" "}
          <span style={{ color: "var(--primary)" }}>15 minutos por dia.</span>{" "}
          Inglês que fica.
        </motion.h2>

        <div className="flex flex-col gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-5"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full text-white text-lg"
                style={{
                  width: 44,
                  height: 44,
                  background: step.color,
                  boxShadow: `0 4px 0 ${step.shadow}`,
                  fontWeight: 900,
                }}
              >
                {step.number}
              </div>
              <div>
                <p
                  className="mb-1"
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--text)",
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
