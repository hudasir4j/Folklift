import React from 'react'
import './AboutUs.css'
import { Helmet } from 'react-helmet';
import transition from '../../../transition';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" name='home page' content='Folklift is a non-profit student led initiative to promote SMALL BUSINESSES. Beginning with the BAY AREA, and targetting MUSLIM-OWNED businesses, Folklift aims to expand their influence through different regions and support more underrepresented small businesses.'/>
            <title>Folklift | About Us</title>
            <link rel="link" href="/about" />
        </Helmet>

        <section className='aboutUs'>
            <div className="ourStory">
                <h1>About Us</h1>
                <p>FOLKLIFT is an initiative started by student cinematographers/filmmakers looking to make a change in their local communities. Infusing our creative ambition and the need for support in local small-businesses, our biggest goal is to uplift community members from diverse backgrounds to make a change in the world, and showcase talent from each and every member of our community. Through interviews, advertisements, and written advertisement, we tell your story in a unique piece. Our initiative is completely non-profit, since we solely want to support small businesses.</p>
            </div>
            <div className="contact">
                <i><h2>Contact Us</h2>
                <ul>
                    <li><a href="mailto:contact.folklift@gmail.com" target='_blank'><FaEnvelope className='icon'/> contact.folklift@gmail.com</a></li>
                    <li><a href=""><FaInstagram className='icon'/> @folkliftig</a></li>
                    <li><a href=""><FaTiktok className='icon'/> @folkliftusa</a></li>
                    <li><a href=""><FaFacebook/> @folkliftusa</a></li>
                </ul>
                </i>
            </div>
        </section>
    </div>
  )
}

export default transition(AboutUs);
