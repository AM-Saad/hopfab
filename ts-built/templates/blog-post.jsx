"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var html_react_parser_1 = require("html-react-parser");
// We're using Gutenberg so we need the block styles
require("@wordpress/block-library/build-style/style.css");
require("@wordpress/block-library/build-style/theme.css");
require("../style-blog-post.css");
var default_layout_1 = require("../components/layouts/default-layout");
var seo_1 = require("../components/seo/seo");
var date_1 = require("../utilities/date");
var BlogPostTemplate = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var post = _a.data.post;
    var featuredImage = gatsby_plugin_image_1.getImage((_c = (_b = post.featuredImage) === null || _b === void 0 ? void 0 : _b.node) === null || _c === void 0 ? void 0 : _c.localFile);
    var metaDescription = (_d = post.excerpt) !== null && _d !== void 0 ? _d : "";
    metaDescription = metaDescription
        .trim()
        .replace("<p>", "")
        .replace("</p>", "");
    return (<default_layout_1.default>
      <seo_1.default title={post.title} desc={metaDescription} pathname={"blog/" + post.uri} article={true} banner={gatsby_plugin_image_1.getSrc((_f = (_e = post.featuredImage) === null || _e === void 0 ? void 0 : _e.node) === null || _f === void 0 ? void 0 : _f.localFile)} node={{
            first_publication_date: post.date,
            last_publication_date: post.modified,
        }}/>

      <article className="blog-post">
        <header>
          <h1 className="font-serif text-8xl md:text-9xl lg:text-10xl lg:leading-13 border-b border-gris-800 pt-24 pb-10">
            {html_react_parser_1.default((_g = post.title) !== null && _g !== void 0 ? _g : "")}
          </h1>

          <div className="sm:grid sm:grid-cols-3 text-xsm font-bold uppercase my-4">
            <ul className="flex">
              {(_j = (_h = post.categories) === null || _h === void 0 ? void 0 : _h.nodes) === null || _j === void 0 ? void 0 : _j.map(function (category) { return (<li key={category.id} itemProp="articleSection">
                  {category.name}
                </li>); })}
            </ul>
            <span className="col-start-3 font-medium">
              {date_1.format(new Date(post.date), "dd MMM yyyy")}
            </span>
          </div>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage && (<gatsby_plugin_image_1.GatsbyImage image={featuredImage} alt={((_l = (_k = post.featuredImage) === null || _k === void 0 ? void 0 : _k.node) === null || _l === void 0 ? void 0 : _l.alt) || ""}/>)}
        </header>

        {!!post.content && (<section itemProp="articleBody" className="entry-content mb-20">
            {html_react_parser_1.default((_m = post.content) !== null && _m !== void 0 ? _m : "")}
          </section>)}
      </article>
    </default_layout_1.default>);
};
exports.default = BlogPostTemplate;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query BlogPostById($id: String!) {\n    post: wpPost(id: { eq: $id }) {\n      id\n      uri\n      excerpt\n      content\n      title\n      date\n      modified\n      categories {\n        nodes {\n          id\n          name\n        }\n      }\n      featuredImage {\n        node {\n          altText\n          localFile {\n            childImageSharp {\n              gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query BlogPostById($id: String!) {\n    post: wpPost(id: { eq: $id }) {\n      id\n      uri\n      excerpt\n      content\n      title\n      date\n      modified\n      categories {\n        nodes {\n          id\n          name\n        }\n      }\n      featuredImage {\n        node {\n          altText\n          localFile {\n            childImageSharp {\n              gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=blog-post.jsx.map