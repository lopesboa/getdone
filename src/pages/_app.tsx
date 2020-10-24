import { AppProps } from 'next/app';
import React, { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
