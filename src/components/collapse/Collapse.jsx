import React, { useState } from "react";
import arrow from "../../assets/arrow.png";
import { useLocation } from "react-router-dom";

export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    const isLogementPage = location.pathname.startsWith("/logement/");
    const paddingValue = isLogementPage ? "0px" : undefined;
    
    return (
        <div className="collapsePadding" style={{ padding: paddingValue}}>
            <div className={`collapse ${isOpen ? 'collapse__dropdown--open' : ''}`}>
                <div className="collapse__dropdown">
                    <h3 className="collapse__dropdown__title">
                        {props.title}
                        <img
                            className={`collapse__dropdown__arrow ${isOpen ? 'collapse__dropdown__arrow--down' : 'collapse__dropdown__arrow--up'
                                }`}
                            onClick={toggleContent}
                            src={arrow}
                            alt="afficher le contenu"
                        />
                    </h3>
                    {isOpen && <div className="collapse__dropdown__txt">{props.content}</div>}
                </div>
            </div>
        </div>
    );
}
