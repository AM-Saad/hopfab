import React from "react";
import { Link, PageProps } from "gatsby";

import DefaultLayout from "../components/layouts/default-layout";
import SEO from "../components/seo/seo";
import VerticalLaunchProject from "../components/vertical-launch-project";
import QuiSommesNousIllustration1Image from "../components/images/qui-sommes-nous/qui-sommes-nous-illustration-1-image";
import QuiSommesNousIllustration2Image from "../components/images/qui-sommes-nous/qui-sommes-nous-illustration-2-image";
import QuiSommesNousIllustration3Image from "../components/images/qui-sommes-nous/qui-sommes-nous-illustration-3-image";
import QuiSommesNousIllustration4Image from "../components/images/qui-sommes-nous/qui-sommes-nous-illustration-4-image";
import QuiSommesNousIllustration5Image from "../components/images/qui-sommes-nous/qui-sommes-nous-illustration-5-image";
import QuiSommesNousIllustration6Image from "../components/images/qui-sommes-nous/qui-sommes-nous-illustration-6-image";
import CollaborationSteps from "../components/collaboration-steps/collaboration-steps";
import DotIcon from "../components/icons/dot-icon";

type DataProps = {};

const QuiSommesNousPage: React.FC<PageProps<DataProps>> = () => {
  const collaborationSteps = [
    {
      title: `Déposez votre projet`,
      content: `Déposez votre projet sur notre site en quelques secondes en cliquant <a href="/devis" class="underline">ici</a>`,
      defaultIsOpen: true,
      defaultShowIndex: true,
    },
    {
      title: `Validez votre cahier des charges`,
      content: `Un expert Hopfab vous rappelle pour finaliser votre cahier des charges et lancer la consultation auprès d'artisans sélectionnés`,
      defaultShowIndex: true,
    },
    {
      title: `Suivez votre consultation`,
      content: `Découvrez les présentations des artisans et les devis détaillés de votre projet, contactez les`,
      defaultShowIndex: true,
    },
    {
      title: `Lancez votre projet`,
      content: `Sélectionnez le devis souhaité et gérez toutes les étapes de contractualisation en ligne`,
      defaultShowIndex: true,
    },
    {
      title: `Gérez votre projet`,
      content: `Recevez le rétroplanning de l’atelier et soyez informé de l’avancement du projet`,
      defaultShowIndex: true,
    },
    {
      title: `Validez votre projet`,
      content: `Validez avec Hopfab la bonne réception du projet et évaluez votre atelier`,
      defaultShowIndex: true,
    },
  ];

  return (
    <DefaultLayout>
      <SEO title="Qui sommes nous" />
      <div className="lg:grid lg:grid-cols-12">
       
        <div className="lg:col-span-11 lg:ml-19 xl:ml-23 2xl:ml-28">
          <section className="mt-24">
            <h1 className="text-6xl md:text-7.5xl lg:text-8.5xl font-bold max-w-5xl mb-16">
              Nous sommes hopfab.
            </h1>
            <div className="grid md:grid-cols-2">
              <div className="md:col-start-2 font-medium text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11 max-w-lg mb-28">
                Hopfab fédère une communauté d’artisans français labellisés et
                accompagne les projets de l’organisation de l’appel d’offres
                jusqu’à la livraison, grâce à une méthodologie unique qui
                s’appuie sur des outils digitaux et une équipe d’experts.
              </div>
            </div>
            <div className="mb-28">
              <QuiSommesNousIllustration1Image />
            </div>
          </section>
          <section className="grid md:grid-cols-2 gap-y-12 mb-22 md:mb-56">
            <h2 className="font-bold text-5xl md:text-5.75xl lg:text-6xl xl:text-6.75xl max-w-xs">
              Entreprise à mission
            </h2>
            <div className="grid space-y-8">
              <p className="text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11">
                Nous mettons l’artisanat au service de l’agencement{" "}
                <span className="font-medium">
                  sur-mesure, local, responsable et efficient
                </span>{" "}
                afin de :
              </p>
              <div className="md:flex justify-start md:-ml-9">
                <div className="font-bold text-sm mt-2 mr-4">01</div>
                <div className="text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11">
                  <span className="font-medium">Préserver et développer</span>{" "}
                  la filière{" "}
                  <span className="font-medium">artisanale française</span>
                </div>
              </div>
              <div className="md:flex justify-start md:-ml-9">
                <div className="font-bold text-sm mt-2 mr-4">02</div>
                <div className="text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11">
                  <span className="font-medium">Accompagner</span> les
                  professionnels à aller{" "}
                  <span className="font-medium">plus loin</span> dans leur
                  démarche{" "}
                  <span className="font-medium">
                    d’impact et d’achat responsable
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-gris-800 mb-22 md:mb-48">
            <h2 className="font-bold text-5xl md:text-5.75xl lg:text-6xl xl:text-6.75xl pt-24 pb-32">
              Pourquoi faire le choix de l'artisanat français ?
            </h2>
            <div className="grid md:grid-cols-2 gap-y-12 mb-40">
              <div className="flex items-center md:mr-12 lg:mr-16 xl:mr-28">
                <div>
                  <div className="font-medium text-3.5xl">
                    Des savoir-faire reconnus
                  </div>
                  <div className="text-xl lg:text-1xl lg:leading-8.5 mt-4">
                    Riche d’une tradition artisanale, la France regorge de
                    savoir-faire qui se transmettent de génération en génération
                    tout en intégrant les techniques modernes de fabrication.
                  </div>
                </div>
              </div>
              <QuiSommesNousIllustration2Image />
            </div>
            <div className="grid md:grid-cols-2 gap-y-12 mb-40">
              <QuiSommesNousIllustration3Image />
              <div className="flex items-center md:ml-12 lg:ml-16 xl:ml-28">
                <div>
                  <div className="font-medium text-3.5xl">
                    Une liberté créative pour les projets sur-mesure
                  </div>
                  <div className="text-xl lg:text-1xl lg:leading-8.5 mt-4">
                    L’artisanat français permet de donner vie à des ouvrages
                    uniques et de tirer le meilleur parti des espaces à
                    aménager. Vos projets se construisent dans l’échange,
                    nourris par les possibilités infinies et la souplesse des
                    ateliers.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-y-12">
              <div className="flex items-center md:mr-12 lg:mr-16 xl:mr-28">
                <div>
                  <div className="font-medium text-3.5xl">
                    Un impact sociétal et environnemental
                  </div>
                  <div className="text-xl lg:text-1xl lg:leading-8.5 mt-4">
                    Avec une production en circuit-court, l’artisanat français
                    vous permet de réaliser des projets responsables avec un
                    faible impact écologique et un fort impact social en
                    pérennisant les savoir-faire et en soutenant le dynamisme
                    économique local.
                  </div>
                </div>
              </div>
              <QuiSommesNousIllustration4Image />
            </div>
          </section>
          <section className="border-t border-gris-800 mb-22 md:mb-48">
            <h2 className="font-bold text-5xl sm:text-6xl lg:text-8.6xl pt-12 pb-18 max-w-3xl">
              Comment ça marche ?
            </h2>
            <div className="flex flex-col md:items-center md:grid md:grid-cols-2 gap-y-12">
              <div className="flex-1">
                <QuiSommesNousIllustration5Image />
              </div>
              <div className="space-y-11 md:space-y-4 lg:space-y-8 xl:space-y-18 md:ml-12 lg:ml-16 xl:ml-28 md:pl-6">
                <CollaborationSteps
                  collaborationSteps={collaborationSteps}
                  className="space-y-6 md:space-y-1 pb-4"
                />
                <Link
                  to="/devis"
                  className="group inline-flex items-center uppercase text-xsm px-8 py-5.5 md:px-7 md:py-4.5 xl:px-8 xl:py-5.5 font-bold text-brown-50 bg-brown-700 rounded-full focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50"
                >
                  <DotIcon className="opacity-0 transition duration-200 ease-in-out transform -translate-x-2.5 w-2.5 h-2.5 text-brown-50 mr-2 group-hover:opacity-100 group-hover:-translate-x-0" />
                  <span className="transition duration-200 ease-in-out transform -translate-x-2.5 group-hover:-translate-x-0">
                    Je lance mon projet
                  </span>
                </Link>
              </div>
            </div>
          </section>
          <section className="border-t border-gris-800 py-24 mb-12">
            <div className="grid md:grid-cols-2 gap-y-12">
              <h2 className="font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8.6xl sm:mr-12">
                Notre histoire
              </h2>
              <div className="font-medium text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11 mb-12 sm:mb-28">
                Hopfab est né en 2015 de la rencontre de Géraldine Bal, ancienne
                consultante, et d’Arnaud Verlet, ex-responsable de la
                matériauthèque chez Wilmotte & associés, autour d’une ambition
                commune :
                <div className="mt-8">
                  Soutenir l’économie artisanale française et faciliter la
                  création d’espaces sur-mesure ayant un impact sociétal
                  positif.
                </div>
              </div>
            </div>
            <div>
              <QuiSommesNousIllustration6Image />
              <div className="grid sm:grid-cols-2 py-2">
                <div className="font-bold text-xs uppercase">
                  Arnaud et Géraldine
                </div>
                <div className="font-bold text-xs uppercase">
                  Cofondateurs d'Hopfab
                </div>
              </div>
            </div>
            <blockquote className="font-serif text-2.5xl md:text-2.4xl lg:text-3xl xl:text-4.6xl md:leading-snug lg:leading-snug xl:leading-tight my-22 md:my-32 lg:my-38 xl:my-48">
              “Avec Hopfab nous souhaitons rendre sa place à l’artisanat
              français en faisant tomber les barrières existantes et en
              sensibilisant les acheteurs. Nos habitudes d’achat doivent évoluer
              et être guidées par le bon sens. Nos décisions d’achat doivent
              prendre en compte le coût à long terme pour l’économie et
              l’emploi, pour l’environnement, pour la santé ...”
            </blockquote>
            <div className="grid md:grid-cols-2">
              <div className="col-start-2 text-xl lg:text-1xl lg:leading-8.5">
                Depuis 2015, Géraldine et Arnaud ont été rejoints par une équipe
                de passionnés et d’experts pour fédérer les meilleurs artisans
                français. Accompagner les porteurs de projets dans leur démarche
                d’achat responsable et développer les outils technologiques afin
                de faciliter les rencontres et les collaborations entre ces deux
                mondes.
              </div>
            </div>
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default QuiSommesNousPage;
