import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogContent = ({ blogs }) => {

  const { id } = useParams();
  const blog = blogs.data.find((blog) => blog.id == id) || {};

  console.log(blog.attributes.blogContent)

  return (
    <div className="w-full bg-[#f9f9f9] pb-10">
      <div className="mx-auto max-w-[1240px]">
        <div
          className="grid-cols-1 grid gap-y-8 pt-20
            px-4 text-black md:mt-0 md:grid-cols-3 md:gap-x-8"
        >
          <div className="col-span-2 ">
            <img
              className="h-56 w-full object-cover"
              src={`${blog.attributes.blogImg.data.attributes.url}`}
            />
            <h1 className="my-1 pt-5 text-2xl font-bold">
              {blog.attributes.blogTitle}
            </h1>
            <div className="pt-5">
            <ReactMarkdown  className="line-break whitespace-pre-wrap" >{blog.attributes.blogContent}</ReactMarkdown  >
            </div>
          </div>

          <div className="max-h-[250px] w-full items-center rounded-xl bg-white py-5 drop-shadow-md">
            <div>
              <img
                className="mx-auto h-32 w-32 rounded-full object-cover p-2"
                src={`${blog.attributes.authorImg.data.attributes.url}`}
              />
              <h1 className="pt-3 text-center text-2xl font-bold text-gray-900">
                {blog.attributes.authorName}
              </h1>
              <p className="text-center font-medium text-gray-900">
                {blog.attributes.authorDesc}
              </p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogContent;
