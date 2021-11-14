"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var seo_1 = require("../components/seo/seo");
var ClientSideOnlyLazy = react_1.default.lazy(function () { return Promise.resolve().then(function () { return require("../components/quotation/quotation-form"); }); });
var DevisPage = function () {
    var isSSR = typeof window === "undefined";
    return (<div className="min-h-screen h-full bg-gris-800">
      <seo_1.default title="Lancer votre projet avec Hopfab"/>
      <div className="min-h-screen h-full flex flex-col max-w-7xl mx-auto px-6 py-16">
        {!isSSR && (<react_1.default.Suspense fallback={<div className="h-full flex items-center justify-center" style={{ minHeight: "calc(100vh - 8rem)" }}>
                <div className="text-xl text-brown-50">
                  Chargement en cours ...
                </div>
              </div>}>
            <ClientSideOnlyLazy />
          </react_1.default.Suspense>)}
      </div>
    </div>);
};
exports.default = DevisPage;
//# sourceMappingURL=devis.jsx.map