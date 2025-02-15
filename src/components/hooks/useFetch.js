import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async () => {
      try {
        const res = await fetch(endpoint);
        const dataRes = await res.json();
        setData(dataRes);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  });
  return { data, loading, error };
};
