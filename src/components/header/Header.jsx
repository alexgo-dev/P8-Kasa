import React from 'react'
import Logo from "../../assets/logo.png"
import Navbar from '../navbar/Navbar'


export default function Header() {
    

    return (
        <header>
            <h1>
                <img src={Logo} alt="Logo Kasa" />
            </h1>
            <Navbar/>
        </header>
    )
}

