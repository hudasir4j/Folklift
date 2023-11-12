import React from 'react'
import BizzOfWeek from '../components/BizzOfWeek/BizzOfWeek'
import transition from '../transition';
import Category from '../components/Category/Category'
import Card from '../components/blog/Card'
import { Helmet } from 'react-helmet';

export const Home = ()=>{
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" name='home page' content='Folklift is a non-profit student led initiative to promote SMALL BUSINESSES. Beginning with the BAY AREA, and targetting MUSLIM-OWNED businesses, Folklift aims to expand their influence through different regions and support more underrepresented small businesses.'/>
                <title>Folklift | Home</title>
                <link rel="link" href="/" />
            </Helmet>

            <BizzOfWeek {...BizzOfWeek}/>
        </>
    )
}

export default transition(Home);
