import React, { useState } from 'react'
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";

import { FiArrowRight } from "react-icons/fi";


export default function Home() {



  return (

    <div className='home-container'>
      <Navbar />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt='Banner Background' />
        </div>

        <div className='home-text-section'>
          <hi className='primary-heading'>
            Your Favourite Food Delivered Hot & Fresh
          </hi>
          <p className='primary-text'>
          Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.
          </p>
          <button className='secondary-button'>
            Order Naw <FiArrowRight />{' '}
          </button>

        </div>

        <div className='home-image-section'>
          <img src={BannerImage} alt='Banner Image'/>
        </div>

      </div>

    </div>
  )
}
