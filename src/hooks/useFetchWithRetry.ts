import { useState, useEffect } from 'react';

const useFetchWithRetry = (url: string, options: RequestInit = {}, maxAttempts = 3, timeout = 5000) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let attempts = 0;
    let timedOut = false;

    const fetchData = async () => {
      while (attempts < maxAttempts && !timedOut) {
        try {
          const controller = new AbortController();
          const id = setTimeout(() => {
            controller.abort();
            timedOut = true;
          }, timeout);

          const response = await fetch(url, { ...options, signal: controller.signal });
          clearTimeout(id);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const result = await response.json();
          setData(result);
          setLoading(false);
          return;
        } catch (err) {
          attempts += 1;
          if (attempts >= maxAttempts || timedOut) {
            setError(err);
            setLoading(false);
          }
        }
      }
    };

    fetchData();
  }, [url, options, maxAttempts, timeout]);

  return { loading, data, error };
};

export { useFetchWithRetry };
