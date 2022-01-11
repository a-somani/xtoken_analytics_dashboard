import styled from "styled-components"

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
    //margin-bottom: -28px;

    @media screen and (max-width: 768px) {
      margin-left: 28px;
      width: 150px;
      height: 50px;
    }
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
    animation: circle 2s linear 1.5s forwards;
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
  @media screen and (min-width: 1000px) {
    --size: 250px;
    h4 {
      font-size: 22px;
    }
  }
`
export const SupplyMessage = styled.p`
  font-weight: 400;
  font-size: 18px;
  position: relative;
  top: -70%;
  width: 60%;
  left: 20%;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 22px;
  }
`
