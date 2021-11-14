import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import { ThumbnailBlogPost } from "../../models/blogpost/thumbnailblogpost";
import { format } from "../../utilities/date";
import DownRightArrowIcon from "../icons/down-right-arrow-icon";

type DataProps = {
  blogPost: ThumbnailBlogPost;
  className?: string;
  theme: "dark" | "light";
};

const HomepageBlogPostListItem: React.FC<DataProps> = ({
  blogPost,
  className,
  theme,
}) => {
  const featuredImage = getImage(
    blogPost.portraitFeaturedImage?.node?.localFile
  );

  return (
    <article className={`${className} py-10`}>
          <div className="2xl:gap-x-30 flex flex-col-reverse large-blog-post lg:flex-row lg:gap-x-28 lg:grid-cols-2 md:gap-x-26">
              <div className="row-start-2 md:row-start-1 flex flex-1 flex-col lg:space-y-30 space-y-10 md:w-8/12 lg:w-7/12 lg:space-y-30">
          <div className="space-y-4">
                      <div className="flex flex-wrap text-xs  uppercase mt-5 md:mt-0  text-gray-200">
              <ul className="flex">
                {blogPost.categories?.nodes?.map(category => (
                  <li key={category.id}>{category.name}</li>
                ))}
              </ul>
              <span className="whitespace-pre">, </span>
              <span className="font-medium ">
                {format(new Date(blogPost.date), "dd MMM yyyy")}
              </span>
            </div>
                      <h2 className="font-serif text-5.5xl md:text-4.8xl lg:text-5.5xl xl:text-5xl  text-gray-200">
              {blogPost.title}
            </h2>
          </div>
                  <div className="">
                      <div className="xl:w-8/12 text-lg md:text-lg lg:text-md xl:text-md xl:leading-normal flex-1 md:font-thin text-opacity-80 text-gray-100">
              {parse(blogPost.excerpt ?? "")}
            </div>
            <Link
              to={`/blog${blogPost.uri}`}
              className={`mt-5 group inline-flex items-center text-xs font-bold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                theme === "dark"
                  ? "focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                  : "focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
              }`}
            >
                          <span className="relative disappearing-border font-medium text-xs">
                              LIRE LA SUITE
              </span>
              <DownRightArrowIcon className="opacity-0 transition duration-200 ease-in-out transform -translate-x-1 -translate-y-1 ml-1 group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0" />
            </Link>
          </div>
        </div>
        {featuredImage && (
          <Link
            to={`/blog${blogPost.uri}`}
            className="row-start-1 flex flex-1 overflow-hidden mb-5 lg:mb-0"
          >
            <GatsbyImage
              image={featuredImage}
              alt={blogPost.portraitFeaturedImage?.node?.alt || ``}
                          className="transform duration-200 ease-in-out scale-100 hover:scale-110 journal_img_wrapper"
            />
          </Link>
        )}
      </div>
    </article>
  );
};

export default HomepageBlogPostListItem;
