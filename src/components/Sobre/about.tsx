import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import { Trophy, Cpu } from 'lucide-react';
import * as S from './styles';

const About: NextPage = () => (

  <S.About>
    <section id='about' className='about-area-three pt-25 rpt-0 pb-100 rpb-65 rel z-1 mt-50'>
      <div className='container'>
        <div className='row align-items-center gap-100'>
          <div className='col-lg-6'>
            <div className='about-three-image rel z-1 mb-30 rmb-65 wow fadeInRight delay-0-2s animated'>
              <Image src='/images/about-1.png' alt='About' id='about' width={500} height={500} />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='about-content rel z-1 row fadeInLeft delay-0-2s animated'>
              <div className='section-title mb-60 rmb-60'>
                <span className='sub-title mb-15'>Sobre nós</span>
                <h2>
                  <Balancer>
                    A startup com as soluções tecnológicas que podem alavancar seus
                    negócios e maximizar lucros.
                  </Balancer>
                </h2>
              </div>
              <div className='row gap-40'>
                <div className='col-md-6'>
                  <div className='service-item style-three'>
                    <div className='icon'>
                      <Trophy size={65} />
                    </div>
                    <h4>
                      <a href='sla'>Compressor Inteligente</a>
                    </h4>
                    <p>
                      <Balancer>
                        Desenvolvemos um sistema embarcado inteligente e inovador,
                        para gestão de operação e manutenção preventiva e preditiva de
                        compressores de ar que funcionará com integração e serviços em
                        nuvem e inteligência artificial.
                      </Balancer>
                    </p>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='service-item style-three'>
                    <div className='icon'>
                      <Cpu size={65} />
                    </div>
                    <h4>
                      <a href='sla'>Tecnologias e Inovações</a>
                    </h4>
                    <p>
                      <Balancer>
                        Top-notch software development and digital transoformation
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
