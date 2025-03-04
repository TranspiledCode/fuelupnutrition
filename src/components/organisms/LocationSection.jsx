// src/components/organisms/LocationSection.js
import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import theme from 'styles/theme';
import Container from 'atoms/Container';
import SectionTitle from 'atoms/SectionTitle';
import LocationCard from 'molecules/LocationCard';
import { MapPin } from 'lucide-react';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const LocationSectionWrapper = styled.section`
  position: relative;
  padding: ${theme.spacing[20]} 0;
  background-color: ${theme.colors.blue.light};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(
      90deg,
      ${theme.colors.blue.main} 0%,
      ${theme.colors.blue.light} 50%,
      ${theme.colors.blue.main} 100%
    );
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 10%;
  right: -5%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${theme.colors.blue.main}22 0%,
    ${theme.colors.blue.light}00 70%
  );
  z-index: 0;
`;

const CircleDecoration = styled.div`
  position: absolute;
  bottom: 15%;
  left: 5%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px dashed ${theme.colors.blue.main}33;
  z-index: 0;
  animation: ${float} 6s ease-in-out infinite;
`;

const LocationGrid = styled.div`
  display: grid;
  gap: ${theme.spacing[8]};
  align-items: center;
  position: relative;
  z-index: 1;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MapContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease-out forwards;
  transform-origin: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    min-height: 300px;
    margin-top: ${theme.spacing[8]};
  }
`;

const MapOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    ${theme.colors.blue.main}05,
    ${theme.colors.blue.main}15
  );
  z-index: 1;
`;

const MapPinMarker = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: ${pulse} 2s infinite ease-in-out;
`;

const PinRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.blue.main}33;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid ${theme.colors.blue.main}55;
  }
`;

const SectionTitleContainer = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing[12]};
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: '';
    width: 60px;
    height: 3px;
    background-color: ${theme.colors.blue.main};
    margin-top: ${theme.spacing[4]};
    border-radius: ${theme.borderRadius.full};
  }
`;

const LocationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <LocationSectionWrapper id="location" ref={sectionRef}>
      <BackgroundDecoration />
      <CircleDecoration />

      <Container>
        <SectionTitleContainer>
          <SectionTitle
            color={theme.colors.blue.main}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            Find Us
          </SectionTitle>
        </SectionTitleContainer>

        <LocationGrid>
          <LocationCard animated={isVisible} />

          <MapContainer>
            <MapOverlay />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-118.456!3d34.789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU1JzQyLjQiTiAxMTjCsDI2JzEwLjIiVw!5e0!3m2!1sen!2sus!4v1000000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <MapPinMarker>
              <div style={{ transform: 'translateY(-50%)' }}>
                <MapPin size={48} color={theme.colors.blue.main} />
              </div>
              <PinRing />
            </MapPinMarker>
          </MapContainer>
        </LocationGrid>
      </Container>
    </LocationSectionWrapper>
  );
};

export default LocationSection;
