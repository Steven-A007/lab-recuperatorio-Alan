import PersonajeCard from "./PersonajeCard";

export default function PersonajeList({
  personajes,
  favoritos,
  onToggleFavorito,
}) {
  return (
    <div className="grid">
      {personajes.map((personaje) => (
        <PersonajeCard
          key={personaje.id}
          personaje={personaje}
          esFavorito={favoritos.includes(personaje.id)}
          onToggleFavorito={onToggleFavorito}
        />
      ))}
    </div>
  );
}