import React from "react";
import { PageProps } from "gatsby";

import DefaultLayout from "../components/layouts/default-layout";
import SEO from "../components/seo/seo";
import FaqSection from "../components/faq-section";
import faq from "../content/faq.json";

type DataProps = {};

const FaqPage: React.FC<PageProps<DataProps>> = () => (
  <DefaultLayout>
    <SEO title="FAQ" />
    <h1 className="text-7.5xl md:text-9xl lg:text-9.1xl xl:text-11xl font-bold max-w-5xl mt-20 mb-8">
      FAQ
    </h1>
    <div className="max-w-3xl mx-auto mb-12">
      <dl className="mt-6 space-y-6 divide-y divide-gray-200">
        {faq.map((faqSection, index) => (
          <FaqSection
            key={index}
            question={faqSection.question}
            response={faqSection.response}
          />
        ))}
      </dl>
    </div>
  </DefaultLayout>
);

export default FaqPage;
