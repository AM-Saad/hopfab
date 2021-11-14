"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ProjectListItem = ({ projet, className }) => {
    return (<div className={className}>
        <div className="projects-section_item ">
                <div className="flex overflow-hidden items-start" style={{ maxHeight: '800px' }}>
                    <img src="/projets.jpg" alt={"projets"} className="w-full"/>
            </div>
        </div>
        </div>);
};
exports.default = ProjectListItem;
