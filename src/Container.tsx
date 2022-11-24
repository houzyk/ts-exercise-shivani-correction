import React from "react";
import './Container.css';

export interface ContainerProps {
    title: string;
    content: string;
}

export const Component1: React.FC<ContainerProps> = ({
    title, content
}) => {
    return (
        <div className="container-styles">
            <h3>{title || ''}</h3>
            <p>{content || ''}</p>
        </div>
    );
}