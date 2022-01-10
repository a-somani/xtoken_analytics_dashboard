import React from "react"
import {
  ExchangeRow,
  ExchangeBox,
  ExchangeMessage,
} from "./MainTradingElements"

const MainSupply = ({ loading, xtkPrice, exchangeData, tradingVolume }) => {
  const formatNumber = (raw) => {
    return raw.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1, ")
  }

  return (
    <>
      <ExchangeRow>
        {!loading && (
          <>
            <ExchangeBox>
              <h4>24HR Aggregate</h4>
              <ExchangeMessage>
                Volume:
                <br />
                {"$" + formatNumber(tradingVolume)}
                <br />
                <br />
                Price:
                <br /> {"$" + xtkPrice}
              </ExchangeMessage>
            </ExchangeBox>
            {exchangeData.map((exchange, index) => {
              const { name, price, trust_score, trade_url, volume } = exchange
              const volumeRatio =
                Math.round((volume * 100) / tradingVolume) / 100

              return (
                <>
                  <ExchangeBox circlePercent={1 - volumeRatio} index={index}>
                    <h4>
                      {name.indexOf("Arbitrum") > 0 ? (
                        <>
                          {name.substring(0, name.indexOf("Arbitrum"))}
                          <em>Arbitrum</em>
                          {name.substring(name.indexOf("Arbitrum") + 8)}
                        </>
                      ) : (
                        name
                      )}
                    </h4>

                    <svg height="100%" width="100%">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        strokeWidth="8%"
                        fill="none"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        strokeWidth="8%"
                        fill="none"
                        stroke={
                          name.indexOf("Arbitrum") > 0 ? "#60d0fd" : "#ffbbff"
                        }
                      />
                    </svg>
                    <ExchangeMessage>
                      Volume:
                      <br />
                      {"$" + formatNumber(volume)}
                      <br />
                      Price:
                      <br />
                      {"$" + price}
                    </ExchangeMessage>
                  </ExchangeBox>
                </>
              )
            })}
          </>
        )}
      </ExchangeRow>
    </>
  )
}

export default MainSupply
