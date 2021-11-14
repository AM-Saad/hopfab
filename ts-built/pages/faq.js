"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const default_layout_1 = require("../components/layouts/default-layout");
const seo_1 = require("../components/seo/seo");
const faq_section_1 = require("../components/faq-section");
const faq_json_1 = require("../content/faq.json");
const FaqPage = () => (<default_layout_1.default>
    <seo_1.default title="FAQ"/>
    <h1 className="text-7.5xl md:text-9xl lg:text-9.1xl xl:text-11xl font-bold max-w-5xl mt-20 mb-8">
      FAQ
    </h1>
    <div className="max-w-3xl mx-auto mb-12">
      <dl className="mt-6 space-y-6 divide-y divide-gray-200">
        {faq_json_1.default.map((faqSection, index) => (<faq_section_1.default key={index} question={faqSection.question} response={faqSection.response}/>))}
      </dl>
    </div>
  </default_layout_1.default>);
exports.default = FaqPage;
