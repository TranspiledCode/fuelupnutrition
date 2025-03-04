// src/components/organisms/LocationSection.js
import React from 'react';
import styled from '@emotion/styled';
import Container from 'atoms/Container';
import SectionTitle from 'atoms/SectionTitle';
import LocationCard from 'molecules/LocationCard';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

// Styled Components
const LocationSectionWrapper = styled.section`
  position: relative;
  padding: 5rem 0;
  background-color: #eff6ff;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #2563eb 0%, #eff6ff 50%, #2563eb 100%);
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
    rgba(37, 99, 235, 0.13) 0%,
    rgba(239, 246, 255, 0) 70%
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
  border: 2px dashed rgba(37, 99, 235, 0.2);
  z-index: 0;
`;

const LocationGrid = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MapContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 300px;
    margin-top: 2rem;
  }
`;

const MapOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.02),
    rgba(37, 99, 235, 0.08)
  );
  z-index: 1;
`;

const LocationPin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const PinRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid rgba(37, 99, 235, 0.2);
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
    border: 1px solid rgba(37, 99, 235, 0.33);
  }
`;

const SectionTitleContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: '';
    width: 60px;
    height: 3px;
    background-color: #2563eb;
    margin-top: 1rem;
    border-radius: 9999px;
  }
`;

const LocationSection = () => {
  const [sectionRef] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <LocationSectionWrapper id="location" ref={sectionRef}>
      <BackgroundDecoration />
      <CircleDecoration />

      <Container>
        <SectionTitleContainer>
          <SectionTitle color="#2563eb">Find Us</SectionTitle>
        </SectionTitleContainer>

        <LocationGrid>
          <LocationCard
            address="3417 N Cole Rd, Boise, ID 83704"
            hours={{
              Monday: '7 AM–5 PM',
              Tuesday: '7 AM–5 PM',
              Wednesday: '7 AM–5 PM',
              Thursday: '7 AM–5 PM',
              Friday: '7 AM–5 PM',
              Saturday: '9 AM–2 PM',
              Sunday: '9 AM–2 PM',
            }}
            phone="(208) 954-7434"
          />

          <MapContainer>
            <MapOverlay />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.5673666491387!2d-116.28292642358635!3d43.687195571124325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae552add8a1a43%3A0x736e458bc51e7aee!2s3417%20N%20Cole%20Rd%2C%20Boise%2C%20ID%2083704!5e0!3m2!1sen!2sus!4v1709584184499!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps location"
            />
            <LocationPin>
              <PinRing />
            </LocationPin>
          </MapContainer>
        </LocationGrid>
      </Container>
    </LocationSectionWrapper>
  );
};

export default LocationSection;
