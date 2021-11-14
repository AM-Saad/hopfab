"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var base_layout_1 = require("../components/layouts/base-layout");
var seo_1 = require("../components/seo/seo");
var FeaturedImage_1 = require("../components/images/architectes/FeaturedImage");
var hopfab_circle_white_1 = require("../components/hopfab-circle_white");
var down_right_arrow_icon_1 = require("../components/icons/down-right-arrow-icon");
var architect_projects_1 = require("../components/projects/architect-projects");
var animated_btn_1 = require("../components/call-to-actions/animated-btn");
var testimonials_1 = require("../components/testimonials/testimonials");
require("../css/home.css");
var IndexPage = function (_a) {
    var openDropBox = function (e) {
        e.currentTarget
            .querySelector(".drop-down-box")
            .classList.toggle("hidden-box");
        var div = e.currentTarget.querySelector(".arrow-icon");
        div.classList.toggle("rotated-arrow");
    };
    var changeCategoryImage = function (e) {
        document
            .querySelector(".active-category-item")
            .classList.remove("active-category-item");
        e.currentTarget.classList.add("active-category-item");
        var data = e.currentTarget.dataset.name;
        document.querySelectorAll("div[data-name]").forEach(function (e) {
            e.classList.add("hidden");
        });
        document
            .querySelector("div[data-name=" + e.currentTarget.dataset.name + "]")
            .classList.remove("hidden");
    };
    return (<base_layout_1.default>
      <seo_1.default title="Page d'accueil"/>
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-12 lg:mx-0 px-6 md:px-8.5 md:mx-0 sm:mx-2">
            <section className="border-b  border-gray-400 flex items-end justify-between mb-6 md:mb-3 pb-3 mt-34 lg:mt-38 xl:mt-40">
              <h1 className="font-bold text-4.7xl md:text-7.5xl xl:text-8.1xl">
                ARTISANS
              </h1>
              <div>
                <down_right_arrow_icon_1.default className="w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12  "/>
              </div>
            </section>
            <section className="border-b border-gray-400 lg:grid grid-cols-2 md:pt-15 pb-6">
              <div className="mb-8 md:mb-16 xl:mb-0">
                <h1 style={{ lineHeight: "1.2" }} className="text-gray-900 text-2.5xl sm:text-4.25xl md:text-5xl  lg:text-3.8xl xl:text-5xl      md:w-10/12  xl:-tracking-px font-bold sm:mt-10 mb-8 lg:mt-52 md:mb-16 ">
                  <span className="text-green"> Accédez</span> à des projets
                  d’architectes d’intérieur et{" "}
                  <span className="text-green"> collaborez</span> en direct.
                </h1>
                <animated_btn_1.default link="https://lp.hopfab.com/fr/rejoindre-le-r%C3%A9seau-dartisans-hopfab" className="cta mt-6 bg-gris-800 text-center relative overflow-hidden uppercase border-1.5 border-transparent hover:border-gray-400 hover:bg-transparent text-xs rounded-full relative mt-5 px-6 py-2 md:px-7 md:py-3 lg:py-2 lg:px-5 xl:px-4 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 " content="NOUS REJOINDRE" firstSpan="text-black " secondSpan="text-white "/>
              </div>
              <div className="hero-section_img_wrapper">
                <FeaturedImage_1.default />
                <div className="flex items-center justify-between text-xs mt-4">
                  <span>
                    <b>MARTIAL & JODY</b> MENUISIER
                  </span>
                  <span>
                    <b>ARTISANS HOPFAB</b> DEPUIS 2016
                  </span>
                </div>
              </div>
            </section>

            <section className="projects-section border-b border-gris-800 mb-6 py-3 lg:py-0 md:mb-10">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl md:text-4.5xl lg:text-3xl xl:text-4.8xl font-bold  mb-5 sm:mb-0">
                  Plus de <span className="text-darkgreen ">1300 projets</span>{" "}
                  r&eacute;alis&eacute;s
                </h3>

                <animated_btn_1.default link="/realisations" className="cta  hidden md:block group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 " content="TOUS LES PROJETS" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
              </div>
              <architect_projects_1.default />
              <animated_btn_1.default link="/realisations" className="cta md:hidden group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-6 " content="TOUS LES PROJETS" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
            </section>

            <section className="who-you-section border-b border-gris-800  mb-6 md:mb-0 lg-mb-6 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-21 xl:gap-x-22 2xl:gap-x-31">
                <h3 className="text-3xl md:text-4.5xl lg:text-3xl  xl:text-4.8xl font-bold mb-14 md:mb-24 lg:mb-0  lg:w-11/12 xl:w-11/12">
                  Développer votre entreprise artisanale avec Hopfab
                </h3>
                <div>
                  <div className="mb-8 md:mb-16">
                    <div className="flex items-start ">
                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                      <p className="font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3 ">
                        Choisissez vos projets
                      </p>
                    </div>

                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8">
                      Définissez les types de projets qui vous intéressent.
                      Libre à vous de les accepter ou de les refuser.
                    </p>
                  </div>
                  <div className="mb-8 md:mb-16">
                    <div className="flex items-start ">
                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                      <p className="font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3">
                        Traitez en direct avec le porteur de projet
                      </p>
                    </div>

                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8">
                      {" "}
                      Envoyez votre devis et échangez directement avec le
                      porteur de projet.
                    </p>
                  </div>
                  <div className="mb-8 md:mb-14">
                    <div className="flex items-start ">
                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                      <p className="font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3">
                        Bénéficiez d’outils simples et sécurisants
                      </p>
                    </div>

                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8">
                      Hopfab joue le rôle de tiers de confiance et met à votre
                      disposition des outils pour accélérer la
                      contractualisation et le suivi des paiements.
                    </p>
                  </div>
                  <animated_btn_1.default link="https://lp.hopfab.com/fr/rejoindre-le-r%C3%A9seau-dartisans-hopfab" className="cta group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 " content="PRENDRE RDV" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="about-section bg-green-main border-b border-gris-800 p-6 pt-14 md:p-12 md:pt-20 lg:p-16 lg:pt-26">
        <p className="border-gray-300 border-t-1.5 flex flex-wrap  mb-20 lg:mb-36 xlg:mb-30 pt-4.5 text-white text-xs">
          LES SAVOIR-FAIRE LES PLUS DEMAND&Eacute;S SUR HOPFAB
        </p>
        <div>
          <div className=" relative  lg:hidden w-4/12 md:w-2/12 architect-logo-letters">
            <img src="logo-hopfab-square-white.png" className="logo-letters architect w-full ml-1 md:ml-0" alt="project-1"/>
            <hopfab_circle_white_1.default className="hopfab-circle"/>
          </div>
          <div></div>
        </div>
        <div className="about-section_content py-8 pt-10">
          <div>
            <p className="text-3.8xl md:text-4.8xl lg:text-4.8xl xl:text-6.5xl  lg:w-9/12  xl:w-10/12 text-white font-serif" style={{ lineHeight: "1.2" }}>
              Agencement • Décoration • Mobilier • Luminaire • Signalétique •
              Végétalisation • Retail • Tertiaire • Résidentiel Hôtellerie •
              Restaurants/Bars • Culture
            </p>
          </div>
          <div className="about-section_logo relative hidden lg:block ">
            <img src="logo-hopfab-square-white.png" className="logo-letters w-full" alt="project-1"/>
            <hopfab_circle_white_1.default className="hopfab-circle"/>
          </div>
        </div>
      </section>

      <div className="min-w-screen-lg lg:px-5 mx-auto">
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-12 lg:mx-6 md:mx-6 sm:mx-6 mx-6">
            <section className="who-you-section border-b border-gris-800  mb-6 md:mb-0 lg-mb-6 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-21 xl:gap-x-22 2xl:gap-x-31">
                <h3 className="text-3xl md:text-4.5xl lg:text-3xl  xl:text-4.8xl font-bold mb-14 md:mb-24 lg:mb-0  lg:w-11/12 xl:w-11/12">
                  Un service simple et adapté aux entreprises artisanales
                </h3>
                <div>
                  <div className="mb-8 md:mb-16">
                    <div className="flex items-start ">
                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                      <p className="font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3 ">
                        Créez votre profil simplement
                      </p>
                    </div>

                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8">
                      Définissez en quelques minutes les projets sur lesquels
                      vous souhaitez être consultés. Et commencez à recevoir des
                      projets.
                    </p>
                  </div>
                  <div className="mb-8 md:mb-16">
                    <div className="flex items-start ">
                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                      <p className="font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3">
                        Faites baisser votre charge mentale
                      </p>
                    </div>

                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8">
                      On assure vos arrières en vous aidant dans le suivi de vos
                      tâches administratives et commerciales. Pour que vous
                      puissiez être concentré sur l’essentiel.
                    </p>
                  </div>
                  <div className="mb-8 md:mb-14">
                    <div className="flex items-start ">
                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                      <p className="font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3">
                        Sécurisez les paiements de vos clients
                      </p>
                    </div>

                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8">
                      Utilisez le compte séquestre pour sécuriser les paiements
                      de vos clients. Ne courrez plus après l’argent et recevez
                      le solde de votre projet 48h après sa validation.
                    </p>
                  </div>
                  <animated_btn_1.default link="https://lp.hopfab.com/fr/rejoindre-le-r%C3%A9seau-dartisans-hopfab" className="cta group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 " content="PRENDRE RDV" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
                </div>
              </div>
            </section>

            <section className=" mb-6 pt-3 md:pb-16">
              <span className="text-xsm font-bold">T&Eacute;MOIGNAGES</span>

              <h3 className="font-bold text-5xl md:text-6.9xl lg:text-7xl xl:text-8.1xl my-10">
                Ils ont choisi Hopfab
              </h3>
              <testimonials_1.default />
            </section>
          </div>
        </div>
      </div>
      <div className="bg-green-main">
        <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-11.5 xl:px-4 2xl:px-18.5">
          <div className="lg:grid lg:grid-cols-13 pb-14 md:pb-48  lg:pb-30">
            <section className="lg:col-span-11 ">
              <article className={" pt-16"}>
                <div className="lg:space-y-30 space-y-10 md:w-11/12 lg:w-10/12 lg:space-y-30">
                  <div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap text-xs  mb-30 md:mb-48 lg:mb-30 uppercase mt-5 md:mt-0  ">
                        <down_right_arrow_icon_1.default className="h-10 w-10 text-gray-100"/>
                      </div>
                      <h2 className="font-bold text-5.5xl md:text-6.75xl lg:text-7xl xl:text-8.1xl  text-gray-100">
                        Rejoindre la communauté d’artisans
                      </h2>
                    </div>
                    <div className="">
                      <p className=" md:w-9/12 xl:w-7/12 md:my-8 text-lg md:text-lg  xl:leading-normal flex-1 md:font-thin text-opacity-80 text-white">
                        Hopfab c’est aussi une communauté qui fédère des
                        professionnels engagés pour le développement et la
                        préservation du patrimoine artisanal français.
                        Événements, podcasts, partages d’expériences, rejoignez
                        une communauté soudée.
                      </p>

                      <div className="">
                        <animated_btn_1.default link="https://lp.hopfab.com/fr/rejoindre-le-r%C3%A9seau-dartisans-hopfab" className="cta group mt-5 md:my-8 bg-gris-800 text-xs text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase   hover:bg-white text-xs rounded-full  px-5 py-2 md:px-5 xl:px-6  focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50" content="NOUS REJOINDRE" firstSpan="button-text text-gray-800" secondSpan="button-text text-white "/>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </base_layout_1.default>);
};
exports.default = IndexPage;
//# sourceMappingURL=artisans%20(2).jsx.map