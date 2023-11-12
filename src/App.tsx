import { Homepage, BlogContentPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function App() {
  let { loading, data, error } = useFetch(
    "https://schaakclubokellydb.onrender.com/api/blogs?populate=*"
  );
  if (loading) return ;
  if (error) return;

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
