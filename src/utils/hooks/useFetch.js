import { useEffect, useState } from "react";
import { createFetcher } from "@/utils/services/fetcher";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    (async function () {
      try {
        const fetcher = createFetcher();
        const response = await fetcher.get(endpoint);
        if (!response.data.success) setError(response.data.error);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return { data, error, isLoading: !data && !error };
};
