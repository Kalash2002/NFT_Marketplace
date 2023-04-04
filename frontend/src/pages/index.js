import React from 'react'

import Styles from'../styles/index.module.css';
import { HeroSection } from '../../Components/componentIndex';

const Home = () => {
  return (
    <div className={Styles.homePage}>
        <HeroSection/>
    </div>
  )
}

export default Home;
