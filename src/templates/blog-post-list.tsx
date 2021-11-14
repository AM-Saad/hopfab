import React from "react";
import { graphql, Link, PageProps } from "gatsby";

import { buildUriPage } from "../utilities/string";
import DefaultLayout from "../components/layouts/default-layout";
import SEO from "../components/seo/seo";
import BlogPostList from "../components/blog-posts/blog-post-list";
import FeaturedBlogPostListItem from "../components/blog-posts/featured-blog-post-list-item";
import WpCategoryFilters from "../components/wpcategory-filters";
import { ThumbnailBlogPost } from "../models/blogpost/thumbnailblogpost";
import { BlogPost } from "../models/blogpost/blogpost";
import { WpCategory } from "../models/wpcategory";
import { NodeQuery } from "../utilities/models/nodequery";
import { GroupStats } from "../models/groupstats";

type DataProps = {
  stickyPosts: NodeQuery<BlogPost>;
  posts: NodeQuery<ThumbnailBlogPost>;
  categoryGroupStats: GroupStats;
  totalStats: {
    totalCount: number;
  };
  categories: NodeQuery<any>;
};

type PageContextProps = {
  category?: WpCategory;
  currentPage: number;
  totalPages: number;
};

const BlogPostListTemplate: React.FC<
  PageProps<DataProps, PageContextProps>
> = ({
  data: { posts, stickyPosts, categoryGroupStats, totalStats, categories },
  pageContext,
}) => {
  const category = pageContext.category;

  return (
    <DefaultLayout>
      <SEO title={`${category ? `${category.name} - ` : ""}Journal`} />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-28 items-end mt-40">
          <h1 className="col-span-3 font-bold text-7.5xl md:text-9xl lg:text-10xl xl:text-12xl">
            Journal
          </h1>
          <div className="col-span-2 mb-8 lg:mb-2 xl:mb-1">
            <div className="hidden lg:block text-sm font-bold uppercase">
              Table des matières
            </div>
            <WpCategoryFilters
              categoryStats={categoryGroupStats.group}
              categories={categories.nodes}
              activeCategory={category}
              totalCount={totalStats.totalCount}
              className="mt-6 mb-1"
            />
          </div>
        </div>
        {!category &&
        pageContext.currentPage === 1 &&
        stickyPosts.nodes.length > 0 ? (
          <FeaturedBlogPostListItem blogPost={stickyPosts.nodes[0]} />
        ) : (
          <></>
        )}
        {!category && (
          <div>
            <h2 className="text-8xl md:text-9.5xl lg:text-12xl font-bold leading-none mt-32 mb-10">
              Voir aussi
            </h2>
          </div>
        )}
        <BlogPostList
          initialBlogPosts={posts.nodes}
          initialCurrentPage={pageContext.currentPage}
          totalPages={pageContext.totalPages}
          category={category}
        />
        {pageContext.currentPage > 1 && (
          <Link
            to={buildUriPage(
              "blog",
              pageContext.currentPage - 1,
              "",
              category?.uri
            )}
            className="sr-only"
          >
            Précédent
          </Link>
        )}
        {pageContext.currentPage < pageContext.totalPages && (
          <Link
            to={buildUriPage(
              "blog",
              pageContext.currentPage + 1,
              "",
              category?.uri
            )}
            className="sr-only"
          >
            Suivant
          </Link>
        )}
      </div>
    </DefaultLayout>
  );
};

export default BlogPostListTemplate;

export const pageQuery = graphql`
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
