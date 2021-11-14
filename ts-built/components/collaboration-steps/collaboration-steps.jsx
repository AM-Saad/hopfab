"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var collaboration_step_section_1 = require("./collaboration-step-section");
var CollaborationSteps = function (_a) {
    var className = _a.className, collaborationSteps = _a.collaborationSteps;
    return (<dl className={className}>
      {collaborationSteps.map(function (collaborationStep, index) { return (<collaboration_step_section_1.default key={index} index={index + 1} title={collaborationStep.title} content={collaborationStep.content} defaultIsOpen={collaborationStep.defaultIsOpen} defaultShowIndex={collaborationStep.defaultShowIndex}/>); })}
    </dl>);
};
exports.default = CollaborationSteps;
//# sourceMappingURL=collaboration-steps.jsx.map