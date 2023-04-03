import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
);

export default App;
