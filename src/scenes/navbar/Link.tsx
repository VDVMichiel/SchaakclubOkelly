import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const handleClick = () => {
    setSelectedPage(lowerCasePage);

    // If on a different page (not the root page), navigate to the root page first.
    if (window.location.pathname !== '/') {
      window.location.href = '/'; // Adjust the root path based on your route structure.
    }
  };
  
  return (
    <React.Fragment>
      {window.location.pathname === '/' ? (
        <AnchorLink
          className={`text-sm font-bold ${
            selectedPage === lowerCasePage ? "text-primary-100" : "text-black"
          } transition duration-400 hover:text-primary-500`}
          href={`#${lowerCasePage}`}
        >
          {page}
        </AnchorLink>
      ) : (
        <RouterLink
          className={`text-sm font-bold ${
            selectedPage === lowerCasePage ? "text-primary-500" : "text-black"
          } transition duration-500 hover:text-primary-300`}
          to={`/${lowerCasePage}`}  // Adjust the "to" prop based on your route structure.
          onClick={handleClick}
        >
          {page}
        </RouterLink>
      )}
    </React.Fragment>
  );
};

export default Link;
function setIsMenuToggled(arg0: boolean) {
  throw new Error('Function not implemented.');
}

