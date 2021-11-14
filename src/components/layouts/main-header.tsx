import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Menu, Transition } from "@headlessui/react";

import HopfabLogo from "../icons/hopfab-logo";
import LinkWithArrow from "../link-with-arrow";
import AnimatedBtn from '../call-to-actions/animated-btn'
import FullLogo from '../../images/full-logo-white.png'
    
type DataProps = {
  siteTitle: string;
};

const MainHeader: React.FC<DataProps> = ({ siteTitle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (!window) return;
    if (isMobileMenuOpen) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <>
          <header className="sticky top-0 w-full z-50">
              <div className="relative bg-brown-50">
                  <div className="lg:col-span-12 lg:mx-0 px-7 md:px-8 lg:px-10 xl:px-14 md:mx-0 sm:mx-2">
                      <div className="flex justify-between items-center py-6 lg:justify-start md:space-x-10 lg:space-x-12 xl:space-x-16 2xl:space-x-24">
              <div className="flex justify-start">
                <Link
                  to="/"
                  className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                >
                  <span className="sr-only">{siteTitle}</span>
                    <div className="hopfab-name">
                   <sup className="trademark">®</sup>
                  <HopfabLogo className="flex text-gris-800 h-8 w-auto xl:h-10" />
                </div>
                </Link>
              </div>
              <div className="-mr-2 -my-2 lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  type="button"
                                  className="group relative overflow-hidden  inline-flex items-center uppercase bg-black text-xsm font-bold text-white rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50"
                >
                  <span>Menu</span>
                </button>
              </div>
                          <nav className="hidden lg:flex md:space-x-4 lg:space-x-4 xl:space-x-9">
                    <LinkWithArrow
                        to="/realisations"
                        className="flex items-center text-md text-gris-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                    >
                        <span>Projets</span>
                    </LinkWithArrow>
                    <LinkWithArrow
                        to="/blog"
                        className="flex items-center text-md text-gris-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                    >
                        <span>Journal</span>
                    </LinkWithArrow>
                    <LinkWithArrow
                        to="/architectes"
                        className="flex items-center text-md text-gris-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                    >
                        <span> Je suis architecte</span>
                    </LinkWithArrow>
                    <LinkWithArrow
                        to="/artisans"
                        className="flex items-center text-md text-gris-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
                    >
                        <span>Je suis artisan</span>
                    </LinkWithArrow>


              </nav>
              <div className="hidden lg:flex items-center justify-end md:flex-1">
                <div className="">
                 
                                  <AnimatedBtn link="/devis"
                                      className="cta bg-green-main border-1 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 group border-1.5 border-transparent hover:bg-transparent md:px-5 mr-5 my-4 overflow-hidden py-2 relative rounded-full text-center text-white text-xs uppercase xl:px-4"
                                      content="JE LANCE MON PROJET"
                                      firstSpan="text-darkgreen"
                                  />
                                  <AnimatedBtn link="https://sso.hopfab.com"
                                      className="cta group bg-black text-center relative overflow-hidden uppercase border-1.5 border-transparent hover:border-gray-400 hover:bg-transparent text-xs rounded-full relative px-6 py-2 md:px-5 xl:px-4 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 "
                                      content="ME CONNECTER"
                                      firstSpan="text-black "
                                      secondSpan="text-white "

                                  />


                </div>
              </div>
            </div>
          </div>

          {/*
            Mobile menu, show/hide based on mobile menu state.
          */}
          <Transition
            show={isMobileMenuOpen}
            enter="duration-200 ease-out"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="duration-100 ease-in"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
            className="absolute top-0 inset-x-0 transition transform origin-top-right h-screen lg:hidden z-50"
          >
            <div className="h-full shadow-lg menu-wrapper overflow-scroll">
              <div className="p-5 md:p-7">
                <div className="flex items-center justify-end">
                  <div className="-mr-2">
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      type="button"
                                          className="group text-center relative overflow-hidden animated-button uppercase text-xs text-white rounded-full border-1.5 border-gray-200 px-6 py-2 md:px-5 md:py-2 xl:px-4 xl:py-2 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 "
                    >
                      <span>Fermer</span>
                    </button>
                  </div>
                </div>

                <div className="flex mt-10 md:mb-30">
                  <Link
                    to="/"
                    className="rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gris-800 focus:ring-brown-50"
                  >
                    <div className="hopfab-name w-7/12">
                    <sup className="text-md trademark text-pwhite">®</sup>
                    <img src={FullLogo} />

                </div>
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-y-8">
                
                  <nav className="col-start-2 grid gap-y-1 text-1xl font-medium text-brown-50">
                    <Link
                      to="/realisations"
                      className="font-light text-xl md:text-3xl md:mb-5 inline-flex mr-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
                    >
                       Projets
                    </Link>
                    <Link
                        to="/blog"
                        className="font-light text-xl md:text-3xl md:mb-5 inline-flex mr-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
                    >
                        Journal
                    </Link>
              

                    <Link to="/architectes"
                       className="font-light text-xl md:text-3xl md:mb-5 inline-flex mr-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
                    >
                       Je suis architecte
                    </Link>

                    <Link
                        to="/artisans"
                        className="font-light text-xl md:text-3xl md:mb-5 inline-flex mr-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
                    >
                        Je suis artisan
                    </Link>
                  </nav>
                    <div className="col-start-2">
                    <div className="grid grid-cols-1 w-11/12 sm:w-7/12">
                        <Link
                            to="https://sso.hopfab.com"
                          className="group text-center relative overflow-hidden animated-button uppercase text-xs text-white rounded-full border-1.5 border-gray-200 px-6 py-3 md:px-5 md:py-3 xl:px-4 xl:py-3 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 "
                        >
                        ME CONNECTER
                    </Link>
                    <Link
                        to="/devis"
                         className="group bg-green-main text-center relative overflow-hidden animated-button uppercase text-xs  text-white rounded-full border-1.5 py-3 md:px-5 md:py-3 xl:px-4 xl:py-3 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-4"
                    >
                     Lancer mon projet
                    </Link>
                </div>

                </div>
                         <nav className="col-start-2 grid gap-y-2 mt-0 md:mt-29.5 text-md text-brown-50">
                    <Link
                      to="/qui-sommes-nous"
                           className="-my-1 text-xsm font-light text-gray-300 py-1 inline-flex mr-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
                    >
                      Qui sommes nous ?
                    </Link>

                    <Link to="/notre-mission"
                       className="-my-1 text-xsm font-light text-gray-300 py-1 inline-flex mr-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
                    >
                      Notre mission
                    </Link>
                       <Link to="https://artisans.hopfab.com/integration"
                         className="-my-1 text-xsm font-light text-gray-300 py-1 inline-flex mr-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
                    >
                        Rejoindre la communauté
                    </Link>
                       <Link to="/contact"
                        className="-my-1 text-xsm font-light text-gray-300 py-1 inline-flex mr-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
                    >
                        Nous contacter
                    </Link>

                    <Link to="/mentions-legales"
                       className="-my-1 text-xsm font-light text-gray-300 py-1 inline-flex mr-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
                    >Mentions légales
                    </Link>
               
                    <Link
                        to="/faq"
                      className="-my-1 text-xsm font-light text-gray-300 py-1 inline-flex mr-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
                    >
                        FAQ
                    </Link>
                  </nav>

           
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
