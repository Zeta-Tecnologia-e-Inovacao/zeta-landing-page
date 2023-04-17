import React from 'react';
import Header from '@/components/header/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '@/components/card/Cards';
import { Container, Spacer } from '@nextui-org/react';
import Jumbotron from '@/components/jumbotron/Jumbotron';

const Home: NextPage = () => (
  <Container>
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

      {/* <!-- Bootstrap CSS --> */}
      <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossOrigin='anonymous' />
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css' />
      {/* <!--==================== UNICONS ====================--> */}
      <link rel='stylesheet' href='https://unicons.iconscout.com/release/v4.0.0/css/line.css' />

      <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' rel='stylesheet' />
      {/* <!--==================== UNICONS ====================--> */}
      <link rel='stylesheet' href='https://unicons.iconscout.com/release/v4.0.0/css/line.css' />
      <link href='https://cdn.jsdelivr.net/npm/remixicon@3.0.0/fonts/remixicon.css' rel='stylesheet' />

      {/* <!-- ================ Importar BOOTSTRAP --> */}
      <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.8.2/css/all.css' integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay' crossOrigin='anonymous' />

    </Head>
    <Header />
    <Spacer y={1} />
    <Jumbotron />
    <Spacer y={2} />
    <Card />
    <Spacer y={3} />
  </Container>
);

export default Home;
