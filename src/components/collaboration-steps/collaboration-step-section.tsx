import React, { useState } from "react";
import parse from "html-react-parser";
import { padStart } from "lodash";

import MinusIcon from "../icons/minus-icon";
import PlusIcon from "../icons/plus-icon";

type DataProps = {
  index: number;
  title: string;
  content: string;
  defaultIsOpen?: boolean;
  defaultShowIndex?: boolean;
};

const CollaborationStepSection: React.FC<DataProps> = ({
  index,
  title,
  content,
  defaultIsOpen = false,
  defaultShowIndex = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  return (
    <div>
      <dt
        className={`md:flex justify-start items-center ${
          defaultShowIndex ? "md:-ml-9" : ""
        }`}
      >
        {defaultShowIndex && (
          <div className="font-bold text-sm mr-4">
            {padStart(index.toString(), 2, "0")}
          </div>
        )}
        <div className="w-full text-lg border-b border-gris-800">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-left w-full flex items-center justify-between items-start text-gris-800 py-3 pt-1 md:pt-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brown-700"
          >
            <span className="uppercase text-lg md:text-sm lg:text-base xl:text-xl font-bold text-gris-800">
              {title}
            </span>
            <span className="flex items-center ml-6">
              {isOpen ? (
                <MinusIcon className="w-6 h-6 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
              ) : (
                <PlusIcon className="w-6 h-6 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
              )}
            </span>
          </button>
        </div>
      </dt>
      <dd className={`${isOpen ? "" : "hidden"} mt-2 pr-4`}>
        <p className="text-base md:text-xsm lg:text-base xl:text-xl">
          {parse(content)}
        </p>
      </dd>
    </div>
  );
};

export default CollaborationStepSection;
