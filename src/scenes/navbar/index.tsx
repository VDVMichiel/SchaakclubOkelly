// Navbar.tsx

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo1.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "@/shared/LanguageSwitcher";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const { t } = useTranslation();
  const navbarStyle = {
    backgroundColor: isTopOfPage ? 'transparent' : 'rgba(248,244, 235, 1)',
    transition: 'background-color 0.3s ease',
  };

  const handleLinkClick = () => {
    // Close the menu by setting isMenuToggled to false
    setIsMenuToggled(false);
  };

  return (
    <nav>
      <div style={navbarStyle} className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            {isAboveMediumScreens && <LanguageSwitcher />}
            <img
              alt="logo"
              src={Logo}
              className="h-full max-h-[35px] w-auto object-contain align-middle"
            />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-6 text-sm`}>
                  <Link
                    page="Home"
                    label={t("Home")}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Over ons"
                    label={t("Over ons")}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Blog"
                    label={t("Blog")}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Agenda"
                    label={t("Agenda")}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    label={t("Contact")}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>{t("Inloggen")}</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    {t("Word lid")}
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="text-white fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="gap-4 ml-[10%] flex flex-col text-2xl text-white">
            <LanguageSwitcher />
            <Link
              page="Home"
              label={t("Home")}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMobileMenu={true}
            />
            <Link
              page="Over ons"
              label={t("Over ons")}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMobileMenu={true}
            />
            <Link
              page="Blog"
              label={t("Blog")}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMobileMenu={true}
            />
            <Link
              page="Agenda"
              label={t("Agenda")}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMobileMenu={true}
            />
            <Link
              page="Contact"
              label={t("Contact")}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMobileMenu={true}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
