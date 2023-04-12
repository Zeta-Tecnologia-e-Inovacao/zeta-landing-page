import React from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/Global';

const darkTheme = createTheme({type: "dark"});

const App = ({ Component, pageProps }: AppProps) => (
 
  <NextUIProvider theme={darkTheme}>
    <Component {...pageProps} />
    <GlobalStyle/>
  </NextUIProvider>
);

export default App;
