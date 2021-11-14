import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import { BlogPost } from "../../models/blogpost/blogpost";
import { format } from "../../utilities/date";
import DownRightArrowIcon from "../icons/down-right-arrow-icon";

type DataProps = {
  blogPost: BlogPost;
  className?: string;
};

const FeaturedBlogPostListItem: React.FC<DataProps> = ({
  blogPost,
  className,
}) => {
  const featuredImage = getImage(blogPost.featuredImage?.node?.localFile);

  return (
    <article className={className}>
      <div className="border-b border-t border-gris-800 pb-10">
        <div className="text-sm font-bold uppercase uppercase my-4">
          A la une
        </div>
        {featuredImage && (
          <Link to={`/blog${blogPost.uri}`} className="flex overflow-hidden">
            <GatsbyImage
              image={featuredImage}
              alt={blogPost.featuredImage?.node?.alt || ``}
              className="transform duration-200 ease-in-out scale-100 hover:scale-110"
            />
          </Link>
        )}
      </div>
      <div className="border-b border-gris-800 pb-10">
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-28 text-xs font-bold uppercase mt-4">
          <ul className="flex mt">
            {blogPost.categories?.nodes?.map(category => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
          <span className="font-medium mt">
            {format(new Date(blogPost.date), "dd MMM yyyy")}
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-y-6 sm:gap-x-28 pt-10 pb-8">
          <h2 className="font-serif text-5xl sm:text-7xl">{blogPost.title}</h2>
          <div className="text-lg md:text-base lg:text-lg xl:text-1xl xl:leading-relaxed flex-1">
            {parse(blogPost.excerpt ?? "")}
          </div>
        </div>
        <Link
          to={`/blog${blogPost.uri}`}
          className="group inline-flex items-center text-xs font-bold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
        >
          <span className="relative disappearing-border">Lire la suite</span>
          <DownRightArrowIcon className="opacity-0 transition duration-200 ease-in-out transform -translate-x-1 -translate-y-1 ml-1 group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0" />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedBlogPostListItem;
