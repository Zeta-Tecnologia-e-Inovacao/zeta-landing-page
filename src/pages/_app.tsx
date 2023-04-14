import React from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import GlobalStyle from '../styles/Global';

const darkTheme = createTheme({ type: 'dark' });

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider theme={darkTheme}>
    <Script
      src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
      integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
      crossOrigin='anonymous'
    />
    <Component {...pageProps} />
    <GlobalStyle />
  </NextUIProvider>
);

export default App;
