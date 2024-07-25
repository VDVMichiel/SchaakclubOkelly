import Htext from "@/shared/Htext";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  blogs: any;
};

const Blogs = ({ blogs, setSelectedPage }: Props) => {
  const { t } = useTranslation();
  return (
    <section id="blog" className="bg-gray-20 w-full min-h-fit py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Blog)}>
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
          <div className="text-primary-500 md:w-3/5">
            <Htext color="red">Blog</Htext>
            <p className="py-2">{t("BlogIntro")}</p>
          </div>
          <div className="w-full py-[25px]">
            <div className="mx-32 w-fit">
              <motion.div
                className="grid grid-cols-1 gap-8 px-4 text-black md:grid-cols-3"
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                {blogs && blogs.data && blogs.data.length > 0 ? (
                  blogs.data.map((blog) => (
                    <Link key={blog.id} to={`/blog/${blog.id}`}>
                      <div className="rounded-xl bg-gray-20 drop-shadow-md">
                        <img
                          className="h-56 w-full object-cover"
                          src={`https://strapi-okelly2024.onrender.com${blog.attributes.blogImg.data.attributes.url}`}
                        />
                        <div className="p-8">
                          <h3 className="my-1 text-2xl font-bold">
                            {blog.attributes.blogTitle}
                          </h3>
                          <p className="text-xl text-gray-600">
                            {blog.attributes.blogDesc}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : blogs && blogs.loading ? (
                  <p>Loading...</p>
                ) : (
                  <p>25/02/24 Fallback blog server to be coded</p>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blogs;
