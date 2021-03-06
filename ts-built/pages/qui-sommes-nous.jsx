"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var default_layout_1 = require("../components/layouts/default-layout");
var seo_1 = require("../components/seo/seo");
var qui_sommes_nous_illustration_1_image_1 = require("../components/images/qui-sommes-nous/qui-sommes-nous-illustration-1-image");
var qui_sommes_nous_illustration_2_image_1 = require("../components/images/qui-sommes-nous/qui-sommes-nous-illustration-2-image");
var qui_sommes_nous_illustration_3_image_1 = require("../components/images/qui-sommes-nous/qui-sommes-nous-illustration-3-image");
var qui_sommes_nous_illustration_4_image_1 = require("../components/images/qui-sommes-nous/qui-sommes-nous-illustration-4-image");
var qui_sommes_nous_illustration_5_image_1 = require("../components/images/qui-sommes-nous/qui-sommes-nous-illustration-5-image");
var qui_sommes_nous_illustration_6_image_1 = require("../components/images/qui-sommes-nous/qui-sommes-nous-illustration-6-image");
var collaboration_steps_1 = require("../components/collaboration-steps/collaboration-steps");
var dot_icon_1 = require("../components/icons/dot-icon");
var QuiSommesNousPage = function () {
    var collaborationSteps = [
        {
            title: "D\u00E9posez votre projet",
            content: "D\u00E9posez votre projet sur notre site en quelques secondes en cliquant <a href=\"/devis\" class=\"underline\">ici</a>",
            defaultIsOpen: true,
            defaultShowIndex: true,
        },
        {
            title: "Validez votre cahier des charges",
            content: "Un expert Hopfab vous rappelle pour finaliser votre cahier des charges et lancer la consultation aupr\u00E8s d'artisans s\u00E9lectionn\u00E9s",
            defaultShowIndex: true,
        },
        {
            title: "Suivez votre consultation",
            content: "D\u00E9couvrez les pr\u00E9sentations des artisans et les devis d\u00E9taill\u00E9s de votre projet, contactez les",
            defaultShowIndex: true,
        },
        {
            title: "Lancez votre projet",
            content: "S\u00E9lectionnez le devis souhait\u00E9 et g\u00E9rez toutes les \u00E9tapes de contractualisation en ligne",
            defaultShowIndex: true,
        },
        {
            title: "G\u00E9rez votre projet",
            content: "Recevez le r\u00E9troplanning de l\u2019atelier et soyez inform\u00E9 de l\u2019avancement du projet",
            defaultShowIndex: true,
        },
        {
            title: "Validez votre projet",
            content: "Validez avec Hopfab la bonne r\u00E9ception du projet et \u00E9valuez votre atelier",
            defaultShowIndex: true,
        },
    ];
    return (<default_layout_1.default>
      <seo_1.default title="Qui sommes nous"/>
      <div className="lg:grid lg:grid-cols-12">
       
        <div className="lg:col-span-11 lg:ml-19 xl:ml-23 2xl:ml-28">
          <section className="mt-24">
            <h1 className="text-6xl md:text-7.5xl lg:text-8.5xl font-bold max-w-5xl mb-16">
              Nous sommes hopfab.
            </h1>
            <div className="grid md:grid-cols-2">
              <div className="md:col-start-2 font-medium text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11 max-w-lg mb-28">
                Hopfab f??d??re une communaut?? d???artisans fran??ais labellis??s et
                accompagne les projets de l???organisation de l???appel d???offres
                jusqu????? la livraison, gr??ce ?? une m??thodologie unique qui
                s???appuie sur des outils digitaux et une ??quipe d???experts.
              </div>
            </div>
            <div className="mb-28">
              <qui_sommes_nous_illustration_1_image_1.default />
            </div>
          </section>
          <section className="grid md:grid-cols-2 gap-y-12 mb-22 md:mb-56">
            <h2 className="font-bold text-5xl md:text-5.75xl lg:text-6xl xl:text-6.75xl max-w-xs">
              Entreprise ?? mission
            </h2>
            <div className="grid space-y-8">
              <p className="text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11">
                Nous mettons l???artisanat au service de l???agencement{" "}
                <span className="font-medium">
                  sur-mesure, local, responsable et efficient
                </span>{" "}
                afin de :
              </p>
              <div className="md:flex justify-start md:-ml-9">
                <div className="font-bold text-sm mt-2 mr-4">01</div>
                <div className="text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11">
                  <span className="font-medium">Pr??server et d??velopper</span>{" "}
                  la fili??re{" "}
                  <span className="font-medium">artisanale fran??aise</span>
                </div>
              </div>
              <div className="md:flex justify-start md:-ml-9">
                <div className="font-bold text-sm mt-2 mr-4">02</div>
                <div className="text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11">
                  <span className="font-medium">Accompagner</span> les
                  professionnels ?? aller{" "}
                  <span className="font-medium">plus loin</span> dans leur
                  d??marche{" "}
                  <span className="font-medium">
                    d???impact et d???achat responsable
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-gris-800 mb-22 md:mb-48">
            <h2 className="font-bold text-5xl md:text-5.75xl lg:text-6xl xl:text-6.75xl pt-24 pb-32">
              Pourquoi faire le choix de l'artisanat fran??ais ?
            </h2>
            <div className="grid md:grid-cols-2 gap-y-12 mb-40">
              <div className="flex items-center md:mr-12 lg:mr-16 xl:mr-28">
                <div>
                  <div className="font-medium text-3.5xl">
                    Des savoir-faire reconnus
                  </div>
                  <div className="text-xl lg:text-1xl lg:leading-8.5 mt-4">
                    Riche d???une tradition artisanale, la France regorge de
                    savoir-faire qui se transmettent de g??n??ration en g??n??ration
                    tout en int??grant les techniques modernes de fabrication.
                  </div>
                </div>
              </div>
              <qui_sommes_nous_illustration_2_image_1.default />
            </div>
            <div className="grid md:grid-cols-2 gap-y-12 mb-40">
              <qui_sommes_nous_illustration_3_image_1.default />
              <div className="flex items-center md:ml-12 lg:ml-16 xl:ml-28">
                <div>
                  <div className="font-medium text-3.5xl">
                    Une libert?? cr??ative pour les projets sur-mesure
                  </div>
                  <div className="text-xl lg:text-1xl lg:leading-8.5 mt-4">
                    L???artisanat fran??ais permet de donner vie ?? des ouvrages
                    uniques et de tirer le meilleur parti des espaces ??
                    am??nager. Vos projets se construisent dans l?????change,
                    nourris par les possibilit??s infinies et la souplesse des
                    ateliers.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-y-12">
              <div className="flex items-center md:mr-12 lg:mr-16 xl:mr-28">
                <div>
                  <div className="font-medium text-3.5xl">
                    Un impact soci??tal et environnemental
                  </div>
                  <div className="text-xl lg:text-1xl lg:leading-8.5 mt-4">
                    Avec une production en circuit-court, l???artisanat fran??ais
                    vous permet de r??aliser des projets responsables avec un
                    faible impact ??cologique et un fort impact social en
                    p??rennisant les savoir-faire et en soutenant le dynamisme
                    ??conomique local.
                  </div>
                </div>
              </div>
              <qui_sommes_nous_illustration_4_image_1.default />
            </div>
          </section>
          <section className="border-t border-gris-800 mb-22 md:mb-48">
            <h2 className="font-bold text-5xl sm:text-6xl lg:text-8.6xl pt-12 pb-18 max-w-3xl">
              Comment ??a marche ?
            </h2>
            <div className="flex flex-col md:items-center md:grid md:grid-cols-2 gap-y-12">
              <div className="flex-1">
                <qui_sommes_nous_illustration_5_image_1.default />
              </div>
              <div className="space-y-11 md:space-y-4 lg:space-y-8 xl:space-y-18 md:ml-12 lg:ml-16 xl:ml-28 md:pl-6">
                <collaboration_steps_1.default collaborationSteps={collaborationSteps} className="space-y-6 md:space-y-1 pb-4"/>
                <gatsby_1.Link to="/devis" className="group inline-flex items-center uppercase text-xsm px-8 py-5.5 md:px-7 md:py-4.5 xl:px-8 xl:py-5.5 font-bold text-brown-50 bg-brown-700 rounded-full focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50">
                  <dot_icon_1.default className="opacity-0 transition duration-200 ease-in-out transform -translate-x-2.5 w-2.5 h-2.5 text-brown-50 mr-2 group-hover:opacity-100 group-hover:-translate-x-0"/>
                  <span className="transition duration-200 ease-in-out transform -translate-x-2.5 group-hover:-translate-x-0">
                    Je lance mon projet
                  </span>
                </gatsby_1.Link>
              </div>
            </div>
          </section>
          <section className="border-t border-gris-800 py-24 mb-12">
            <div className="grid md:grid-cols-2 gap-y-12">
              <h2 className="font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8.6xl sm:mr-12">
                Notre histoire
              </h2>
              <div className="font-medium text-1xl md:text-lg lg:text-1xl xl:text-3.5xl xl:leading-11 mb-12 sm:mb-28">
                Hopfab est n?? en 2015 de la rencontre de G??raldine Bal, ancienne
                consultante, et d???Arnaud Verlet, ex-responsable de la
                mat??riauth??que chez Wilmotte & associ??s, autour d???une ambition
                commune :
                <div className="mt-8">
                  Soutenir l?????conomie artisanale fran??aise et faciliter la
                  cr??ation d???espaces sur-mesure ayant un impact soci??tal
                  positif.
                </div>
              </div>
            </div>
            <div>
              <qui_sommes_nous_illustration_6_image_1.default />
              <div className="grid sm:grid-cols-2 py-2">
                <div className="font-bold text-xs uppercase">
                  Arnaud et G??raldine
                </div>
                <div className="font-bold text-xs uppercase">
                  Cofondateurs d'Hopfab
                </div>
              </div>
            </div>
            <blockquote className="font-serif text-2.5xl md:text-2.4xl lg:text-3xl xl:text-4.6xl md:leading-snug lg:leading-snug xl:leading-tight my-22 md:my-32 lg:my-38 xl:my-48">
              ???Avec Hopfab nous souhaitons rendre sa place ?? l???artisanat
              fran??ais en faisant tomber les barri??res existantes et en
              sensibilisant les acheteurs. Nos habitudes d???achat doivent ??voluer
              et ??tre guid??es par le bon sens. Nos d??cisions d???achat doivent
              prendre en compte le co??t ?? long terme pour l?????conomie et
              l???emploi, pour l???environnement, pour la sant?? ...???
            </blockquote>
            <div className="grid md:grid-cols-2">
              <div className="col-start-2 text-xl lg:text-1xl lg:leading-8.5">
                Depuis 2015, G??raldine et Arnaud ont ??t?? rejoints par une ??quipe
                de passionn??s et d???experts pour f??d??rer les meilleurs artisans
                fran??ais. Accompagner les porteurs de projets dans leur d??marche
                d???achat responsable et d??velopper les outils technologiques afin
                de faciliter les rencontres et les collaborations entre ces deux
                mondes.
              </div>
            </div>
          </section>
        </div>
      </div>
    </default_layout_1.default>);
};
exports.default = QuiSommesNousPage;
//# sourceMappingURL=qui-sommes-nous.jsx.map