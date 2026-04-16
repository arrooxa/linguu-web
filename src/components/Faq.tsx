"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ITEMS = [
  {
    question: "Para qual idade é o Linguu?",
    answer:
      "Para crianças de 6 a 8 anos — fase ideal para aprender idiomas. Interface, missões e tutores foram desenhados especificamente para essa faixa etária.",
  },
  {
    question: "Como funciona a assinatura?",
    answer:
      "A primeira missão é completamente grátis, sem precisar de cartão. Depois disso, o plano custa R$49/mês e dá acesso ilimitado a todas as missões e tutores.",
  },
  {
    question: "O app precisa de internet?",
    answer:
      "Sim — o Linguu usa inteligência artificial para avaliar a pronúncia do seu filho em tempo real. Uma conexão Wi-Fi é recomendada.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim. O cancelamento é feito direto pela App Store ou Google Play, sem burocracia.",
  },
  {
    question: "O app tem anúncios?",
    answer:
      "Não. O Linguu é 100% livre de anúncios. Nada interrompe o aprendizado do seu filho.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24" style={{ background: "white" }}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.h2
          className="mb-10 text-center"
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
          Dúvidas frequentes
        </motion.h2>

        <div className="flex flex-col gap-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1.5px solid var(--border)" }}
            >
              <button
                className="w-full flex items-center justify-between text-left px-5 py-4 transition-colors"
                style={{
                  background: open === i ? "var(--surface)" : "white",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "var(--text)",
                }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.question}</span>
                <span
                  className="ml-4 flex-shrink-0 text-lg transition-transform duration-200"
                  style={{
                    color: "var(--primary)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      className="px-5 pb-4"
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
