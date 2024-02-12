import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../../components/slideshow/Slideshow';
import Collapse from '../../components/collapse/Collapse';
import Rating from '../../components/rating/Rating';
import datas from '../../logements.json';
import NotFound from '../notFound/notFound';

export default function Logement() {
    const { id } = useParams();

    const article = datas.find((element) => element.id === id);

    if (!article) {
        return <NotFound />;
    }

    const fullName = article.host.name;
    const [firstName, lastName] = fullName.split(' ');

    const equipments = article.equipments.map((equipment, index) => (
        <p className='equipments' key={index}>{equipment}</p>
    ));

    return (
        <div>
            <div className="logement" style={{ padding: '0px' }}> {/* Set padding to 0px */}
                <Slideshow />
                <div className='description'>
                    <div className='description__info'>
                        <p className='title'>{article.title}</p>
                        <p className='location'>{article.location}</p>
                        <div className='tags'>{article.tags.map((tag, index) => (
                            <p className='tags--content' key={index}>{tag}</p>
                        ))}</div>
                    </div>

                    <div className='profile'>
                        <div className='user'>
                            <p className='user--name'>{firstName} <br />{lastName}</p>
                            <img className='user--image' src={article.host.picture} alt={article.host.name} />
                        </div>

                        <div className='rating'>
                            <Rating />
                        </div>
                    </div>
                </div>

                <div className='information'>
                    <div className='information__description'>
                        <Collapse title="Description" content={article.description} />
                    </div>
                    <div className='information__equipement'>
                        <Collapse title="Equipment" content={equipments} />
                    </div>
                </div>
            </div>
        </div>
    );
}
