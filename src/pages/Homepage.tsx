import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OverOns from "@/scenes/OverOns";
import Agenda from "@/scenes/Agenda";
import Contact from "@/scenes/Contact";
import Footer from "@/scenes/Footer";
import Blogs from "@/scenes/blog/Blogs";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

interface HomepageProps {
  blogs: any; // Replace 'any' with the appropriate type for blogs
}

const Homepage: React.FC<HomepageProps> = ({ blogs }) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  useEffect(() => {
    // Scroll to the top of the page after initial render
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <OverOns setSelectedPage={setSelectedPage} />
      <Blogs blogs={blogs ? blogs : ""} setSelectedPage={setSelectedPage} />
      <Agenda setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default Homepage;
