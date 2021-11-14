import React from "react";
import { PageProps } from "gatsby";

import BaseLayout from "../components/layouts/base-layout";
import SEO from "../components/seo/seo";
import VerticalLaunchProject from "../components/vertical-launch-project";
import MapMarkerIcon from "../components/icons/map-marker-icon";
import ContactForm from "../components/forms/contact-form";

type DataProps = {};

const ContactPage: React.FC<PageProps<DataProps>> = () => (
  <BaseLayout>
    <SEO title="Contact" />
    <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5">
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-11 lg:ml-19 xl:ml-23 2xl:ml-28">
          <h1 className="font-bold text-7.5xl md:text-9xl lg:text-9.1xl xl:text-11xl max-w-5xl mt-20 mb-8">
            Dites nous tout !
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <section className="space-y-8 mt-8 md:mt-20">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gris-800 text-brown-50">
                <MapMarkerIcon className="w-5 h-5" />
              </div>
              <a
                href="https://goo.gl/maps/bJDSW1KFZWJvRqpp7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex font-medium text-2.5xl lg:text-3.5xl leading-normal"
              >
                Numéro 10-12
                <br />
                Rue Maurice Grimaud
                <br />
                Paris, FR
                <br />
                75018
                <br />
              </a>
            </section>
            <section className="mb-8 md:mb-20">
              <ContactForm className="grid gap-y-6 mb-10" />
            </section>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
);

export default ContactPage;
