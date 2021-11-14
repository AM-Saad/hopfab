import React from "react";
import { PageProps } from "gatsby";

import BaseLayout from "../components/layouts/base-layout";
import SEO from "../components/seo/seo";

type DataProps = {};

const NotFoundPage: React.FC<PageProps<DataProps>> = () => (
  <BaseLayout>
    <SEO title="404 - Page non trouvée" />
    <div className="my-24">
      <h1 className="text-center font-bold text-10xl md:text-18xl mb-4">404</h1>
      <p className="text-xl font-bold text-center max-w-lg mx-6 sm:mx-auto">
        Impossible de trouver la page que vous recherchez.
        <br /> Le contenu a changé d'adresse ou n'est plus disponible.
      </p>
    </div>
  </BaseLayout>
);

export default NotFoundPage;
