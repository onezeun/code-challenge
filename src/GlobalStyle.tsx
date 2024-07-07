import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  };

  @font-face {
    font-family: 'Disney';
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/WaltDisney Font.ttf') format('truetype');
  }

  body {
    background: ${({ theme }) => theme.gradientBackground};
    color: ${({ theme }) => theme.textColor};
    font-family: "Pretendard-Regular", "Arial", sans-serif;
    line-height: 1.5;
  };

  /* 스크롤바 */
  ::-webkit-scrollbar {
    width: 0.4rem;
  };

  ::-webkit-scrollbar-track {
    background: transparent;
  };

  ::-webkit-scrollbar-thumb {
    background-color: #d1d5db;
    border-radius: 0.25rem;
  };

  ::-webkit-scrollbar-thumb:hover {
    background-color: #6b7280;
  };
`;

export default GlobalStyle;
