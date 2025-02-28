// src/components/molecules/ContactItem.js
import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const ContactItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[3]};
`;

const ContactItemText = styled.div``;

const ContactLabel = styled.p`
  font-weight: 500;
`;

const ContactValue = styled.p`
  color: ${theme.colors.text.secondary};
`;

const ContactItem = ({ icon, label, values }) => {
  return (
    <ContactItemWrapper>
      {icon}
      <ContactItemText>
        <ContactLabel>{label}</ContactLabel>
        {Array.isArray(values) ? (
          values.map((value, index) => (
            <ContactValue key={index}>{value}</ContactValue>
          ))
        ) : (
          <ContactValue>{values}</ContactValue>
        )}
      </ContactItemText>
    </ContactItemWrapper>
  );
};

export default ContactItem;
