import { Link, useParams } from "react-router-dom";
import Typography from 'typography';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Htext from "@/shared/Htext";

const BlogContent = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.data.find((blog) => blog.id == id) || {};
  <Htext>
  <span className="text-primary-500 mx-32">Word lid</span>
</Htext>
  
  return (
    
    <div className="w-full bg-[#f9f9f9] pb-10">
      <div className="mx-auto max-w-[1240px]">
        <div
          className="grid-cols-1 grid gap-y-8 pt-20 px-4 text-black md:mt-0 md:grid-cols-3 md:gap-x-8"
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
              
              <BlocksRenderer
                content={blog.attributes.blogContent}
                blocks={{
                  paragraph: ({ children }) => {
              // Check if children[0].props.text is empty
              if (children[0]?.props?.text === "") {
                return <div className="mb-4" />;
              }
              // Render the paragraph with the existing logic
              return <p className="text-neutral900 max-w-prose">{children}</p>;
            },
                  heading: ({ children }) => <p className="font-bold mb-4">{children}</p>,
                  link: ({ children, url }) => <Link to={url}>{children}</Link>,
                }}
                modifiers={{
                  bold: ({ children }) => <strong>{children}</strong>,
                  italic: ({ children }) => <span className="italic">{children}</span>,
                }}
              />
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
