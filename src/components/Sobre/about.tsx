import React from 'react';
import type { NextPage } from 'next';
import Balancer from 'react-wrap-balancer';
import * as S from '@/components/Sobre/styles';

const About: NextPage = () => (

  <S.About>
    <section className='about-area pt-25 pb-80' id='about'>
      <div className='container'>
        <div className='row align-items-center gap-100'>
          <div className='col-md-6'>
            <div className='about-three-image mb-30'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/images/about/about_image.png' alt='About' />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='about-content'>
              <div className='section-title mb-60'>
                <span className='sub-title Bord mb-10'>Sobre nós</span>
                <h2>
                  <Balancer>
                    A startup com as soluções tecnológicas que podem
                    alavancar seus negócios e maximizar lucros.
                  </Balancer>
                </h2>
              </div>
              <div className='row gap-40'>
                <div className='col-lg-12'>
                  <div className='service-item style-three'>
                    <h4><a href='service-details.html'>Compressor Inteligente</a></h4>
                    <p>
                      <Balancer>
                        Desenvolvemos um sistema embarcado inteligente e inovador, para gestão
                        de operação e manutenção preventiva e preditiva de compressores de ar
                        que funcionará com integração e serviços em nuvem e inteligência artificial.
                      </Balancer>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </S.About>
);

export default About;
