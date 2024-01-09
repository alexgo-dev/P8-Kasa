import React from 'react'
import Image from '../../assets/image.png';
import Image2 from '../../assets/image2.png'
import { useLocation } from 'react-router-dom';

export default function Banner() {
    const location = useLocation();
    if (location.pathname === "/") {
        return (
            <div className="banner">
                <div className="banner__overlay"></div>
                <img src={Image} alt="bannière" />
                <p>Chez vous, partout et ailleurs</p>
            </div>
        )
    } else if (location.pathname === "/about") {
        return (
            <div className="banner2">
                <div className="banner__overlay"></div>
                <img src={Image2} alt="bannière 2" />
            </div>
        )
    }
}