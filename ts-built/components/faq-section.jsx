"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var html_react_parser_1 = require("html-react-parser");
var chevron_down_icon_1 = require("../components/icons/chevron-down-icon");
var FaqSection = function (_a) {
    var question = _a.question, response = _a.response;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    return (<div className="pt-6">
      <dt className="text-lg">
        <button onClick={function () { return setIsOpen(!isOpen); }} className="text-left w-full flex justify-between items-start text-gray-400 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brown-700">
          <span className="font-medium text-gris-800">
            {html_react_parser_1.default(question !== null && question !== void 0 ? question : "")}
          </span>
          <span className="ml-6 h-7 flex items-center">
            <chevron_down_icon_1.default className={(isOpen ? "-rotate-180" : "rotate-0") + " h-6 w-6 transform"}/>
          </span>
        </button>
      </dt>
      <dd className={(isOpen ? "" : "hidden") + " mt-2 pr-12"}>
        <div className="text-base text-gray-500">{html_react_parser_1.default(response !== null && response !== void 0 ? response : "")}</div>
      </dd>
    </div>);
};
exports.default = FaqSection;
//# sourceMappingURL=faq-section.jsx.map