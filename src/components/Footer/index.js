import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapper,
  WebsiteRights,
} from './FooterElements';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Carreers</FooterLink>
              <FooterLink to='/signin'>Investors</FooterLink>
              <FooterLink to='/signin'>Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/signin'>Contact</FooterLink>
              <FooterLink to='/signin'>Support</FooterLink>
              <FooterLink to='/signin'>Destination</FooterLink>
              <FooterLink to='/signin'>Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/signin'>Submit Video</FooterLink>
              <FooterLink to='/signin'>Ambassadors</FooterLink>
              <FooterLink to='/signin'>Agency</FooterLink>
              <FooterLink to='/signin'>Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/signin'>Instagram</FooterLink>
              <FooterLink to='/signin'>Facebook</FooterLink>
              <FooterLink to='/signin'>Youtube</FooterLink>
              <FooterLink to='/signin'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo onClick={toggleHome}>dolla</SocialLogo>
            <WebsiteRights>
              dolla all rights reserved {new Date().getFullYear()}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/'>
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
