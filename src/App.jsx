import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AREAS, SUBJECTS } from "./data/areas";
import Background from "./components/Background";
import Invitation from "./components/Invitation";
import "./App.css";

const screen = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
  transition: { duration: 0.45 },
};

// Pantalla a la que regresa cada paso
const PREVIOUS = {
  role: "intro",
  form: "role",
  invite: "form",
};

export default function App() {
  const [step, setStep] = useState("intro"); // intro | role | form | invite
  const [role, setRole] = useState(null);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const areaKey =
    role === "profesor"
      ? SUBJECTS.find((s) => s.name === subject)?.area
      : null;
  const theme = AREAS[areaKey] ?? AREAS.estudiantes;

  const canContinue =
    name.trim() !== "" && (role === "estudiante" || subject !== "");

  return (
    <main
      className="app"
      style={{ background: theme.bg, color: theme.text, fontFamily: theme.font }}
    >
      <Background theme={theme} />
      
      {PREVIOUS[step] && (
        <button className="back" onClick={() => setStep(PREVIOUS[step])}>
          ← Volver
        </button>
      )}

      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.section key="intro" className="screen" {...screen}>
            <div className="emblem">{AREAS.estudiantes.symbol}</div>
            <h1>Entrega de símbolos</h1>
            <p>Un evento para celebrar a nuestra comunidad.</p>
            <button className="btn" onClick={() => setStep("role")}>
              Comenzar
            </button>
          </motion.section>
        )}

        {step === "role" && (
          <motion.section key="role" className="screen" {...screen}>
            <h2>¿Quién eres?</h2>
            <div className="role-cards">
              {["estudiante", "profesor"].map((r) => (
                <button
                  key={r}
                  className="role-card"
                  onClick={() => {
                    setRole(r);
                    setStep("form");
                  }}
                >
                  {r === "estudiante" ? "Estudiante" : "Profesor"}
                </button>
              ))}
            </div>
          </motion.section>
        )}

        {step === "form" && (
          <motion.section key="form" className="screen" {...screen}>
            <h2>Cuéntanos un poco</h2>

            <label>
              Nombre
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
              />
            </label>

            {role === "profesor" && (
              <label>
                Materia que impartes
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">Selecciona una materia</option>
                  {SUBJECTS.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <button
              className="btn"
              disabled={!canContinue}
              onClick={() => setStep("invite")}
            >
              Ver invitación
            </button>
          </motion.section>
        )}

        {step === "invite" && (
          <motion.section key="invite" className="screen" {...screen}>
            <Invitation name={name.trim()} theme={theme} />
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}