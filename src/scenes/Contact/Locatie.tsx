import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Locatie = ({
  id,
  icon,
  title,
  description,
  setSelectedPage,
}: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className=" mt-0  flex-shrink-0 rounded-md border-2 border-black px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-black bg-grey-200 p-4 text-p">
          {icon}
        </div>
      </div>
      <h4 className="font-bold text-black">{title}</h4>
      <p className="align-left my-3 whitespace-pre-line text-black">
        {description}
      </p>
      <div>
      <a
         className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
         href="https://maps.app.goo.gl/rxRSd9KE8mSpX6R47"
         target="_blank"
         rel="noopener noreferrer"
      >
        <p>Google maps</p>
        </a>
        </div>
    </motion.div>
  );
};

export default Locatie;
