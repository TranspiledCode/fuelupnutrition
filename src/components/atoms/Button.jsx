// src/components/atoms/Button.js
import styled from '@emotion/styled';
import theme from 'styles/theme';

const Button = styled.a`
  display: inline-block;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.text.primary};
  font-weight: bold;
  font-size: 1.6rem;
  padding: ${theme.spacing[3]} ${theme.spacing[8]};
  border-radius: ${theme.borderRadius.full};
  text-decoration: none;
  transition:
    background-color ${theme.transitions.default},
    transform ${theme.transitions.default};

  &:hover {
    background-color: #eab308;
    transform: scale(1.05);
  }
`;

export default Button;
