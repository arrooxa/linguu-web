"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const SHAPES = [
  { color: "var(--float-a)", size: 48, top: "8%", left: "5%" },
  { color: "var(--float-b)", size: 32, top: "15%", right: "8%" },
  { color: "var(--float-c)", size: 22, top: "55%", left: "3%" },
  { color: "var(--float-d)", size: 36, bottom: "20%", right: "6%" },
  { color: "var(--float-e)", size: 18, top: "40%", right: "15%" },
  { color: "var(--float-a)", size: 14, bottom: "35%", left: "10%" },
];

const EMOJIS = [
  { emoji: "⭐", top: "12%", right: "22%", opacity: 0.45 },
  { emoji: "✨", bottom: "28%", left: "18%", opacity: 0.38 },
  { emoji: "🌟", top: "60%", right: "4%", opacity: 0.35 },
];

const DELAYS = [0, 0.4, 0.8, 1.2, 1.6, 2.0, 0.6, 1.4, 2.2];

export default function FloatingShapes() {
  const shapes = useMemo(() => SHAPES, []);
  const emojis = useMemo(() => EMOJIS, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            background: s.color,
            top: s.top,
            left: (s as { left?: string }).left,
            right: (s as { right?: string }).right,
            bottom: (s as { bottom?: string }).bottom,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: DELAYS[i] ?? 0,
          }}
        />
      ))}
      {emojis.map((e, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl select-none"
          style={{
            top: e.top,
            left: (e as { left?: string }).left,
            right: (e as { right?: string }).right,
            bottom: (e as { bottom?: string }).bottom,
            opacity: e.opacity,
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: DELAYS[i + shapes.length] ?? 0,
          }}
        >
          {e.emoji}
        </motion.span>
      ))}
    </div>
  );
}
