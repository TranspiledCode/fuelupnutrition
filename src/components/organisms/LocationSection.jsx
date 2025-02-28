// src/components/organisms/LocationSection.js
import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import Container from 'atoms/Container';
import SectionTitle from 'atoms/SectionTitle';
import LocationCard from 'molecules/LocationCard';
import MapComponent from 'molecules/Map';

const LocationSectionWrapper = styled.section`
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

const LocationSection = () => {
  return (
    <LocationSectionWrapper id="location">
      <Container>
        <SectionTitle color={theme.colors.blue.main}>Find Us</SectionTitle>

        <LocationGrid>
          <LocationCard />
          <MapComponent locationName="Fuel Up Nutrition" />
        </LocationGrid>
      </Container>
    </LocationSectionWrapper>
  );
};

export default LocationSection;
