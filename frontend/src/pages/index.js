import React from 'react'

import Styles from'../styles/index.module.css';
import { HeroSection,Services,BigNFTSlider } from '../../Components/componentIndex';

const Home = () => {
  return (
    <div className={Styles.homePage}>
        <HeroSection/>
        <Services/>
        <BigNFTSlider/>
    </div>
  )
}

export default Home;
