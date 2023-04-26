import React from 'react';
import Header from '@/components/header/Navbar';
import type { NextPage } from 'next';
import { Spacer } from '@nextui-org/react';
import Head from 'next/head';
import Jumbotron from '@/components/Jumbotron/jumbotron';
import Card from '@/components/Card/Cards';
import Parcerias from '@/components/Parceiros/parcerias';
import About from '@/components/Sobre/about';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Zeta | Tecnologia e Inovação</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content='Desenvolvemos soluções inteligentes, inovadoras e dispositivos IoT com integração na nuvem e inteligência artificial.' />
      <meta name='keywords' content='IoT, nuvem, inteligencia artificial, automação, web, frontend, backend, eletronica' />
      <meta name='author' content='Zeta T&I' />
      <meta name='robots' content='index,follow' />
      <meta name='language' content='Portuguese' />
      <meta name='revisit-after' content='7 days' />
      <meta property='og:title' content='Zeta | Tecnologia e Inovação' />
      <meta property='og:description' content='Desenvolvemos soluções inteligentes, inovadoras e dispositivos IoT com integração na nuvem e inteligência artificials' />
      <link rel='icon' href='/images/logo.svg' />
    </Head>

    <Header />
    <Spacer y={1} />
    <Jumbotron />
    <Spacer y={1} />
    <Card />
    <Spacer y={1} />
    <About />
    <Spacer y={1} />
    <Parcerias />
    <Spacer y={1} />
  </div>
);

export default Home;
