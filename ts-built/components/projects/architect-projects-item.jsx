"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ProjectListItem = function (_a) {
    var projet = _a.projet, className = _a.className;
    return (<div className={className}>
        <div className="projects-section_item ">
                <div className="flex overflow-hidden items-start" style={{ maxHeight: '800px' }}>
                    <img src="/projets.jpg" alt={"projets"} className="w-full"/>
            </div>
        </div>
        </div>);
};
exports.default = ProjectListItem;
//# sourceMappingURL=architect-projects-item.jsx.map