import { oorsprongType, SelectedPage } from "@/shared/types";
import { FlagIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Oorsprong from "./Oorsprong";
import { useTranslation } from 'react-i18next';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OverOns = ({ setSelectedPage }: Props) => {
  const { t } = useTranslation();

  const oorsprongen: Array<oorsprongType> = [
    {
      id: "1",
      icon: <FlagIcon className="h-6 w-6" />,
      title: t("Oorsprong"),
      description: t("OorsprongText"),
    },
    {
      id: "2",
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: t("Leden"),
      description:t("LedenText"),
    },
    {
      id: "3",
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: t("Oorsprong"),
      description: t("OorsprongText"),
    },
  ];

  return (
    <section id="overons" className="min-h-screen bg-primary-500 py-20">
      <div className="h-auto bg-primary-500 mx-auto w-5/6">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OverOns)}
        >
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0.8, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Htext color="white"> {t("AboutUsHeader")}</Htext>
            <p className="my-5 text-sm text-white"></p>
          </motion.div>
          {/* OVER ONS */}
          <motion.div
            className="mt-10 grid grid-cols-1 gap-8 place-items-center md:grid-cols-3 md:justify-evenly"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {oorsprongen.map((oorsprong: oorsprongType) => (
              <Oorsprong
                key={oorsprong.id}
                icon={oorsprong.icon}
                title={oorsprong.title}
                description={oorsprong.description}
                setSelectedPage={setSelectedPage}
                id={""}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverOns;
