"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var hopfab_circle_1 = require("../hopfab-circle");
var hopfab_circle_white_1 = require("../hopfab-circle_white");
var facebook_icon_1 = require("../icons/facebook-icon");
var instagram_icon_1 = require("../icons/instagram-icon");
var pinterest_icon_1 = require("../icons/pinterest-icon");
var linkedin_icon_1 = require("../icons/linkedin-icon");
var down_right_arrow_icon_1 = require("../icons/down-right-arrow-icon");
var link_with_arrow_1 = require("../link-with-arrow");
var a_with_arrow_1 = require("../a-with-arrow");
var up_arrow_icon_1 = require("../icons/up-arrow-icon");
var newsletter_form_1 = require("../forms/newsletter-form");
var smooth_animation_1 = require("../../utilities/smooth-animation");
var full_logo_2__png_1 = require("../../images/full-logo(2).png");
var full_logo_w_png_1 = require("../../images/full-logo_w.png");
var MainFooter = function (_a) {
    var theme = _a.theme;
    var handleScrollToTop = function (e) {
        var _a;
        var topElement = (_a = document.getElementsByTagName("body")) === null || _a === void 0 ? void 0 : _a[0];
        topElement === null || topElement === void 0 ? void 0 : topElement.scrollIntoView({ behavior: "smooth" });
    };
    react_1.useEffect(function () {
        if (window)
            new smooth_animation_1.default(".hopfab-circle");
    }, []);
    var circleImage = function () {
        if (theme == 'brown') {
            return <hopfab_circle_white_1.default className="hopfab-circle"/>;
        }
        else {
            return <hopfab_circle_1.default className="hopfab-circle"/>;
        }
    };
    return (<>
      <footer aria-labelledby="footerHeading" className={"" + (theme === "brown" ? "bg-brown-700 text-brown-50" : "text-gris-800")}>
        <h2 id="footerHeading" className="sr-only">
          Pied de page
        </h2>
        <div>
          <div className={"border-t " + (theme === "brown" ? "border-brown-50" : "border-gray-500") + " "}>
                      <div className="flex justify-center sm:justify-between border-b px-7 lg:px-0 border-gray-500 py-4 lg:px-8">
                          <div className="hopfab-name  lg:w-4/12">
                              <sup className={"text-1xl trademark  font-bold " + (theme === "brown" ? "text-white" : "text-gray-700")}>®</sup>

                              <img src={"" + (theme === "brown" ? full_logo_w_png_1.default : full_logo_2__png_1.default)}/>


                          </div>
                          <div className="hidden lg:block">
                              {circleImage()}

                        </div>
            </div>
                      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-y-12  pt-6 py-12 lg:py-0 border-b border-gray-500">
                          <div className="lg:col-span-6 grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-28 gap-y-12 lg:p-8 xl:pl-12 lg:border-r border-gray-500">
                <div className="hidden lg:block px-7 lg:px-0 ">
                    <h3 className="text-xsm font-bold tracking-wider uppercase">
                         A PROPOS
                     </h3>
                                  <p className="text-md lg:text-sm leading-relaxed max-w-md lg:max-w-footer mt-3">
                                      Hopfab fédère une communauté d'artisans français sélectionnés et facilite l'accès et la collaboration entre les ateliers et les porteurs de projets pour donner vie simplement à des réalisations sur-mesure, locales et responsables.
                    </p>
                  <div className="mt-6">
                    <gatsby_1.Link to="/qui-sommes-nous" className={"inline-flex group items-center text-xsm font-semibold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                      <span className="relative">
                        Qui sommes nous ?
                      </span>
                      <down_right_arrow_icon_1.default className="transition duration-200 ease-in-out transform ml-2  group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0"/>
                    </gatsby_1.Link>
                  </div>
                </div>
                  <div className="px-7 lg:px-0 ">
                  <h3 className="text-xsm font-bold tracking-wider uppercase">
                                      MENU
                  </h3>
                  <ul className="mt-3 mb-10 md:mb-8 lg:mb-10 xl:mb-6">
                    <li>
                      <link_with_arrow_1.default to="/notre-mission" className={"text-black border-0 inline-flex mb-3 lg:mb-0 items-center text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                        <span>Notre mission</span>
                      </link_with_arrow_1.default>
                    </li>

                    <li>
                      <link_with_arrow_1.default to="/contact" className={"text-black border-0 inline-flex items-center mb-3 lg:mb-0 text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                        <span>Nous contacter</span>
                      </link_with_arrow_1.default>
                    </li>

                    <li>
                      <a_with_arrow_1.default href="https://sso.hopfab.com" target="_blank" rel="noopener noreferrer" className={"text-black border-0 inline-flex items-center mb-3 lg:mb-0 text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                        Mon compte
                      </a_with_arrow_1.default>
                    </li>

                    <li>
                      <link_with_arrow_1.default to="/mentions-legales" className={"text-black border-0 inline-flex items-center mb-3 lg:mb-0 text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                        <span>Mentions légales</span>
                      </link_with_arrow_1.default>
                    </li>

                    <li>
                      <link_with_arrow_1.default to="/politique-de-protection-des-donnees" className={"text-black border-0 inline-flex items-center mb-3 lg:mb-0 text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                        <span>Protection des données</span>
                      </link_with_arrow_1.default>
                    </li>

                    <li>
                      <link_with_arrow_1.default to="/faq" className={"text-black border-0 inline-flex items-center mb-3 lg:mb-0 text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                        <span>FAQ</span>
                      </link_with_arrow_1.default>
                    </li>
                  </ul>

                <gatsby_1.Link to="/qui-sommes-nous" className={"border-0 inline-flex group items-center lg:text-xsm font-semibold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 block lg:hidden " + (theme === "brown"
            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                    <span className="relative">  Qui sommes nous ?</span>
                    <down_right_arrow_icon_1.default className="transition duration-200 ease-in-out transform ml-2  group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0"/>
                </gatsby_1.Link>
                  <div className="mt-4.5">
                    <a href="https://artisans.hopfab.com/integration" target="_blank" rel="noopener noreferrer" className={" border-0 inline-flex group items-center lg:text-xsm font-semibold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                      <span className="relative sm:text-xs xlg:text-sm">
                        REJOINDRE LA COMMUNAUTÉ
                      </span>
                      <down_right_arrow_icon_1.default className="transition duration-200 ease-in-out transform border-b-1 ml-2  group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0"/>
                    </a>
                  </div>
                </div>
              </div>

                          <div className="lg:col-span-6 xlg:p-12 lg:p-8 border-b lg:border-0 border-gray-500 py-6 px-7 lg:px-8 xl:p-12">
                <h3 className="text-xsm font-bold tracking-wider uppercase">
                                  NEWSLETTER
                </h3>
                <p className="mt-3 text-md leading-relaxed max-w-md lg:mb-30 xl:mb-26">
                   Pour découvrir chaque mois les nouveautés en matière d’agencement responsable c’est ici !
                </p>
                <div className="mt-6">
                  <newsletter_form_1.default theme={theme}/>
                </div>
                
              </div>
            </div>
                      <div className="flex items-center justify-between flex-col lg:flex-row my-3 lg:px-8">
                          <div className="flex pb-5 xlg:pb-0 xlg: pt-3 space-x-2 ">
                              <a href="https://fr-fr.facebook.com/hopfab" target="_blank" rel="noopener noreferrer" className={"rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "hover:text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "hover:text-gris-700 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                                  <span className="sr-only">Facebook</span>
                                  <facebook_icon_1.default color={theme === "brown" ? "#847A54" : "#F2F3EE"} className="h-6 w-6"/>
                              </a>

                              <a href="https://www.instagram.com/hopfab" target="_blank" rel="noopener noreferrer" className={"te rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "hover:text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "hover:text-gris-700 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                                  <span className="sr-only">Instagram</span>
                                  <instagram_icon_1.default color={theme === "brown" ? "#847A54" : "#F2F3EE"} className="h-6 w-6"/>
                              </a>

                              <a href="https://www.pinterest.fr/hopfaber" target="_blank" rel="noopener noreferrer" className={"rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "hover:text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "hover:text-gris-700 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                                  <span className="sr-only">Pinterest</span>
                                  <pinterest_icon_1.default color={theme === "brown" ? "#847A54" : "#F2F3EE"} className="h-6 w-6"/>
                              </a>

                              <a href="https://fr.linkedin.com/company/hopfab" target="_blank" rel="noopener noreferrer" className={"rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "hover:text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "hover:text-gris-700 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                                  <span className="sr-only">LinkedIn</span>
                                  <linkedin_icon_1.default color={theme === "brown" ? "#847A54" : "#F2F3EE"} className="h-6 w-6"/>
                              </a>
                          </div>
                          <div className="border-gray-500 border-t lg:border-0 py-3 lg:py-0 text-center lg:min-w-min md:py-3 w-full">
                              <p className={"text-xs px-12 " + (theme === "brown" ? "text-white" : "text-gray-400")}>
                  &copy;{new Date().getFullYear()}&nbsp;
                  HOPFAB TOUS DROITS RÉSERVÉS | DESIGN PAR STUDIO FORMAT
                </p>
              </div>
              <button onClick={handleScrollToTop} type="button" className={"hidden lg:block xlg:block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " + (theme === "brown"
            ? "focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
            : "focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700")}>
                <div className="sr-only">Naviguer tout en haut de la page</div>
                <up_arrow_icon_1.default className={"w-8 h-8 sm:w-12 sm:h-12 " + (theme === "brown" ? "text-brown-50" : "text-gris-800")}/>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>);
};
exports.default = MainFooter;
//# sourceMappingURL=main-footer.jsx.map