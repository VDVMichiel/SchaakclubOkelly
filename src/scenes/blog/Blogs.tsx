import Htext from "@/shared/Htext";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  blogs: any;
};

const Blogs = ({ blogs, setSelectedPage }: Props) => {
  return (
    <section id="blog" className="bg-gray-20 min-h-fit py-10">
      <div className="">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Blog)}>
      <Htext>
            <span className="text-primary-500 mx-32">Blog</span>
      </Htext>
        <div className="w-full bg-gray-20 py-[25px]">
          
          <div className="mx-32 w-fit">
            <motion.div
              className="grid-cols-1 grid gap-8 px-4  text-black md:grid-cols-3"
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
                        src={`${blog.attributes.blogImg.data.attributes.url}`}
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
                <p>25/02/24 Fallback blog server to be coded </p>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Blogs;