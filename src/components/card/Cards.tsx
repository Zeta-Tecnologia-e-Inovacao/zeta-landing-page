import React from 'react';
import type { NextPage } from 'next';
import Balancer from 'react-wrap-balancer';
import { Image } from '@nextui-org/react';
import { Card } from './style';

const CardPage: NextPage = () => (

  <Card>
    <div className='container py-1 mt-50' id='soluction'>
      <div className='section-title text-center mb-50 rmb-60'>
        <span className='sub-title mb-15'>Soluções</span>
        <h2>Serviços oferecidos</h2>
      </div>
      <div className='row row-cols-1 row-cols-md-3 g-4 py-5'>
        <div className='col'>
          <div className='card'>
            <Image src='images/cards/cardEmbarcado.jpeg' className='card-img-top' alt='...' id='Card' />
            <div className='card-body'>
              <h4 className='card-title'>Sistemas Embarcados e Iot</h4>
              <p className='card-text'>
                <Balancer>
                  Fornecemos um sistema de IoT (Internet das Coisas) poderoso e
                  fácil de usar que permite monitorar e controlar uma ampla variedade
                  de dispositivos de forma centralizada.
                </Balancer>
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <Image src='images/cards/cardWeb.jpeg' className='card-img-top' alt='...' id='Card' />
            <div className='card-body'>
              <h4 className='card-title'>Desenvolvimento Web</h4>
              <p className='card-text'>
                <Balancer>
                  Fornecemos serviços de Desenvolvimento Web profissionais
                  e personalizados que podem alavancar a presença online de sua empresa
                  e aumentar a visibilidade da marca.
                </Balancer>
              </p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <Image src='/images/cards/Cloud.jpg' className='card-img-top' alt='...' id='Card' />
            <div className='card-body'>
              <h4 className='card-title'>Cloud Computing</h4>
              <p className='card-text'>
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
  </Card>

);

export default CardPage;
