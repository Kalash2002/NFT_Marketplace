import React from "react";

import Styles from "../styles/index.module.css";
import {
  HeroSection,
  Services,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
} from "../../Components/componentIndex";

const Home = () => {
  return (
    <div className={Styles.homePage}>
      <HeroSection />
      <Services />
      <BigNFTSlider />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Category/>
      <Subscribe />
    </div>
  );
};

export default Home;
