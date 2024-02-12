import React from 'react';
import { useParams } from 'react-router-dom';
import star from '../../assets/star.png';
import starInactive from '../../assets/star-inactive.png';
import datas from '../../logements.json';

export default function Rating() {
    const { id } = useParams();
    const article = datas.find((element) => element.id === id);
    const ratingValue = parseInt(article.rating, 10);
    const totalStars = 5;

    return (
        <div className="stars">
            {Array.from({ length: totalStars }).map((_, index) => (
                <span key={index}>
                    {index < ratingValue ? (
                        <img src={star} alt="star" />
                    ) : (
                        <img src={starInactive} alt="star-inactive" />
                    )}
                </span>
            ))}
        </div>
    );
}