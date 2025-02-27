import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  Droplet,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
} from 'lucide-react';
import SEO from 'templates/SEO';
import content from 'data/home';

// Global styles and theme
const theme = {
  colors: {
    primary: '#22c55e', // green-500
    primaryDark: '#166534', // green-600
    primaryLight: '#dcfce7', // green-100
    secondary: '#facc15', // yellow-300
    secondaryLight: '#fefce8', // yellow-50
    pink: {
      light: '#fce7f3', // pink-100
      main: '#db2777', // pink-600
      hover: '#be185d', // pink-700
    },
    orange: {
      light: '#ffedd5', // orange-100
      main: '#ea580c', // orange-600
      hover: '#c2410c', // orange-700
    },
    purple: {
      light: '#f3e8ff', // purple-100
      main: '#7e22ce', // purple-700
    },
    blue: {
      light: '#eff6ff', // blue-50
      main: '#2563eb', // blue-600
      dark: '#1e3a8a', // blue-900
    },
    text: {
      primary: '#1f2937', // gray-800
      secondary: '#4b5563', // gray-600
      light: '#9ca3af', // gray-400
    },
    white: '#ffffff',
    gradients: {
      hero: 'linear-gradient(to right, #f97316, #ec4899, #8b5cf6)', // orange-400, pink-500, purple-500
    },
  },
  fonts: {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  breakpoints: {
    md: '768px',
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    32: '8rem',
  },
  borderRadius: {
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
  transitions: {
    default: '300ms ease',
  },
};

// Container
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[4]};
`;

// Global layout
const PageWrapper = styled.div`
  font-family: ${theme.fonts.sans};
  background-color: ${theme.colors.secondaryLight};
  color: ${theme.colors.text.primary};
`;

// Header Styles
const Header = styled.header`
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

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.secondary};
`;

const DesktopNav = styled.nav`
  display: none;
  @media (min-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: ${theme.spacing[6]};
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
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

// Mobile Menu
const MobileMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${theme.colors.primary};
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity ${theme.transitions.default};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
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
  margin-bottom: ${theme.spacing[10]};
`;

const MobileLogoText = styled.span`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${theme.colors.secondary};
`;

const MobileNav = styled.nav`
  width: 100%;
  padding: 0 ${theme.spacing[12]};
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
  text-align: center;
`;

const MobileNavItem = styled.li`
  list-style: none;
`;

const MobileNavLink = styled.a`
  color: ${theme.colors.white};
  font-size: 1.5rem;
  text-decoration: none;
  display: block;
  padding: ${theme.spacing[2]} 0;
  width: 100%;
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const SocialIcons = styled.div`
  position: absolute;
  bottom: ${theme.spacing[8]};
  display: flex;
  gap: ${theme.spacing[6]};
  color: ${theme.colors.white};
`;

const SocialLink = styled.a`
  color: ${theme.colors.white};
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

// Hero Section
const HeroSection = styled.section`
  position: relative;
  background: ${theme.colors.gradients.hero};
  color: ${theme.colors.white};
`;

const HeroContainer = styled(Container)`
  padding-top: ${theme.spacing[20]};
  padding-bottom: ${theme.spacing[20]};

  @media (min-width: ${theme.breakpoints.md}) {
    padding-top: ${theme.spacing[32]};
    padding-bottom: ${theme.spacing[32]};
  }
`;

const HeroContent = styled.div`
  max-width: 672px;
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing[4]};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 3.75rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  margin-bottom: ${theme.spacing[8]};
`;

const Button = styled.a`
  display: inline-block;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.text.primary};
  font-weight: bold;
  padding: ${theme.spacing[3]} ${theme.spacing[8]};
  border-radius: ${theme.borderRadius.full};
  text-decoration: none;
  transition:
    background-color ${theme.transitions.default},
    transform ${theme.transitions.default};

  &:hover {
    background-color: #eab308; /* yellow-500 */
    transform: scale(1.05);
  }
`;

const DecorativeCircle1 = styled.div`
  position: absolute;
  right: 0;
  top: 25%;
  width: 16rem;
  height: 16rem;
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.full};
  opacity: 0.2;
  margin-right: -5rem;
`;

const DecorativeCircle2 = styled.div`
  position: absolute;
  left: 25%;
  bottom: 0;
  width: 10rem;
  height: 10rem;
  background-color: #86efac; /* green-300 */
  border-radius: ${theme.borderRadius.full};
  opacity: 0.2;
  margin-bottom: -5rem;
`;

// Menu Section
const MenuSection = styled.section`
  padding: ${theme.spacing[16]} 0;
  background-color: ${theme.colors.white};
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
  color: ${(props) => props.color || theme.colors.primary};
`;

const MenuGrid = styled.div`
  display: grid;
  gap: ${theme.spacing[8]};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MenuCard = styled.div`
  background-color: ${(props) => props.bgColor};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[6]};
  box-shadow: ${theme.shadows.md};
  transform: translateY(0);
  transition: transform ${theme.transitions.default};

  &:hover {
    transform: scale(1.05);
  }
`;

const MenuImageContainer = styled.div`
  margin-bottom: ${theme.spacing[6]};
  overflow: hidden;
  border-radius: ${theme.borderRadius.lg};
`;

const MenuImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: ${theme.borderRadius.lg};
`;

const MenuCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing[4]};
  color: ${(props) => props.color};
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const MenuItem = styled.li`
  list-style: none;
`;

const MenuItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuItemName = styled.span`
  font-weight: 500;
`;

const MenuItemPrice = styled.span`
  color: ${theme.colors.text.secondary};
`;

const MenuItemDescription = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.text.secondary};
`;

// About Section
const AboutSection = styled.section`
  padding: ${theme.spacing[16]} 0;
  background-color: ${theme.colors.purple.light};
`;

const AboutText = styled.div`
  max-width: 768px;
  margin: 0 auto;
  margin-bottom: ${theme.spacing[12]};
`;

const AboutParagraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: ${theme.spacing[6]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatCard = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  text-align: center;
  transform: translateY(0);
  transition: transform ${theme.transitions.default};

  &:hover {
    transform: scale(1.05);
  }
`;

const StatIconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: ${theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: ${theme.spacing[4]};
  background-color: ${(props) => props.bgColor};
`;

const StatValue = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[2]};
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
`;

// Location Section
const LocationSection = styled.section`
  padding: ${theme.spacing[16]} 0;
  background-color: ${theme.colors.blue.light};
`;

const LocationGrid = styled.div`
  display: grid;
  gap: ${theme.spacing[8]};
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LocationCard = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing[8]};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const LocationCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing[4]};
  color: ${theme.colors.blue.main};
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[3]};
`;

const ContactItemText = styled.div``;

const ContactLabel = styled.p`
  font-weight: 500;
`;

const ContactValue = styled.p`
  color: ${theme.colors.text.secondary};
`;

const SocialSection = styled.div`
  margin-top: ${theme.spacing[6]};
`;

const SocialTitle = styled.h4`
  font-weight: 500;
  margin-bottom: ${theme.spacing[2]};
`;

const MapContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
`;

const MapImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
`;

const MapOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, ${theme.colors.blue.dark}, transparent);
  opacity: 0.3;
  border-radius: ${theme.borderRadius.lg};
`;

const MapPinWrapper = styled.div`
  position: absolute;
  bottom: ${theme.spacing[4]};
  left: ${theme.spacing[4]};
  background-color: ${theme.colors.white};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const MapPinContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

const MapPinText = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
`;

// Footer
const Footer = styled.footer`
  background-color: ${theme.colors.primaryDark};
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

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[4]};

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: 0;
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

const Tagline = styled.p`
  color: #bbf7d0; /* green-200 */
`;

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

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { title, description, canonical } = content;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <PageWrapper>
      <SEO title={title} description={description} canonical={canonical} />

      {/* Header/Navigation */}
      <Header>
        <HeaderContainer>
          <Logo>
            <Droplet color={theme.colors.secondary} size={28} />
            <LogoText>Nectar</LogoText>
          </Logo>

          {/* Desktop Navigation */}
          <DesktopNav>
            <NavList>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#menu">Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#location">Location</NavLink>
              </NavItem>
            </NavList>
          </DesktopNav>

          {/* Mobile Menu Button */}
          <MenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
            <Menu size={28} />
          </MenuButton>
        </HeaderContainer>
      </Header>

      {/* Mobile Navigation Overlay */}
      <MobileMenuOverlay isOpen={mobileMenuOpen}>
        <CloseButton onClick={toggleMobileMenu} aria-label="Close menu">
          <X size={32} />
        </CloseButton>

        <MobileLogo>
          <Droplet color={theme.colors.secondary} size={40} />
          <MobileLogoText>Nectar</MobileLogoText>
        </MobileLogo>

        <MobileNav>
          <MobileNavList>
            <MobileNavItem>
              <MobileNavLink href="#home" onClick={toggleMobileMenu}>
                Home
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#menu" onClick={toggleMobileMenu}>
                Menu
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#about" onClick={toggleMobileMenu}>
                About
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink href="#location" onClick={toggleMobileMenu}>
                Location
              </MobileNavLink>
            </MobileNavItem>
          </MobileNavList>
        </MobileNav>

        <SocialIcons>
          <SocialLink href="#" aria-label="Instagram">
            <Instagram size={24} />
          </SocialLink>
          <SocialLink href="#" aria-label="Facebook">
            <Facebook size={24} />
          </SocialLink>
          <SocialLink href="#" aria-label="Twitter">
            <Twitter size={24} />
          </SocialLink>
        </SocialIcons>
      </MobileMenuOverlay>

      {/* Hero Section */}
      <HeroSection id="home">
        <HeroContainer>
          <HeroContent>
            <HeroTitle>Fresh Juice. Happy Life.</HeroTitle>
            <HeroText>
              Handcrafted juices and smoothies made with love using only the
              freshest ingredients.
            </HeroText>
            <Button href="#menu">Explore Our Menu</Button>
          </HeroContent>
        </HeroContainer>

        {/* Decorative elements */}
        <DecorativeCircle1 />
        <DecorativeCircle2 />
      </HeroSection>

      {/* Menu Section */}
      <MenuSection id="menu">
        <Container>
          <SectionTitle color={theme.colors.primary}>
            Our Refreshing Menu
          </SectionTitle>

          <MenuGrid>
            {/* Smoothies */}
            <MenuCard bgColor={theme.colors.pink.light}>
              <MenuImageContainer>
                <MenuImage
                  src="/api/placeholder/400/250"
                  alt="Colorful smoothies"
                />
              </MenuImageContainer>
              <MenuCardTitle color={theme.colors.pink.main}>
                Signature Smoothies
              </MenuCardTitle>
              <MenuList>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Berry Blast</MenuItemName>
                    <MenuItemPrice>$7.50</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Strawberry, blueberry, raspberry, banana, almond milk
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Green Machine</MenuItemName>
                    <MenuItemPrice>$8.50</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Spinach, kale, mango, pineapple, coconut water
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Tropical Paradise</MenuItemName>
                    <MenuItemPrice>$8.00</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Mango, pineapple, passion fruit, orange juice
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Protein Powerhouse</MenuItemName>
                    <MenuItemPrice>$9.00</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Banana, peanut butter, cacao, almond milk, plant protein
                  </MenuItemDescription>
                </MenuItem>
              </MenuList>
            </MenuCard>

            {/* Fresh Juices */}
            <MenuCard bgColor={theme.colors.orange.light}>
              <MenuImageContainer>
                <MenuImage
                  src="/api/placeholder/400/250"
                  alt="Fresh pressed juices"
                />
              </MenuImageContainer>
              <MenuCardTitle color={theme.colors.orange.main}>
                Fresh Pressed Juices
              </MenuCardTitle>
              <MenuList>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Immune Booster</MenuItemName>
                    <MenuItemPrice>$6.50</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Orange, carrot, ginger, turmeric
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Detox Green</MenuItemName>
                    <MenuItemPrice>$7.50</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Cucumber, celery, apple, lemon, parsley
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Citrus Splash</MenuItemName>
                    <MenuItemPrice>$6.00</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Orange, grapefruit, lemon, lime
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Ruby Red</MenuItemName>
                    <MenuItemPrice>$7.00</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Beet, apple, carrot, ginger
                  </MenuItemDescription>
                </MenuItem>
              </MenuList>
            </MenuCard>

            {/* Healthy Snacks */}
            <MenuCard bgColor={theme.colors.primaryLight}>
              <MenuImageContainer>
                <MenuImage
                  src="/api/placeholder/400/250"
                  alt="Healthy snacks"
                />
              </MenuImageContainer>
              <MenuCardTitle color={theme.colors.primary}>
                Healthy Snacks
              </MenuCardTitle>
              <MenuList>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Acai Bowl</MenuItemName>
                    <MenuItemPrice>$10.50</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Acai, banana, granola, berries, coconut flakes
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Protein Energy Balls (3)</MenuItemName>
                    <MenuItemPrice>$4.50</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Dates, oats, peanut butter, cacao nibs, chia seeds
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Avocado Toast</MenuItemName>
                    <MenuItemPrice>$8.00</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Whole grain bread, avocado, microgreens, hemp seeds
                  </MenuItemDescription>
                </MenuItem>
                <MenuItem>
                  <MenuItemHeader>
                    <MenuItemName>Chia Pudding</MenuItemName>
                    <MenuItemPrice>$6.50</MenuItemPrice>
                  </MenuItemHeader>
                  <MenuItemDescription>
                    Chia seeds, almond milk, maple syrup, berries
                  </MenuItemDescription>
                </MenuItem>
              </MenuList>
            </MenuCard>
          </MenuGrid>
        </Container>
      </MenuSection>

      {/* About Section */}
      <AboutSection id="about">
        <Container>
          <SectionTitle color={theme.colors.purple.main}>
            Our Story
          </SectionTitle>

          <AboutText>
            <AboutParagraph>
              Nectar Juice Bar was born out of a passion for wellness and
              delicious, nutrient-dense foods. Founded in 2018, we've been
              serving the community with freshly pressed juices, smoothies, and
              wholesome snacks made from locally-sourced ingredients whenever
              possible.
            </AboutParagraph>
            <AboutParagraph>
              We believe that nourishing your body should be fun and flavorful.
              Our team of juice enthusiasts is dedicated to creating drinks that
              not only taste amazing but also help you feel your best.
            </AboutParagraph>
          </AboutText>

          <StatsGrid>
            <StatCard>
              <StatIconContainer bgColor={theme.colors.primaryLight}>
                <Droplet size={32} color={theme.colors.primary} />
              </StatIconContainer>
              <StatValue>100%</StatValue>
              <StatLabel>Fresh Ingredients</StatLabel>
            </StatCard>
            <StatCard>
              <StatIconContainer bgColor={theme.colors.pink.light}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: theme.colors.pink.main }}
                >
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </StatIconContainer>
              <StatValue>25+</StatValue>
              <StatLabel>Unique Recipes</StatLabel>
            </StatCard>
            <StatCard>
              <StatIconContainer bgColor={theme.colors.orange.light}>
                <Clock size={32} color={theme.colors.orange.main} />
              </StatIconContainer>
              <StatValue>7</StatValue>
              <StatLabel>Days a Week</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </AboutSection>

      {/* Location Section */}
      <LocationSection id="location">
        <Container>
          <SectionTitle color={theme.colors.blue.main}>Find Us</SectionTitle>

          <LocationGrid>
            <LocationCard>
              <LocationCardTitle>Visit Our Juice Bar</LocationCardTitle>

              <ContactDetails>
                <ContactItem>
                  <MapPin color={theme.colors.blue.main} size={20} />
                  <ContactItemText>
                    <ContactLabel>123 Sunshine Avenue</ContactLabel>
                    <ContactValue>Freshville, CA 90210</ContactValue>
                  </ContactItemText>
                </ContactItem>

                <ContactItem>
                  <Clock color={theme.colors.blue.main} size={20} />
                  <ContactItemText>
                    <ContactLabel>Opening Hours</ContactLabel>
                    <ContactValue>Monday - Friday: 7am - 7pm</ContactValue>
                    <ContactValue>Saturday - Sunday: 8am - 6pm</ContactValue>
                  </ContactItemText>
                </ContactItem>

                <ContactItem>
                  <Phone color={theme.colors.blue.main} size={20} />
                  <ContactItemText>
                    <ContactLabel>Contact Us</ContactLabel>
                    <ContactValue>(555) 123-4567</ContactValue>
                    <ContactValue>hello@nectarjuicebar.com</ContactValue>
                  </ContactItemText>
                </ContactItem>
              </ContactDetails>

              <SocialSection>
                <SocialTitle>Follow Us</SocialTitle>
                <div style={{ display: 'flex', gap: theme.spacing[4] }}>
                  <SocialLink href="#" aria-label="Instagram">
                    <Instagram size={24} color={theme.colors.pink.main} />
                  </SocialLink>
                  <SocialLink href="#" aria-label="Facebook">
                    <Facebook size={24} color={theme.colors.blue.main} />
                  </SocialLink>
                  <SocialLink href="#" aria-label="Twitter">
                    <Twitter size={24} color="#38bdf8" /> {/* light blue */}
                  </SocialLink>
                </div>
              </SocialSection>
            </LocationCard>

            <MapContainer>
              <MapImage
                src="/api/placeholder/600/400"
                alt="Nectar Juice Bar location"
              />
              <MapOverlay />
              <MapPinWrapper>
                <MapPinContent>
                  <MapPin color={theme.colors.blue.main} size={20} />
                  <MapPinText>Nectar Juice Bar</MapPinText>
                </MapPinContent>
              </MapPinWrapper>
            </MapContainer>
          </LocationGrid>
        </Container>
      </LocationSection>

      {/* Footer */}
      <Footer>
        <FooterContainer>
          <FooterLogo>
            <Droplet size={24} color={theme.colors.secondary} />
            <LogoText>Nectar</LogoText>
          </FooterLogo>

          <FooterInfo>
            <Copyright>
              © 2025 Nectar Juice Bar. All rights reserved.
            </Copyright>
            <Tagline>Made with fresh ingredients and positive vibes.</Tagline>
          </FooterInfo>

          <FooterLinks>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </FooterLinks>
        </FooterContainer>
      </Footer>
    </PageWrapper>
  );
};

export default Home;
