export default function PersonajeCard({
  personaje,
  esFavorito,
  onToggleFavorito,
}) {
  const { id, name, status, species, image } = personaje;

  return (
    <div className={`card ${esFavorito ? "fav" : ""}`}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p className={`estado estado-${status.toLowerCase()}`}>
        {status} - {species}
      </p>
      <button onClick={() => onToggleFavorito(id)}>
        {esFavorito ? "Quitar de favoritos" : "Marcar favorito"}
      </button>
    </div>
  );
}