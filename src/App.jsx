import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import ScrollToHash from 'utils/ScrollToHash';
import RouteToTop from 'utils/RouteToTop';

import Home from 'pages/Home';
import theme from 'styles/theme';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Router>
            <ScrollToHash />
            <RouteToTop />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </StyledApp>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
