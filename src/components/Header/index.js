import {
  Container,
  Title,
  Logo,
  LinksGroupL,
  LinksGroupR,
  LinkContainer,
  Link,
  MobileIcon,
} from "./HeaderElements"
import { FaBars } from "react-icons/fa"
import XtkLogo from "../../images/XtkLogo.svg"
import { HiExternalLink } from "react-icons/hi"

const Header = ({ toggleMenu }) => {
  return (
    <Container>
      <MobileIcon onClick={() => toggleMenu(true)}>
        <FaBars />
      </MobileIcon>
      <LinksGroupL>
        <LinkContainer>
          <Link href="//xtoken.market/" target="_blank">
            xToken Market
            <HiExternalLink
              style={{
                fontSize: "20px",
                marginBottom: "-4px",
                marginLeft: "2px",
              }}
            />
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Link href="//xtoken.cafe/" target="_blank">
            xToken Cafe
            <HiExternalLink
              style={{
                fontSize: "20px",
                marginBottom: "-4px",
                marginLeft: "2px",
              }}
            />
          </Link>
        </LinkContainer>
      </LinksGroupL>

      <Logo src={XtkLogo} alt="xToken" />
      <Title>Analytics</Title>

      <LinksGroupR>
        <LinkContainer>
          <Link href="//docs.xtoken.market/" target="_blank">
            xToken Docs
            <HiExternalLink
              style={{
                fontSize: "20px",
                marginBottom: "-4px",
                marginLeft: "2px",
              }}
            />
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Link href="//gov.xtoken.cafe/" target="_blank">
            xToken Governance
            <HiExternalLink
              style={{
                fontSize: "20px",
                marginBottom: "-4px",
                marginLeft: "2px",
              }}
            />
          </Link>
        </LinkContainer>
      </LinksGroupR>
    </Container>
  )
}

export default Header
