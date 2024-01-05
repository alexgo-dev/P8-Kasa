import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner';
import Card from '../../components/cards/Cards';

export default function Home() {

    return (
        <body>
            <div>
                <Header />
                <Banner />
                <Card />
            </div>
        </body>
    )
}
