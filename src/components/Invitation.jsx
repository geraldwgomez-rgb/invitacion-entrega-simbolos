import { motion } from "framer-motion";
import { EVENT } from "../data/event";

export default function Invitation({ name, theme }) {
  return (
    <motion.article
      className="invitation"
      style={{
        "--bg": theme.bg,
        "--text": theme.text,
        "--primary": theme.primary,
        "--accent": theme.accent,
        "--font": theme.font,
      }}
      initial={{ opacity: 0, scale: 0.9, rotateX: -12 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="symbol">{theme.symbol}</div>
      <h1>{EVENT.title}</h1>
      <p className="greeting">Estimado/a <strong>{name}</strong>,</p>
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