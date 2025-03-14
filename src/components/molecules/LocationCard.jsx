import React from 'react';
import styled from '@emotion/styled';
import { MapPin, Clock, Phone } from 'lucide-react';

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: #bfdbfe;
    margin-left: 1rem;
  }

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const InfoGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  background-color: #eff6ff;
  border-radius: 6px;
  margin-right: 1rem;
  flex-shrink: 0;
  color: #2563eb;

  @media (max-width: 640px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const InfoContent = styled.div`
  flex-grow: 1;
`;

const InfoLabel = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.25rem;

  @media (max-width: 640px) {
    font-size: 1.8rem;
  }
`;

const InfoText = styled.p`
  font-size: 1.8rem;
  color: #4b5563;
  line-height: 1.6;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const HoursList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const HoursItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  color: #4b5563;
  padding: 0.35rem 0;

  &:not(:last-child) {
    border-bottom: 1px dashed #e5e7eb;
  }

  strong {
    color: #374151;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 1rem 1.75rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1.125rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d4ed8;
  }

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }
`;

const LocationCard = ({ address = '', hours = {}, phone = '' }) => {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <CardContainer>
      <CardTitle>Contact Information</CardTitle>

      <InfoGroup>
        <InfoItem>
          <IconWrapper>
            <MapPin size={22} />
          </IconWrapper>
          <InfoContent>
            <InfoLabel>Address</InfoLabel>
            <InfoText>{address}</InfoText>
          </InfoContent>
        </InfoItem>
      </InfoGroup>

      <InfoGroup>
        <InfoItem>
          <IconWrapper>
            <Clock size={22} />
          </IconWrapper>
          <InfoContent>
            <InfoLabel>Hours</InfoLabel>
            <HoursList>
              {daysOfWeek.map((day) => (
                <HoursItem key={day}>
                  <strong>{day}</strong>
                  <span>{hours[day]}</span>
                </HoursItem>
              ))}
            </HoursList>
          </InfoContent>
        </InfoItem>
      </InfoGroup>

      <InfoGroup>
        <InfoItem>
          <IconWrapper>
            <Phone size={22} />
          </IconWrapper>
          <InfoContent>
            <InfoLabel>Phone</InfoLabel>
            <InfoText>{phone}</InfoText>
          </InfoContent>
        </InfoItem>
      </InfoGroup>

      <InfoGroup style={{ textAlign: 'center' }}>
        <ContactButton href={`tel:${phone.replace(/[^0-9]/g, '')}`}>
          <Phone size={18} />
          Call Now
        </ContactButton>
      </InfoGroup>
    </CardContainer>
  );
};

export default LocationCard;
