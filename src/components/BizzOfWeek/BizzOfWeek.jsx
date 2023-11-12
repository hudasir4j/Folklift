import React from 'react'
import './BizzOfWeek.css'
import {bizzofweek} from '../../assets/data/data'




function BizzOfWeek() {


  return (
    <div className='BizzOfWeek'>
      

        <section>
        <div className='box' id='smallBizzWeek'>
          <h2>Small Business of the Week</h2>
        </div>
        <div className='box descriptionBox'>
          <h3 className='companyName'>{bizzofweek.at(0).title}</h3>
          <p>{bizzofweek.at(0).desc}</p>
          <button>learn more</button>
        </div>
        <div className='box' id='bizzOfWeekImg'>
          <img src={bizzofweek.at(0).cover} alt="image not found" />
        </div>

      </section>



        
    </div>
  )
}

export default BizzOfWeek