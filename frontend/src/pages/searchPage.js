import React from 'react'
import Style from '../styles/searchPage.module.css'
import { Banner } from '../../collectionPage/collectionIndex'
import { Filter,Slider,Brand } from '../../Components/componentIndex'
import { SearchBar } from '../../SearchPage/SearchBarIndex'
import { NFTCardTwo } from '../../collectionPage/collectionIndex'
import images from '../../img'

const searchPage = () => {
    const collectiablesArray = [
        { image: images.nft_image_1, name: "Kalash" },
        { image: images.nft_image_2, name: "Kalash" },
        { image: images.nft_image_3, name: "Kalash" },
        { image: images.nft_image_3, name: "Kalash" },
        { image: images.nft_image_1, name: "Kalash" },
        { image: images.nft_image_3, name: "Kalash" },
        { image: images.nft_image_2, name: "Kalash" },
        { image: images.nft_image_1, name: "Kalash" },
        { image: images.nft_image_3, name: "Kalash" },
      ];
  return (
    <div className={Style.searchPage}>
        <Banner  bannerImage={images.creatorbackground2}/>
        <SearchBar/>
        <Filter/>
        <NFTCardTwo NFTData={collectiablesArray}/>
        <Slider/>
        <Brand/>
    </div>
  )
}

export default searchPage
