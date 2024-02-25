import { Homepage, BlogContentPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import useFetch from "./hooks/useFetch";



export default function App() {
  let { loading, data, error } = useFetch(
    'https://strapi-okellyv2.onrender.com/api/blogs?populate=*',
    5000 // 5000 milliseconds (5 seconds)
  );

  if (loading) return ;
  if (error) return ;
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
