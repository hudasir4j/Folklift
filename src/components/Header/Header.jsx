import React from 'react'
import './Header.css'
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"

function Header() {

    window.addEventListener("scroll",function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 100 )
    })

    return (


        




        <header className='header'>
            <div className='main-div'>
                <div className='top-part'>
                    <h1>THE <span id='folkliftTitle'>FOLKLIFT</span> INITIATIVE</h1>
                    <hr></hr>
                    <header>
                        <div className='navbar'>
                            <ul>
                                {nav.map((link)=>(
                                    <li key={link.id}>
                                        <Link to={link.url}>{link.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </header>
                    <hr></hr>
                </div>
            </div>
        </header>
        
      )
}

export default Header