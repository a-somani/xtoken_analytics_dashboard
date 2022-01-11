import styled from "styled-components"

export const Header = styled.header`
  padding: 16px;
  font-size: 30px;
  font-weight: 600;
  align-items: center;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 10px;
  justify-content: center;
  @media screen and (min-width: 700px) {
    margin-left: 30px;
    text-align: left;
    justify-content: left;
  }
  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 15px;
  @media screen and (max-width: 700px) {
    font-size: 25px;
    margin-left: 75px;
  }

  sup {
    font-size: 14px;
    color: white;
    color: ${({ em }) => em === "Arbitrum" && "#60d0fd"};
    color: ${({ em }) => em === "CoinGecko" && "#8BC53F"};
    font-weight: ${({ em }) => em === "CoinGecko" && "700"};
    @media screen and (min-width: 700px) {
      font-size: ${({ em }) => em === "CoinGecko" && "16px"};
    }
    //color: #60d0fd;
    top: -8px;
    position: relative;
    left: 4px;
  }
`
export const LoadingDots = styled.div`
  color: #60d0fd;
  width: 300px;
  height: 25px;
  margin-top: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    font-size: 20px;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 5px;
  }
  @media screen and (min-width: 700px) {
    margin-left: -80px;
  }
`

export const Dots = styled.div`
  background-color: #60d0fd;
  margin-top: 8px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
  animation-name: jumpingDots;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes jumpingDots {
    0% {
      transform: translateY(0px);
    }
    35% {
      transform: translateY(-8px);
    }
    70% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  :nth-child(2) {
    animation-delay: -0.4s;
  }
  :nth-child(3) {
    animation-delay: -0.2s;
  }
`
