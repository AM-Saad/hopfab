"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const date_1 = require("../../utilities/date");
const down_right_arrow_icon_1 = require("../icons/down-right-arrow-icon");
const BlogPostListItem = ({ blogPost, className, theme, imageDisplay = "portrait", }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const featuredImage = imageDisplay === "portrait"
        ? gatsby_plugin_image_1.getImage((_b = (_a = blogPost.portraitFeaturedImage) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.localFile)
        : gatsby_plugin_image_1.getImage((_d = (_c = blogPost.landscapeFeaturedImage) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.localFile);
    const alt = imageDisplay === "portrait"
        ? (_f = (_e = blogPost.portraitFeaturedImage) === null || _e === void 0 ? void 0 : _e.node) === null || _f === void 0 ? void 0 : _f.alt
        : (_h = (_g = blogPost.landscapeFeaturedImage) === null || _g === void 0 ? void 0 : _g.node) === null || _h === void 0 ? void 0 : _h.alt;
    return (<article className={`${className} space-y-4`}>
      {featuredImage && (<gatsby_1.Link to={`/blog${blogPost.uri}`} className="flex overflow-hidden">
          <gatsby_plugin_image_1.GatsbyImage image={featuredImage} alt={alt || ``} className="transform duration-200 ease-in-out scale-100 hover:scale-110"/>
        </gatsby_1.Link>)}
      <div className="flex flex-wrap text-xs font-bold uppercase">
        <ul className="flex">
          {(_k = (_j = blogPost.categories) === null || _j === void 0 ? void 0 : _j.nodes) === null || _k === void 0 ? void 0 : _k.map(category => (<li key={category.id}>{category.name}</li>))}
        </ul>
        <span className="whitespace-pre">, </span>
        <span className="font-medium">
          {date_1.format(new Date(blogPost.date), "dd MMM yyyy")}
        </span>
      </div>
      <h2 className="flex-1 font-serif text-3.8xl md:text-3xl lg:text-3.8xl">
        {blogPost.title}
      </h2>
      <gatsby_1.Link to={`/blog${blogPost.uri}`} className={`group inline-flex items-center text-xs font-bold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${theme === "dark"
            ? "focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
            : "focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"}`}>
        <span className="relative disappearing-border">Lire l'article</span>
        <down_right_arrow_icon_1.default className="opacity-0 transition duration-200 ease-in-out transform -translate-x-1 -translate-y-1 ml-1 group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0"/>
      </gatsby_1.Link>
    </article>);
};
exports.default = BlogPostListItem;
