import React from 'react'
import BizzOfWeek from '../components/BizzOfWeek/BizzOfWeek'
import Category from '../components/Category/Category'
import Card from '../components/blog/Card'

export const Home = ()=>{
    return (
        <>
            <BizzOfWeek {...BizzOfWeek}/>
        </>
    )
}

export default Home
