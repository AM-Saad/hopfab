import React, { useState } from "react";
import parse from "html-react-parser";

import ChevronDownIcon from "../components/icons/chevron-down-icon";

type DataProps = {
  question: string;
  response: string;
};

const FaqSection: React.FC<DataProps> = ({ question, response }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-6">
      <dt className="text-lg">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-left w-full flex justify-between items-start text-gray-400 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brown-700"
        >
          <span className="font-medium text-gris-800">
            {parse(question ?? "")}
          </span>
          <span className="ml-6 h-7 flex items-center">
            <ChevronDownIcon
              className={`${
                isOpen ? "-rotate-180" : "rotate-0"
              } h-6 w-6 transform`}
            />
          </span>
        </button>
      </dt>
      <dd className={`${isOpen ? "" : "hidden"} mt-2 pr-12`}>
        <div className="text-base text-gray-500">{parse(response ?? "")}</div>
      </dd>
    </div>
  );
};

export default FaqSection;
