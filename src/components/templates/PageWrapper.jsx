// src/components/templates/PageWrapper.js
import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const Wrapper = styled.div`
  font-family: ${theme.fonts.sans};
  background-color: ${theme.colors.secondaryLight};
  color: ${theme.colors.text.primary};
  overflow: hidden;
`;

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
