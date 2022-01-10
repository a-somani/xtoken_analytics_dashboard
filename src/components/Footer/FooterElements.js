import styled from "styled-components"

export const FooterContainer = styled.footer`
  //background-color: #322c79;
  margin-top: 40px;
`
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const SocialMediaLinks = styled.section`
  max-width: 1000px;
  width: 100%;
`
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const Logos = styled.img`
  justify-self: start;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 20%;
  height: auto;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
`
