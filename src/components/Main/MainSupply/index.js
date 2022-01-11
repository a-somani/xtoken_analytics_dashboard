import React from "react"
import { SupplyRow, SupplyBox, SupplyMessage } from "./MainSupplyElements"

const MainSupply = ({ loading, CSupply, SSupply, ASupply }) => {
  return (
    <>
      {!loading && (
        <SupplyRow>
          <SupplyBox circlePercent={1 - Math.round(CSupply / 10) / 100}>
            <h4>Circulating Supply</h4>
            <svg height="100%" width="100%">
              <circle cx="50%" cy="50%" r="40%" strokeWidth="8%" fill="none" />
              <circle cx="50%" cy="50%" r="40%" strokeWidth="8%" fill="none" />
            </svg>
            <SupplyMessage>{`${Math.round(CSupply)} million (${Math.round(
              CSupply / 10
            )}% of Total Supply)`}</SupplyMessage>
          </SupplyBox>
          <SupplyBox
            circlePercent={1 - Math.round((SSupply * 100) / CSupply) / 100}
          >
            <h4>Staked Supply (xXTKa)</h4>
            <svg height="100%" width="100%">
              <circle cx="50%" cy="50%" r="40%" strokeWidth="8%" fill="none" />
              <circle cx="50%" cy="50%" r="40%" strokeWidth="8%" fill="none" />
            </svg>
            <SupplyMessage>{`${Math.round(SSupply)} million (${Math.round(
              (SSupply * 100) / CSupply
            )}% of Circ. Supply)`}</SupplyMessage>
          </SupplyBox>
          <SupplyBox
            circlePercent={
              1 - Math.round((ASupply * 100) / (CSupply - SSupply)) / 100
            }
          >
            <h4>
              Supply on <em>Arbitrum</em>
            </h4>
            <svg height="100%" width="100%">
              <circle cx="50%" cy="50%" r="40%" strokeWidth="8%" fill="none" />
              <circle cx="50%" cy="50%" r="40%" strokeWidth="8%" fill="none" />
            </svg>
            <SupplyMessage>{`${Math.round(ASupply)} million (${Math.round(
              (ASupply * 100) / (CSupply - SSupply)
            )}% of Non-Staked Circ. Supply)`}</SupplyMessage>
          </SupplyBox>
        </SupplyRow>
      )}
    </>
  )
}

export default MainSupply
