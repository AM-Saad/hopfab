"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const html_react_parser_1 = require("html-react-parser");
const date_1 = require("../../utilities/date");
const down_right_arrow_icon_1 = require("../icons/down-right-arrow-icon");
const FeaturedBlogPostListItem = ({ blogPost, className, }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const featuredImage = gatsby_plugin_image_1.getImage((_b = (_a = blogPost.featuredImage) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.localFile);
    return (<article className={className}>
      <div className="border-b border-t border-gris-800 pb-10">
        <div className="text-sm font-bold uppercase uppercase my-4">
          A la une
        </div>
        {featuredImage && (<gatsby_1.Link to={`/blog${blogPost.uri}`} className="flex overflow-hidden">
            <gatsby_plugin_image_1.GatsbyImage image={featuredImage} alt={((_d = (_c = blogPost.featuredImage) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.alt) || ``} className="transform duration-200 ease-in-out scale-100 hover:scale-110"/>
          </gatsby_1.Link>)}
      </div>
      <div className="border-b border-gris-800 pb-10">
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-28 text-xs font-bold uppercase mt-4">
          <ul className="flex mt">
            {(_f = (_e = blogPost.categories) === null || _e === void 0 ? void 0 : _e.nodes) === null || _f === void 0 ? void 0 : _f.map(category => (<li key={category.id}>{category.name}</li>))}
          </ul>
          <span className="font-medium mt">
            {date_1.format(new Date(blogPost.date), "dd MMM yyyy")}
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-y-6 sm:gap-x-28 pt-10 pb-8">
          <h2 className="font-serif text-5xl sm:text-7xl">{blogPost.title}</h2>
          <div className="text-lg md:text-base lg:text-lg xl:text-1xl xl:leading-relaxed flex-1">
            {html_react_parser_1.default((_g = blogPost.excerpt) !== null && _g !== void 0 ? _g : "")}
          </div>
        </div>
        <gatsby_1.Link to={`/blog${blogPost.uri}`} className="group inline-flex items-center text-xs font-bold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700">
          <span className="relative disappearing-border">Lire la suite</span>
          <down_right_arrow_icon_1.default className="opacity-0 transition duration-200 ease-in-out transform -translate-x-1 -translate-y-1 ml-1 group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0"/>
        </gatsby_1.Link>
      </div>
    </article>);
};
exports.default = FeaturedBlogPostListItem;
