import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
  color: #5a22f5;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;

  cursor: pointer;
  outline: none;
`
export const NameWrapper = styled.div`
  color: #5a22f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px;
`
export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #5a22f5;
`

export const SidebarMenu = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`
export const Title = styled.h1`
  color: #5a22f5;
  align-items: center;
  text-align: center;
  width: 160px;
  margin-left: -40;
  font-size: 27px;
`
export const Logo = styled.img`
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  width: 200px;
  aspect-ratio: inherit;
  max-height: 40px;
  justify-self: center;
  margin-right: -35px;
`

export const Link = styled.a`
  align-items: center;
  align-content: center;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  font-size: 26px;
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
