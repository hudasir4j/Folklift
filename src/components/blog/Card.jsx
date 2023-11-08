import React from 'react'
import './Blog.css'
import { blog } from "../../assets/data/data"
import {AiOutlineTags} from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { AiOutlineComment } from 'react-icons/ai'
import { AiOutlineShareAlt } from 'react-icons/ai'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Card = () => {
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {blog.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                    <div className="outlineTag">
                        <AiOutlineTags className='icon' />
                        <a href='/'>#{item.category}</a>
                    </div>
                </div>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Card
