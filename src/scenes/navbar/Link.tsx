import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  label: string; // New prop for the displayed label
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMobileMenu?: boolean; // New prop to indicate mobile menu view
};

const Link = ({ page, label, selectedPage, setSelectedPage, isMobileMenu }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const handleClick = () => {
    setSelectedPage(lowerCasePage);
    if (!isMobileMenu && window.location.pathname !== '/') {
      window.location.href = '/'; // Always navigate to the root path in desktop view
    }
  };

  return (
    <React.Fragment>
      {window.location.pathname === '/' ? (
        <AnchorLink
          className={`text-sm font-bold ${
            selectedPage === lowerCasePage && isMobileMenu ? "text-white" : "text-black"
          } transition duration-400 hover:text-primary-500`}
          href={`#${lowerCasePage}`}
        >
          {label}
        </AnchorLink>
      ) : (
        <RouterLink
          className={`text-sm font-bold ${
            selectedPage === lowerCasePage && isMobileMenu ? "text-white" : "text-black"
          } transition duration-500 hover:text-primary-300`}
          to={`/${lowerCasePage}`} // Always use the page for navigation
          onClick={handleClick}
        >
          {label}
        </RouterLink>
      )}
    </React.Fragment>
  );
};

export default Link;
