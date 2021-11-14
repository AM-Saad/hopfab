"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const html_react_parser_1 = require("html-react-parser");
const lodash_1 = require("lodash");
const minus_icon_1 = require("../icons/minus-icon");
const plus_icon_1 = require("../icons/plus-icon");
const CollaborationStepSection = ({ index, title, content, defaultIsOpen = false, defaultShowIndex = false, }) => {
    const [isOpen, setIsOpen] = react_1.useState(defaultIsOpen);
    return (<div>
      <dt className={`md:flex justify-start items-center ${defaultShowIndex ? "md:-ml-9" : ""}`}>
        {defaultShowIndex && (<div className="font-bold text-sm mr-4">
            {lodash_1.padStart(index.toString(), 2, "0")}
          </div>)}
        <div className="w-full text-lg border-b border-gris-800">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-left w-full flex items-center justify-between items-start text-gris-800 py-3 pt-1 md:pt-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brown-700">
            <span className="uppercase text-lg md:text-sm lg:text-base xl:text-xl font-bold text-gris-800">
              {title}
            </span>
            <span className="flex items-center ml-6">
              {isOpen ? (<minus_icon_1.default className="w-6 h-6 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"/>) : (<plus_icon_1.default className="w-6 h-6 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"/>)}
            </span>
          </button>
        </div>
      </dt>
      <dd className={`${isOpen ? "" : "hidden"} mt-2 pr-4`}>
        <p className="text-base md:text-xsm lg:text-base xl:text-xl">
          {html_react_parser_1.default(content)}
        </p>
      </dd>
    </div>);
};
exports.default = CollaborationStepSection;
