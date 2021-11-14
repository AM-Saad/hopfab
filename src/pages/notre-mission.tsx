import React from "react";
import { PageProps } from "gatsby";

import BaseLayout from "../components/layouts/base-layout";
import SEO from "../components/seo/seo";
import VerticalLaunchProject from "../components/vertical-launch-project";
import NotreMissionIllustration1Image from "../components/images/notre-mission/notre-mission-illustration-1-image";
import NotreMissionIllustration2Image from "../components/images/notre-mission/notre-mission-illustration-2-image";
import NotreMissionIllustration3Image from "../components/images/notre-mission/notre-mission-illustration-3-image";
import NotreMissionIllustration4Image from "../components/images/notre-mission/notre-mission-illustration-4-image";
import OurApproach from "../components/call-to-actions/our-approach";

type DataProps = {};

const NotreMissionPage: React.FC<PageProps<DataProps>> = () => (
  <BaseLayout theme="brown">
    <SEO title="Notre mission" />
    <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5">
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-11 lg:ml-19 xl:ml-23 2xl:ml-28">
          <section>
            <div className="grid md:grid-cols-2 gap-y-12 mt-20 mb-22 md:mb-32">
              <div className="md:mr-12">
                <h1 className="text-6xl md:text-6xl lg:text-7xl xl:text-8.5xl font-bold max-w-sm mt-8 mb-16 md:mb-40">
                  Notre mission
                </h1>
                <div className="font-medium text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11 max-w-sm mb-16">
                  Donner vie par la collaboration à des espaces de vie
                  sur-mesure, locaux et responsables
                </div>
              </div>
              <NotreMissionIllustration1Image />
            </div>
            <div className="grid md:grid-cols-3 gap-y-7 md:gap-x-16 lg:gap-x-28 xl:gap-x-42 2xl:gap-x-52 mb-22 md:mb-32">
              <div>
                <div className="font-bold text-sm uppercase mb-2">
                  01 Imaginer
                </div>
                <div className="text-xl">
                  Dessiner le futur, faire cohabiter l'utile et l'esthétique,
                  regarder loin
                </div>
              </div>
              <div>
                <div className="font-bold text-sm uppercase mb-2">
                  02 Façonner
                </div>
                <div className="text-xl">
                  Dompter la matière, concrétiser des idées, fabriquer le réel
                </div>
              </div>
              <div>
                <div className="font-bold text-sm uppercase mb-2">03 Vivre</div>
                <div className="text-xl">
                  Vivre dans ce lieu, lui donner un sens, s'y sentir bien
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-gris-800 pt-22 md:pt-32 mb-22 md:mb-48">
            <h2 className="font-bold text-4xl md:text-6.5xl -tracking-px pb-22 md:pb-36">
              L'artisanat français pour donner vie à des espaces respectueux des
              hommes et de l'environnement
            </h2>
            <div className="grid md:grid-cols-2">
              <div className="md:col-start-2 font-medium text-1xl lg:text-3.5xl lg:leading-11 mb-8">
                Pour nous ce qui compte c’est de choisir de travailler avec des
                ateliers fiers de leur métier, engagés pour leurs clients.
              </div>
            </div>
          </section>
          <section className="border-t border-gris-800 mb-22 md:mb-48">
            <div className="flex flex-wrap text-sm font-bold uppercase my-4">
              Hopfab s'engage pour
            </div>
            <div className="grid md:grid-cols-2 gap-y-12 mt-22 mb-22 md:mb-40">
              <NotreMissionIllustration2Image />
              <div className="flex items-center md:ml-12 lg:ml-16 xl:ml-28">
                <div>
                  <div className="font-medium text-3.5xl">La créativité</div>
                  <div className="text-xl lg:text-1xl lg:leading-8.5 mt-4">
                    <p className="pb-4">
                      Nous nous engageons pour soutenir la créativité des
                      architectes d’intérieur par la concrétisation fidèle de
                      leurs concepts avec la réalisation d'agencement et de
                      pièces sur-mesure façonnées par notre communauté
                      d'artisans français sélectionnés.
                    </p>
                    <p>
                      Chaque projet se construit dans l'échange et la
                      collaboration, en s'appuyant sur le talent et le
                      savoir-faire des hommes et femmes qui fabriquent pour
                      donner vie, sans compromis, à toutes les idées.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-y-12 mb-22 md:mb-40">
              <div className="flex items-center sm:mr-12 lg:mr-16 xl:mr-28">
                <div>
                  <div className="font-medium text-3.5xl">La proximité</div>
                  <div className="text-xl lg:text-1xl lg:leading-8.5 mt-4">
                    <p className="pb-4">
                      Nous nous engageons pour valoriser le patrimoine des
                      savoir-faire français dans les secteurs de l'agencement,
                      de l'ameublement et de la décoration, en facilitant la
                      collaboration entre des artisans locaux talentueux et des
                      architectes d'intérieur.
                    </p>
                    <p>
                      Par l'ancrage territorial et l'emploi exclusif des
                      circuit-courts nous voulons participer directement au
                      dynamisme économique des territoires français et
                      accompagner la transition vers une société responsable.
                    </p>
                  </div>
                </div>
              </div>
              <NotreMissionIllustration3Image />
            </div>
            <div className="grid md:grid-cols-2 gap-y-12">
              <NotreMissionIllustration4Image />
              <div className="flex items-center md:ml-12 lg:ml-16 xl:ml-28">
                <div>
                  <div className="font-medium text-3.5xl">
                    La responsabilité
                  </div>
                  <div className="text-xl lg:text-1xl lg:leading-8.5 mt-4">
                    <p className="pb-4">
                      Nous nous engageons pour participer à la transformation
                      d'un monde plus souhaitable, où la consommation et la
                      production sont durables et raisonnées et où les relations
                      entre clients, architectes d’intérieur et artisans sont
                      justes et équitables.
                    </p>
                    <p>
                      Par les liens sociaux, l'utilisation de ressources
                      locales, la conception et la création de projets de
                      qualité, nous mettons tout en oeuvre pour avoir un impact
                      sociétal positif.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <OurApproach className="pt-28 lg:pt-40 xl:pt-52 pb-16" />
  </BaseLayout>
);

export default NotreMissionPage;
