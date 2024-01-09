import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();


    return (
        <nav>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">Accueil</Link>
            <Link className={location.pathname === "/about" ? "active" : ""} to="/about">A Propos</Link>
        </nav>
    )
}
