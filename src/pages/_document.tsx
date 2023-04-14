import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';
import { CssBaseline } from '@nextui-org/react';

const Document = () => (
  <Html lang='en'>
    <Head>{CssBaseline.flush()}</Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
