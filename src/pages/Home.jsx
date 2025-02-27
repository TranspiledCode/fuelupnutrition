import ExampleComponent from "atoms/ExampleComponent";
import styled from "@emotion/styled";

import SEO from "templates/SEO";

import content from "data/home";

const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: #000;
`;

const Home = () => {
  const { title, description, canonical } = content.seo;
  return (
    <StyledHome>
      <SEO title={title} description={description} canonical={canonical} />
      <ExampleComponent />
    </StyledHome>
  );
};

export default Home;
