"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const base_layout_1 = require("../components/layouts/base-layout");
const seo_1 = require("../components/seo/seo");
const FeaturedImage_1 = require("../components/images/architectes/FeaturedImage");
const illustration_1_image_1 = require("../components/images/architectes/illustration-1-image");
const illustration_2_image_1 = require("../components/images/architectes/illustration-2-image");
const illustration_3_image_1 = require("../components/images/architectes/illustration-3-image");
const illustration_4_image_1 = require("../components/images/architectes/illustration-4-image");
const illustration_5_image_1 = require("../components/images/architectes/illustration-5-image");
const hopfab_circle_white_1 = require("../components/hopfab-circle_white");
const down_right_arrow_icon_1 = require("../components/icons/down-right-arrow-icon");
const up_arrow_icon_1 = require("../components/icons/up-arrow-icon");
const architect_projects_1 = require("../components/projects/architect-projects");
const animated_btn_1 = require("../components/call-to-actions/animated-btn");
const testimonials_1 = require("../components/testimonials/testimonials");
require("../css/home.css");
const IndexPage = () => {
    const openDropBox = e => {
        e.currentTarget
            .querySelector(".drop-down-box")
            .classList.toggle("hidden-box");
        let div = e.currentTarget.querySelector(".arrow-icon");
        div.classList.toggle("rotated-arrow");
    };
    const changeCategoryImage = e => {
        document
            .querySelector(".active-category-item")
            .classList.remove("active-category-item");
        e.currentTarget.classList.add("active-category-item");
        document
            .querySelectorAll("div[data-name]")
            .forEach(e => e.classList.add("hidden"));
        document
            .querySelector(`div[data-name=${e.currentTarget.dataset.name}]`)
            .classList.remove("hidden");
    };
    return (<base_layout_1.default>
      <seo_1.default title="Page d'accueil"/>
      <div className="min-w-screen-lg lg:px-5 xl:px-8 mx-auto">
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-12 lg:mx-0 px-6 md:px-8.5 md:mx-0 sm:mx-2">
            <section className="border-b  border-gray-400 flex items-end justify-between mb-6 md:mb-3 pb-3 mt-16">
              <h1 className="font-bold text-4.7xl md:text-7.5xl xl:text-8.1xl">
                ARCHITECTES
              </h1>
              <div>
                <down_right_arrow_icon_1.default className="w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12  "/>
              </div>
            </section>
            <section className="border-b border-gray-400 lg:grid grid-cols-2 md:pt-15 pb-6">
              <div className="mb-8 md:mb-16 xl:mb-0">
                <h1 style={{ lineHeight: "1.2" }} className="text-gray-900 text-2.5xl sm:text-4.25xl md:text-5xl  lg:text-3.8xl xl:text-5xl  md:w-10/12  xl:-tracking-px font-bold sm:mt-10 mb-8 lg:mt-40 md:mb-12 ">
                  <span className="text-darkgreen border-0">Trouvez </span>{" "}
                  simplement vos artisans et{" "}
                  <span className="text-darkgreen border-0">collaborez</span> en
                  direct.
                </h1>
                <animated_btn_1.default link="https://lp.hopfab.com/architectes-demande-informations" className="cta mt-6 bg-gris-800 text-center relative overflow-hidden uppercase border-1.5 border-transparent hover:border-gray-400 hover:bg-transparent text-xs rounded-full relative mt-5 px-6 py-2 md:px-7 md:py-3 lg:py-2 lg:px-5 xl:px-4 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 " content="TROUVER UN ARTISAN" firstSpan="text-black " secondSpan="text-white "/>
              </div>
              <div className="hero-section_img_wrapper">
                <FeaturedImage_1.default />
              </div>
            </section>

            <section className="projects-section mb-6 py-3 lg:py-0 md:mb-10">
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

            <section className="who-you-section  mb-6 md:mb-0 lg-mb-6 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-21 xl:gap-x-22 2xl:gap-x-31">
                <h3 className="text-3xl md:text-4.5xl lg:text-3xl  xl:text-4.8xl font-bold mb-14 md:mb-24 lg:mb-0  lg:w-11/12 xl:w-11/12">
                  Gagnez du temps dans la mise en &oelig;uvre de vos projets
                </h3>
                <div>
                  <div className="mb-8 md:mb-16">
                    <div className="flex items-start ">
                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                      <p className="font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3 ">
                        Trouvez facilement vos artisans
                      </p>
                    </div>

                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8">
                      {" "}
                      D&eacute;finissez vos crit&egrave;res, et lancez votre
                      consultation aupr&egrave;s d&#39;artisans fran&ccedil;ais
                      v&eacute;rifi&eacute;s.
                    </p>
                  </div>
                  <div className="mb-8 md:mb-16">
                    <div className="flex items-start ">
                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                      <p className="font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3">
                        Traitez en direct avec les ateliers
                      </p>
                    </div>

                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8">
                      {" "}
                      Recevez rapidement vos devis et &eacute;changez
                      directement avec les artisans.
                    </p>
                  </div>
                  <div className="mb-8 md:mb-14">
                    <div className="flex items-start ">
                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                      <p className="font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3">
                        B&eacute;n&eacute;ficiez d&#39;outils simples et
                        s&eacute;curisants
                      </p>
                    </div>

                    <p className="text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8">
                      {" "}
                      Hopfab joue le r&ocirc;le de tiers de confiance et met
                      &agrave; votre disposition des outils pour simplifier la
                      contractualisation et le suivi des paiements avec votre
                      client.
                    </p>
                  </div>
                  <animated_btn_1.default link="/devis" className="cta group text-center ml-18 md:ml-8 relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 " content="JE LANCE MON PROJET" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
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
            <img src="/logo-hopfab-square-white.png" className="logo-letters architect w-full ml-1 md:ml-0" alt="project-1"/>
            <hopfab_circle_white_1.default className="hopfab-circle"/>
          </div>
          <div></div>
        </div>
        <div className="about-section_content py-8 pt-10">
          <div>
            <p className="text-3.8xl md:text-4.8xl lg:text-4.8xl xl:text-6.5xl  lg:w-9/12  xl:w-10/12 text-white font-serif" style={{ lineHeight: "1.2" }}>
              Agenceur . Menuisier-&Eacute;b&eacute;niste .
              M&eacute;tallier-Serrurier . Concepteur de luminaires . Fabricant
              en signal&eacute;tique . Concepteur de
              v&eacute;g&eacute;talisation
            </p>
          </div>
          <div className="about-section_logo relative hidden lg:block ">
            <img src="/logo-hopfab-square-white.png" className="logo-letters w-full" alt="project-1"/>
            <hopfab_circle_white_1.default className="hopfab-circle"/>
          </div>
        </div>
      </section>
      <div className="min-w-screen-lg lg:px-5 mx-auto">
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-12 lg:mx-6 md:mx-6 sm:mx-6 mx-6">
            <section className="category border-b border-gray-400 gap-10 lg:grid lg:grid-cols-2 py-7 lg:py-16 justify-items-center">
              <div className="hidden" data-name="Tertiaire">
                <illustration_1_image_1.default />
              </div>
              <div className="hidden" data-name="CHR">
                <illustration_2_image_1.default />
              </div>
              <div className="hidden " data-name="Culture">
                <illustration_3_image_1.default />
              </div>
              <div className="hidden" data-name="Residentiel">
                <illustration_4_image_1.default />
              </div>
              <div data-name="Retail">
                <illustration_5_image_1.default />
              </div>
              <div>
                <animated_btn_1.default link="/realisations" className="cta group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-12 lg:my-16 xl:my-26 " content="TOUS LES PROJETS" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
                <ul>
                  <li onClick={changeCategoryImage} data-name="Residentiel" className=" text-4xl md:text-4.5xl lg:text-4.8xl xl:text-6.1xl text-black lg:text-gris-200 hover:text-black font-bold mb-4 ">
                    <a className="border-b-1.5 border-transparent hover:border-black  ">
                      R&eacute;sidentiel
                    </a>{" "}
                  </li>
                  <li onClick={changeCategoryImage} data-name="Retail" className="active-category-item text-4xl md:text-4.5xl lg:text-4.8xl xl:text-6.1xl text-black lg:text-gris-200 hover:text-black font-bold mb-4 ">
                    <a className="border-b-1.5 border-transparent hover:border-black">
                      Retail
                    </a>{" "}
                  </li>
                  <li onClick={changeCategoryImage} data-name="Tertiaire" className=" text-4xl md:text-4.5xl lg:text-4.8xl xl:text-6.1xl text-black lg:text-gris-200 hover:text-black font-bold mb-4 ">
                    <a className="border-b-1.5 border-transparent hover:border-black">
                      Tertiaire
                    </a>{" "}
                  </li>
                  <li onClick={changeCategoryImage} data-name="CHR" className=" text-4xl md:text-4.5xl lg:text-4.8xl xl:text-6.1xl text-black lg:text-gris-200 hover:text-black font-bold mb-4 ">
                    <a className="border-b-1.5 border-transparent hover:border-black">
                      CHR
                    </a>{" "}
                  </li>
                  <li onClick={changeCategoryImage} data-name="Culture" className=" text-4xl md:text-4.5xl lg:text-4.8xl xl:text-6.1xl text-black lg:text-gris-200 hover:text-black font-bold mb-4 ">
                    <a className="border-b-1.5 border-transparent hover:border-black">
                      Culture/Loisir
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </section>

            <section className="projects-section border-b border-gray-400 py-16">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl md:text-4.5xl lg:text-3xl xl:text-4.8xl font-bold  mb-12">
                  Nos r&eacute;ponses &#224; vos questions
                </h3>
              </div>
              <div className="border border-gray-400 rounded-3xl p-7 lg:px-12 lg:py-6 mb-8 drop-down" onClick={openDropBox} data-tab="1">
                <div className="flex justify-between items-center drop-down-btn">
                  <h5 className="text-md md:text-xl xl:text-2.5xl  font-medium mr-5 lg:mr-0">
                    Comment nous garantissons la fiabilit&eacute; de notre
                    r&eacute;seau d&#39;artisans ?
                  </h5>
                  <div className="bg-black p-3 lg:h-9 lg:w-9 rounded-full flex items-center justify-evenly arrow-icon">
                    <up_arrow_icon_1.default className="w-3 h-3 text-white  "/>
                  </div>
                </div>
                <p className="text-md md:text-lg xl:text-xl lg:w-9/12 xl:w-8/12 mt-12 lg:mt-6 drop-down-box">
                  Chaque atelier du r&eacute;seau Hopfab fait l&#39;objet
                  d&#39;un processus de s&eacute;lection, avec audit
                  administratif, contr&ocirc;le des assurances et
                  v&eacute;rifications des r&eacute;f&eacute;rences projets.{" "}
                  <br />
                  Chaque atelier est &eacute;galement &eacute;valu&eacute;
                  &#224; la fin d&#39;un projet pour garantir le meilleur niveau
                  de qualit&eacute;
                </p>
              </div>
              <div className="border border-gray-400 rounded-3xl p-7 lg:px-12 lg:py-6 drop-down" onClick={openDropBox} data-tab="2">
                <div className="flex justify-between items-center drop-down-btn">
                  <h5 className="text-md md:text-xl xl:text-2.5xl  font-medium mr-5 lg:mr-0">
                    Pourquoi votre client ne paie pas plus quand vous passez par
                    la plateforme Hopfab ?
                  </h5>
                  <div className="bg-black p-3 lg:h-9 lg:w-9 rounded-full flex items-center justify-evenly arrow-icon rotated-arrow">
                    <up_arrow_icon_1.default className="w-3 h-3 text-white"/>
                  </div>
                </div>
                <p className="text-md md:text-lg xl:text-xl  lg:w-9/12 xl:w-8/12 mt-12 lg:mt-6 drop-down-box hidden-box">
                  Sur Hopfab vos clients paient le prix direct atelier. Nous
                  permettons aux artisans de d&eacute;velopper et structurer
                  leur activit&eacute;. Nous sommes
                  r&eacute;mun&eacute;r&eacute;s par ces derniers qui nous
                  r&eacute;troc&egrave;dent une partie de la marge habituelle
                  qu&#39;ils appliquent sur l&#39;ensemble de leurs projets.{" "}
                </p>
              </div>
            </section>
            <section className=" mb-6 pt-3 md:pb-16 relative">
              <span className="text-xsm font-bold">T&Eacute;MOIGNAGES</span>
              <h3 className="font-bold text-5xl md:text-6.9xl lg:text-7xl xl:text-8.1xl my-10">
                Ils ont choisi Hopfab
              </h3>
              <span className="testimonials-drag absolute bg-green-main grid h-24 hidden items-center lg:block  rounded-full text-center text-white text-xsm  w-24 z-10">
                DRAG
              </span>
              <testimonials_1.default />
            </section>
          </div>
        </div>
      </div>
      <div className="bg-green-main">
        <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-11.5 xl:px-4 2xl:px-18.5">
          <div className="lg:grid lg:grid-cols-13 pb-14 md:pb-48  lg:pb-30">
            <section className="lg:col-span-11 ">
              <article className={` pt-16`}>
                <div className="lg:space-y-30 space-y-10 md:w-11/12 lg:w-10/12 lg:space-y-30">
                  <div>
                    <div className="space-y-4">
                      <div className="flex flex-wrap text-xs  mb-30 md:mb-48 lg:mb-30 uppercase mt-5 md:mt-0  ">
                        <down_right_arrow_icon_1.default className="h-10 w-10 text-gray-100"/>
                      </div>
                      <h2 className="font-bold text-5.5xl md:text-6.75xl lg:text-7xl xl:text-8.1xl  text-gray-100">
                        Trouvez simplement vos artisans
                      </h2>
                    </div>
                    <div className="">
                      <p className=" md:w-9/12 xl:w-7/12 md:my-8 text-lg md:text-lg  xl:leading-normal flex-1 md:font-thin text-opacity-80 text-white">
                        Notre solution r&eacute;pond aux besoins de toutes les
                        agences d&#39;architecture int&eacute;rieure quelle que
                        soit la nature, la localisation et la taille de vos
                        projets.
                      </p>

                      <div className="">
                        <animated_btn_1.default link="https://lp.hopfab.com/architectes-demande-informations" className="cta group mt-5 md:my-8 bg-gris-800 text-xs text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase   hover:bg-white text-xs rounded-full  px-5 py-2 md:px-5 xl:px-6  focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50" content="TROUVER UN ARTISAN" firstSpan="button-text text-gray-800" secondSpan="button-text text-white "/>
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
