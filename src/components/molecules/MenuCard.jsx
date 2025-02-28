// src/components/molecules/MenuCard.js
import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';

const CardWrapper = styled.div`
  background-color: ${(props) => props.bgColor};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[6]};
  box-shadow: ${theme.shadows.md};
  transform: translateY(0);
  transition: transform ${theme.transitions.default};

  &:hover {
    transform: scale(1.05);
  }
`;

const MenuImageContainer = styled.div`
  margin-bottom: ${theme.spacing[6]};
  overflow: hidden;
  border-radius: ${theme.borderRadius.lg};
`;

const MenuImage = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: ${theme.borderRadius.lg};
`;

const MenuCardTitle = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: ${theme.spacing[4]};
  color: ${(props) => props.color};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const MenuItem = styled.li`
  list-style: none;
  margin-bottom: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing[4]};
  }
`;

const MenuItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuItemName = styled.span`
  font-size: 2.8rem;
  font-weight: 800;
  font-family: 'Poiret One', sans-serif;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1.8rem;
  }
`;

const MenuItemPrice = styled.span`
  color: ${theme.colors.text.secondary};
  font-family: 'Manrope', sans-serif;
  font-size: 1.6rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1.4rem;
  }
`;

const MenuItemDescription = styled.p`
  font-size: 1.8rem;
  color: ${theme.colors.text.secondary};
  font-family: 'Manrope', sans-serif;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1.4rem;
  }
`;

const MenuCard = ({ title, items, image, bgColor, titleColor }) => {
  return (
    <CardWrapper bgColor={bgColor}>
      <MenuImageContainer>
        <MenuImage src={image.src} alt={image.alt} />
      </MenuImageContainer>
      <MenuCardTitle color={titleColor}>{title}</MenuCardTitle>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index}>
            <MenuItemHeader>
              <MenuItemName>{item.name}</MenuItemName>
              <MenuItemPrice>{item.price}</MenuItemPrice>
            </MenuItemHeader>
            <MenuItemDescription>{item.description}</MenuItemDescription>
          </MenuItem>
        ))}
      </MenuList>
    </CardWrapper>
  );
};

export default MenuCard;
