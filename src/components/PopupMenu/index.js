import React from "react"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  NameWrapper,
  SidebarWrapper,
  SidebarMenu,
  Logo,
  Title,
  Link,
} from "./PopupMenuElements"
import XtkLogo from "../../images/XtkLogo.svg"
import { HiExternalLink } from "react-icons/hi"

const PopupMenu = ({ isOpen, toggleMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={() => toggleMenu(false)}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <NameWrapper>
          <Logo src={XtkLogo} alt="xToken" />
          <Title>Analytics</Title>
        </NameWrapper>

        <SidebarMenu>
          <Link href="//xtoken.market/" target="_blank">
            xToken Market
            <HiExternalLink
              style={{
                fontSize: "26px",
                marginBottom: "-4px",
                marginLeft: "8px",
              }}
            />
          </Link>
          <Link href="//xtoken.cafe/" target="_blank">
            xToken Cafe
            <HiExternalLink
              style={{
                fontSize: "26px",
                marginBottom: "-4px",
                marginLeft: "8px",
              }}
            />
          </Link>
          <Link href="//docs.xtoken.market/" target="_blank">
            xToken Docs
            <HiExternalLink
              style={{
                fontSize: "26px",
                marginBottom: "-4px",
                marginLeft: "8px",
              }}
            />
          </Link>
          <Link href="//gov.xtoken.cafe/" target="_blank">
            xToken Governance
            <HiExternalLink
              style={{
                fontSize: "26px",
                marginBottom: "-4px",
                marginLeft: "8px",
              }}
            />
          </Link>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default PopupMenu
