// src/components/molecules/LocationCard.js
import React from 'react';
import styled from '@emotion/styled';
import { MapPin, Clock, Phone } from 'lucide-react';
import theme from 'styles/theme';
import ContactItem from 'molecules/ContactItem';
import SocialIcons from 'molecules/SocialIcons';

const LocationCardWrapper = styled.div`
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

const SocialSection = styled.div`
  margin-top: ${theme.spacing[6]};
`;

const SocialTitle = styled.h4`
  font-weight: 500;
  margin-bottom: ${theme.spacing[2]};
`;

const LocationCard = () => {
  return (
    <LocationCardWrapper>
      <LocationCardTitle>Visit Our Juice Bar</LocationCardTitle>

      <ContactDetails>
        <ContactItem
          icon={<MapPin color={theme.colors.blue.main} size={20} />}
          label="123 Sunshine Avenue"
          values="Freshville, CA 90210"
        />

        <ContactItem
          icon={<Clock color={theme.colors.blue.main} size={20} />}
          label="Opening Hours"
          values={[
            'Monday - Friday: 7am - 7pm',
            'Saturday - Sunday: 8am - 6pm',
          ]}
        />

        <ContactItem
          icon={<Phone color={theme.colors.blue.main} size={20} />}
          label="Contact Us"
          values={['(555) 123-4567', 'hello@nectarjuicebar.com']}
        />
      </ContactDetails>

      <SocialSection>
        <SocialTitle>Follow Us</SocialTitle>
        <SocialIcons
          instagramColor={theme.colors.pink.main}
          facebookColor={theme.colors.blue.main}
          twitterColor="#38bdf8"
        />
      </SocialSection>
    </LocationCardWrapper>
  );
};

export default LocationCard;
