// Temas visuales por área. Cada una define colores, tipografía y símbolo.
export const AREAS = {
  estudiantes: {
    label: "Estudiantes",
    bg: "#0f1626",
    text: "#f4efe6",
    primary: "#c9a227",
    accent: "#2f4a7a",
    font: "'Playfair Display', serif",
    symbol: "✦",
  },
  matematicas: {
    label: "Matemáticas",
    bg: "#f4f7fb",
    text: "#1b2535",
    primary: "#2563eb",
    accent: "#93c5fd",
    font: "'Inter', sans-serif",
    symbol: "∑",
  },
  ciencias: {
    label: "Ciencias",
    bg: "#0b2a2a",
    text: "#e6fff7",
    primary: "#34d399",
    accent: "#0d9488",
    font: "'Space Grotesk', sans-serif",
    symbol: "⚛",
  },
  humanidades: {
    label: "Humanidades",
    bg: "#f5efe3",
    text: "#3b2a1e",
    primary: "#9a6b3f",
    accent: "#d6bf9a",
    font: "'Playfair Display', serif",
    symbol: "❦",
  },
  artes: {
    label: "Artes",
    bg: "#2a0f2e",
    text: "#fdf2ff",
    primary: "#f472b6",
    accent: "#fb923c",
    font: "'Dancing Script', cursive",
    symbol: "✺",
  },
  tecnologia: {
    label: "Tecnología",
    bg: "#050608",
    text: "#d1fae5",
    primary: "#22d3ee",
    accent: "#a3e635",
    font: "'JetBrains Mono', monospace",
    symbol: "◈",
  },
};

// Materias que se muestran en el selector y su área correspondiente.
export const SUBJECTS = [
  { name: "Matemáticas", area: "matematicas" },

  { name: "Química", area: "ciencias" },
  { name: "Física", area: "ciencias" },
  { name: "Investigación", area: "ciencias" },

  { name: "Sociales", area: "humanidades" },
  { name: "Castellano", area: "humanidades" },
  { name: "Inglés", area: "humanidades" },
  { name: "Ética", area: "humanidades" },
  { name: "Filosofía", area: "humanidades" },
  { name: "Religión", area: "humanidades" },
  { name: "Economía y política", area: "humanidades" },

  { name: "Artística", area: "artes" },
  { name: "Educación física y recreación", area: "artes" }, // ← ajusta si prefieres otra área

  { name: "Tecnología", area: "tecnologia" },
];