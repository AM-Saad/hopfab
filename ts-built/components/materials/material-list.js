"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const http_1 = require("@hopfab/http");
const material_list_item_1 = require("./material-list-item");
const down_right_arrow_icon_1 = require("../icons/down-right-arrow-icon");
const MaterialList = ({ initialMaterials, initialCurrentPage, totalPages, selectedCategory, }) => {
    const [materials, setMaterials] = react_1.useState(initialMaterials);
    const [currentPage, setCurrentPage] = react_1.useState(initialCurrentPage);
    const [isLoading, setIsLoading] = react_1.useState(false);
    /* On regroupe les projets 2 par 2 pour le rendu colonne décalé */
    const NUM_COLUMNS = 2;
    const numLines = react_1.useMemo(() => Math.ceil(materials.length / NUM_COLUMNS), [
        materials,
    ]);
    const lines = react_1.useMemo(() => Array.from({ length: numLines }), [numLines]);
    const fetchData = react_1.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        try {
            const result = yield http_1.get(`/materiautheque${selectedCategory ? `-${selectedCategory}` : ""}-${currentPage}.json`);
            if (result === {})
                return;
            setMaterials(oldMaterials => [
                ...oldMaterials,
                ...result.map(d => d.material),
            ]);
        }
        catch (error) {
            // TODO: handle error
        }
        setIsLoading(false);
    }), [currentPage]);
    return (<div className="grid grid-cols-1 gap-18">
      {lines.map((_, lineIndex) => (<div key={lineIndex} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-14 lg:gap-x-18 xl:gap-x-22 2xl:gap-x-24 gap-y-18">
          {materials
                .slice(lineIndex * NUM_COLUMNS, (lineIndex + 1) * NUM_COLUMNS)
                .map((material, rowIndex) => (<material_list_item_1.default key={material.id} material={material} className={`${rowIndex === 0 ? "" : "md:mt-26 lg:mt-30 xl:mt-34"}`}/>))}
        </div>))}
      {totalPages > currentPage && (<div className="flex justify-end">
          {!isLoading && (<button type="button" onClick={() => {
                    setCurrentPage(currentPage + 1);
                    fetchData();
                }} className="group flex items-center text-4xl md:text-6.1xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700">
              <span className="mt-1.5 border-b-6 transition duration-200 ease-in-out transform border-transparent group-hover:border-gris-800">
                Voir plus
              </span>
              <down_right_arrow_icon_1.default className="w-6 h-6 md:w-11 md:h-11 ml-4 mt-2"/>
            </button>)}
          {isLoading && (<div className="text-4xl md:text-6.1xl font-bold">
              Chargement ...
            </div>)}
        </div>)}
    </div>);
};
exports.default = MaterialList;
