"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const http_1 = require("@hopfab/http");
const blog_post_list_item_1 = require("./blog-post-list-item");
const large_blog_post_list_item_1 = require("./large-blog-post-list-item");
const down_right_arrow_icon_1 = require("../icons/down-right-arrow-icon");
const BlogPostList = ({ initialBlogPosts, initialCurrentPage, totalPages, category, }) => {
    const [blogPosts, setBlogPosts] = react_1.useState(initialBlogPosts);
    const [currentPage, setCurrentPage] = react_1.useState(initialCurrentPage);
    const [isLoading, setIsLoading] = react_1.useState(false);
    /* On regroupe les projets 4 par 4 pour le rendu journal */
    const NUM_COLUMNS = 4;
    const numLines = react_1.useMemo(() => Math.ceil(blogPosts.length / NUM_COLUMNS), [
        blogPosts,
    ]);
    const lines = react_1.useMemo(() => Array.from({ length: numLines }), [numLines]);
    const fetchData = react_1.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        try {
            const result = yield http_1.get(`/blog${category ? `-${category.slug}` : ""}-${currentPage}.json`);
            if (result === {})
                return;
            setBlogPosts(oldBlogPosts => [
                ...oldBlogPosts,
                ...result.map(d => d.post),
            ]);
        }
        catch (error) {
            // TODO: handle error
        }
        setIsLoading(false);
    }), [currentPage]);
    return (<div className="grid gap-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto pb-10">
      {lines.map((_, lineIndex) => (<div key={lineIndex}>
          {(blogPosts === null || blogPosts === void 0 ? void 0 : blogPosts[lineIndex * NUM_COLUMNS]) ? (<large_blog_post_list_item_1.default blogPost={blogPosts === null || blogPosts === void 0 ? void 0 : blogPosts[lineIndex * NUM_COLUMNS]} className="text-gris-800 border-t border-b border-gris-800" theme="dark"/>) : (<></>)}
          <div className="grid blog-post-list md:gap-x-30 lg:gap-x-20 xl:gap-x-22 2xl:gap-x-29.5 gap-y-12 py-16">
            {blogPosts
                .slice(lineIndex * NUM_COLUMNS + 1, (lineIndex + 1) * NUM_COLUMNS)
                .map((blogPost, rowIndex) => (<blog_post_list_item_1.default key={blogPost.id} blogPost={blogPost} className={`${rowIndex === 2 ? "md:col-span-2 lg:col-span-1" : ""} text-gris-800`} theme="dark" imageDisplay={rowIndex === 2 ? "landscape" : "portrait"}/>))}
          </div>
        </div>))}
      {totalPages > currentPage && (<div className="flex justify-end">
          {!isLoading && (<button type="button" onClick={() => {
                    setCurrentPage(currentPage + 1);
                    fetchData();
                }} className="group flex items-center text-4xl md:text-6.1xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700">
              <span className="mt-1.5 border-b-6 transition duration-200 ease-in-out transform border-transparent group-hover:border-gris-800">
                Voir plus
              </span>
              <down_right_arrow_icon_1.default className="w-6 h-6 md:w-11 md:h-11 ml-4 mt-2"/>
            </button>)}
          {isLoading && (<div className="text-4xl md:text-6.1xl font-bold">
              Chargement ...
            </div>)}
        </div>)}
    </div>);
};
exports.default = BlogPostList;
