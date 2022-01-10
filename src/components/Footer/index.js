import React from "react"
import XtkLogo from "../../images/light_xtoken_logo.svg"
import {
  FaTwitter,
  FaDiscord,
  FaMedium,
  FaGithub,
  FaReddit,
} from "react-icons/fa"
import {
  FooterContainer,
  FooterWrap,
  SocialMediaLinks,
  SocialLink,
  SocialMediaWrap,
  Logos,
  WebsiteRights,
  SocialIcons,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMediaLinks>
          <SocialMediaWrap>
            <Logos src={XtkLogo} alt="xToken" />
            <WebsiteRights>
              Copyright © {new Date().getFullYear()}. All Rights Reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialLink
                href="//twitter.com/xtokenmarket"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialLink>
              <SocialLink
                href="//discord.com/invite/K9kSYJa"
                target="_blank"
                aria-label="Discord"
              >
                <FaDiscord />
              </SocialLink>
              <SocialLink
                href="//medium.com/xtoken"
                target="_blank"
                aria-label="Medium"
              >
                <FaMedium />
              </SocialLink>
              <SocialLink
                href="//github.com/xtokenmarket"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="//www.reddit.com/r/xToken_Official/"
                target="_blank"
                aria-label="Reddit"
              >
                <FaReddit />
              </SocialLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMediaLinks>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
