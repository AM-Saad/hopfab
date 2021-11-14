"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var date_1 = require("../../utilities/date");
var down_right_arrow_icon_1 = require("../icons/down-right-arrow-icon");
var BlogPostListItem = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var blogPost = _a.blogPost, className = _a.className, theme = _a.theme, _m = _a.imageDisplay, imageDisplay = _m === void 0 ? "portrait" : _m;
    var featuredImage = imageDisplay === "portrait"
        ? gatsby_plugin_image_1.getImage((_c = (_b = blogPost.portraitFeaturedImage) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.localFile)
        : gatsby_plugin_image_1.getImage((_e = (_d = blogPost.landscapeFeaturedImage) === null || _d === void 0 ? void 0 : _d.node) === null || _e === void 0 ? void 0 : _e.localFile);
    var alt = imageDisplay === "portrait"
        ? (_g = (_f = blogPost.portraitFeaturedImage) === null || _f === void 0 ? void 0 : _f.node) === null || _g === void 0 ? void 0 : _g.alt
        : (_j = (_h = blogPost.landscapeFeaturedImage) === null || _h === void 0 ? void 0 : _h.node) === null || _j === void 0 ? void 0 : _j.alt;
    return (<article className={className + " space-y-4"}>
      {featuredImage && (<gatsby_1.Link to={"/blog" + blogPost.uri} className="flex overflow-hidden">
          <gatsby_plugin_image_1.GatsbyImage image={featuredImage} alt={alt || ""} className="transform duration-200 ease-in-out scale-100 hover:scale-110"/>
        </gatsby_1.Link>)}
      <div className="flex flex-wrap text-xs font-bold uppercase">
        <ul className="flex">
          {(_l = (_k = blogPost.categories) === null || _k === void 0 ? void 0 : _k.nodes) === null || _l === void 0 ? void 0 : _l.map(function (category) { return (<li key={category.id}>{category.name}</li>); })}
        </ul>
        <span className="whitespace-pre">, </span>
        <span className="font-medium">
          {date_1.format(new Date(blogPost.date), "dd MMM yyyy")}
        </span>
      </div>
      <h2 className="flex-1 font-serif text-3.8xl md:text-3xl lg:text-3.8xl">
        {blogPost.title}
      </h2>
      <gatsby_1.Link to={"/blog" + blogPost.uri} className={"group inline-flex items-center text-xs font-bold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "dark"
            ? "focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
            : "focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50")}>
        <span className="relative disappearing-border">Lire l'article</span>
        <down_right_arrow_icon_1.default className="opacity-0 transition duration-200 ease-in-out transform -translate-x-1 -translate-y-1 ml-1 group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0"/>
      </gatsby_1.Link>
    </article>);
};
exports.default = BlogPostListItem;
//# sourceMappingURL=blog-post-list-item.jsx.map