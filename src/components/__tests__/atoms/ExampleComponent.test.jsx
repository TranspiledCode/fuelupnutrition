import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import ExampleComponent from "atoms/ExampleComponent";

// Mock theme object for Emotion
const mockTheme = {
  colors: {
    warning: "orange",
  },
};

describe("ExampleComponent", () => {
  test("renders the component with correct text and styles", () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <ExampleComponent />
      </ThemeProvider>
    );

    const heading = screen.getByText(/Transpiled Catalyst SPA/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle("color: orange");
    expect(heading).toHaveStyle("font-size: 2rem");
  });
});
