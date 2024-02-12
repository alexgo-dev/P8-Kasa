import React from 'react'
import Banner from '../../components/banner/Banner'
import Collapse from '../../components/collapse/Collapse'
import aboutTxt from '../../aboutTxt.json'

export default function About() {


    return (
        <div>
            <Banner />
            {aboutTxt.map((data) => (
                    <Collapse
                        key={data.id}
                        id={data.id}
                        title={data.Title}
                        content={data.Text}
                    />
            ))}
        </div>
    )
}
