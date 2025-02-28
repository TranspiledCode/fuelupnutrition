// src/components/organisms/HeroSection.js
import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import Container from 'atoms/Container';
import Button from 'atoms/Button';

const HeroSectionWrapper = styled.section`
  position: relative;
  background: ${theme.colors.gradients.hero};
  color: ${theme.colors.white};
`;

const HeroContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: ${theme.spacing[20]};
  padding-bottom: ${theme.spacing[20]};
  padding-left: ${theme.spacing[20]};

  @media (min-width: ${theme.breakpoints.md}) {
    padding-top: ${theme.spacing[32]};
    padding-bottom: ${theme.spacing[32]};
  }
`;

const HeroContent = styled.div`
  max-width: 672px;
  flex: 3;
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 2;
  display: none;
  z-index: 2;

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 5rem;
  }
`;

const HeroText = styled.p`
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing[8]};
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
  background-color: #86efac;
  border-radius: ${theme.borderRadius.full};
  opacity: 0.2;
  margin-bottom: -5rem;
`;

const HeroSection = () => {
  return (
    <HeroSectionWrapper id="home">
      <HeroContainer>
        <HeroContent>
          <HeroTitle>Running on Empty?</HeroTitle>
          <HeroText>
            Handcrafted juices and smoothies made with love using only the
            freshest ingredients.
          </HeroText>
          <Button href="#menu">Explore Our Menu</Button>
        </HeroContent>

        <HeroImageContainer>
          <img
            src="https://storage.googleapis.com/transpiled-web/fuelupnutrition/funb-logo/l.webp"
            alt="Refreshing juices and smoothies"
          />
        </HeroImageContainer>
      </HeroContainer>

      {/* Decorative elements */}
      <DecorativeCircle1 />
      <DecorativeCircle2 />
    </HeroSectionWrapper>
  );
};

export default HeroSection;
