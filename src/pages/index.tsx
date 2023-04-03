import Header from '@/components/Header'
import type { NextPage } from 'next'
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zeta | Tecnologia e Inovação</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Desenvolvemos soluções inteligentes, inovadoras e dispositivos IoT com integração na nuvem e inteligência artificial." />
        <meta name="keywords" content="IoT, nuvem, inteligencia artificial, automação, web, frontend, backend, eletronica" />
        <meta name="author" content="Zeta T&I" />
        <meta name="robots" content="index,follow" />
        <meta name="language" content="Portuguese" />
        <meta name="revisit-after" content="7 days" />
        <meta property="og:title" content="Zeta | Tecnologia e Inovação" />
        <meta property="og:description" content="Desenvolvemos soluções inteligentes, inovadoras e dispositivos IoT com integração na nuvem e inteligência artificials" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Header />
    </>
  )
}

export default Home
