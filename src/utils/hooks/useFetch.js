import { useEffect, useState } from "react";
import { fetcher } from "@/utils/services/fetcher";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    (async function () {
      try {
        const response = await fetcher.get(endpoint);
        if (!response.data.success) setError(response.data.error);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return { data, error, loading: !data && !error };
};
