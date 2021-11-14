"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var string_1 = require("../utilities/string");
var default_layout_1 = require("../components/layouts/default-layout");
var seo_1 = require("../components/seo/seo");
var blog_post_list_1 = require("../components/blog-posts/blog-post-list");
var featured_blog_post_list_item_1 = require("../components/blog-posts/featured-blog-post-list-item");
var wpcategory_filters_1 = require("../components/wpcategory-filters");
var BlogPostListTemplate = function (_a) {
    var _b = _a.data, posts = _b.posts, stickyPosts = _b.stickyPosts, categoryGroupStats = _b.categoryGroupStats, totalStats = _b.totalStats, categories = _b.categories, pageContext = _a.pageContext;
    var category = pageContext.category;
    return (<default_layout_1.default>
      <seo_1.default title={(category ? category.name + " - " : "") + "Journal"}/>
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
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query BlogPosts($limit: Int!, $skip: Int!, $filters: WpPostFilterInput) {\n    posts: allWpPost(\n      limit: $limit\n      skip: $skip\n      filter: $filters\n      sort: { fields: date, order: DESC }\n    ) {\n      nodes {\n        id\n        uri\n        title\n        excerpt\n        date(formatString: \"MMMM DD, YYYY\")\n        categories {\n          nodes {\n            id\n            name\n          }\n        }\n        portraitFeaturedImage: featuredImage {\n          node {\n            altText\n            localFile {\n              childImageSharp {\n                gatsbyImageData(width: 640, height: 865, layout: CONSTRAINED)\n              }\n            }\n          }\n        }\n        landscapeFeaturedImage: featuredImage {\n          node {\n            altText\n            localFile {\n              childImageSharp {\n                gatsbyImageData(width: 768, height: 635, layout: CONSTRAINED)\n              }\n            }\n          }\n        }\n      }\n    }\n    categoryGroupStats: allWpPost {\n      group(field: categories___nodes___id) {\n        fieldValue\n        totalCount\n      }\n    }\n    totalStats: allWpPost {\n      totalCount\n    }\n    categories: allWpCategory {\n      nodes {\n        id\n        name\n        slug\n        uri\n      }\n    }\n    stickyPosts: allWpPost(filter: { isSticky: { eq: true } }, limit: 1) {\n      nodes {\n        id\n        uri\n        title\n        excerpt\n        date\n        categories {\n          nodes {\n            id\n            name\n          }\n        }\n        featuredImage {\n          node {\n            altText\n            localFile {\n              childImageSharp {\n                gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query BlogPosts($limit: Int!, $skip: Int!, $filters: WpPostFilterInput) {\n    posts: allWpPost(\n      limit: $limit\n      skip: $skip\n      filter: $filters\n      sort: { fields: date, order: DESC }\n    ) {\n      nodes {\n        id\n        uri\n        title\n        excerpt\n        date(formatString: \"MMMM DD, YYYY\")\n        categories {\n          nodes {\n            id\n            name\n          }\n        }\n        portraitFeaturedImage: featuredImage {\n          node {\n            altText\n            localFile {\n              childImageSharp {\n                gatsbyImageData(width: 640, height: 865, layout: CONSTRAINED)\n              }\n            }\n          }\n        }\n        landscapeFeaturedImage: featuredImage {\n          node {\n            altText\n            localFile {\n              childImageSharp {\n                gatsbyImageData(width: 768, height: 635, layout: CONSTRAINED)\n              }\n            }\n          }\n        }\n      }\n    }\n    categoryGroupStats: allWpPost {\n      group(field: categories___nodes___id) {\n        fieldValue\n        totalCount\n      }\n    }\n    totalStats: allWpPost {\n      totalCount\n    }\n    categories: allWpCategory {\n      nodes {\n        id\n        name\n        slug\n        uri\n      }\n    }\n    stickyPosts: allWpPost(filter: { isSticky: { eq: true } }, limit: 1) {\n      nodes {\n        id\n        uri\n        title\n        excerpt\n        date\n        categories {\n          nodes {\n            id\n            name\n          }\n        }\n        featuredImage {\n          node {\n            altText\n            localFile {\n              childImageSharp {\n                gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=blog-post-list.jsx.map