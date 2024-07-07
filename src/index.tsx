import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import router from 'Router';
import GlobalStyle from 'GlobalStyle';
import { lightTheme } from 'theme';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
