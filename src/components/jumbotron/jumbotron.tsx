import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import * as S from './styles';

const Jumbotron: NextPage = () => (

  <S.JumbotronConfig>
    <div className='container' id='main-image-container'>
      <div className='main-image center-image'>
        <div className='main-image-info'>
          <h2>
            Mantenha-se à frente da concorrência com nossas
            soluções de tecnologia inteligente.
          </h2>
          <h3 className='mb-3'>
            Descubra como as soluções tecnológicas inteligentes podem
            alavancar seus negóci
            os e maximizar lucros!
          </h3>
          <Link href='/quem-somos' className='btn1'>Saber mais</Link>
        </div>
      </div>
    </div>
  </S.JumbotronConfig>

);

export default Jumbotron;
