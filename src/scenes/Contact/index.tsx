import { useForm } from "react-hook-form";
import { SelectedPage, oorsprongType } from "@/shared/types";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Locatie from "./Locatie";

const oorsprongen: Array<oorsprongType> = [
  {
    id: "1",
    icon: <MapPinIcon className="h-6 w-6" />,
    title: "Locatie",
    description: `De Kermeta
    Diestersteenweg 204
    3510 Kermt (Hasselt)
    `,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="bg-gray-20 w-full  pb-32 pt-24 ">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>
            <span className="text-primary-500 mx-32">Word lid</span>
          </Htext>
          <p className="my-5 mx-32">
            Indien je vragen hebt of lid wilt worden, kan je ons contacteren via
            onderstaand formulier.
          </p>
        </motion.div>
        {/* FORM */}
        <div className="mt-10 flex flex-col mx-32 md:flex-row">
          {/* Form Section */}
          <motion.div
            className="md:w-2/3 pr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="http://formsubmit.co/4d8598f92f85a7430f7a94fd1bda2988"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Voornaam Familienaam"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "Dit veld is verplicht."}
                  {errors.name.type === "maxLength" &&
                    "Maximum karakters is 100."}
                </p>
              )}

              <input
                className={inputStyles}
                type="email"
                placeholder="E-mail"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "Dit veld is verplicht."}
                  {errors.email.type === "pattern" && "Ongeldig e-mailadres."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="Typ hier uw bericht."
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "Dit veld is verplicht."}
                  {errors.message.type === "maxLength" &&
                    "Maximum karakters is 2000."}
                </p>
              )}

<button
  type="submit"
  className="mt-5 rounded-lg bg-primary-100 px-20 py-3 transition duration-500 text-white hover:font-bold flex items-center justify-center"
  style={{ lineHeight: "2rem", width: "150px" }}
>
  Submit
</button>
            </form>
          </motion.div>

          {/* Oorsprong Section */}
          <motion.div
            className="flex items-center justify-center md:w-1/3 mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {oorsprongen.map((oorsprong: oorsprongType) => (
              <Locatie
                key={oorsprong.id}
                icon={oorsprong.icon}
                title={oorsprong.title}
                description={oorsprong.description}
                setSelectedPage={setSelectedPage}
                id={oorsprong.id}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
