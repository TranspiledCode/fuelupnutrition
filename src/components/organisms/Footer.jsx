// src/components/organisms/Footer.js
import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import Container from 'atoms/Container';
import Logo from 'atoms/Logo';

const FooterWrapper = styled.footer`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing[8]} 0;
`;

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterInfo = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing[4]};

  @media (min-width: ${theme.breakpoints.md}) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const Copyright = styled.p``;

const FooterLinks = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
`;

const FooterLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const Footer = ({ title }) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Logo />

        <FooterInfo>
          <Copyright>
            © {new Date().getFullYear()} {title}. All rights reserved.
          </Copyright>
        </FooterInfo>

        <FooterLinks>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
