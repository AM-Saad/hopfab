import React from "react";
import { PageProps } from "gatsby";

import SEO from "../components/seo/seo";

const ClientSideOnlyLazy = React.lazy(
  () => import("../components/quotation/quotation-form")
);

type DataProps = {};

const DevisPage: React.FC<PageProps<DataProps>> = () => {
  const isSSR = typeof window === "undefined";

  return (
    <div className="min-h-screen h-full bg-gris-800">
      <SEO title="Lancer votre projet avec Hopfab" />
      <div className="min-h-screen h-full flex flex-col max-w-7xl mx-auto px-6 py-16">
        {!isSSR && (
          <React.Suspense
            fallback={
              <div
                className="h-full flex items-center justify-center"
                style={{ minHeight: "calc(100vh - 8rem)" }}
              >
                <div className="text-xl text-brown-50">
                  Chargement en cours ...
                </div>
              </div>
            }
          >
            <ClientSideOnlyLazy />
          </React.Suspense>
        )}
      </div>
    </div>
  );
};

export default DevisPage;
