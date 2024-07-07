import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'GlobalStyle';
import { lightTheme, darkTheme } from 'theme';

const App = () => {
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ToggleContainer onClick={themeToggler}>Switch Theme</ToggleContainer>
      <Container>
        <Title onClick={handleTitleClick}>Disney Characters</Title>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  min-height: 100dvh;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Disney';
  font-size: 5.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  filter: ${({ theme }) => theme.dropShadow};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const ToggleContainer = styled.button`
  border: 0;
  position: absolute;
  right: 2px;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  margin: 20px;
  z-index: 1;
`;
