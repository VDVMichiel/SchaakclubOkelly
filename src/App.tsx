import { Homepage, BlogContentPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function useFetch(url, timeout = 5000) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      setError(new Error('Timeout'));
      setLoading(false);
    }, timeout);

    fetchData();

    return () => clearTimeout(timeoutId);
  }, [url, timeout]);

  return { loading, data, error };
}

export default function App() {
  let { loading, data, error } = useFetch(
    'https://schaakclubokellydb.onrender.com/api/blogs?populate=*',
    5000 // 5000 milliseconds (5 seconds)
  );

  if (loading) return <Homepage blogs={[]} />;
  if (error) return <Homepage blogs={[]}/>;
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage blogs={data ? data : ""} />}></Route>
        <Route
          path="/blog/:id"
          element={<BlogContentPage blogs={data ? data : ""} />}></Route>
      </Routes>
    </div>
  );
}
