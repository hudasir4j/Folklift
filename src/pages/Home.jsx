import React from 'react'
import BizzOfWeek from '../components/BizzOfWeek/BizzOfWeek'
import Testimonials from '../components/testimonial/Testimonials';
import transition from '../transition';
import { Helmet } from 'react-helmet';

export const Home = ()=>{
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" name='home page' content='Folklift is a non-profit student led initiative to promote SMALL BUSINESSES. Beginning with the BAY AREA, and targetting MUSLIM-OWNED businesses, Folklift aims to expand their influence through different regions and support more underrepresented small businesses.'/>
                <title>Folklift | Home</title>
                <link rel="link" href="/" />
            </Helmet>

            <BizzOfWeek {...BizzOfWeek} style="border-bottom:#eee solid 2px;"/>
            <Testimonials/>
        </>
    )
}

export default transition(Home);
