// src/components/molecules/LocationCard.js
import React from 'react';
import styled from '@emotion/styled';
import { MapPin, Clock, Phone } from 'lucide-react';

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
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
`;

const InfoGroup = styled.div`
  margin-bottom: 1.5rem;
  opacity: ${(props) => (props.animated ? 1 : 0)};
  transform: ${(props) =>
    props.animated ? 'translateX(0)' : 'translateX(-20px)'};
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
  transition-delay: ${(props) => props.delay || '0s'};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #eff6ff;
  border-radius: 6px;
  margin-right: 1rem;
  flex-shrink: 0;
  color: #2563eb;
`;

const InfoContent = styled.div`
  flex-grow: 1;
`;

const InfoLabel = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

const InfoText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
`;

const HoursList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const HoursItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #6b7280;
  padding: 0.25rem 0;

  &:not(:last-child) {
    border-bottom: 1px dashed #f3f4f6;
  }

  strong {
    color: #374151;
    font-weight: 500;
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #2563eb;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #1d4ed8;
    transform: translateY(-2px);
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const LocationCard = ({
  animated = false,
  address = '3417 N Cole Rd, Boise, ID 83704',
  hours = {
    Monday: '7 AM–5 PM',
    Tuesday: '7 AM–5 PM',
    Wednesday: '7 AM–5 PM',
    Thursday: '7 AM–5 PM',
    Friday: '7 AM–5 PM',
    Saturday: '9 AM–2 PM',
    Sunday: '9 AM–2 PM',
  },
  phone = '(208) 954-7434',
}) => {
  // Format for the ordered days of the week display
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

      <InfoGroup animated={animated} delay="0.1s">
        <InfoItem>
          <IconWrapper>
            <MapPin size={20} />
          </IconWrapper>
          <InfoContent>
            <InfoLabel>Address</InfoLabel>
            <InfoText>{address}</InfoText>
          </InfoContent>
        </InfoItem>
      </InfoGroup>

      <InfoGroup animated={animated} delay="0.3s">
        <InfoItem>
          <IconWrapper>
            <Clock size={20} />
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

      <InfoGroup animated={animated} delay="0.5s">
        <InfoItem>
          <IconWrapper>
            <Phone size={20} />
          </IconWrapper>
          <InfoContent>
            <InfoLabel>Phone</InfoLabel>
            <InfoText>{phone}</InfoText>
          </InfoContent>
        </InfoItem>
      </InfoGroup>

      <InfoGroup
        animated={animated}
        delay="0.7s"
        style={{ textAlign: 'center', marginTop: 8 }}
      >
        <ContactButton href={`tel:${phone.replace(/[^0-9]/g, '')}`}>
          <Phone size={16} />
          Call Now
        </ContactButton>
      </InfoGroup>
    </CardContainer>
  );
};

export default LocationCard;
