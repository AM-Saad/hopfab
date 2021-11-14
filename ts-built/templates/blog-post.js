"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const html_react_parser_1 = require("html-react-parser");
// We're using Gutenberg so we need the block styles
require("@wordpress/block-library/build-style/style.css");
require("@wordpress/block-library/build-style/theme.css");
require("../style-blog-post.css");
const default_layout_1 = require("../components/layouts/default-layout");
const seo_1 = require("../components/seo/seo");
const date_1 = require("../utilities/date");
const BlogPostTemplate = ({ data: { post }, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const featuredImage = gatsby_plugin_image_1.getImage((_b = (_a = post.featuredImage) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.localFile);
    let metaDescription = (_c = post.excerpt) !== null && _c !== void 0 ? _c : "";
    metaDescription = metaDescription
        .trim()
        .replace("<p>", "")
        .replace("</p>", "");
    return (<default_layout_1.default>
      <seo_1.default title={post.title} desc={metaDescription} pathname={`blog/${post.uri}`} article={true} banner={gatsby_plugin_image_1.getSrc((_e = (_d = post.featuredImage) === null || _d === void 0 ? void 0 : _d.node) === null || _e === void 0 ? void 0 : _e.localFile)} node={{
            first_publication_date: post.date,
            last_publication_date: post.modified,
        }}/>

      <article className="blog-post">
        <header>
          <h1 className="font-serif text-8xl md:text-9xl lg:text-10xl lg:leading-13 border-b border-gris-800 pt-24 pb-10">
            {html_react_parser_1.default((_f = post.title) !== null && _f !== void 0 ? _f : "")}
          </h1>

          <div className="sm:grid sm:grid-cols-3 text-xsm font-bold uppercase my-4">
            <ul className="flex">
              {(_h = (_g = post.categories) === null || _g === void 0 ? void 0 : _g.nodes) === null || _h === void 0 ? void 0 : _h.map(category => (<li key={category.id} itemProp="articleSection">
                  {category.name}
                </li>))}
            </ul>
            <span className="col-start-3 font-medium">
              {date_1.format(new Date(post.date), "dd MMM yyyy")}
            </span>
          </div>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage && (<gatsby_plugin_image_1.GatsbyImage image={featuredImage} alt={((_k = (_j = post.featuredImage) === null || _j === void 0 ? void 0 : _j.node) === null || _k === void 0 ? void 0 : _k.alt) || ``}/>)}
        </header>

        {!!post.content && (<section itemProp="articleBody" className="entry-content mb-20">
            {html_react_parser_1.default((_l = post.content) !== null && _l !== void 0 ? _l : "")}
          </section>)}
      </article>
    </default_layout_1.default>);
};
exports.default = BlogPostTemplate;
exports.pageQuery = gatsby_1.graphql `
  query BlogPostById($id: String!) {
    post: wpPost(id: { eq: $id }) {
      id
      uri
      excerpt
      content
      title
      date
      modified
      categories {
        nodes {
          id
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
