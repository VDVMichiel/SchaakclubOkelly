import { SelectedPage } from "@/shared/types";
import Kalender from "@/shared/Kalender";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Agenda = ({ setSelectedPage }: Props) => {
  return (
    <section id="agenda" className="w-full bg-primary-100 py-20 text-white">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Agenda)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>AGENDA</Htext>
            <p className="py-2">Hieronder kan je de clubagenda raadplegen</p>
          </div>
          <div className="justify-center">
            <Kalender />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Agenda;
