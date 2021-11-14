import React from "react";

import CollaborationStepSection from "./collaboration-step-section";

export type CollaborationStep = {
  title: string;
  content: string;
  defaultIsOpen?: boolean;
  defaultShowIndex?: boolean;
};

type DataProps = {
  className?: string;
  collaborationSteps: CollaborationStep[];
};

const CollaborationSteps: React.FC<DataProps> = ({
  className,
  collaborationSteps,
}) => {
  return (
    <dl className={className}>
      {collaborationSteps.map((collaborationStep, index) => (
        <CollaborationStepSection
          key={index}
          index={index + 1}
          title={collaborationStep.title}
          content={collaborationStep.content}
          defaultIsOpen={collaborationStep.defaultIsOpen}
          defaultShowIndex={collaborationStep.defaultShowIndex}
        />
      ))}
    </dl>
  );
};

export default CollaborationSteps;
