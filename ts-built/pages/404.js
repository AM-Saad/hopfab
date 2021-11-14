"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const base_layout_1 = require("../components/layouts/base-layout");
const seo_1 = require("../components/seo/seo");
const NotFoundPage = () => (<base_layout_1.default>
    <seo_1.default title="404 - Page non trouvée"/>
    <div className="my-24">
      <h1 className="text-center font-bold text-10xl md:text-18xl mb-4">404</h1>
      <p className="text-xl font-bold text-center max-w-lg mx-6 sm:mx-auto">
        Impossible de trouver la page que vous recherchez.
        <br /> Le contenu a changé d'adresse ou n'est plus disponible.
      </p>
    </div>
  </base_layout_1.default>);
exports.default = NotFoundPage;
