// src/components/organisms/AboutSection.js
import React from 'react';
import styled from '@emotion/styled';
import { Droplet, Clock } from 'lucide-react';
import theme from 'styles/theme';
import Container from 'atoms/Container';
import SectionTitle from 'atoms/SectionTitle';
import StatCard from 'molecules/StatCard';

const AboutSectionWrapper = styled.section`
  padding: ${theme.spacing[16]} 0;
  background-color: ${theme.colors.purple.light};
`;

const AboutText = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: ${theme.spacing[12]};
`;

const AboutParagraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing[6]};
  font-family: 'Manrope', sans-serif;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AboutSection = ({ content }) => {
  return (
    <AboutSectionWrapper id="about">
      <Container>
        <SectionTitle color={theme.colors.purple.main}>Our Story</SectionTitle>

        <AboutText>
          <AboutParagraph>{content}</AboutParagraph>
        </AboutText>

        <StatsGrid>
          <StatCard
            icon={<Droplet size={32} color={theme.colors.primary} />}
            value="100%"
            label="Fresh Ingredients"
            bgColor={theme.colors.primaryLight}
          />
          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: theme.colors.pink.main }}
              >
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            }
            value="25+"
            label="Unique Recipes"
            bgColor={theme.colors.pink.light}
          />
          <StatCard
            icon={<Clock size={32} color={theme.colors.orange.main} />}
            value="7"
            label="Days a Week"
            bgColor={theme.colors.orange.light}
          />
        </StatsGrid>
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
