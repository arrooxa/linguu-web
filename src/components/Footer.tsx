export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          style={{ fontWeight: 900, fontSize: "1.125rem", color: "var(--primary)" }}
        >
          Linguu
        </span>

        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
          © 2026 Linguu
        </p>

        <div className="flex gap-5">
          {[
            { label: "Privacidade", href: "#" },
            { label: "Termos", href: "#" },
            { label: "contato@linguu.app", href: "mailto:contato@linguu.app" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:underline"
              style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
