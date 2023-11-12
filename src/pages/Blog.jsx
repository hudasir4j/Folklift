import React from 'react'
import Category from '../components/Category/Category'
import Card from '../components/blog/Card'
import transition from '../transition'
import { Helmet } from 'react-helmet';


export const Blog = ()=>{
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" name='blog page' content='Folklift is a non-profit student led initiative to promote SMALL BUSINESSES. Beginning with the BAY AREA, and targetting MUSLIM-OWNED businesses, Folklift aims to expand their influence through different regions and support more underrepresented small businesses.'/>
                <title>Folklift | Stories</title>
                <link rel="link" href="/blog" />
            </Helmet>

            <Category/>
            <Card/>
        </>
    )
}

export default transition(Blog);
