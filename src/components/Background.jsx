import { useMemo } from "react";

const STAR_COUNT = 48;

export default function Background({ theme }) {
  // Se generan una sola vez para que las estrellas no cambien de lugar al re-renderizar
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() < 0.15 ? 3 : Math.random() < 0.5 ? 2 : 1,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div
      className="bg-layer"
      aria-hidden="true"
      style={{ "--bg-base": theme.bg, "--bg-glow": theme.primary }}
    >
      <div className="bg-gradient" />
      {stars.map((s) => (
        <span
          key={s.id}
          className="bg-star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}