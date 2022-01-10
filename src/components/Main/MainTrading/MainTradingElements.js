import styled from "styled-components"

export const ExchangeRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-gap: 10px;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px;
`
export const ExchangeBox = styled.div`
  margin-top: 30px;
  --size: 200px;
  border-radius: 30px;
  //background: rgba(264, 264, 264, 0.1);
  align-items: center;
  justify-content: center;
  text-align: center;
  width: var(--size);
  height: var(--size);
  margin-bottom: 40px;

  h4 {
    position: relative;
    top: -30px;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: -28px;
    width: 150px;
    height: 50px;
    em {
      color: #60d0fd;
      text-decoration: none;
      font-style: normal;
    }
    @media screen and (max-width: 768px) {
      margin-left: 28px;
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
    stroke-dasharray: calc(var(--size) * 2.55);
    stroke-dashoffset: calc(var(--size) * 2.55);
    animation: circle 2s linear 2s forwards;
    --percent: ${({ circlePercent }) => `${circlePercent}`};
    @keyframes circle {
      100% {
        stroke-dashoffset: calc(var(--size) * 2.55 * var(--percent));
      }
    }
  }

  @media screen and (min-width: 768px) {
    --size: 220px;
    h4 {
      margin-left: 36px;
    }
  }

  :nth-child(1) {
    h4 {
      box-sizing: content-box;
      padding-bottom: 10px;
      margin-bottom: -35px;
      border-bottom: 4px solid #fff;
    }
  }
`
export const ExchangeMessage = styled.p`
  font-weight: 400;
  font-size: 18px;
  position: relative;
  top: -75%;
  width: 60%;
  left: 20%;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  //aggregate box (1st)
  :nth-child(2) {
    margin-top: 40px;
    top: 0%;
    font-weight: bold;
    @media screen and (min-width: 900px) {
      margin-top: 45px;
    }
  }
`
