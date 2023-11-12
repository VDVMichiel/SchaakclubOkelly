import Navbar from "@/scenes/navbar";
import Footer from "@/scenes/Footer";
import BlogContent from "@/scenes/blog/BlogContent";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

const BlogContentPage = ({ blogs }) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, SetIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        SetIsTopOfPage(true);
      }
      if (window.scrollY !== 0) SetIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <BlogContent blogs={blogs ? blogs : ""} />
      <Footer />
    </div>
  );
};

export default BlogContentPage;
