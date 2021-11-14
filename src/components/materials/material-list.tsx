import React, { useState, useMemo, useCallback } from "react";
import { get } from "@hopfab/http";

import { Material } from "../../models/material";
import MaterialListItem from "./material-list-item";
import DownRightArrowIcon from "../icons/down-right-arrow-icon";

type DataProps = {
  initialMaterials: Material[];
  initialCurrentPage: number;
  totalPages: number;
  selectedCategory: string;
};

const MaterialList: React.FC<DataProps> = ({
  initialMaterials,
  initialCurrentPage,
  totalPages,
  selectedCategory,
}) => {
  const [materials, setMaterials] = useState(initialMaterials);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [isLoading, setIsLoading] = useState(false);

  /* On regroupe les projets 2 par 2 pour le rendu colonne décalé */
  const NUM_COLUMNS = 2;
  const numLines = useMemo(() => Math.ceil(materials.length / NUM_COLUMNS), [
    materials,
  ]);
  const lines = useMemo(() => Array.from({ length: numLines }), [numLines]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await get<any>(
        `/materiautheque${
          selectedCategory ? `-${selectedCategory}` : ""
        }-${currentPage}.json`
      );

      if (result === {}) return;

      setMaterials(oldMaterials => [
        ...oldMaterials,
        ...result.map(d => d.material),
      ]);
    } catch (error) {
      // TODO: handle error
    }
    setIsLoading(false);
  }, [currentPage]);

  return (
    <div className="grid grid-cols-1 gap-18">
      {lines.map((_, lineIndex) => (
        <div
          key={lineIndex}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-14 lg:gap-x-18 xl:gap-x-22 2xl:gap-x-24 gap-y-18"
        >
          {materials
            .slice(lineIndex * NUM_COLUMNS, (lineIndex + 1) * NUM_COLUMNS)
            .map((material, rowIndex) => (
              <MaterialListItem
                key={material.id}
                material={material}
                className={`${
                  rowIndex === 0 ? "" : "md:mt-26 lg:mt-30 xl:mt-34"
                }`}
              />
            ))}
        </div>
      ))}
      {totalPages > currentPage && (
        <div className="flex justify-end">
          {!isLoading && (
            <button
              type="button"
              onClick={() => {
                setCurrentPage(currentPage + 1);
                fetchData();
              }}
              className="group flex items-center text-4xl md:text-6.1xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
            >
              <span className="mt-1.5 border-b-6 transition duration-200 ease-in-out transform border-transparent group-hover:border-gris-800">
                Voir plus
              </span>
              <DownRightArrowIcon className="w-6 h-6 md:w-11 md:h-11 ml-4 mt-2" />
            </button>
          )}
          {isLoading && (
            <div className="text-4xl md:text-6.1xl font-bold">
              Chargement ...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MaterialList;
