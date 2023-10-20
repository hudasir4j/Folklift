import React from 'react'
import './CSS/Navbar.css'

function Navbar() {
    return (
        <div className='main-div'>
            <div className='top-part'>
                <h1>THE <span id='folkliftTitle'>FOLKLIFT</span> INITIATIVE</h1>
                <hr></hr>
                <header>
                    <div className='navbar'>
                        <ul>
                            <li><a>About Us |</a></li>
                            <li><a>Businesses |</a></li>
                            <li><a>Map |</a></li>
                            <li><a>Our Community</a></li>
                        </ul>
                    </div>
                </header>
                <hr></hr>
            </div>
            
        </div>
      )
}

export default Navbar
