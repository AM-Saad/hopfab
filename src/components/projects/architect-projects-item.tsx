import React from "react";
import { Project } from "../../models/project";

type DataProps = {
    projet: Project;
    className: string;
};

const ProjectListItem: React.FC<DataProps> = ({ projet, className }) => {
    return (
        <div className={className}>
        <div className="projects-section_item ">
                <div
                    className="flex overflow-hidden items-start" style={{ maxHeight:'800px' }}
            >
                    <img
                        src="/projets.jpg"
                        alt={"projets"}
                        className="w-full"
                    />
            </div>
        </div>
        </div>
    );
};

export default ProjectListItem;
