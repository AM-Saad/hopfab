import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { kebabCase } from "lodash";

import { buildUriPage } from "../utilities/string";
import BaseLayout from "../components/layouts/base-layout";
import SEO from "../components/seo/seo";
import CategoryFilters from "../components/category-filters";
import MaterialList from "../components/materials/material-list";
import WhyHopfab from "../components/call-to-actions/why-hopfab";
import { Material } from "../models/material";
import { NodeQuery } from "../utilities/models/nodequery";
import { GroupStats } from "../models/groupstats";

interface MaterialFilter {
  materiau: {
    eq: string;
  };
}

type DataProps = {
  materiaux: NodeQuery<Material>;
  typesDeMateriauGroupStats: GroupStats;
  totalStats: {
    totalCount: number;
  };
};

type PageContextProps = {
  filters?: MaterialFilter;
  currentPage: number;
  totalPages: number;
};

const MaterialListTemplate: React.FC<
  PageProps<DataProps, PageContextProps>
> = ({
  data: { materiaux, typesDeMateriauGroupStats, totalStats },
  pageContext,
}) => {
  const typeDeMateriau = pageContext.filters?.materiau?.eq;
  const typeDeMateriauSlug = kebabCase(typeDeMateriau);

  return (
    <BaseLayout theme="brown">
      <SEO
        title={`${typeDeMateriau ? `${typeDeMateriau} - ` : ""}Matériauthèque`}
      />
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5 pb-10">
        <div className="grid lg:grid-cols-12 mt-24">
          <div className="hidden lg:block font-bold text-5.5xl md:text-6xl lg:text-7xl xl:text-7.5xl">
            {materiaux.totalCount}
          </div>
          <div className="col-span-12 lg:col-span-11 md:ml-5 lg:ml-19 xl:ml-23 2xl:ml-28">
            <div className="grid grid-cols-5 lg:block">
              <div className="block lg:hidden font-bold text-5.5xl md:text-6xl lg:text-7xl xl:text-7.5xl">
                {materiaux.totalCount}
              </div>
              <div className="col-span-3 grid grid-cols-1 gap-4 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 md:gap-x-14 lg:gap-x-18 xl:gap-x-22 2xl:gap-x-24">
                  <h1 className="font-bold text-5.5xl md:text-6xl lg:text-7xl xl:text-7.5xl">
                    {typeDeMateriau ? typeDeMateriau : "Tous nos matériaux"}
                  </h1>
                  <div>
                    <div className="hidden lg:block text-sm font-bold uppercase mt-12">
                      Filtrer les matériaux
                    </div>
                    <CategoryFilters
                      basePath="materiautheque"
                      categoryName="type-de-materiau"
                      categoryStats={typesDeMateriauGroupStats.group}
                      selectedCategory={typeDeMateriau}
                      totalCount={totalStats.totalCount}
                      className="mt-14"
                    />
                  </div>
                </div>
              </div>
            </div>
            <MaterialList
              initialMaterials={materiaux.nodes}
              initialCurrentPage={pageContext.currentPage}
              totalPages={pageContext.totalPages}
              selectedCategory={typeDeMateriauSlug}
            />

            {pageContext.currentPage > 1 && (
              <Link
                to={buildUriPage(
                  "materiautheque",
                  pageContext.currentPage - 1,
                  "type-de-materiau",
                  typeDeMateriauSlug
                )}
                className="sr-only"
              >
                Précédent
              </Link>
            )}
            {pageContext.currentPage < pageContext.totalPages && (
              <Link
                to={buildUriPage(
                  "materiautheque",
                  pageContext.currentPage + 1,
                  "type-de-materiau",
                  typeDeMateriauSlug
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

export default MaterialListTemplate;

export const pageQuery = graphql`
  query Materials(
    $limit: Int!
    $skip: Int!
    $filters: googleMateriauthequeSiteSheetFilterInput
  ) {
    materiaux: allGoogleMateriauthequeSiteSheet(
      limit: $limit
      skip: $skip
      filter: $filters
      sort: { fields: index, order: DESC }
    ) {
      nodes {
        id
        fullPath: lienSiteHopfab
        reference
        nomMateriau
        materiau
        domainesDapplication
        photo1Image {
          childImageSharp {
            gatsbyImageData(width: 640, height: 836, layout: CONSTRAINED)
          }
        }
      }
      totalCount
    }
    typesDeMateriauGroupStats: allGoogleMateriauthequeSiteSheet(
      filter: {
        lienSiteHopfab: { nin: [null] }
        integrerSurSite: { in: ["oui"] }
      }
    ) {
      group(field: materiau) {
        fieldValue
        totalCount
      }
    }
    totalStats: allGoogleMateriauthequeSiteSheet(
      filter: {
        lienSiteHopfab: { nin: [null] }
        integrerSurSite: { in: ["oui"] }
      }
    ) {
      totalCount
    }
  }
`;
