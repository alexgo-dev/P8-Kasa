import React from 'react'
import Image from "../../assets/image.png";

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner__overlay"></div>
            <img src={Image} alt="bannière" />
            <p>Chez vous,<br/> partout et ailleurs</p>
        </div>
    )
}