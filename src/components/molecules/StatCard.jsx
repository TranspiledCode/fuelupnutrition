// src/components/molecules/StatCard.js
import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const StatCardWrapper = styled.div`
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

const StatCard = ({ icon, value, label, bgColor }) => {
  return (
    <StatCardWrapper>
      <StatIconContainer bgColor={bgColor}>{icon}</StatIconContainer>
      <StatValue>{value}</StatValue>
      <StatLabel>{label}</StatLabel>
    </StatCardWrapper>
  );
};

export default StatCard;
