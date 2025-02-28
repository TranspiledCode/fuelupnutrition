// src/components/atoms/SectionTitle.js
import styled from '@emotion/styled';
import theme from 'styles/theme';

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
  color: ${(props) => props.color || theme.colors.primary};
  font-family: 'Poiret One', sans-serif;
  font-weight: 600;
`;

export default SectionTitle;
