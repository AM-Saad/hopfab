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

const LargeBlogPostListItem: React.FC<DataProps> = ({
  blogPost,
  className,
  theme,
}) => {
  const featuredImage = getImage(
    blogPost.portraitFeaturedImage?.node?.localFile
  );

  return (
    <article className={`${className} py-10`}>
      <div className="grid large-blog-post md:gap-x-26 lg:gap-x-28 2xl:gap-x-30">
        <div className="row-start-2 md:row-start-1 flex flex-1 flex-col justify-between space-y-8">
          <div className="space-y-8">
            <div className="flex flex-wrap text-xs font-bold uppercase mt-5 md:mt-0">
              <ul className="flex">
                {blogPost.categories?.nodes?.map(category => (
                  <li key={category.id}>{category.name}</li>
                ))}
              </ul>
              <span className="whitespace-pre">, </span>
              <span className="font-medium">
                {format(new Date(blogPost.date), "dd MMM yyyy")}
              </span>
            </div>
            <h2 className="font-serif text-5.5xl md:text-4.8xl lg:text-5.5xl xl:text-6.9xl">
              {blogPost.title}
            </h2>
          </div>
          <div className="space-y-6">
            <div className="text-lg md:text-base lg:text-lg xl:text-1xl xl:leading-normal flex-1">
              {parse(blogPost.excerpt ?? "")}
            </div>
            <Link
              to={`/blog${blogPost.uri}`}
              className={`group inline-flex items-center text-xs font-bold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                theme === "dark"
                  ? "focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                  : "focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
              }`}
            >
              <span className="relative disappearing-border">
                Lire l'article
              </span>
              <DownRightArrowIcon className="opacity-0 transition duration-200 ease-in-out transform -translate-x-1 -translate-y-1 ml-1 group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0" />
            </Link>
          </div>
        </div>
        {featuredImage && (
          <Link
            to={`/blog${blogPost.uri}`}
            className="row-start-1 flex flex-1 justify-end overflow-hidden"
          >
            <GatsbyImage
              image={featuredImage}
              alt={blogPost.portraitFeaturedImage?.node?.alt || ``}
              className="transform duration-200 ease-in-out scale-100 hover:scale-110"
            />
          </Link>
        )}
      </div>
    </article>
  );
};

export default LargeBlogPostListItem;
