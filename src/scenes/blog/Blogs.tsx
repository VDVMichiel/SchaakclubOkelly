import React, { useState, useEffect, useRef } from 'react';
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
  const [currentPage, setCurrentPage] = useState(0);
  const [blogsPerPage, setBlogsPerPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Number of rows to show at once
  const rows = 2;

  // Update blogsPerPage when the window resizes
  useEffect(() => {
    const updateBlogsPerPage = () => {
      if (containerRef.current) {
        const columns = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
        setBlogsPerPage(columns * rows);
      }
    };

    // Set initial value
    updateBlogsPerPage();

    // Update on resize
    const resizeObserver = new ResizeObserver(updateBlogsPerPage);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  const blogsData = blogs && blogs.data ? blogs.data : [];
  const totalBlogs = blogsData.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  // Slice the blogs data for the current page
  const displayedBlogs = blogsData.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage
  );

  // Functions to handle page changes
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section id="blog" className="bg-gray-20 w-full h-full py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Blog)}>
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-primary-500 mx-auto w-5/6">
            <Htext color="red">Blog</Htext>
            <p className="py-2">{t("BlogIntro")}</p>
          </div>
          <div className="relative w-5/6 mx-auto py-30 pb-16" ref={containerRef}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black"
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              {displayedBlogs.length > 0 ? (
                displayedBlogs.map((blog) => (
                  <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <div className="rounded-xl h-80 bg-gray-20 drop-shadow-md flex flex-col">
                      <img
                        className="rounded-t-xl h-56 w-full object-cover"
                        src={`${blog.attributes.blogImg.data.attributes.url}`}
                        alt={blog.attributes.blogTitle}
                      />
                      <div className="h-24 items-center justify-left p-8">
                        <p className="text-xl text-black text-center">
                          {blog.attributes.blogDesc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>Blogs are</p>
              )}
            </motion.div>

            {/* Navigation buttons */}
            {totalPages > 1 && (
              <div className="absolute inset-x-0 bottom-4 flex justify-between px-2">
                <button
                  className={`p-2 bg-gray-500 text-white ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handlePrevious}
                  disabled={currentPage === 0}
                >
                  Previous
                </button>
                <button
                  className={`p-2 bg-gray-500 text-white ${currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handleNext}
                  disabled={currentPage === totalPages - 1}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blogs;
