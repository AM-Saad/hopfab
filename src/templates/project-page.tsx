import React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import parse from "html-react-parser";

import BaseLayout from "../components/layouts/base-layout";
import SEO from "../components/seo/seo";
import { Project } from "../models/project";
import ProjectPhotos, { Slide } from "../components/projects/project-photos";
import ReadyToDiscuss from "../components/ready-to-discuss";

type DataProps = {
  projet: Project;
};

const ProjectPageTemplate: React.FC<PageProps<DataProps>> = ({
  data: { projet },
}) => {
  const ateliers =
    projet.artisans
      ?.split(",")
      .filter(p => p && p.length > 0)
      .map(artisan => artisan.trim()) ?? [];
  const metiers =
    projet.metiers
      ?.split(",")
      .filter(m => m && m.length > 0)
      .map(m => m.trim()) ?? [];
  const prestations =
    projet.prestations
      ?.split(",")
      .filter(p => p && p.length > 0)
      .map(p => p.trim()) ?? [];
  const materiaux =
    projet.materiaux
      ?.split(",")
      .filter(m => m && m.length > 0)
      .map(m => m.trim()) ?? [];

  const photo1Image = getImage(projet.photo1Image);
  const photo2Image = getImage(projet.photo2Image);
  const photo3Image = getImage(projet.photo3Image);
  const photo4Image = getImage(projet.photo4Image);
  const photo5Image = getImage(projet.photo5Image);
  const photo6Image = getImage(projet.photo6Image);
  const photo7Image = getImage(projet.photo7Image);
  const photo8Image = getImage(projet.photo8Image);
  const photo9Image = getImage(projet.photo9Image);
  const photo10Image = getImage(projet.photo10Image);

  const remainingPhotos: Slide[] = [];
  if (photo4Image) {
    remainingPhotos.push({
      image: photo4Image,
      alt: projet.photo4Description,
    });
  }
  if (photo5Image) {
    remainingPhotos.push({
      image: photo5Image,
      alt: projet.photo5Description,
    });
  }
  if (photo6Image) {
    remainingPhotos.push({
      image: photo6Image,
      alt: projet.photo6Description,
    });
  }
  if (photo7Image) {
    remainingPhotos.push({
      image: photo7Image,
      alt: projet.photo7Description,
    });
  }
  if (photo8Image) {
    remainingPhotos.push({
      image: photo8Image,
      alt: projet.photo8Description,
    });
  }
  if (photo9Image) {
    remainingPhotos.push({
      image: photo9Image,
      alt: projet.photo9Description,
    });
  }
  if (photo10Image) {
    remainingPhotos.push({
      image: photo10Image,
      alt: projet.photo10Description,
    });
  }

  return (
    <BaseLayout theme="brown">
      <SEO
        title={projet.titreDescriptif}
        desc={projet.metaDescription}
        banner={getSrc(projet.photo1Image)}
      />
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5 pt-18">
        <h1 className="uppercase font-bold text-5.5xl sm:text-7xl lg:text-9.5xl border-b border-gris-800 py-8">
          {projet.titre}
        </h1>
        <dl className="uppercase text-sm my-5">
          <div className="flex">
            <dt className="mr-1">Catégorie</dt>
            <dd className="font-bold">{projet.typeDeProjet}</dd>
          </div>
          {projet.architecte ? (
            <div className="flex">
              <dt className="mr-1">Par</dt>
              <dd className="font-bold">{projet.architecte}</dd>
            </div>
          ) : (
            <></>
          )}
        </dl>

        {photo1Image && (
          <GatsbyImage image={photo1Image} alt={projet.photo1Description} />
        )}

        <div className="uppercase text-sm grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-28 pt-4">
          <div className="font-bold">Artisans Hopfab</div>
          <div>
            {ateliers.map((atelier, index) => (
              <div key={index} className="flex flex-wrap">
                <div className="font-bold mr-1">{atelier}</div>
                <div>{metiers[index] ? metiers[index] : ""}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-28 pt-40 pb-16">
          <div className="flex flex-col justify-between">
            <div className="text-5.5xl font-bold">{projet.titreDescriptif}</div>
            <div className="mt-8">
              {projet.architecte && (
                <dl className="uppercase text-sm">
                  <dt className="inline font-bold mr-1">Architecte</dt>
                  <dd className="inline">{projet.architecte}</dd>
                </dl>
              )}
              {projet.departement && (
                <dl className="uppercase text-sm">
                  <dt className="inline font-bold mr-1">Lieu</dt>
                  <dd className="inline">{projet.departement}</dd>
                </dl>
              )}
              {projet.creditPhoto && (
                <dl className="uppercase text-sm">
                  <dt className="inline font-bold mr-1">Credits photo</dt>
                  <dd className="inline">{projet.creditPhoto}</dd>
                </dl>
              )}
            </div>
          </div>

          <p className="text-1xl">
            {parse(projet.description?.replace(/(\n)/g, "<br/>") ?? "")}
          </p>
        </div>

        {photo2Image && (
          <GatsbyImage image={photo2Image} alt={projet.photo2Description} />
        )}

        {projet.temoignage ? (
          <div className="max-w-3xl mx-auto py-40">
            <div className="font-serif text-2.5xl md:text-4.5xl leading-snug md:leading-tight pb-10">
              {projet.temoignage}
            </div>
            <div className="uppercase text-sm">
              <span className="font-bold">
                {projet.temoignageAuteur?.trim()}
              </span>
              {", "}
              {projet.temoignageFonctionAuteur?.trim()}
            </div>
          </div>
        ) : (
          <> </>
        )}

        <div className="flex justify-end pb-48">
          {photo3Image && (
            <GatsbyImage image={photo3Image} alt={projet.photo3Description} />
          )}
        </div>

        <div className="mb-8">
          {remainingPhotos && remainingPhotos.length === 1 && (
            <GatsbyImage
              image={remainingPhotos[0].image}
              alt={remainingPhotos[0].alt}
            />
          )}
          {remainingPhotos && remainingPhotos.length > 1 && (
            <ProjectPhotos slides={remainingPhotos} />
          )}
        </div>

        <div className="mb-40">
          <dl className="uppercase text-sm">
            {projet.prestations && (
              <div>
                <dt className="inline font-bold mr-1">Prestations</dt>
                <dd className="inline">
                  {prestations.map((prestation, index) => (
                    <span key={index}>
                      {prestation}
                      {index < prestations.length - 1 && ", "}
                    </span>
                  ))}
                </dd>
              </div>
            )}
            {projet.metiers && (
              <div>
                <dt className="inline font-bold mr-1">Métiers</dt>
                <dd className="inline">
                  {metiers.map((metier, index) => (
                    <span key={index}>
                      {metier}
                      {index < metiers.length - 1 && ", "}
                    </span>
                  ))}
                </dd>
              </div>
            )}
            {projet.materiaux && (
              <div>
                <dt className="inline font-bold mr-1">Matériaux</dt>
                <dd className="inline">
                  {materiaux.map((materiau, index) => (
                    <span key={index}>
                      {materiau}
                      {index < materiaux.length - 1 && ", "}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
      <ReadyToDiscuss />
    </BaseLayout>
  );
};

export default ProjectPageTemplate;

export const pageQuery = graphql`
  query ProjectById($id: String!) {
    projet: googleProjetsSiteSheet(id: { eq: $id }) {
      id
      #idProjet
      typeDeProjet
      prestations
      departement
      titre
      titreDescriptif
      description
      #metaDescription
      artisans
      metiers
      materiaux
      architecte
      temoignage
      temoignageAuteur
      temoignageFonctionAuteur
      creditPhoto
      photo1Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo1Description
      photo2Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo2Description
      photo3Image {
        childImageSharp {
          gatsbyImageData(width: 536, height: 700, layout: FIXED)
        }
      }
      photo3Description
      photo4Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo4Description
      photo5Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo5Description
      photo6Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo6Description
      photo7Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo7Description
      photo8Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo8Description
      photo9Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo9Description
      photo10Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo10Description
    }
  }
`;
