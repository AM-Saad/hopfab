import React, { useEffect } from "react";
import { Link } from "gatsby";

import HopfabCircle from "../hopfab-circle";
import HopfabCircleWhite from "../hopfab-circle_white";
import FacebookIcon from "../icons/facebook-icon";
import InstagramIcon from "../icons/instagram-icon";
import PinterestIcon from "../icons/pinterest-icon";
import LinkedinIcon from "../icons/linkedin-icon";
import DownRightArrowIcon from "../icons/down-right-arrow-icon";
import LinkWithArrow from "../link-with-arrow";
import AWithArrow from "../a-with-arrow";
import UpArrowIcon from "../icons/up-arrow-icon";
import NewsletterForm from "../forms/newsletter-form";
import SmoothAnimation from "../../utilities/smooth-animation";
import FullLogo from '../../images/full-logo(2).png'
import FullLogoW from '../../images/full-logo_w.png'

type DataProps = {
  theme?: "brown";
};

const MainFooter: React.FC<DataProps> = ({ theme }) => {
  const handleScrollToTop = e => {
    const topElement = document.getElementsByTagName("body")?.[0];
    topElement?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (window) new SmoothAnimation(".hopfab-circle");
  }, []);
    const circleImage = () => {
        if (theme == 'brown') {
          return <HopfabCircleWhite className="hopfab-circle" />
        } else {
          return  <HopfabCircle className="hopfab-circle" />
        }
    }
  return (
    <>
      <footer
        aria-labelledby="footerHeading"
        className={`${
          theme === "brown" ? "bg-brown-700 text-brown-50" : "text-gris-800"
        }`}
      >
        <h2 id="footerHeading" className="sr-only">
          Pied de page
        </h2>
        <div
        >
          <div
            className={`border-t ${
                          theme === "brown" ? "border-brown-50" : "border-gray-500"
            } `}
                  >
                      <div className="flex justify-center sm:justify-between border-b px-7 lg:px-0 border-gray-500 py-4 lg:px-8">
                          <div className="hopfab-name  lg:w-4/12">
                              <sup className={`text-1xl trademark  font-bold ${theme === "brown" ? "text-white" : "text-gray-700"}`}>®</sup>

                              <img src={`${theme === "brown" ? FullLogoW : FullLogo}`}/>


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
                    <Link
                      to="/qui-sommes-nous"
                      className={`inline-flex group items-center text-xsm font-semibold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        theme === "brown"
                          ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                          : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                      }`}
                    >
                      <span className="relative">
                        Qui sommes nous ?
                      </span>
                      <DownRightArrowIcon className="transition duration-200 ease-in-out transform ml-2  group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0" />
                    </Link>
                  </div>
                </div>
                  <div className="px-7 lg:px-0 ">
                  <h3 className="text-xsm font-bold tracking-wider uppercase">
                                      MENU
                  </h3>
                  <ul className="mt-3 mb-10 md:mb-8 lg:mb-10 xl:mb-6">
                    <li>
                      <LinkWithArrow
                        to="/notre-mission"
                        className={`text-black border-0 inline-flex mb-3 lg:mb-0 items-center text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          theme === "brown"
                            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                        }`}
                      >
                        <span>Notre mission</span>
                      </LinkWithArrow>
                    </li>

                    <li>
                      <LinkWithArrow
                        to="/contact"
                            className={`text-black border-0 inline-flex items-center mb-3 lg:mb-0 text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          theme === "brown"
                            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                        }`}
                      >
                        <span>Nous contacter</span>
                      </LinkWithArrow>
                    </li>

                    <li>
                      <AWithArrow
                        href="https://sso.hopfab.com"
                        target="_blank"
                        rel="noopener noreferrer"
                                              className={`text-black border-0 inline-flex items-center mb-3 lg:mb-0 text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          theme === "brown"
                            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                        }`}
                      >
                        Mon compte
                      </AWithArrow>
                    </li>

                    <li>
                      <LinkWithArrow
                        to="/mentions-legales"
                             className={`text-black border-0 inline-flex items-center mb-3 lg:mb-0 text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          theme === "brown"
                            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                        }`}
                      >
                        <span>Mentions légales</span>
                      </LinkWithArrow>
                    </li>

                    <li>
                      <LinkWithArrow
                        to="/politique-de-protection-des-donnees"
                               className={`text-black border-0 inline-flex items-center mb-3 lg:mb-0 text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          theme === "brown"
                            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                        }`}
                      >
                        <span>Protection des données</span>
                      </LinkWithArrow>
                    </li>

                    <li>
                      <LinkWithArrow
                        to="/faq"
                           className={`text-black border-0 inline-flex items-center mb-3 lg:mb-0 text-md rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          theme === "brown"
                            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                        }`}
                      >
                        <span>FAQ</span>
                      </LinkWithArrow>
                    </li>
                  </ul>

                <Link
                    to="/qui-sommes-nous"
                    className={`border-0 inline-flex group items-center lg:text-xsm font-semibold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 block lg:hidden ${theme === "brown"
                            ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                            : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                        }`}
                >
                    <span className="relative">  Qui sommes nous ?</span>
                    <DownRightArrowIcon className="transition duration-200 ease-in-out transform ml-2  group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0" />
                </Link>
                  <div className="mt-4.5">
                    <a
                      href="https://artisans.hopfab.com/integration"
                      target="_blank"
                      rel="noopener noreferrer"
                         className={` border-0 inline-flex group items-center lg:text-xsm font-semibold uppercase rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        theme === "brown"
                          ? "text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                          : "text-gris-800 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                      }`}
                    >
                      <span className="relative sm:text-xs xlg:text-sm">
                        REJOINDRE LA COMMUNAUTÉ
                      </span>
                      <DownRightArrowIcon className="transition duration-200 ease-in-out transform border-b-1 ml-2  group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0" />
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
                  <NewsletterForm theme={theme} />
                </div>
                
              </div>
            </div>
                      <div className="flex items-center justify-between flex-col lg:flex-row my-3 lg:px-8">
                          <div className="flex pb-5 xlg:pb-0 xlg: pt-3 space-x-2 ">
                              <a
                                  href="https://fr-fr.facebook.com/hopfab"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${theme === "brown"
                                          ? "hover:text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                                          : "hover:text-gris-700 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                                      }`}
                              >
                                  <span className="sr-only">Facebook</span>
                                  <FacebookIcon
                                      color={theme === "brown" ? "#847A54" : "#F2F3EE"}
                                      className="h-6 w-6"
                                  />
                              </a>

                              <a
                                  href="https://www.instagram.com/hopfab"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`te rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${theme === "brown"
                                          ? "hover:text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                                          : "hover:text-gris-700 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                                      }`}
                              >
                                  <span className="sr-only">Instagram</span>
                                  <InstagramIcon
                                      color={theme === "brown" ? "#847A54" : "#F2F3EE"}
                                      className="h-6 w-6"
                                  />
                              </a>

                              <a
                                  href="https://www.pinterest.fr/hopfaber"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${theme === "brown"
                                          ? "hover:text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                                          : "hover:text-gris-700 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                                      }`}
                              >
                                  <span className="sr-only">Pinterest</span>
                                  <PinterestIcon
                                      color={theme === "brown" ? "#847A54" : "#F2F3EE"}
                                      className="h-6 w-6"
                                  />
                              </a>

                              <a
                                  href="https://fr.linkedin.com/company/hopfab"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${theme === "brown"
                                          ? "hover:text-brown-50 focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                                          : "hover:text-gris-700 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                                      }`}
                              >
                                  <span className="sr-only">LinkedIn</span>
                                  <LinkedinIcon
                                      color={theme === "brown" ? "#847A54" : "#F2F3EE"}
                                      className="h-6 w-6"
                                  />
                              </a>
                          </div>
                          <div className="border-gray-500 border-t lg:border-0 py-3 lg:py-0 text-center lg:min-w-min md:py-3 w-full">
                              <p
                                  className={`text-xs px-12 ${theme === "brown" ? "text-white" : "text-gray-400"}`}
                              >
                  &copy;{new Date().getFullYear()}&nbsp;
                  HOPFAB TOUS DROITS RÉSERVÉS | DESIGN PAR STUDIO FORMAT
                </p>
              </div>
              <button
                onClick={handleScrollToTop}
                type="button"
                className={`hidden lg:block xlg:block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  theme === "brown"
                    ? "focus-visible:ring-offset-brown-700 focus-visible:ring-brown-50"
                    : "focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                }`}
              >
                <div className="sr-only">Naviguer tout en haut de la page</div>
                <UpArrowIcon
                  className={`w-8 h-8 sm:w-12 sm:h-12 ${
                    theme === "brown" ? "text-brown-50" : "text-gris-800"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
