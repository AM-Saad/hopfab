import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { ThumbnailBlogPost } from "../../models/blogpost/thumbnailblogpost";
import { format } from "../../utilities/date";
import DownRightArrowIcon from "../icons/down-right-arrow-icon";

type DataProps = {
  blogPost: ThumbnailBlogPost;
  className?: string;
  theme: "dark" | "light";
  imageDisplay?: "portrait" | "landscape";
};

const BlogPostListItem: React.FC<DataProps> = ({
  blogPost,
  className,
  theme,
  imageDisplay = "portrait",
}) => {
  const featuredImage =
    imageDisplay === "portrait"
      ? getImage(blogPost.portraitFeaturedImage?.node?.localFile)
      : getImage(blogPost.landscapeFeaturedImage?.node?.localFile);
  const alt =
    imageDisplay === "portrait"
      ? blogPost.portraitFeaturedImage?.node?.alt
      : blogPost.landscapeFeaturedImage?.node?.alt;

  return (
    <article className={`${className} space-y-4`}>
      {featuredImage && (
        <Link to={`/blog${blogPost.uri}`} className="flex overflow-hidden">
          <GatsbyImage
            image={featuredImage}
            alt={alt || ``}
            className="transform duration-200 ease-in-out scale-100 hover:scale-110"
          />
        </Link>
      )}
      <div className="flex flex-wrap text-xs font-bold uppercase">
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
      <h2 className="flex-1 font-serif text-3.8xl md:text-3xl lg:text-3.8xl">
        {blogPost.title}
      </h2>
      <Link
        to={`/blog${blogPost.uri}`}
        className={`group inline-flex items-center text-xs font-bold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          theme === "dark"
            ? "focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
            : "focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
        }`}
      >
        <span className="relative disappearing-border">Lire l'article</span>
        <DownRightArrowIcon className="opacity-0 transition duration-200 ease-in-out transform -translate-x-1 -translate-y-1 ml-1 group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0" />
      </Link>
    </article>
  );
};

export default BlogPostListItem;
