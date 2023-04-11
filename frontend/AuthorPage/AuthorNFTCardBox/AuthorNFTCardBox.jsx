import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import { Loader } from "../../Components/componentIndex";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
}) => {
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

  const createdArray = [
    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_2, name: "Kalash" },
    { image: images.nft_image_1, name: "Kalash" },
    { image: images.nft_image_3, name: "Kalash" },
  ];

  const likeArray = [

    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_1, name: "Kalash" },
    { image: images.nft_image_3, name: "Kalash" },
    { image: images.nft_image_2, name: "Kalash" },

  ];

  const followerArray = [
    { image: images.user1, name: "Kalash" },
    { image: images.user2, name: "Kalash" },
    { image: images.user3, name: "Kalash" },
    { image: images.user4, name: "Kalash" },
    { image: images.user5, name: "Kalash" },
    { image: images.user6, name: "Kalash" },
    { image: images.user7, name: "Kalash" },
    { image: images.user8, name: "Kalash" },
    { image: images.user9, name: "Kalash" },
  ];

  const followingArray = [
    { image: images.user6, name: "Kalash" },
    { image: images.user7, name: "Kalash" },
    { image: images.user8, name: "Kalash" },
    { image: images.user9, name: "Kalash" },
    { image: images.user1, name: "Kalash" },
    { image: images.user2, name: "Kalash" },
    { image: images.user3, name: "Kalash" },
    { image: images.user4, name: "Kalash" },

  ];

  //   const followerArray = [
  //     {
  //       background: images.creatorbackground1,
  //       user: images.user1,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //     {
  //       background: images.creatorbackground2,
  //       user: images.user2,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //     {
  //       background: images.creatorbackground3,
  //       user: images.user3,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //     {
  //       background: images.creatorbackground4,
  //       user: images.user4,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //     {
  //       background: images.creatorbackground5,
  //       user: images.user5,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //     {
  //       background: images.creatorbackground6,
  //       user: images.user6,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //   ];

  //   const followingArray = [
  //     {
  //       background: images.creatorbackground3,
  //       user: images.user3,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //     {
  //       background: images.creatorbackground4,
  //       user: images.user4,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //     {
  //       background: images.creatorbackground5,
  //       user: images.user5,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //     {
  //       background: images.creatorbackground6,
  //       user: images.user6,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //     {
  //       background: images.creatorbackground1,
  //       user: images.user1,
  //       seller: "d84ff74hf99999f9974hf774f99f",
  //     },
  //   ];
  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
