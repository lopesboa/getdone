import { AppProps } from 'next/app';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import '../../i18n';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
