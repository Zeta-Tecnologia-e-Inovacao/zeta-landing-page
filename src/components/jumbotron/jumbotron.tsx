import React from 'react';
import type { NextPage } from 'next';
import Script from 'next/script';
import * as S from './styles';

const JumbotronTeste: NextPage = () => (

  <S.JumbotronConfig>
    {/* <div className='container'> */}
    <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' />
    <div className='p-5 jumbo text-white'>
      <h2 className='text-jumbo'>Impulsione o potencial do seu </h2>
      <h2>negócio com nossas soluções TI</h2>
      <h2>de última geração.</h2><br /><br /><br />
      <h3>Nós fornecemos soluções personalizadas</h3>
      <h3>que ajudam sua startup a crescer</h3>
      <h3>e se destacar no mercado digital.</h3>
     
    </div>
  </S.JumbotronConfig>
);

export default JumbotronTeste;
