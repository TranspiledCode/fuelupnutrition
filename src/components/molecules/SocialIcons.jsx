// src/components/molecules/SocialIcons
import React from 'react';
import styled from '@emotion/styled';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import theme from 'styles/theme';

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.gap || theme.spacing[6]};
`;

const SocialLink = styled.a`
  color: ${(props) => props.color || theme.colors.white};
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${(props) => props.hoverColor || theme.colors.secondary};
  }
`;

const SocialIcons = ({
  gap,
  color,
  hoverColor,
  instagramColor,
  facebookColor,
  twitterColor,
  size = 24,
}) => {
  return (
    <SocialIconsWrapper gap={gap}>
      <SocialLink
        href="#"
        aria-label="Instagram"
        color={instagramColor || color}
        hoverColor={hoverColor}
      >
        <Instagram size={size} />
      </SocialLink>
      <SocialLink
        href="#"
        aria-label="Facebook"
        color={facebookColor || color}
        hoverColor={hoverColor}
      >
        <Facebook size={size} />
      </SocialLink>
      <SocialLink
        href="#"
        aria-label="Twitter"
        color={twitterColor || color}
        hoverColor={hoverColor}
      >
        <Twitter size={size} />
      </SocialLink>
    </SocialIconsWrapper>
  );
};

export default SocialIcons;
