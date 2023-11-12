import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  blogs: any;
};

const Blogs = ({ blogs, setSelectedPage }: Props) => {
  console.log("Blog Object");
  console.log(blogs);
  return (
    
    
    <section id="blog" className="bg-gray-20 min-h-full py-20">
      <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Blog)}
        >
                    
    <div className="w-full bg-gray-20 py-[50px]">
      <div className="mx-auto max-w-[1240px]">
        <motion.div 
              className="grid-cols-1 grid gap-8 px-4 text-black md:grid-cols-2"
                viewport={{ once: true}}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, scale:0.9 },
                  visible: { opacity: 1, scale:1 },
                }}
                transition={{ duration: 0.5 }}
            >
          {blogs.data.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <div className="overflow-hidden rounded-xl bg-gray-20 drop-shadow-md">
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
          ))}
          
        
        </motion.div>
      </div>
      
      </div>
    
    </motion.div>
    </section>
    
  );
};

export default Blogs;
