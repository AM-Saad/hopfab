"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var html_react_parser_1 = require("html-react-parser");
var date_1 = require("../../utilities/date");
var down_right_arrow_icon_1 = require("../icons/down-right-arrow-icon");
var LargeBlogPostListItem = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var blogPost = _a.blogPost, className = _a.className, theme = _a.theme;
    var featuredImage = gatsby_plugin_image_1.getImage((_c = (_b = blogPost.portraitFeaturedImage) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.localFile);
    return (<article className={className + " py-10"}>
      <div className="grid large-blog-post md:gap-x-26 lg:gap-x-28 2xl:gap-x-30">
        <div className="row-start-2 md:row-start-1 flex flex-1 flex-col justify-between space-y-8">
          <div className="space-y-8">
            <div className="flex flex-wrap text-xs font-bold uppercase mt-5 md:mt-0">
              <ul className="flex">
                {(_e = (_d = blogPost.categories) === null || _d === void 0 ? void 0 : _d.nodes) === null || _e === void 0 ? void 0 : _e.map(function (category) { return (<li key={category.id}>{category.name}</li>); })}
              </ul>
              <span className="whitespace-pre">, </span>
              <span className="font-medium">
                {date_1.format(new Date(blogPost.date), "dd MMM yyyy")}
              </span>
            </div>
            <h2 className="font-serif text-5.5xl md:text-4.8xl lg:text-5.5xl xl:text-6.9xl">
              {blogPost.title}
            </h2>
          </div>
          <div className="space-y-6">
            <div className="text-lg md:text-base lg:text-lg xl:text-1xl xl:leading-normal flex-1">
              {html_react_parser_1.default((_f = blogPost.excerpt) !== null && _f !== void 0 ? _f : "")}
            </div>
            <gatsby_1.Link to={"/blog" + blogPost.uri} className={"group inline-flex items-center text-xs font-bold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "dark"
            ? "focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
            : "focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50")}>
              <span className="relative disappearing-border">
                Lire l'article
              </span>
              <down_right_arrow_icon_1.default className="opacity-0 transition duration-200 ease-in-out transform -translate-x-1 -translate-y-1 ml-1 group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0"/>
            </gatsby_1.Link>
          </div>
        </div>
        {featuredImage && (<gatsby_1.Link to={"/blog" + blogPost.uri} className="row-start-1 flex flex-1 justify-end overflow-hidden">
            <gatsby_plugin_image_1.GatsbyImage image={featuredImage} alt={((_h = (_g = blogPost.portraitFeaturedImage) === null || _g === void 0 ? void 0 : _g.node) === null || _h === void 0 ? void 0 : _h.alt) || ""} className="transform duration-200 ease-in-out scale-100 hover:scale-110"/>
          </gatsby_1.Link>)}
      </div>
    </article>);
};
exports.default = LargeBlogPostListItem;
//# sourceMappingURL=large-blog-post-list-item.jsx.map