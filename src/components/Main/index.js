import { Wrapper, MainTvl } from "./MainElements"
import MainHeader from "./MainHeader"
import MainNft from "./MainNft"
import MainProduct from "./MainProduct"
import MainSupply from "./MainSupply"
import MainTrading from "./MainTrading"
import { useFetch } from "./useFetch"
import Footer from "../Footer"
const apiNames = [
  "GM NFT supply",
  "GA NFT supply",
  "GN NFT supply",
  "WAGMI NFT supply",
  "XTK Supply on Arbitrum",
  "xETH3x TVL",
  "xBTC3x TVL",
  "xU3LPa TVL",
  "xU3LPb TVL",
  "xLend TVL",
  "amount of staked XTK",
  "xtoken coingecko data",
]

const Main = () => {
  const {
    loading,
    data,
    CSupply,
    SSupply,
    ASupply,
    TVL,
    xtkPrice,
    tradingVolume,
    exchangeData,
  } = useFetch()

  return (
    <Wrapper>
      <MainHeader
        loading={loading}
        message={<>xToken NFTs</>}
        em={"Arbitrum"}
      />
      <MainNft apiNames={apiNames} data={data} loading={loading} />

      <MainProduct data={data} loading={loading} />
      <MainHeader
        loading={loading}
        message={<>xToken TVL</>}
        em={"All networks"}
      />
      <MainTvl>{!loading && <h3>{TVL}</h3>}</MainTvl>

      <MainHeader
        loading={loading}
        message={<>XTK Supply</>}
        em={"All networks"}
      />
      <MainSupply
        loading={loading}
        CSupply={CSupply}
        SSupply={SSupply}
        ASupply={ASupply}
      />
      <MainHeader
        loading={loading}
        message={<>XTK Trading</>}
        em={"CoinGecko"}
      />
      <MainTrading
        loading={loading}
        xtkPrice={xtkPrice}
        tradingVolume={tradingVolume}
        exchangeData={exchangeData}
      />

      {/* {loading ? (
        <p>loading</p>
      ) : (
        data.map((item, index) => {
          //console.log(item)
          return item ? (
            <p key={index}>
              The {apiNames[index]} is {item}
            </p>
          ) : (
            index < 11 && <p>please reload</p>
          )
        })
      )} */}
      <Footer />
    </Wrapper>
  )
}

export default Main
