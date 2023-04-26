import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import * as S from './styles';

const About: NextPage = () => (

  <S.About>
    <section id='about' className='about-section-padding'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-4 col-md-12 col-12'>
            <div className='about-img'>
              <Image src='/images/banner.jpeg' alt='' className='img-fluid' id='about' width={500} height={500} />
            </div>
          </div>
          <div className='col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5'>
            <div className='about-text'>
              <h2>
                Projetos inovadores e
                <br />
                tecnológicos para a sua empresa!
              </h2>
              <p>
                A Zeta é uma empresa de Tecnologia e Inovação que desenvolve um
                sistema embarcado inteligente e inovador, para gestão de operação
                e manutenção preventiva e preditiva de compressores de ar que
                funcionará com integração e serviços em nuvem e inteligência artificial.
              </p>
              <a href='#teste' className='btn btn-warning'>Saber mais</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </S.About>

);

export default About;
