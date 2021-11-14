import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { kebabCase } from "lodash";

import { buildUriPage } from "../utilities/string";
import BaseLayout from "../components/layouts/base-layout";
import SEO from "../components/seo/seo";
import CategoryFilters from "../components/category-filters";
import ProjectList from "../components/projects/project-list";
import WhyHopfab from "../components/call-to-actions/why-hopfab";
import { Project } from "../models/project";
import { NodeQuery } from "../utilities/models/nodequery";
import { GroupStats } from "../models/groupstats";

interface ProjectFilter {
  typeDeProjet: {
    eq: string;
  };
}

type DataProps = {
  projets: NodeQuery<Project>;
  typesDeProjetGroupStats: GroupStats;
  totalStats: {
    totalCount: number;
  };
};

type PageContextProps = {
  filters?: ProjectFilter;
  currentPage: number;
  totalPages: number;
};

const ProjectListTemplate: React.FC<PageProps<DataProps, PageContextProps>> = ({
  data: { projets, typesDeProjetGroupStats, totalStats },
  pageContext,
}) => {
  const typeDeProjet = pageContext.filters?.typeDeProjet?.eq;
  const typeDeProjetSlug = kebabCase(typeDeProjet);

  return (
    <BaseLayout theme="brown">
      <SEO title={`${typeDeProjet ? `${typeDeProjet} - ` : ""}Réalisations`} />
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5 pb-10">
        <div className="grid lg:grid-cols-12 mt-24">
          <div className="hidden lg:block font-bold text-5.5xl md:text-6xl lg:text-6.5xl xl:text-7.5xl">
            {projets.totalCount}
          </div>
          <div className="col-span-12 lg:col-span-11 md:ml-5 lg:ml-19 xl:ml-23 2xl:ml-28">
            <div className="grid grid-cols-5 lg:block">
              <div className="block lg:hidden font-bold text-5.5xl md:text-6xl lg:text-6.5xl xl:text-7.5xl">
                {projets.totalCount}
              </div>
              <div className="col-span-4 grid grid-cols-1 gap-4 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 md:gap-x-14 lg:gap-x-18 xl:gap-x-22 2xl:gap-x-24">
                  <h1 className="font-bold text-5.5xl md:text-6xl lg:text-6.5xl xl:text-7.5xl">
                    {typeDeProjet ? typeDeProjet : "Toutes nos réalisations"}
                  </h1>
                  <div>
                    <div className="hidden lg:block text-sm font-bold uppercase mt-12">
                      Filtrer les projets
                    </div>
                    <CategoryFilters
                      basePath="realisations"
                      categoryName="type-de-projet"
                      categoryStats={typesDeProjetGroupStats.group}
                      selectedCategory={typeDeProjet}
                      totalCount={totalStats.totalCount}
                      className="mt-14"
                    />
                  </div>
                </div>
              </div>
            </div>
            <ProjectList
              initialProjects={projets.nodes}
              initialCurrentPage={pageContext.currentPage}
              totalPages={pageContext.totalPages}
              selectedCategory={typeDeProjetSlug}
            />

            {pageContext.currentPage > 1 && (
              <Link
                to={buildUriPage(
                  "realisations",
                  pageContext.currentPage - 1,
                  "type-de-projet",
                  typeDeProjetSlug
                )}
                className="sr-only"
              >
                Précédent
              </Link>
            )}
            {pageContext.currentPage < pageContext.totalPages && (
              <Link
                to={buildUriPage(
                  "realisations",
                  pageContext.currentPage + 1,
                  "type-de-projet",
                  typeDeProjetSlug
                )}
                className="sr-only"
              >
                Suivant
              </Link>
            )}
          </div>
        </div>
      </div>
      <WhyHopfab className="py-24 xl:py-28" />
    </BaseLayout>
  );
};

export default ProjectListTemplate;

export const pageQuery = graphql`
  query Projects(
    $limit: Int!
    $skip: Int!
    $filters: googleProjetsSiteSheetFilterInput
  ) {
    projets: allGoogleProjetsSiteSheet(
      limit: $limit
      skip: $skip
      filter: $filters
      sort: { fields: index, order: DESC }
    ) {
      nodes {
        id
        #idProjet
        fullPath: lienSiteHopfab
        prestations
        titre
        titreDescriptif
        architecte
        client
        prestationsPrincipales
        description
        photo1Description
        photo1Image {
          childImageSharp {
            gatsbyImageData(width: 640, height: 836, layout: CONSTRAINED)
          }
        }
      }
      totalCount
    }
    typesDeProjetGroupStats: allGoogleProjetsSiteSheet(
      filter: { lienSiteHopfab: { nin: [null] } }
    ) {
      group(field: typeDeProjet) {
        fieldValue
        totalCount
      }
    }
    totalStats: allGoogleProjetsSiteSheet(
      filter: { lienSiteHopfab: { nin: [null] } }
    ) {
      totalCount
    }
  }
`;
