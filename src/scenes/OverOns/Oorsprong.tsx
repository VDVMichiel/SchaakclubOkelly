import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
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

const Oorsprong = ({
  id,
  icon,
  title,
  description,
  setSelectedPage,
}: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className=" mt-5 w-1/3 flex-shrink-0 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-black bg-primary-100 p-4 text-black">
          {icon}
        </div>
      </div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="align-left my-3 whitespace-pre-line text-white">
        {description}
      </p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.OverOns)}
        href={`#${SelectedPage.OverOns}`}
      >
        <p>Meer informatie</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Oorsprong;