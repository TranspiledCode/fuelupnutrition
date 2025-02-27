import styled from "@emotion/styled";

const StyledExample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Example = styled.h1`
  color: ${({ theme }) => theme.colors.warning};
  font-size: 2rem;
`;

const ExampleComponent = () => {
  return (
    <StyledExample>
      <Example>Transpiled Catalyst SPA</Example>
    </StyledExample>
  );
};

export default ExampleComponent;
