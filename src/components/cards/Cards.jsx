import React from 'react';
import { Link } from 'react-router-dom';
import datas from "../../logements.json"

export default function Card() {
    return (
        <main className="cards">
            {datas.map(data => (
                <Link to={`/logement/${data.id}`} className="card" key={data.id}>
                    <img src={data.cover} alt={data.title} />
                    <div className="card__overlay"></div>
                    <h2>{data.title}</h2>
                </Link>
            ))}
        </main>
    );
}