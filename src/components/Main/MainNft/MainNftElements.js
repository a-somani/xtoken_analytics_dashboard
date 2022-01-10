import styled from "styled-components"

export const Wrapper = styled.div`
  background: linear-gradient(to right, #5327ee, #943bf3);
  position: absolute;
  color: white;
  min-width: 100%;
  min-height: 100%;
`

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
  /* :nth-child(1) {
    margin-top: 15px;
    @media screen and (max-width: 700px) {
      font-size: 25px;
      margin-left: 75px;
    }
  } */
  /* :nth-child(5) {
    @media screen and (max-width: 700px) {
      font-size: 25px;
      margin-left: 75px;
    }
  }
  :nth-child(6) {
    @media screen and (max-width: 700px) {
      font-size: 25px;
      margin-left: 75px;
    }
  }
  :nth-child(7) {
    @media screen and (max-width: 700px) {
      font-size: 25px;
      margin-left: 75px;
    }
  } */
`
export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;

  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
  margin-top: 15px;
  @media screen and (max-width: 700px) {
    font-size: 25px;
    margin-left: 75px;
  }

  sup {
    font-size: 14px;
    color: #60d0fd;
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

export const NFTRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 20px;
  align-items: center;
  justify-content: space-evenly;
  margin: 15px;
  margin-bottom: 30px;
`

export const NftBox = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(264, 264, 264, 0.1);
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px;
  width: 300px;
  height: 300px;
  border-radius: 30px;

  img {
    margin: 0px;
    margin-bottom: 10px;
    width: 230px;
    height: auto;
  }
  h3 {
    font-weight: 500;
  }
`
export const LoadingBar = styled.div`
  width: 200px;
  height: 25px;
  border-radius: 15px;
  background: rgba(264, 264, 264, 0.3);
`

export const Line = styled.div`
  height: 25px;
  width: 80px;
  background: #5327ee;
  border-radius: 15px;
  animation-name: "slide";
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes slide {
    0% {
      transform: translateX(0px);
      background-color: #5327ee;
    }
    50% {
      transform: translateX(120px);
      background-color: #943bf3;
    }
    100% {
      transform: translateX(0px);
      background-color: #5327ee;
    }
  }
`

export const SupplyRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-gap: 10px;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px;
`
export const SupplyBox = styled.div`
  margin-top: 30px;
  --size: 200px;
  border-radius: 30px;
  //background: rgba(264, 264, 264, 0.1);
  align-items: center;
  justify-content: center;
  text-align: center;
  width: var(--size);
  height: var(--size);
  margin-bottom: 20px;

  h4 {
    position: relative;
    top: -30px;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: -28px;
    em {
      color: #60d0fd;
      text-decoration: none;
      font-style: normal;
    }
  }
  svg {
    transform: rotate(-91deg);
  }
  circle:nth-child(1) {
    stroke-dasharray: calc(var(--size) * 2.55);
    stroke-dashoffset: 0;
    stroke: rgba(264, 264, 264, 0.3);
  }
  circle:nth-child(2) {
    //visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
    /* --delay: ${({ delay }) => (delay ? `${delay}s` : "100s")}; */
    stroke-dasharray: calc(var(--size) * 2.55);
    stroke-dashoffset: calc(var(--size) * 2.55);
    stroke: #ffbbff;
    animation: circle 2s linear 1s forwards;
    --percent: ${({ circlePercent }) => `${circlePercent}`};
    @keyframes circle {
      100% {
        stroke-dashoffset: calc(var(--size) * 2.55 * var(--percent));
      }
    }
  }

  :nth-child(3) {
    circle:nth-child(2) {
      stroke: #60d0fd;
    }
  }

  @media screen and (min-width: 768px) {
    --size: 220px;
  }
  @media screen and (min-width: 900px) {
    --size: 250px;
    h4 {
      font-size: 24px;
      //top: -36px;
      margin-bottom: -32px;
    }
  }
  /* @media screen and (min-width: 1310px) {
    --size: 300px;
    h4 {
      font-size: 28px;
      top: -40px;
      margin-bottom: -33px;
    }
  } */
`
export const SupplyMessage = styled.p`
  font-weight: 400;
  font-size: 18px;
  position: relative;
  /* top: 30%;
  width: 50%; */
  top: -70%;
  width: 60%;
  left: 20%;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 900px) {
    font-size: 22px;
  }
  /* @media screen and (min-width: 1310px) {
    font-size: 26px;
  } */
`
export const ArbText = styled.p`
  color: #ffbbff;
`

export const LeverageRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: left;
  margin: 20px;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`
export const LeverageProduct = styled.div`
  margin: 0px 50px 20px 50px;
  //padding: 20px;
  --size: 220px;
  border-radius: 50px;
  background-color: rgba(264, 264, 264, 0.1);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: var(--size);
  height: var(--size);

  img {
    :nth-child(1) {
      margin-top: -10px;
      width: 80px;
      height: 80px;
      @media screen and (min-width: 900px) {
        margin-top: 0px;
        width: 100px;
        height: 100px;
      }
    }
    :nth-child(2) {
      margin-top: 15px;
      width: 100px;
      height: auto;
      @media screen and (min-width: 900px) {
        margin-top: 10px;
        margin-bottom: -5px;
        width: 150px;
      }
    }
  }
  h4 {
    font-weight: 500;
    //margin-top: 20px;
    margin-top: 15px;
    color: #5327ee;
    background: white;
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 14px;
    @media screen and (min-width: 900px) {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 900px) {
    --size: 250px;
    padding: 40px;
  }
`

export const LendProduct = styled.div`
  margin: 0px 50px 20px 50px;
  //padding: 20px;
  --size: 220px;
  border-radius: 50px;
  background-color: rgba(264, 264, 264, 0.1);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: var(--size);
  height: var(--size);

  img {
    :nth-child(1) {
      //margin-top: 0px;
      margin-bottom: -15px;
      width: 80px;
      height: 80px;
      @media screen and (min-width: 900px) {
        //margin-top: 10px;
        //margin-bottom: -10px;
        width: 100px;
        height: 100px;
      }
    }
    :nth-child(2) {
      margin: -20px 15px -20px 0;
      width: 100px;
      height: auto;
      @media screen and (min-width: 900px) {
        width: 120px;
        height: auto;
        margin-bottom: -35px;
      }
    }
  }
  h4 {
    font-weight: 500;
    //margin-top: 20px;
    margin-top: 15px;
    color: #5327ee;
    background: white;
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 14px;

    @media screen and (min-width: 900px) {
      font-size: 18px;
      width: 200px;
    }
  }
  @media screen and (min-width: 900px) {
    --size: 250px;
    padding: 40px;
  }
`
