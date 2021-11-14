import React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import parse from "html-react-parser";

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";

import "../style-blog-post.css";

import DefaultLayout from "../components/layouts/default-layout";
import SEO from "../components/seo/seo";
import { BlogPost } from "../models/blogpost/blogpost";
import { format } from "../utilities/date";

type DataProps = {
  post: BlogPost;
};

const BlogPostTemplate: React.FC<PageProps<DataProps>> = ({
  data: { post },
}) => {
  const featuredImage = getImage(post.featuredImage?.node?.localFile);
  let metaDescription = post.excerpt ?? "";
  metaDescription = metaDescription
    .trim()
    .replace("<p>", "")
    .replace("</p>", "");

  return (
    <DefaultLayout>
      <SEO
        title={post.title}
        desc={metaDescription}
        pathname={`blog/${post.uri}`}
        article={true}
        banner={getSrc(post.featuredImage?.node?.localFile)}
        node={{
          first_publication_date: post.date,
          last_publication_date: post.modified,
        }}
      />

      <article className="blog-post">
        <header>
          <h1 className="font-serif text-8xl md:text-9xl lg:text-10xl lg:leading-13 border-b border-gris-800 pt-24 pb-10">
            {parse(post.title ?? "")}
          </h1>

          <div className="sm:grid sm:grid-cols-3 text-xsm font-bold uppercase my-4">
            <ul className="flex">
              {post.categories?.nodes?.map(category => (
                <li key={category.id} itemProp="articleSection">
                  {category.name}
                </li>
              ))}
            </ul>
            <span className="col-start-3 font-medium">
              {format(new Date(post.date), "dd MMM yyyy")}
            </span>
          </div>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage && (
            <GatsbyImage
              image={featuredImage}
              alt={post.featuredImage?.node?.alt || ``}
            />
          )}
        </header>

        {!!post.content && (
          <section itemProp="articleBody" className="entry-content mb-20">
            {parse(post.content ?? "")}
          </section>
        )}
      </article>
    </DefaultLayout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
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
