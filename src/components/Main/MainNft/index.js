import React from "react"
import { NFTRow, NftBox, LoadingBar, Line } from "./MainNftElements"
import GM_image from "../../../images/GM_NFT.png"
import GA_image from "../../../images/GA_NFT.png"
import GN_image from "../../../images/GN_NFT.png"
import WAGMI_image from "../../../images/WAGMI_NFT.png"

const MainNft = ({ apiNames, data, loading }) => {
  return (
    <NFTRow>
      <NftBox>
        <img src={GM_image} alt="GM NFT" />
        {loading ? (
          <LoadingBar>
            <Line />
          </LoadingBar>
        ) : (
          <h3>
            The {apiNames[0]} is {data[0]}
          </h3>
        )}
      </NftBox>
      <NftBox>
        <img src={GA_image} alt="GA NFT" />
        {loading ? (
          <LoadingBar>
            <Line />
          </LoadingBar>
        ) : (
          <h3>
            The {apiNames[1]} is {data[1]}
          </h3>
        )}
      </NftBox>
      <NftBox>
        <img src={GN_image} alt="GN NFT" />
        {loading ? (
          <LoadingBar>
            <Line />
          </LoadingBar>
        ) : (
          <h3>
            The {apiNames[2]} is {data[2]}
          </h3>
        )}
      </NftBox>
      <NftBox>
        <img src={WAGMI_image} alt="WAGMI NFT" />
        {loading ? (
          <LoadingBar>
            <Line />
          </LoadingBar>
        ) : (
          <h3>
            The {apiNames[3]} is {data[3]}
          </h3>
        )}
      </NftBox>
    </NFTRow>
  )
}

export default MainNft
