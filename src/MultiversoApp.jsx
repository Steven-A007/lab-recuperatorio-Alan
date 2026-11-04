import { useState } from "react";
import { usePersonajes } from "./hooks/usePersonajes";
import PersonajeList from "./components/PersonajeList";
import FavoritesPanel from "./components/FavoritesPanel";

const RICK_ROLL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const MINI_RICK = "https://youtu.be/eTcqnhG4Nrs?si=xLXAST1GNSVaKODC";

const abrir = (url) => window.open(url, "_blank", "noopener,noreferrer");

export default function MultiversoApp() {
  const { personajes, isLoading, error } = usePersonajes();
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const personajesFavoritos = favoritos
    .map((id) => personajes.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <>
      <h1>Multiverso</h1>
      <div className="layout">
        {isLoading && <p className="mensaje">Cargando...</p>}
        {error && <p className="mensaje error">{error}</p>}
        {!isLoading && !error && (
          <PersonajeList
            personajes={personajes}
            favoritos={favoritos}
            onToggleFavorito={toggleFavorito}
          />
        )}

        <div className="columna-derecha">
          <FavoritesPanel
            favoritos={personajesFavoritos}
            onQuitar={toggleFavorito}
          />

          <aside className="favoritos">
            <h3>No presiones este boton, si no quieres borrar tu sistema operativo</h3>
            <button onClick={() => abrir(RICK_ROLL)}>
              No presiones este botón
            </button>
          </aside>

          <aside className="favoritos">
            <h3>¿Quieres bailar?</h3>
            <button onClick={() => abrir(MINI_RICK)}>Baile de Mini Rick</button>
          </aside>
        </div>
      </div>
    </>
  );
}