import React from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/Global';
import Script from 'next/script';

const darkTheme = createTheme({ type: 'dark' });

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider theme={darkTheme}>
    <Component {...pageProps} />
    <Script
      src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'>
    </Script>
    <GlobalStyle />
  </NextUIProvider>
);

export default App;
