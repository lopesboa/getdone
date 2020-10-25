import Head from 'next/head';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import GetDoneLogo from '../assets/logo.svg';
import { Container } from '../styles/pages/Home';

const Home: FC = () => {
  const { t } = useTranslation(['home', 'about']);
  return (
    <Container>
      <Head>
        <title>{t('title')}</title>
      </Head>

      <main>
        <GetDoneLogo />
        <h1>{t('initialNextStructure')}</h1>
        <p>{t('sampleNextJsStructure')}</p>
      </main>

      <footer>
        <a href="/" target="_blank" rel="noopener noreferrer">
          {t('aBKStudioCompany')}
        </a>
      </footer>
    </Container>
  );
};

export default Home;
