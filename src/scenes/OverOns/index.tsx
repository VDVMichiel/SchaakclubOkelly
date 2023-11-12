import { oorsprongType, SelectedPage } from "@/shared/types";
import {
  FlagIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Oorsprong from "./Oorsprong";

const oorsprongen: Array<oorsprongType> = [
  {
    id: "1",
    icon: <FlagIcon className="h-6 w-6" />,
    title: "Oorsprong",
    description: `Officieel gesticht op zaterdag 15 februari 1947 onder de benaming Cercle Hasselteois d'Echecs.
    Na sterke internationale resultaten van de Belgische speler Albéric O´Kelly de Galway, werd de clubnaam gewijzigd naar Hasseltste Schaakclub O'Kelly.
    In 2005 werd de naam van de club veranderd in Koninklijke Hasseltse Schaaclub O'Kelly.
    `,
  },
  {
    id: "2",
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Leden",
    description: `Met meer dan 70 leden hoort de club bij de grootste van België.
`,
  },
  {
    id: "3",
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Oorsprong2",
    description: `Officieel gesticht op zaterdag 15 februari 1947 onder de benamindg Cercle Hasselteois d'Echecs. 
        Na sterke internationale resultaten van de Belgische speler Albéric O´Kelly de Galway, werd de clubnaam gewijzigd naar Hasseltste Schaakclub O'Kelly.
        In 2005 werd de naam van de club veranderd in Koninklijke Hasseltse Schaaclub O'Kelly.
        `,
  },
];

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
  return (
    <section id="overons" className="h-auto min-h-screen  bg-primary-500 py-20">
      <div className="mx-auto w-5/6">
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
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Htext color="white">SCHAAKCLUB O'KELLY HASSELT</Htext>
            <p className="my-5 text-sm text-white">
              {/* ... (previous content) */}
            </p>
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
