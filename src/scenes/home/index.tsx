import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText2.png";
import HomepageGraphic from "@/assets/SplashImage.png";
import LogoLimburgRoodGeelKlein from "@/assets/LogoLimburgRoodGeelKlein.gif";
import KBS from "@/assets/KBS.svg";
import HasseltLogo from "@/assets/Hasselt.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="h-full gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-24 before:z-[-1] md:before:content-OKellyText">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">Schaken in Hasselt sinds 1947!</p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Word lid
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Meer informatie</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        {isAboveMediumScreens &&(
        <div
          className="flex basis-3/5 justify-center md:z-10
                    md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomepageGraphic} />
        </div>)}
      </motion.div>
        
      {/* MEDEWERKINGEN */}
      {isAboveMediumScreens && (
        <div className="">
          <div className="absolute bottom-0 flex h-[120px] w-full items-center justify-end bg-primary-100 py-10">
            <div className="mx-auto flex w-4/6 items-center justify-between gap-8">
              <img
                alt="LimLiga-sponsor"
                src={LogoLimburgRoodGeelKlein}
                className="h-full max-h-[100px] w-auto object-contain" // Set the maximum height as needed
              />
              <img
                alt="KBS-sponsor"
                src={KBS}
                className="h-full max-h-[100px] w-auto object-contain" // Set the maximum height as needed
              />
              <img
                alt="KBS-sponsor"
                src={HasseltLogo}
                className="h-full max-h-[90px] w-auto object-contain" // Set the maximum height as needed
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
