const URL = "https://rickandmortyapi.com/api/character";

export const fetchPersonajes = async () => {
  const resp = await fetch(URL);

  if (!resp.ok) {
    throw new Error(`Error ${resp.status} al consultar la API`);
  }

  const { results } = await resp.json();

  return results.map(({ id, name, status, species, image }) => ({
    id,
    name,
    status,
    species,
    image,
  }));
};