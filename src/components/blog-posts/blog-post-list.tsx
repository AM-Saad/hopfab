import React, { useState, useMemo, useCallback } from "react";
import { get } from "@hopfab/http";

import { ThumbnailBlogPost } from "../../models/blogpost/thumbnailblogpost";
import BlogPostListItem from "./blog-post-list-item";
import LargeBlogPostListItem from "./large-blog-post-list-item";
import DownRightArrowIcon from "../icons/down-right-arrow-icon";
import { WpCategory } from "../../models/wpcategory";

type DataProps = {
  initialBlogPosts: ThumbnailBlogPost[];
  initialCurrentPage: number;
  totalPages: number;
  category: WpCategory;
};

const BlogPostList: React.FC<DataProps> = ({
  initialBlogPosts,
  initialCurrentPage,
  totalPages,
  category,
}) => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [isLoading, setIsLoading] = useState(false);

  /* On regroupe les projets 4 par 4 pour le rendu journal */
  const NUM_COLUMNS = 4;
  const numLines = useMemo(() => Math.ceil(blogPosts.length / NUM_COLUMNS), [
    blogPosts,
  ]);
  const lines = useMemo(() => Array.from({ length: numLines }), [numLines]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await get<any>(
        `/blog${category ? `-${category.slug}` : ""}-${currentPage}.json`
      );

      if (result === {}) return;

      setBlogPosts(oldBlogPosts => [
        ...oldBlogPosts,
        ...result.map(d => d.post),
      ]);
    } catch (error) {
      // TODO: handle error
    }
    setIsLoading(false);
  }, [currentPage]);

  return (
    <div className="grid gap-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto pb-10">
      {lines.map((_, lineIndex) => (
        <div key={lineIndex}>
          {blogPosts?.[lineIndex * NUM_COLUMNS] ? (
            <LargeBlogPostListItem
              blogPost={blogPosts?.[lineIndex * NUM_COLUMNS]}
              className="text-gris-800 border-t border-b border-gris-800"
              theme="dark"
            />
          ) : (
            <></>
          )}
          <div className="grid blog-post-list md:gap-x-30 lg:gap-x-20 xl:gap-x-22 2xl:gap-x-29.5 gap-y-12 py-16">
            {blogPosts
              .slice(lineIndex * NUM_COLUMNS + 1, (lineIndex + 1) * NUM_COLUMNS)
              .map((blogPost, rowIndex) => (
                <BlogPostListItem
                  key={blogPost.id}
                  blogPost={blogPost}
                  className={`${
                    rowIndex === 2 ? "md:col-span-2 lg:col-span-1" : ""
                  } text-gris-800`}
                  theme="dark"
                  imageDisplay={rowIndex === 2 ? "landscape" : "portrait"}
                />
              ))}
          </div>
        </div>
      ))}
      {totalPages > currentPage && (
        <div className="flex justify-end">
          {!isLoading && (
            <button
              type="button"
              onClick={() => {
                setCurrentPage(currentPage + 1);
                fetchData();
              }}
              className="group flex items-center text-4xl md:text-6.1xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
            >
              <span className="mt-1.5 border-b-6 transition duration-200 ease-in-out transform border-transparent group-hover:border-gris-800">
                Voir plus
              </span>
              <DownRightArrowIcon className="w-6 h-6 md:w-11 md:h-11 ml-4 mt-2" />
            </button>
          )}
          {isLoading && (
            <div className="text-4xl md:text-6.1xl font-bold">
              Chargement ...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogPostList;
