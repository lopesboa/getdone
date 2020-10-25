import Head from 'next/head';
import React, { FC } from 'react';
import GetDoneLogo from '../assets/logo.svg';
import { Container } from '../styles/pages/Home';

const Home: FC = () => (
  <Container>
    <Head>
      <title>GET DONE</title>
    </Head>

    <main>
      <GetDoneLogo />
      <h1>Initial Nextjs Structure</h1>
      <p>Sample structure of Nextjs using and some other cool features.</p>
    </main>

    <footer>
      <a href="/" target="_blank" rel="noopener noreferrer">
        A Bakongo Studio Company
      </a>
    </footer>
  </Container>
);

export default Home;
