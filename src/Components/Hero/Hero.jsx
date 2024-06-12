import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
import hand_icon from '../Assets/hand_icon.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div className="">
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="Hand" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="Hero Image" />
        </div>
    </div>
  )
}
