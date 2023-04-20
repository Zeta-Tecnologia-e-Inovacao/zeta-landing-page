import React from 'react';
import type { NextPage } from 'next';
import Script from 'next/script';
import * as S from './styles';

const JumbotronTeste: NextPage = () => (

  <S.JumbotronConfig>
    {/* <div className='container'> */}
    <div className='container slide-top'>
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' />
      <div className='p-5 jumbo text-white'>
        <h1 className='text-jumbo tracking-in-expand-fwd'>
          Impulsione o potencial do seu negócio nossas soluções TI de última geração.
        </h1>
        <p>
          Nós fornecemos soluções personalizadas que ajudam sua startup a crescer e
          se destacar no mercado digital.
        </p>
      </div>
      <hr />
    </div>
  </S.JumbotronConfig>
);

export default JumbotronTeste;
