import styled from "styled-components"

export const Container = styled.div`
  background: white;
  // #27153E, #322C79, #1B1658, #5327EE, #5a22f5, #943BF3, #9500FC,#FFBBFF, #60D0FD
  height: 80px;
  color: white;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    left: 60px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #5a22f5;
    border-radius: 50%;
    @media screen and (max-width: 480px) {
      left: 45px;
    }
  }
`

export const Logo = styled.img`
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  width: 160px;
  aspect-ratio: inherit;
  max-height: 40px;
  justify-self: center;
  margin-right: -20px;
  @media screen and (max-width: 480px) {
    width: 150px;
    margin-right: 0px;
  }
`

export const Title = styled.h1`
  color: #5a22f5;
  align-items: center;
  text-align: center;
  width: 160px;
  font-size: 27px;
  font-weight: 700;
  margin-top: -2px;
  @media screen and (max-width: 480px) {
    width: 60px;
  }
`

export const LinksGroupR = styled.ul`
  position: absolute;
  justify-content: center;
  right: 0px;
  align-items: right;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 5%;
  margin-right: 2%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
export const LinksGroupL = styled.ul`
  position: absolute;
  justify-content: center;
  left: 0px;
  align-items: right;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 5%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const LinkContainer = styled.li`
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  color: #5a22f5;

  @media screen and (min-width: 1200px) {
    margin: 1rem;
    padding: 15px;
  }
`

export const Link = styled.a`
  align-items: center;
  align-content: center;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: #5a22f5;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: #5a22f5;
  }
  &:visited {
    color: #5a22f5;
  }
`
