"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const collaboration_step_section_1 = require("./collaboration-step-section");
const CollaborationSteps = ({ className, collaborationSteps, }) => {
    return (<dl className={className}>
      {collaborationSteps.map((collaborationStep, index) => (<collaboration_step_section_1.default key={index} index={index + 1} title={collaborationStep.title} content={collaborationStep.content} defaultIsOpen={collaborationStep.defaultIsOpen} defaultShowIndex={collaborationStep.defaultShowIndex}/>))}
    </dl>);
};
exports.default = CollaborationSteps;
