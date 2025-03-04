import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Menu, X, Gauge } from 'lucide-react';
import theme from 'styles/theme';
import Container from 'atoms/Container';
import Logo from 'atoms/Logo';
import NavLinks from 'molecules/NavLinks';
import SocialIcons from 'molecules/SocialIcons';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.md};
  z-index: 50;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${theme.spacing[3]};
  padding-bottom: ${theme.spacing[3]};
`;

const DesktopNav = styled.nav`
  display: none;
  @media (min-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const MenuButton = styled.button`
  color: ${theme.colors.white};
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${theme.colors.primary};
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition:
    opacity ${theme.transitions.default},
    visibility ${theme.transitions.default};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing[4]};
  right: ${theme.spacing[4]};
  color: ${theme.colors.white};
  background: none;
  border: none;
  cursor: pointer;
`;

const MobileLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[6]};
`;

const MobileLogoTextOne = styled.span`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${theme.colors.secondary};
`;

const MobileNav = styled.nav`
  width: 100%;
  padding: 0 ${theme.spacing[12]};
  text-align: center;
`;

const MobileSocialIcons = styled.div`
  position: absolute;
  bottom: ${theme.spacing[8]};
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = (e) => {
    if (e.target.id === 'mobile-menu-overlay') {
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { text: 'Home', href: '#home' },
    { text: 'Menu', href: '#menu' },
    { text: 'About', href: '#about' },
    { text: 'Location', href: '#location' },
  ];

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Logo />

          <DesktopNav>
            <NavLinks links={navLinks} />
          </DesktopNav>

          <MenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
            <Menu size={28} />
          </MenuButton>
        </HeaderContainer>
      </HeaderWrapper>

      <MobileMenuOverlay
        id="mobile-menu-overlay"
        isOpen={mobileMenuOpen}
        onClick={closeMobileMenu}
      >
        <CloseButton onClick={toggleMobileMenu} aria-label="Close menu">
          <X size={32} />
        </CloseButton>

        <MobileLogo>
          <Gauge color={theme.colors.secondary} size={40} />
          <MobileLogoTextOne>Nectar</MobileLogoTextOne>
        </MobileLogo>

        <MobileNav>
          <NavLinks
            links={navLinks}
            onClickHandler={toggleMobileMenu}
            fontSize="1.5rem"
          />
        </MobileNav>

        <MobileSocialIcons>
          <SocialIcons />
        </MobileSocialIcons>
      </MobileMenuOverlay>
    </>
  );
};

export default Header;
