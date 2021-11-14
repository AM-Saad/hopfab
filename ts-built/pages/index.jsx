"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var base_layout_1 = require("../components/layouts/base-layout");
var seo_1 = require("../components/seo/seo");
var homepage_illustration_1_image_1 = require("../components/images/homepage/homepage-illustration-1-image");
var homepage_event_1_image_1 = require("../components/images/homepage/homepage-event-1-image");
var homepage_event_2_image_1 = require("../components/images/homepage/homepage-event-2-image");
var homepage_blog_post_list_item_1 = require("../components/blog-posts/homepage-blog-post-list-item");
var hopfab_circle_1 = require("../components/hopfab-circle");
var instagram_feed_1 = require("../components/instagram-feed/instagram-feed");
var down_right_arrow_icon_1 = require("../components/icons/down-right-arrow-icon");
var home_projects_1 = require("../components/projects/home-projects");
var animated_btn_1 = require("../components/call-to-actions/animated-btn");
require("../css/home.css");
var IndexPage = function (_a) {
    var _b;
    var _c = _a.data, stickyPosts = _c.stickyPosts, instagramFeed = _c.instagramFeed;
    var mainStickyBlogPost = (_b = stickyPosts.nodes) === null || _b === void 0 ? void 0 : _b[0];
    var handleScrollToBottom = function (e) {
        var _a;
        var topElement = (_a = document.getElementsByTagName("footer")) === null || _a === void 0 ? void 0 : _a[0];
        topElement === null || topElement === void 0 ? void 0 : topElement.scrollIntoView({ behavior: "smooth" });
    };
    return (<base_layout_1.default>
          <seo_1.default title="Page d'accueil"/>
          <div className="min-w-screen-lg lg:px-5 xl:px-8 mx-auto">

              <div className="lg:grid lg:grid-cols-12">

                  <div className="lg:col-span-12 lg:mx-0 px-6 md:px-8.5 md:mx-0 sm:mx-2">
                      <section className="hero-section border-b border-gris-800 lg:grid lg:grid-cols-2 md:pt-15 pb-10">
                          <h1 className="text-4.5xl md:text-6xl lg:text-4xl xl:text-5.5xl xgl:text-4.5xl  md:w-9/12 lg:w-8/12 xl:-tracking-px font-bold mt-48 md:mt-36 mb-5  ">
                              Faciliter l'accès <br className="hidden lg:block"/> et la collaboration entre <span className="text-darkgreen"><a href="/architectes">architectes d'intérieur</a></span> et <span className="text-darkgreen"><a href="/artisans">artisans francais</a></span>
                              <button className="block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700" onClick={handleScrollToBottom}>
                                  <down_right_arrow_icon_1.default className="w-10 h-10 mt-10"/>
                              </button>
                          </h1>
                          <div className="hero-section_img_wrapper">
                              <homepage_illustration_1_image_1.default />
                          </div>

                      </section>
                      <section className="about-section  border-b border-gris-800">
                          <p className="flex flex-wrap text-xsm font-black my-4 text-gris-800">SUR-MESURE, LOCAL ET RESPONSABLE</p>
                          <div className="about-section_content py-8 pt-10">
                              <div>

                                  <p className="text-lg md:text-2xl md:w-9/12 w-11/12 lg:w-7/12">
                              <b className="font-black">Hopfab<sup>®</sup></b>
                              fédère des communautés d’architectes d’intérieur et d’artisans français soucieux de s’engager pour la réalisation de projets d’agencement sur-mesure, locaux, responsables et efficients.
                          </p>
                                
                                  <animated_btn_1.default link="/notre-mission" className="cta group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase font-bold border-1.5 border-transparent hover:border-gray-400 hover:bg-black text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 " content="EN SAVOIR PLUS" firstSpan="button-text text-white " secondSpan="button-text text-gray-800 "/>
                                
                              </div>
                              <div className="about-section_logo relative hidden xlg:block lg:block md:block">
                                  <img src="logo-hopfab-square.png" className="logo-letters" alt="project-1"/>
                              <hopfab_circle_1.default className="hopfab-circle"/>
                              </div>

                          </div>

                      </section>
                      <section className="projects-section border-b border-gris-800 mb-6 py-3 lg:py-0 md:mb-10">
                          <div className="flex items-center justify-between">
                              <h3 className="text-2.5xl sm:text-4xl lg:text-4.5xl font-bold text-black mb-5 sm:mb-0">
                                  Plus de <span className="text-darkgreen ">1300 projets</span> réalisés
                              </h3>
                           
                              <animated_btn_1.default link="/realisations" className="cta group hidden md:block text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 " content="TOUS LES PROJETS" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
                          </div>
                          <home_projects_1.default />
                          <animated_btn_1.default link="/realisations" className="cta md:hidden group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 " content="TOUS LES PROJETS" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
                      </section>


                      <section className="who-you-section border-b border-gris-800  mb-6 md:mb-0 lg-mb-6 py-12">
                          <div className="grid grid-cols-1  lg:grid-cols-2 md:gap-x-16 lg:gap-x-21 xl:gap-x-22 2xl:gap-x-31">
                              <h3 className="font-bold mb-14 lg:mb-0 text-2.5xl sm:text-4xl lg:text-4.5xl">Vous êtes <span className="text-darkgreen">architecte d’intérieur ?</span></h3>
                              <div>
                                  <div className="flex items-start mb-8">
                                      <down_right_arrow_icon_1.default className="w-3 h-3  mt-2 mr-4"/>
                                      <p className="font-medium sm:w-8/12 lg:w-11/12 text-lg md:1xl ">
                                          Accédez à une communauté d’artisans français sélectionnés pour donner vie à vos projets. 
                                      </p>
                                  </div>
                                  <div className="flex items-start ">
                                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                                      <p className="font-medium sm:w-8/12 lg:w-11/12 text-lg md:1xl">
                                          Gagnez du temps dans la gestion de vos consultations et le lancement de vos projets.
                                      </p>
                                  </div>
                             
                                  <animated_btn_1.default link="/architectes" className="cta group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 " content="EN SAVOIR PLUS" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
                              </div>
                          </div>
                      </section>


                      <section className="who-you-section border-b border-gris-800  mb-6 md:mb-0 lg-mb-6 py-12">
                          <div className="grid grid-cols-1  lg:grid-cols-2 md:gap-x-16 lg:gap-x-21 xl:gap-x-22 2xl:gap-x-31">
                              <h3 className="font-bold mb-14 lg:mb-0 text-2.5xl md:text-4.5xl">Vous êtes <span className="text-darkgreen">artisan ?</span></h3>
                              <div>
                                  <div className="flex items-start mb-8">
                                      <down_right_arrow_icon_1.default className="w-3 h-3  mt-2 mr-4"/>
                                      <p className="font-medium sm:w-8/12 lg:w-11/12  text-lg md:1xl">
                                          Développez votre entreprise en accédant à des projets adaptés aux spécificités de votre atelier.
                                      </p>
                                  </div>
                                  <div className="flex items-start ">
                                      <down_right_arrow_icon_1.default className="w-3 h-3 mt-2 mr-4"/>
                                      <p className="font-medium sm:w-8/12 lg:w-11/12  text-lg md:1xl">
                                          Concentrez-vous sur l’essentiel grâce à des outils digitaux simples et performants.
                                      </p>
                                  </div>
                                  <animated_btn_1.default link="/artisans" className="cta group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 " content="EN SAVOIR PLUS" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
                              </div>
                          </div>
                      </section>


                      <section className="projects-section second mb-6 py-3 pb-6 lg:py-0">
                          <div className="flex items-center justify-between">
                              <h2 className="text-2.5xl sm:text-4xl lg:text-4.5xl font-bold mb-5 sm:mb-0">
                                  Nos prochains événements
                              </h2>
                              <animated_btn_1.default link="https://lp.hopfab.com/evenements?hs_preview=WnperiHR-43395387377" className="cta group hidden md:block text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 " content="TOUS LES ÉVÉNEMENTS" firstSpan="button-text text-white text-xs " secondSpan="button-text text-gray-800 text-xs "/>
                          </div>
                          <div className="projects-section_items  grid md:grid-cols-2 md:gap-x-16 lg:gap-x-21 xl:gap-x-22 2xl:gap-x-31 ">
                              <div className="projects-section_item mb-14 md:mb-0">
                                  <div className="overflow-hidden">
                                  <homepage_event_1_image_1.default />
                                  </div>
                                  <div className="flex items-center justify-between border-b border-gris-800 py-4 text-xs">
                                      <span><b>LIEU</b> PARIS</span>
                                      <span className="mr-16 lg:mr-30"><b>DATE</b> 12 OCT. 2021</span>

                                  </div>
                                  <p className=" py-4 font-serif">La Végétalisation des espaces avec Emilien</p>
                                  <a href="https://lp.hopfab.com/evenement-signaletique-2109-0?hs_preview=huIrZVIA-43498851824" className="border-b border-gris-800 mt-6 text-sm font-bold ">LIRE LA SUITE</a>
                              </div>
                              <div className="projects-section_item">
                                  <div className="overflow-hidden">
                                      <homepage_event_2_image_1.default />
                                      </div>
                                  <div className="flex items-center justify-between border-b border-gris-800 py-4 text-xs">
                                      <span><b>LIEU</b> BAGNOLET</span>
                                      <span className="mr-16 lg:mr-30"><b>DATE</b> 30 SEPT. 2021</span>

                                  </div>
                                  <p className=" py-4 font-serif">L'art de la signalétique avec Maxime</p>
                                  <a href="https://lp.hopfab.com/evenement-signaletique-2109?hs_preview=jmuEhdqd-43397306320" className="border-b border-gris-800 mt-6 text-sm font-bold">LIRE LA SUITE</a>

                              </div>
                          </div>
                        
                      </section>
                  </div>
              </div>
          </div>
          <div className="journal">
              <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5">
                  <div className="lg:grid lg:grid-cols-13 py-14">
                      <section className="lg:col-span-11 ">
                          <div className="md:flex items-end justify-between border-b border-brown-50">
                              <svg className="block md:hidden text-brown-50" viewBox="0 0 56 18" aria-hidden="true" aria-labelledby="journal-title">
                                  <text id="journal-title" className="font-bold" x="0" y="15" fill="currentColor">
                                      Journal
                  </text>
                              </svg>
                              <h2 className="hidden md:block text-gray-200 md:text-8xl lg:text-7xl xl:text-8.1xl font-bold pb-4 xl:pb-2">
                                  Journal
                </h2>
                              <div className="text-left text-brown-50 space-y-5 pb-4">
                                
                       
                                  <animated_btn_1.default link="/blog" className="cta group mt-5 md:mt-0  text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border border-brown-50  hover:bg-white font-bold text-xs rounded-full border-1.5 border-gray-400 px-5 py-2 md:px-5 xl:px-6  focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50" content="Ouvrir le journal" firstSpan="button-text text-gray-800 text-xs " secondSpan="button-text text-white text-xs "/>
                              </div>
                          </div>
                          {mainStickyBlogPost && (<homepage_blog_post_list_item_1.default blogPost={mainStickyBlogPost} className="text-brown-50" theme="light"/>)}
                        
                      </section>
                  </div>
              </div>
          </div>
          <div className="pt-22 mb-8">
              <section className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6  lg:px-8 xl:px-4 2xl:px-18.5">
                  <div className="flex justify-start items-end lg:justify-end mb-12">
                      <a href="https://www.instagram.com/hopfab/?hl=fr" className="font-bold text-4.5xl md:text-5xl lg:text-5xl xl:text-6.75xl">
                          Suivez-nous
              <br /> sur Instagram
                  {instagramFeed.nodes.map(function (f) { f; })}
                      </a>

                </div>
                      <down_right_arrow_icon_1.default className="ml-4 w-7 h-7 lg:w-10 lg:h-10 mb-2"/>
                  <instagram_feed_1.default slides={instagramFeed.nodes.map(function (f) { return ({
            image: f,
            alt: "",
        }); })}/>
              </section>
            
          </div>
      </base_layout_1.default>);
};
exports.default = IndexPage;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  query homepageQuery {\n    stickyPosts: allWpPost(filter: { isSticky: { eq: true } }) {\n      nodes {\n        id\n        uri\n        title\n        excerpt\n        date\n        categories {\n          nodes {\n            id\n            name\n          }\n        }\n        portraitFeaturedImage: featuredImage {\n          node {\n            altText\n            localFile {\n              childImageSharp {\n                gatsbyImageData(   width: 1161\n                    height: 750\n                    quality: 90\n                    layout: CONSTRAINED)\n\n              }\n            }\n          }\n        }\n        landscapeFeaturedImage: featuredImage {\n          node {\n            altText\n            localFile {\n              childImageSharp {\n                gatsbyImageData(width: 640, height: 500, layout: CONSTRAINED)\n              }\n            }\n          }\n        }\n      }\n    }\n    instagramFeed: allFile(\n      filter: { relativeDirectory: { eq: \"instagram\" } }\n      sort: { fields: ctime, order: DESC }\n    ) {\n      nodes {\n        childImageSharp {\n          gatsbyImageData(width: 280, height: 280, layout: CONSTRAINED)\n        }\n      }\n    }\n   \n  }\n"], ["\n\n  query homepageQuery {\n    stickyPosts: allWpPost(filter: { isSticky: { eq: true } }) {\n      nodes {\n        id\n        uri\n        title\n        excerpt\n        date\n        categories {\n          nodes {\n            id\n            name\n          }\n        }\n        portraitFeaturedImage: featuredImage {\n          node {\n            altText\n            localFile {\n              childImageSharp {\n                gatsbyImageData(   width: 1161\n                    height: 750\n                    quality: 90\n                    layout: CONSTRAINED)\n\n              }\n            }\n          }\n        }\n        landscapeFeaturedImage: featuredImage {\n          node {\n            altText\n            localFile {\n              childImageSharp {\n                gatsbyImageData(width: 640, height: 500, layout: CONSTRAINED)\n              }\n            }\n          }\n        }\n      }\n    }\n    instagramFeed: allFile(\n      filter: { relativeDirectory: { eq: \"instagram\" } }\n      sort: { fields: ctime, order: DESC }\n    ) {\n      nodes {\n        childImageSharp {\n          gatsbyImageData(width: 280, height: 280, layout: CONSTRAINED)\n        }\n      }\n    }\n   \n  }\n"])));
var templateObject_1;
//# sourceMappingURL=index.jsx.map