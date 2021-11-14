"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var base_layout_1 = require("../components/layouts/base-layout");
var seo_1 = require("../components/seo/seo");
var map_marker_icon_1 = require("../components/icons/map-marker-icon");
var contact_form_1 = require("../components/forms/contact-form");
var ContactPage = function () { return (<base_layout_1.default>
    <seo_1.default title="Contact"/>
    <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5">
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-11 lg:ml-19 xl:ml-23 2xl:ml-28">
          <h1 className="font-bold text-7.5xl md:text-9xl lg:text-9.1xl xl:text-11xl max-w-5xl mt-20 mb-8">
            Dites nous tout !
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <section className="space-y-8 mt-8 md:mt-20">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gris-800 text-brown-50">
                <map_marker_icon_1.default className="w-5 h-5"/>
              </div>
              <a href="https://goo.gl/maps/bJDSW1KFZWJvRqpp7" target="_blank" rel="noopener noreferrer" className="flex font-medium text-2.5xl lg:text-3.5xl leading-normal">
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
              <contact_form_1.default className="grid gap-y-6 mb-10"/>
            </section>
          </div>
        </div>
      </div>
    </div>
  </base_layout_1.default>); };
exports.default = ContactPage;
//# sourceMappingURL=contact.jsx.map