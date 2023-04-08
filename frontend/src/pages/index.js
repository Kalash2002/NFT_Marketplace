import React from "react";

import Styles from "../styles/index.module.css";
import {
  HeroSection,
  Services,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,AudioLive
} from "../../Components/componentIndex";

const Home = () => {
  return (
    <div className={Styles.homePage}>
      <HeroSection />
      <Services />
      <BigNFTSlider />
      <Title
        heading="Latest Audio Collections"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive/>
      <Title
        heading="Filter By Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <FollowerTab/>
      <Collection/>
      <Title
        heading="Featured NFT's"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard/>
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
