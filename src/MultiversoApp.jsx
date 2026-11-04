import { useState } from "react";
import { usePersonajes } from "./hooks/usePersonajes";
import PersonajeList from "./components/PersonajeList";
import FavoritesPanel from "./components/FavoritesPanel";

export default function MultiversoApp() {
  const { personajes, isLoading, error } = usePersonajes();
  const [favoritos, setFavoritos] = useState([]); // ids, en orden de marcado

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
        <FavoritesPanel
          favoritos={personajesFavoritos}
          onQuitar={toggleFavorito}
        />
      </div>
    </>
  );
}