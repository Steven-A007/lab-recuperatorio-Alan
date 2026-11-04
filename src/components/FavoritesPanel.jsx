export default function FavoritesPanel({ favoritos, onQuitar }) {
  return (
    <aside className="favoritos">
      <h3>Favoritos ({favoritos.length})</h3>

      {favoritos.length === 0 ? (
        <p>Aún no has marcado favoritos</p>
      ) : (
        <ul>
          {favoritos.map((personaje) => (
            <li key={personaje.id}>
              <img src={personaje.image} alt={personaje.name} />
              <span>{personaje.name}</span>
              <button onClick={() => onQuitar(personaje.id)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}