import { Homepage, BlogContentPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useFetchWithRetry } from "./hooks/useFetchWithRetry";

export default function App() {
  const { loading, data, error } = useFetchWithRetry(
    'https://strapi-okelly2024.onrender.com/api/Blogs?populate=*',
    {},
    3, // Max attempts
    5000 // Timeout in milliseconds
  );

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
