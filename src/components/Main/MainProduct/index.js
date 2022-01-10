import React from "react"
import {
  ProductRow,
  LeverageProduct,
  LendProduct,
  Product,
  ProductWrapper,
  EarnProduct,
} from "./MainProductElements"
import EthLogo from "../../../images/ETH.svg"
import BtcLogo from "../../../images/BTC.svg"
import Eth3x from "../../../images/3up_xETH3x.svg"
import Btc3x from "../../../images/3up_xBTC3x.svg"
import usdc from "../../../images/usdc.svg"
import open_hand from "../../../images/open_hand.svg"
import dai_usdc from "../../../images/dai_usdc.svg"
import tether_usdc from "../../../images/tether_usdc.svg"
import MainHeader from ".././MainHeader"

const MainProduct = ({ data, loading }) => {
  return (
    <ProductWrapper>
      <Product>
        <MainHeader loading={loading} message={<>xLend</>} em={"Arbitrum"} />
        <ProductRow>
          <LendProduct>
            <img src={usdc} alt="" />
            <img src={open_hand} alt="" />
            <h4>
              {loading ? (
                <p>loading</p>
              ) : data[9] ? (
                <p>TVL: {data[9]}</p>
              ) : (
                "please reload page"
              )}
            </h4>
          </LendProduct>
        </ProductRow>
      </Product>
      <Product>
        <MainHeader loading={loading} message={<>xEarn</>} em={"Arbitrum"} />
        <ProductRow>
          <EarnProduct>
            <img src={dai_usdc} alt="" />
            <h3>
              xU3LP <em>A</em>
            </h3>
            <h4>
              {loading ? (
                <p>loading</p>
              ) : data[7] ? (
                `${data[7]} deposited`
              ) : (
                "please reload page"
              )}
            </h4>
          </EarnProduct>
          <EarnProduct>
            <img src={tether_usdc} alt="" />
            <h3>
              xU3LP <em>B</em>
            </h3>
            <h4>
              {loading ? (
                <p>loading</p>
              ) : data[8] ? (
                `${data[8]} deposited`
              ) : (
                "please reload page"
              )}
            </h4>
          </EarnProduct>
        </ProductRow>
      </Product>
      <Product>
        <MainHeader
          loading={loading}
          message={<>xLeverage</>}
          em={"Arbitrum"}
        />
        <ProductRow>
          <LeverageProduct>
            <img src={EthLogo} alt="" />
            <img src={Eth3x} alt="" />
            <h4>
              {loading ? (
                <p>loading</p>
              ) : data[5] ? (
                `${data[5]} deposited`
              ) : (
                "please reload page"
              )}
            </h4>
          </LeverageProduct>
          <LeverageProduct>
            <img src={BtcLogo} alt="" />
            <img src={Btc3x} alt="" />
            <h4>
              {loading ? (
                <p>loading</p>
              ) : data[6] ? (
                `${data[6]} deposited`
              ) : (
                "please reload page"
              )}
            </h4>
          </LeverageProduct>
        </ProductRow>
      </Product>
    </ProductWrapper>
  )
}

export default MainProduct
