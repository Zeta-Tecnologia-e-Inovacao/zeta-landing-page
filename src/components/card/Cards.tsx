import React from 'react';
import type { NextPage } from 'next';
import Balancer from 'react-wrap-balancer';
import { Servicos } from './style';

const CardPage: NextPage = () => (

  <Servicos>

    <section className='services-area py-100 rpy-70 rel z-1' id='services'>
      <div className='container'>
        <div className='row gap-100 align-items-center'>
          <div className='col-lg-5'>
            <div className='services-content-three mb-200 wow fadeInUp delay-0-2s'>
              <div className='section-title mb-20'>
                <span className='sub-title Bord mb-25'>Serviços incríveis</span>
                <h1>
                  <Balancer>
                    Os melhores serviços de TI para o crescimento de seus negócios.
                  </Balancer>
                </h1>
              </div>
              <p>
                Estamos comprometidos em oferecer soluções que possam fazer a diferença na sua
                vida pessoal ou profissional. Nossos serviços foram desenvolvidos com
                qualidade e tecnologia de ponta, para que você possa usufruir do melhor que o
                mercado tem a oferecer.
              </p>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='service-item'>
                  <div className='icon'><i className='bi bi-motherboard' /></div>
                  <h4><i className='bi bi-check2-circle'><a href='service-details.html' className='text-a'>Embarcados e Iot</a></i></h4>
                  <p>
                    <Balancer>
                      Fornecemos um sistema de IoT (Internet das Coisas) poderoso e
                      fácil de usar que permite monitorar e controlar uma ampla variedade
                      de dispositivos de forma centralizada.
                    </Balancer>
                  </p>
                </div>

                <div className='service-item'>
                  <div className='icon'><i className='bi bi-code-slash' /></div>
                  <h4><i className='bi bi-check2-circle'><a href='service-details.html' className='text-a'>Desenvolvimento Web</a></i></h4>
                  <p>
                    <Balancer>
                      Fornecemos serviços de Desenvolvimento Web profissionais
                      e personalizados que podem alavancar a presença online de sua empresa
                      e aumentar a visibilidade da marca.
                    </Balancer>
                  </p>
                </div>
              </div>

              <div className='col-sm-6'>
                <div className='service-item mt-100'>
                  <div className='icon'><i className='bi bi-cloud-fill' /></div>
                  <h4><i className='bi bi-check2-circle'><a href='service-details.html' className='text-a'>Cloud Computing</a></i></h4>
                  <p>
                    <Balancer>
                      Fornecemos serviços de Cloud Computing altamente confiáveis e escaláveis que
                      podem ajudá-lo a reduzir custos operacionais e aumentar a eficiência em
                      sua empresa.
                    </Balancer>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Services Area Three end --> */}
  </Servicos>

);

export default CardPage;
