import React, { useState } from "react";

export interface AccordionProps {
    title: string; 
    content: string;
}

export const Accordion: React.FunctionComponent<AccordionProps> = ({ title, content }) => {

    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className="accordion-main">
            <div className="container-styles">
                <div className="accordion-header" onClick={() => setOpen(!isOpen)}>
                    <div>{title || ''}</div>
                    <div>{isOpen ? '-' : '+'}</div>
                </div>
                {!!isOpen && <div className="accordion-content">{content || ''}</div>}
            </div>
        </div>
    );
};