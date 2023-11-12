import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OverOns from "@/scenes/OverOns";
import Agenda from "@/scenes/Agenda";
import Contact from "@/scenes/Contact";
import Footer from "@/scenes/Footer";
import Blogs from "@/scenes/blog/Blogs";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

const Homepage = ({ blogs }) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, SetIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        SetIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
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
