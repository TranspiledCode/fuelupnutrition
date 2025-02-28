// src/components/organisms/MenuSection.js
import React from 'react';
import styled from '@emotion/styled';
import theme from 'styles/theme';
import Container from 'atoms/Container';
import SectionTitle from 'atoms/SectionTitle';
import MenuCard from 'molecules/MenuCard';

const MenuSectionWrapper = styled.section`
  padding: ${theme.spacing[20]} 0;
  background-color: ${theme.colors.white};
`;

const MenuGrid = styled.div`
  display: grid;
  gap: ${theme.spacing[32]};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing[10]};
  }
`;

const MenuSection = () => {
  const menuCategories = [
    {
      title: 'Signature Smoothies',
      bgColor: theme.colors.pink.light,
      titleColor: theme.colors.pink.main,
      image: {
        src: 'https://storage.googleapis.com/transpiled-web/fuelupnutrition/drink-2/l.webp',
        alt: 'Colorful smoothies',
      },
      items: [
        {
          name: 'Berry Blast',
          price: '$7.50',
          description: 'Strawberry, blueberry, raspberry, banana, almond milk',
        },
        {
          name: 'Green Machine',
          price: '$8.50',
          description: 'Spinach, kale, mango, pineapple, coconut water',
        },
        {
          name: 'Tropical Paradise',
          price: '$8.00',
          description: 'Mango, pineapple, passion fruit, orange juice',
        },
        {
          name: 'Protein Powerhouse',
          price: '$9.00',
          description:
            'Banana, peanut butter, cacao, almond milk, plant protein',
        },
      ],
    },
    {
      title: 'Fresh Pressed Juices',
      bgColor: theme.colors.orange.light,
      titleColor: theme.colors.orange.main,
      image: {
        src: 'https://storage.googleapis.com/transpiled-web/fuelupnutrition/drink-1/l.webp',
        alt: 'Fresh pressed juices',
      },
      items: [
        {
          name: 'Immune Booster',
          price: '$6.50',
          description: 'Orange, carrot, ginger, turmeric',
        },
        {
          name: 'Detox Green',
          price: '$7.50',
          description: 'Cucumber, celery, apple, lemon, parsley',
        },
        {
          name: 'Citrus Splash',
          price: '$6.00',
          description: 'Orange, grapefruit, lemon, lime',
        },
        {
          name: 'Ruby Red',
          price: '$7.00',
          description: 'Beet, apple, carrot, ginger',
        },
      ],
    },
    {
      title: 'Healthy Snacks',
      bgColor: theme.colors.primaryLight,
      titleColor: theme.colors.primary,
      image: {
        src: 'https://storage.googleapis.com/transpiled-web/fuelupnutrition/drink-3/l.webp',
        alt: 'Healthy snacks',
      },
      items: [
        {
          name: 'Acai Bowl',
          price: '$10.50',
          description: 'Acai, banana, granola, berries, coconut flakes',
        },
        {
          name: 'Protein Energy Balls',
          price: '$4.50',
          description: 'Dates, oats, peanut butter, cacao nibs, chia seeds',
        },
        {
          name: 'Avocado Toast',
          price: '$8.00',
          description: 'Whole grain bread, avocado, microgreens, hemp seeds',
        },
        {
          name: 'Chia Pudding',
          price: '$6.50',
          description: 'Chia seeds, almond milk, maple syrup, berries',
        },
      ],
    },
  ];

  return (
    <MenuSectionWrapper id="menu">
      <Container>
        <SectionTitle color={theme.colors.primary}>
          Our Refreshing Menu
        </SectionTitle>

        <MenuGrid>
          {menuCategories.map((category, index) => (
            <MenuCard
              key={index}
              title={category.title}
              bgColor={category.bgColor}
              titleColor={category.titleColor}
              image={category.image}
              items={category.items}
            />
          ))}
        </MenuGrid>
      </Container>
    </MenuSectionWrapper>
  );
};

export default MenuSection;
