import { useRef } from "react";
import { motion } from "framer-motion";
import { EVENT } from "../data/event";

const SPARKLES = [
  { top: "6%", left: "8%", size: 10, delay: 0, depth: 1.2 },
  { top: "14%", left: "86%", size: 14, delay: 0.6, depth: 0.6 },
  { top: "34%", left: "5%", size: 8, delay: 1.2, depth: 0.9 },
  { top: "48%", left: "93%", size: 12, delay: 0.3, depth: 1.5 },
  { top: "70%", left: "10%", size: 12, delay: 1.5, depth: 0.7 },
  { top: "84%", left: "82%", size: 10, delay: 0.9, depth: 1.1 },
  { top: "4%", left: "50%", size: 8, delay: 1.8, depth: 0.5 },
  { top: "94%", left: "44%", size: 9, delay: 0.5, depth: 1.3 },
  { top: "24%", left: "72%", size: 7, delay: 2.1, depth: 0.8 },
  { top: "60%", left: "58%", size: 8, delay: 1.1, depth: 1.0 },
];

function Sparkle({ top, left, size, delay, depth }) {
  return (
    <div
      className="sparkle-wrap"
      style={{ top, left, width: size, height: size, "--depth": depth }}
    >
      <motion.span
        className="sparkle"
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.7, 1.3, 0.7] }}
        transition={{ duration: 2.4, repeat: Infinity, delay, ease: "easeInOut" }}
      />
    </div>
  );
}

function Birrete({ color }) {
  return (
    <svg viewBox="0 0 120 80" width="120" height="80" aria-hidden="true">
      <polygon points="60,6 118,28 60,50 2,28" fill={color} />
      <path
        d="M30 40 L30 60 Q60 74 90 60 L90 40 L60 52 Z"
        fill={color}
        opacity="0.85"
      />
      <line x1="112" y1="30" x2="112" y2="58" stroke="#f5c542" strokeWidth="3" />
      <circle cx="112" cy="62" r="5" fill="#f5c542" />
    </svg>
  );
}

export default function Invitation({ name, theme }) {
  const ref = useRef(null);

  // Mueve el brillo y los destellos según la posición del cursor o el dedo
  function updatePointer(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--px", ((x / r.width) * 2 - 1).toFixed(3));
    el.style.setProperty("--py", ((y / r.height) * 2 - 1).toFixed(3));
  }

  function resetPointer() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  }

  return (
    <motion.article
      ref={ref}
      className="invitation"
      style={{
        "--primary": theme.primary,
        "--accent": theme.accent,
        "--font": theme.font,
      }}
      onPointerMove={updatePointer}
      onPointerDown={updatePointer}
      onPointerLeave={resetPointer}
      initial={{ opacity: 0, scale: 0.9, rotateX: -12 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="glow" />

      <div className="sparkles">
        {SPARKLES.map((s, i) => (
          <Sparkle key={i} {...s} />
        ))}
      </div>

      <span className="badge">Promoción 2026-7</span>

      <motion.div
        className="cap"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Birrete color={theme.primary} />
      </motion.div>

      <h1>{EVENT.title}</h1>
      <p className="greeting">
        Estimado/a <strong>{name}</strong>,
      </p>
      <p className="invite-text">
        Te invitamos a acompañarnos en este evento especial.
      </p>

      <ul className="details">
        <li><span>Fecha</span>{EVENT.date}</li>
        <li><span>Hora</span>{EVENT.time}</li>
        <li><span>Lugar</span>{EVENT.place}</li>
      </ul>

      <p className="importance">{EVENT.importance}</p>
    </motion.article>
  );
}