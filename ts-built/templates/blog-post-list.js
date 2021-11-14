"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const string_1 = require("../utilities/string");
const default_layout_1 = require("../components/layouts/default-layout");
const seo_1 = require("../components/seo/seo");
const blog_post_list_1 = require("../components/blog-posts/blog-post-list");
const featured_blog_post_list_item_1 = require("../components/blog-posts/featured-blog-post-list-item");
const wpcategory_filters_1 = require("../components/wpcategory-filters");
const BlogPostListTemplate = ({ data: { posts, stickyPosts, categoryGroupStats, totalStats, categories }, pageContext, }) => {
    const category = pageContext.category;
    return (<default_layout_1.default>
      <seo_1.default title={`${category ? `${category.name} - ` : ""}Journal`}/>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-28 items-end mt-40">
          <h1 className="col-span-3 font-bold text-7.5xl md:text-9xl lg:text-10xl xl:text-12xl">
            Journal
          </h1>
          <div className="col-span-2 mb-8 lg:mb-2 xl:mb-1">
            <div className="hidden lg:block text-sm font-bold uppercase">
              Table des matières
            </div>
            <wpcategory_filters_1.default categoryStats={categoryGroupStats.group} categories={categories.nodes} activeCategory={category} totalCount={totalStats.totalCount} className="mt-6 mb-1"/>
          </div>
        </div>
        {!category &&
            pageContext.currentPage === 1 &&
            stickyPosts.nodes.length > 0 ? (<featured_blog_post_list_item_1.default blogPost={stickyPosts.nodes[0]}/>) : (<></>)}
        {!category && (<div>
            <h2 className="text-8xl md:text-9.5xl lg:text-12xl font-bold leading-none mt-32 mb-10">
              Voir aussi
            </h2>
          </div>)}
        <blog_post_list_1.default initialBlogPosts={posts.nodes} initialCurrentPage={pageContext.currentPage} totalPages={pageContext.totalPages} category={category}/>
        {pageContext.currentPage > 1 && (<gatsby_1.Link to={string_1.buildUriPage("blog", pageContext.currentPage - 1, "", category === null || category === void 0 ? void 0 : category.uri)} className="sr-only">
            Précédent
          </gatsby_1.Link>)}
        {pageContext.currentPage < pageContext.totalPages && (<gatsby_1.Link to={string_1.buildUriPage("blog", pageContext.currentPage + 1, "", category === null || category === void 0 ? void 0 : category.uri)} className="sr-only">
            Suivant
          </gatsby_1.Link>)}
      </div>
    </default_layout_1.default>);
};
exports.default = BlogPostListTemplate;
exports.pageQuery = gatsby_1.graphql `
  query BlogPosts($limit: Int!, $skip: Int!, $filters: WpPostFilterInput) {
    posts: allWpPost(
      limit: $limit
      skip: $skip
      filter: $filters
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        uri
        title
        excerpt
        date(formatString: "MMMM DD, YYYY")
        categories {
          nodes {
            id
            name
          }
        }
        portraitFeaturedImage: featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 640, height: 865, layout: CONSTRAINED)
              }
            }
          }
        }
        landscapeFeaturedImage: featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 768, height: 635, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
    categoryGroupStats: allWpPost {
      group(field: categories___nodes___id) {
        fieldValue
        totalCount
      }
    }
    totalStats: allWpPost {
      totalCount
    }
    categories: allWpCategory {
      nodes {
        id
        name
        slug
        uri
      }
    }
    stickyPosts: allWpPost(filter: { isSticky: { eq: true } }, limit: 1) {
      nodes {
        id
        uri
        title
        excerpt
        date
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
  }
`;
