// src/components/atoms/Logo.js
import React from 'react';
import styled from '@emotion/styled';
import { Gauge } from 'lucide-react';
import theme from 'styles/theme';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[4]};
`;

const LogoTextOne = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: ${theme.colors.white};
  font-family: 'Poiret One', serif;
  word-spacing: -0.6rem;
`;

const LogoTextTwo = styled.span`
  font-size: 3rem;
  color: ${theme.colors.white};
  font-family: 'Charmonman', cursive;
  padding-top: 0.8rem;
  font-weight: bold;

  @media (min-width: ${theme.breakpoints.md}) {
    font-weight: normal;
  }
`;

const Logo = ({ size = 35, color = theme.colors.white }) => {
  return (
    <LogoWrapper>
      <Gauge color={color} size={size} />
      <LogoTextOne>Fuel Up</LogoTextOne>
      <LogoTextTwo>Nutrition</LogoTextTwo>
    </LogoWrapper>
  );
};

export default Logo;
