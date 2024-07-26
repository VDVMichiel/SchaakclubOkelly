import { useState, useEffect, useRef } from 'react';

export function useFetchWithRetry(url, options = {}, maxAttempts = 3, timeout = 5000) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchedOnceRef = useRef(false);

  useEffect(() => {
    if (fetchedOnceRef.current) return;

    let attempts = 0;
    let didCancel = false;

    const fetchData = async () => {
      while (attempts < maxAttempts && !didCancel) {
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          if (!didCancel) {
            setData(result);
            setLoading(false);
            fetchedOnceRef.current = true;
            break;
          }
        } catch (err) {
          attempts++;
          if (attempts >= maxAttempts && !didCancel) {
            setError(err);
            setLoading(false);
          }
        }
        await new Promise((resolve) => setTimeout(resolve, timeout));
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url, options, maxAttempts, timeout]);

  return { data, loading, error };
}
