"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const router_1 = require("@reach/router");
const down_right_arrow_icon_1 = require("./icons/down-right-arrow-icon");
const LinkWithArrow = ({ className, to, children }) => {
    return (<gatsby_1.Link to={to} className={`group ${className}`}>
      <router_1.Match path={to}>
        {({ match }) => (<>
            {children}
            <down_right_arrow_icon_1.default className={`transition duration-200 ease-in-out transform ml-1 mt-0.5 ${!match ? "opacity-0 -translate-x-1 -translate-y-1 " : ""} group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0`}/>
          </>)}
      </router_1.Match>
    </gatsby_1.Link>);
};
exports.default = LinkWithArrow;
