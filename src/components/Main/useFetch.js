import { useState, useEffect } from "react"

export const useFetch = () => {
  const urls = [
    "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0x0f50105a89a74029f412ab43c0ffe109ebd1d087&apikey=AQUHCJTIVS7S6Z6GSY5H3DTIH972F7E7NK",
    "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0xb99ddaa704cf8cf6ecd34265835fcb0db627bdaf&apikey=AQUHCJTIVS7S6Z6GSY5H3DTIH972F7E7NK",
    "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0xc0e9b7ad4a22b1c4603b7d2805dfe0b4be4cdaba&apikey=AQUHCJTIVS7S6Z6GSY5H3DTIH972F7E7NK",
    "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0x28bf81787031c70c901efb6487ac1bb2a6630311&apikey=AQUHCJTIVS7S6Z6GSY5H3DTIH972F7E7NK",
    "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0xf0a5717ec0883ee56438932b0fe4a20822735fba&apikey=AQUHCJTIVS7S6Z6GSY5H3DTIH972F7E7NK",
    "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0xc4c251c7d7c2f1165176e3bf503276fb0df05daa&apikey=AQUHCJTIVS7S6Z6GSY5H3DTIH972F7E7NK",
    "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0x93b135416a1796707b273ad709099d47adda18d6&apikey=AQUHCJTIVS7S6Z6GSY5H3DTIH972F7E7NK",
    "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0x9f8cfc08f781e1576a05d4d3669b3e6ff22913ff&apikey=AQUHCJTIVS7S6Z6GSY5H3DTIH972F7E7NK",
    "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0x216d135926f5ec9e5924564a342580b0b5a3bdc6&apikey=AQUHCJTIVS7S6Z6GSY5H3DTIH972F7E7NK",
    "https://api.arbiscan.io/api?module=account&action=tokenbalance&contractaddress=0xff970a61a04b1ca14834a43f5de4533ebddb5cc8&address=0x8D35b8f4Ee0437EEe49CeA0Dc82F9ba82d52e578&tag=latest&apikey=AQUHCJTIVS7S6Z6GSY5H3DTIH972F7E7NK",
    "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb&address=0x314022E24ceD941781DC295682634B37Bd0d9cFc&tag=latest&apikey=21C5ETURPUX11VQBPF99N4W9SYYT7ET8TM",
    `https://api.coingecko.com/api/v3/coins/xtoken`,
  ]

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [CSupply, setCSupply] = useState(0)
  const [SSupply, setSSupply] = useState(0)
  const [ASupply, setASupply] = useState(0)
  const [TVL, setTVL] = useState(0)
  const [xtkPrice, setXtkPrice] = useState(0)
  const [tradingVolume, setTradingVolume] = useState(0)
  const [exchangeData, setExchangeData] = useState([])
  let caughtError = false
  const formatNumber = (raw) => {
    return raw.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1, ")
  }

  //fetches and process all data
  async function dataFetch() {
    // const startTime = performance.now()
    let fetchDelay = 0
    const delayIncrement = 1100 //limit for arbiscan api calls is 5/1sec so wait 1s before 6th api call
    const promises = urls.map((url, index) => {
      if (index === 5) {
        fetchDelay += delayIncrement
      }
      return new Promise((resolve) => setTimeout(resolve, fetchDelay)).then(
        () =>
          fetch(url)
            .then((response) => response.json())
            .then((response) => {
              if (index === 4) {
                const supply = Math.round(response.result / 10 ** 22) / 100
                setASupply(supply)
                if (supply > 1) {
                  return supply + " mill"
                } else {
                  return null
                }
              } else if (
                index === 5 ||
                index === 6 ||
                index === 7 ||
                index === 8
              ) {
                const num = Math.round(response.result / 10 ** 18)
                if (num > 1) {
                  return "$" + formatNumber(num)
                } else {
                  return null
                }
              } else if (index === 9) {
                const usdc = Math.round(response.result / 10 ** 6)
                if (usdc > 1) {
                  return "$" + formatNumber(usdc)
                } else {
                  return null
                }
              } else if (index === 10) {
                const staked = Math.round(response.result / 10 ** 22) / 100
                setSSupply(staked)
                return staked + " mill"
              } else if (index < 4) {
                return response.result
              } else if (index === 11) {
                const data = response
                console.log(data)

                const supply =
                  Math.round(data.market_data.circulating_supply / 10 ** 4) /
                  100
                setCSupply(Math.round(supply))
                const cgTVL = data.market_data.total_value_locked.usd
                setTVL("$" + formatNumber(cgTVL))
                console.log("TVL is " + formatNumber(cgTVL))

                //process all data together for XTOKEN trading SECTION'S DATA
                const avgPrice = parseFloat(
                  data.market_data.current_price.usd.toFixed(3)
                )
                const totalVolume = parseFloat(
                  Math.round(data.market_data.total_volume.usd)
                )
                const priceData = data.tickers.map((item) => {
                  const {
                    market: { name },
                    converted_last: { usd },
                    trust_score,
                    trade_url,
                  } = item
                  const volume = Math.round(item.converted_volume.usd)

                  const price = parseFloat(usd.toFixed(3))
                  return { name, price, trust_score, trade_url, volume }
                })

                setXtkPrice(avgPrice)
                setTradingVolume(totalVolume)
                setExchangeData(priceData)
              }
            })
            .catch((error) => {
              if (!caughtError) {
                window.alert(
                  "If you have an AD BLOCKER enabled, PLEASE DISABLE it and refresh (Ad blocker prevents data fetching)"
                )
                caughtError = true
              }
            })
      )
    })

    const results = await Promise.all(promises) //fetch all promises and it will return formatted data
    setData(results)

    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    dataFetch()
  }, [])

  return {
    loading,
    data,
    CSupply,
    SSupply,
    ASupply,
    TVL,
    xtkPrice,
    tradingVolume,
    exchangeData,
  }
}
