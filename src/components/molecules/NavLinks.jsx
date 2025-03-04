// src/components/molecules/NavLinks.js
import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const NavList = styled.ul`
  display: flex;
  gap: ${(props) => props.gap || theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled.a`
  color: ${(props) => props.color || theme.colors.white};
  text-decoration: none;
  transition: color ${theme.transitions.default};
  font-size: ${(props) => props.fontSize || '3rem'};

  &:hover {
    color: ${(props) => props.hoverColor || theme.colors.purple.main};
  }
`;

const NavLinks = ({ links, gap, color, hoverColor, onClickHandler }) => {
  return (
    <NavList gap={gap}>
      {links.map((link, index) => (
        <NavItem key={index}>
          <NavLink
            href={link.href}
            color={color}
            hoverColor={hoverColor}
            onClick={onClickHandler}
          >
            {link.text}
          </NavLink>
        </NavItem>
      ))}
    </NavList>
  );
};

NavLinks.propTypes = {
  links: PropTypes.array.isRequired,
  gap: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  fontSize: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default NavLinks;
