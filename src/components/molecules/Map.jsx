// src/components/molecules/MapComponent.js
import React from 'react';
import styled from '@emotion/styled';
import { MapPin } from 'lucide-react';
import theme from 'styles/theme';

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

const MapComponent = ({ locationName = 'Fuel Up Nutrition' }) => {
  return (
    <MapContainer>
      <MapImage
        src="/api/placeholder/600/400"
        alt={`${locationName} location`}
      />
      <MapOverlay />
      <MapPinWrapper>
        <MapPinContent>
          <MapPin color={theme.colors.blue.main} size={20} />
          <MapPinText>{locationName}</MapPinText>
        </MapPinContent>
      </MapPinWrapper>
    </MapContainer>
  );
};

export default MapComponent;
