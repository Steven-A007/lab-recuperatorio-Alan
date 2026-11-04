import { useEffect, useState } from "react";
import { fetchPersonajes } from "../services/fetchPersonajes";

export const usePersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;

    const cargar = async () => {
      try {
        const data = await fetchPersonajes();
        if (!cancelado) setPersonajes(data);
      } catch (err) {
        if (!cancelado) {
          setError("No se pudieron cargar los personajes. Revisa tu conexión.");
        }
      } finally {
        if (!cancelado) setIsLoading(false);
      }
    };

    cargar();

    return () => {
      cancelado = true;
    };
  }, []);

  return { personajes, isLoading, error };
};