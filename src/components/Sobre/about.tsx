import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import * as S from './styles';

const About: NextPage = () => (

  <S.About>
    <section className='about-area-three pt-25 rpt-0 pb-100 rpb-65 rel z-1 mt-100' id='about'>
      <div className='container'>
        <div className='row align-items-center gap-100'>
          <div className='col-lg-6'>
            <div className='about-three-image rel z-1 mb-30 rmb-65 wow fadeInRight delay-0-2s'>
              <Image src='/images/about/about_image.png' alt='About' width={520} height={700} />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='about-content rel z-1 wow fadeInLeft delay-0-2s'>
              <div className='section-title mb-60 rmb-40'>
                <span className='sub-title Bord mb-15'>Sobre nós</span>
                <h2>
                  A startup com as soluções tecnológicas que podem
                  alavancar seus negócios e maximizar lucros.
                </h2>
              </div>
              <div className='row gap-40'>
                <div className='col-md-12'>
                  <div className='service-item style-three'>
                    <div className='icon'>
                      <i className='flaticon-trophy' />
                    </div>
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
                {/* <div className='col-md-6'>
                  <div className='service-item style-three'>
                    <div className='icon'>
                      <i className='flaticon-pie-chart' />
                    </div>
                    <h4>
                      <a href='service-details.html'>
                        Relé Bi-Manual
                      </a>
                    </h4>
                    <p>
                      <Balancer>
                        Desenvolvemos um relé bi-manual com emergência, que consiste
                        em um sistema embarcado para garantir segurança de trabalho
                        para os funcionários industriais que manuseiam prensas e semelhantes.
                      </Balancer>
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-bg-shape'>
        <Image src='/images/background/about-bg-shape.png' alt='About' width={460} height={900} />
      </div>
    </section>
  </S.About>

);

export default About;
