import React from 'react';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
