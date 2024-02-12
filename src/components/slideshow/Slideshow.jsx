import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../logements.json';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';

export default function Slideshow() {
    const { id } = useParams();
    const article = datas.find((element) => element.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const displaySlide = () => {
        const slide = article.pictures[currentImageIndex];
        const imageElement = document.querySelector('.slideshow div');

        if (imageElement && slide) {
            imageElement.style.backgroundImage = `url(${slide})`;
        }
    };

    useEffect(() => {
        const numberElement = document.querySelector('.number');
        const previousElement = document.querySelector('.arrowLeft');
        const nextElement = document.querySelector('.arrowRight');

        if (article.pictures.length === 1) {
            if (numberElement) {
                numberElement.style.display = 'none';
            }

            if (previousElement) {
                previousElement.style.display = 'none';
            }

            if (nextElement) {
                nextElement.style.display = 'none';
            }
        }

        displaySlide(); // Use displaySlide function

    }, [article.pictures.length, displaySlide]); // Include displaySlide in the dependency array

    if (!article) {
        return <div>Logement introuvable</div>;
    }

    const previousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex(article.pictures.length - 1);
        }
    };

    const nextImage = () => {
        if (currentImageIndex < article.pictures.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImageIndex(0);
        }
    };

    return (
        <div className="slideshow">
            <div>
                <img onClick={previousImage} className="arrowLeft" src={arrowLeft} alt="flèche gauche" />
                <div className="number">
                    {currentImageIndex + 1} / {article.pictures.length}
                </div>
                <img onClick={nextImage} className="arrowRight" src={arrowRight} alt="flèche droite" />
            </div>
        </div>
    );
}
