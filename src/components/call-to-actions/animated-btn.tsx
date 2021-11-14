import React from "react";
import { Link } from "gatsby";


type DataProps = {
    className?: string;
};

const animatedBtn: React.FC<DataProps> = ({link, className, content, firstSpan,secondSpan }) => {
    return (
        <Link
            to={link}
            className={className}
        > 
            <span className={`${firstSpan ?? " "} animated button-text`}> {content}</span>
            <span className={`${secondSpan ?? " "}animated button-text`}>{content}</span>
            <span className={` opacity-0 button-text`}>{content}</span>

            </Link>);
};

export default animatedBtn;
