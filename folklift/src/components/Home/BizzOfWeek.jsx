import React from 'react'
import './CSS/BizzOfWeek.css'
import '/Users/sameehasiraj/folklift/src/react tutorial/trees.jpeg'


function BizzOfWeek() {

  



  return (
    <div>
        <section>
            <div className='box' id='smallBizzWeek'>
              <h2>Small Business of the Week</h2>
            </div>
            <div className='box'>
              <h3 className='companyName'>Ambre Henna</h3>
              <p>Ambre Henna is a muslim-owned business where the founder, Ambre, creates intricate henna designs on clients from her Pakistani background. Henna can be great for all ocassions such as Eid or Diwali, or even for casual wear. Ambre makes her own products at home with a wide variety including henna sealant, henna cones, resin henna designs, and more. </p>
            </div>
            <div className='box' id='bizzOfWeekImg'>
              <img src={require("/Users/sameehasiraj/folklift/src/react tutorial/trees.jpeg")} alt="image not found" />
              <button>learn more</button>
            </div>

        </section>
    </div>
  )
}

export default BizzOfWeek
